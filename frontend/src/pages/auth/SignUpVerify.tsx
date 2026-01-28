import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { LoadingIndicator } from "@/components/shared/LoadingIndicator";
import { CheckCircle, XCircle, Mail } from "lucide-react";
// services
import { verifyUserByToken } from "@/services/auth";

/*
 * SignUpVerify page - Verifies a user's email address via token provided to user
 * @param token - string
 */
const SignUpVerify = () => {
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();
  const [verificationStatus, setVerificationStatus] = useState<{
    isLoading: boolean;
    isVerified: boolean;
    message: string;
    attempted: boolean;
  }>({
    isLoading: false,
    isVerified: false,
    message: "",
    attempted: false,
  });

  const verifyUserToken = async (userToken: string) => {
    if (!userToken) {
      setVerificationStatus({
        isLoading: false,
        isVerified: false,
        message: "Invalid verification token",
        attempted: true,
      });
      return;
    }

    setVerificationStatus({
      ...verificationStatus,
      isLoading: true,
      attempted: true,
    });

    try {
      const verificationResponse = await verifyUserByToken(userToken);

      // Remember that API responses are wrapped in a response object with success, data, and message properties
      if (!verificationResponse.success) {
        setVerificationStatus({
          isLoading: false,
          isVerified: false,
          message:
            verificationResponse.message ||
            "Verification failed. Please try again or contact support.",
          attempted: true,
        });
        return;
      }

      setVerificationStatus({
        isLoading: false,
        isVerified: true,
        message: "Your email has been successfully verified!",
        attempted: true,
      });
    } catch (error) {
      setVerificationStatus({
        isLoading: false,
        isVerified: false,
        message:
          "An error occurred during verification. Please try again later.",
        attempted: true,
      });
    }
  };

  const handleSignIn = () => {
    navigate("/signin");
  };

  const handleRetry = () => {
    if (token && token.length > 0) {
      verifyUserToken(token);
    }
  };

  const getVerificationMessage = () => {
    if (!verificationStatus.attempted || verificationStatus.isLoading) {
      return "Verification In Progress...";
    }
    return verificationStatus.isVerified
      ? "Thank you for verifying your email"
      : "Email verification failed";
  };

  // Automatically attempt verification when the component loads
  useEffect(() => {
    if (token && token.length > 0) {
      verifyUserToken(token);
    }
  }, [token]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 bg-white/80 dark:bg-black">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold">Email Verification</h1>
          <p className="text-muted-foreground">{getVerificationMessage()}</p>
        </CardHeader>

        <CardContent>
          {verificationStatus.isLoading ? (
            <div className="flex justify-center py-6">
              <LoadingIndicator
                loading={true}
                message="Verifying your email..."
              />
            </div>
          ) : verificationStatus.attempted ? (
            <Alert
              variant={
                verificationStatus.isVerified ? "default" : "destructive"
              }
              className="my-4"
            >
              <div className="flex items-center gap-2">
                {verificationStatus.isVerified ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  <XCircle className="h-5 w-5" />
                )}
                <AlertTitle>
                  {verificationStatus.isVerified
                    ? "Success!"
                    : "Verification Failed"}
                </AlertTitle>
              </div>
              <AlertDescription className="mt-2">
                {verificationStatus.message}
              </AlertDescription>
            </Alert>
          ) : null}
        </CardContent>

        <CardFooter className="flex justify-center gap-4">
          {verificationStatus.isVerified ? (
            <Button
              onClick={handleSignIn}
              className="flex w-fit rounded-full text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Continue to Sign In
            </Button>
          ) : verificationStatus.attempted && !verificationStatus.isLoading ? (
            <>
              <Button onClick={handleRetry} variant="secondary">
                Try Again
              </Button>
              <Button onClick={() => navigate("/signup")} variant="default">
                Back to Sign Up
              </Button>
            </>
          ) : null}
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUpVerify;
