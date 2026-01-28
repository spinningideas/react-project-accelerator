import { useEffect } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import SignUpForm from "@/components/auth/SignUpForm";
import { useAuth } from "@/contexts/AuthContext";
import { resolvePostAuthRedirect } from "@/utils/redirect";

/*
 * SignUp page
 */
const SignUp = () => {
  const { user, loadingAuthentication } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const redirectUrl = searchParams.get("redirectUrl");

  useEffect(() => {
    if (user && !loadingAuthentication) {
      // If redirectUrl is provided, use it
      if (redirectUrl) {
        navigate(decodeURIComponent(redirectUrl), { replace: true });
        return;
      }

      const target = resolvePostAuthRedirect(
        location as unknown as Location,
        null,
        (location.state as any)?.from ?? null
      );
      navigate(target, { replace: true });
    }
  }, [user, loadingAuthentication, redirectUrl]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white/80 dark:bg-black">
      <div className="max-w-md w-full">
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
