import { useEffect } from "react";
import {
  useNavigate,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { LoadingIndicator } from "@/components/shared/LoadingIndicator";
import { useAuth } from "@/contexts/AuthContext";
import { AUTH_TOKEN_STORAGE_KEY } from "@/services/auth";
import SignInForm from "@/components/auth/SignInForm";
import { resolvePostAuthRedirect } from "@/utils/redirect";

/*
 * SignIn page
 */
const SignIn = () => {
  const { user, loadingAuthentication } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const redirectUrl = searchParams.get("redirectUrl");

  // Redirect authenticated users away from the sign-in page
  useEffect(() => {
    // Only redirect if we're sure the user is authenticated and loading is complete
    if (user && !loadingAuthentication) {
      // If redirectUrl is provided, use it
      if (redirectUrl) {
        navigate(decodeURIComponent(redirectUrl), { replace: true });
        return;
      }

      const resolvedTarget = resolvePostAuthRedirect(
        location as unknown as Location,
        null,
        (location.state as any)?.from ?? null
      );
      const target = resolvedTarget || "/";
      navigate(target, { replace: true });
    }
  }, [user, loadingAuthentication, redirectUrl]);

  // Don't render anything while still determining auth state and whether user is potentially signed in
  if (loadingAuthentication && localStorage.getItem(AUTH_TOKEN_STORAGE_KEY)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingIndicator loading={true} />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white/80 dark:bg-black">
      <div className="max-w-md w-full">
        <SignInForm />
      </div>
    </div>
  );
};

export default SignIn;
