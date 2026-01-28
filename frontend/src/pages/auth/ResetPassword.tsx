import { useState, useEffect, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toastError, toastSuccess } from "@/hooks/use-toast";
import { validateResetToken, resetPassword } from "@/services/auth";
import { LoadingIndicator } from "@/components/shared/LoadingIndicator";

const ResetPassword = () => {
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();
  
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isValidating, setIsValidating] = useState(true);
  const [tokenValid, setTokenValid] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const validateToken = async () => {
      if (!token) {
        toastError({ title: "Invalid Link", description: "No reset token provided." });
        navigate("/signin");
        return;
      }

      setIsValidating(true);
      const response = await validateResetToken(token);
      
      if (response.success && response.data) {
        setTokenValid(true);
        setEmail(response.data.email);
      } else {
        toastError({
          title: "Invalid Link",
          description: response.message || "This password reset link is invalid or has expired.",
        });
        setTimeout(() => navigate("/forgot-password"), 3000);
      }
      setIsValidating(false);
    };

    validateToken();
  }, [token, navigate]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toastError({ title: "Passwords Don't Match", description: "Please make sure both passwords match." });
      return;
    }

    if (newPassword.length < 8) {
      toastError({ title: "Password Too Short", description: "Password must be at least 8 characters long." });
      return;
    }

    if (!token) return;

    setIsLoading(true);

    try {
      const response = await resetPassword(token, newPassword);
      if (response.success) {
        toastSuccess({
          title: "Password Reset",
          description: "Your password has been reset successfully. You can now sign in.",
        });
        setTimeout(() => navigate("/signin"), 2000);
      } else {
        toastError({
          title: "Reset Failed",
          description: response.message || "Failed to reset password.",
        });
      }
    } catch (error: any) {
      toastError({
        title: "Reset Failed",
        description: error.message || "Failed to reset password.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isValidating) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingIndicator loading={true} />
      </div>
    );
  }

  if (!tokenValid) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-white/80 dark:bg-black">
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Invalid Link</CardTitle>
            <CardDescription>
              This password reset link is invalid or has expired.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-center text-gray-600 dark:text-gray-400">
              Redirecting to password reset request page...
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white/80 dark:bg-black">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Reset Password</CardTitle>
          <CardDescription>
            Enter your new password for {email}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="newPassword" className="text-sm font-medium">
                New Password
              </label>
              <Input
                id="newPassword"
                type="password"
                placeholder="••••••••"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                minLength={8}
              />
              <p className="text-xs text-muted-foreground">
                Must be at least 8 characters long
              </p>
            </div>
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-sm font-medium">
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={8}
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? "Resetting..." : "Reset Password"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResetPassword;
