import { useState, useEffect, type FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLocalization } from "@/contexts/LocalizationContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { toastError } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import {
  AUTH_TOKEN_STORAGE_KEY,
  signInWithPassword,
  signOut,
} from "@/services/auth";
import SignInHeader from "@/components/auth/SignInHeader";
import { resolvePostAuthRedirect } from "@/utils/redirect";

/* Form to sign in with email and password handles 
    redirect to appropriate page after sign-in
 */
const SignInForm = ({ redirectUrl }: { redirectUrl?: string }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { locData, loadLocalizedText } = useLocalization();

  const { setSignedInUser } = useAuth();

  useEffect(() => {
    loadLocalizedText([
      "signin_header",
      "signin_email_label",
      "signin_email_placeholder",
      "signin_password_label",
      "signin_password_placeholder",
      "signin_forgot_password",
      "signin_button",
      "signin_loading",
      "signin_no_account",
      "signin_signup_link",
      "signin_cancel",
      "signin_error_title",
      "signin_error_description"
    ]);
  }, []);

  const handleSignIn = async (e: FormEvent) => {
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
      const response = await signInWithPassword(email, password);
      if (response.success) {
        const userSignedIn = response.data.user;
        if (userSignedIn) {
          setSignedInUser(userSignedIn);
        }
        const target = resolvePostAuthRedirect(
          location as unknown as Location,
          redirectUrl ?? null,
          (location.state as any)?.from ?? null,
        );
        navigate(target, { replace: true });
      } else {
        toastError({
          title: locData["signin_error_title"] || "SignIn failed",
          description:
            response.message || locData["signin_error_description"] || "Please check your credentials and try again.",
        });
      }
    } catch (error: any) {
      toastError({
        title: locData["signin_error_title"] || "SignIn failed",
        description:
          error.message || locData["signin_error_description"] || "Please check your credentials and try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Helper function to clean up auth state
  const cleanupAuthState = () => {
    // Remove standard auth tokens
    localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);
  };

  const SignInFormHeader = () => {
    return (
      <span className="text-muted-foreground font-bold mb-2 block">
        {locData["signin_header"] || "Sign in to continue"}
      </span>
    );
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <SignInHeader className="text-4xl app-title-header" />
        <CardDescription>
          <SignInFormHeader />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSignIn} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              {locData["signin_email_label"] || "Email"}
            </label>
            <Input
              id="email"
              type="email"
              placeholder={locData["signin_email_placeholder"] || "name@example.com"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-sm font-medium">
                {locData["signin_password_label"] || "Password"}
              </label>
              <Link
                to="/forgot-password"
                className="text-xs text-primary hover:underline"
              >
                {locData["signin_forgot_password"] || "Forgot Password?"}
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              placeholder={locData["signin_password_placeholder"] || "••••••••"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="off"
            />
          </div>
          <Button
            type="submit"
            className="flex w-fit rounded-full mt-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            disabled={isLoading}
          >
            {isLoading ? (locData["signin_loading"] || "Signin in...") : (locData["signin_button"] || "Sign In")}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t">
        <div className="flex items-center gap-2 pt-2">
          <span className="text-sm text-muted-foreground whitespace-nowrap">
            {locData["signin_no_account"] || "Don't have an account?"}
          </span>
          <Button variant="secondary" size="sm" asChild>
            <Link to="/signup">{locData["signin_signup_link"] || "Sign Up"}</Link>
          </Button>
        </div>
        <Button variant="outline" className="mt-2">
          <Link to="/">{locData["signin_cancel"] || "Cancel"}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SignInForm;
