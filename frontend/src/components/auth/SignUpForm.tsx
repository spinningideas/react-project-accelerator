import { useState, useEffect, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { useLocalization } from "@/contexts/LocalizationContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/shared/Toast";
import {
  AUTH_TOKEN_STORAGE_KEY,
  signOut,
  signUpWithPassword,
} from "@/services/auth";
import { APPLICATION_NAME, DEFAULT_LANGUAGE } from "@/constants";

/* Form to sign up with email and password handles 
    messaging to user on steps to complete sign-up process
 */
const SignUpForm = ({ redirectUrl }: { redirectUrl?: string }) => {
  const { toastSuccess, toastError } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [signupComplete, setSignupComplete] = useState(false);
  const { locData, loadLocalizedText } = useLocalization();

  useEffect(() => {
    loadLocalizedText([
      "signup_header",
      "signup_name_label",
      "signup_name_placeholder",
      "signup_email_label",
      "signup_email_placeholder",
      "signup_password_label",
      "signup_password_placeholder",
      "signup_button",
      "signup_loading",
      "signup_have_account",
      "signup_signin_link",
      "signup_cancel",
      "signup_success_title",
      "signup_success_description",
      "signup_error_title",
      "signup_error_description",
      "signup_complete_title",
      "signup_complete_description",
      "signup_complete_message",
      "signup_goto_signin",
    ]);
  }, []);

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Clean up any existing auth state
      cleanupAuthState();

      // Attempt to sign out globally first (helps prevent auth conflicts)
      try {
        await signOut();
      } catch (err) {
        // Continue even if this fails
      }

      const response = await signUpWithPassword({
        email,
        password,
        name,
        lang: DEFAULT_LANGUAGE, // Default language
      });

      if (response.success) {
        toastSuccess({
          title: locData["signup_success_title"] || "Registration successful",
          description:
            locData["signup_success_description"] ||
            "Your account has been created. Check your email for the account verification email.",
        });
        setSignupComplete(true);
      } else {
        toastError({
          title: locData["signup_error_title"] || "Registration failed",
          description:
            response.message ||
            locData["signup_error_description"] ||
            "Please try again later.",
        });
        setSignupComplete(false);
      }
    } catch (error: any) {
      toastError({
        title: locData["signup_error_title"] || "Registration failed",
        description:
          error.message ||
          locData["signup_error_description"] ||
          "Please try again later.",
      });
      setSignupComplete(false);
    } finally {
      setIsLoading(false);
    }
  };

  // Helper function to clean up auth state
  const cleanupAuthState = () => {
    // Remove standard auth tokens
    localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);
  };

  const SignUpFormHeader = () => {
    return (
      <h1 className="text-muted-foreground font-bold mb-2">
        {locData["signup_header"] || "Create your account and start creating!"}
      </h1>
    );
  };

  if (signupComplete) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl app-title-header">
            {APPLICATION_NAME}{" "}
            {locData["signup_complete_title"] || "Sign Up Complete!"}
          </CardTitle>
          <CardDescription>
            {locData["signup_complete_description"] ||
              "Check your email for the account verification email."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            {locData["signup_complete_message"] ||
              "Your email needs to be verified before you can sign in. Check your email inbox (and spam folder) for the account verification email which will contain a link to click to verify your account."}
          </p>
          <Link
            to={"/signin"}
            className="flex w-fit rounded-full mt-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            {locData["signup_goto_signin"] || "Go To Sign In"}
          </Link>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>
          <h1 className="text-4xl app-title-header">{APPLICATION_NAME}</h1>
        </CardTitle>
        <CardDescription>
          <SignUpFormHeader />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSignUp} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              {locData["signup_name_label"] || "Name"}
            </label>
            <Input
              id="name"
              placeholder={
                locData["signup_name_placeholder"] || "Enter your name"
              }
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              {locData["signup_email_label"] || "Email"}
            </label>
            <Input
              id="email"
              type="email"
              placeholder={
                locData["signup_email_placeholder"] || "your.email@domain.com"
              }
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              {locData["signup_password_label"] || "Password"}
            </label>
            <Input
              id="password"
              type="password"
              placeholder={
                locData["signup_password_placeholder"] ||
                "Enter password (min 8 characters)"
              }
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              autoComplete="off"
            />
          </div>
          <Button
            type="submit"
            className="flex w-fit rounded-full mt-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            disabled={isLoading}
          >
            {isLoading
              ? locData["signup_loading"] || "Creating account..."
              : locData["signup_button"] || "Sign Up"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t">
        <div className="flex items-center gap-2 pt-2">
          <span className="text-sm text-muted-foreground whitespace-nowrap">
            {locData["signup_have_account"] || "Already have an account?"}
          </span>
          <Button variant="secondary" size="sm" asChild>
            <Link to="/signin">
              {locData["signup_signin_link"] || "Sign In"}
            </Link>
          </Button>
        </div>
        <Button variant="outline" className="mt-2">
          <Link to="/">{locData["signup_cancel"] || "Cancel"}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SignUpForm;
