import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { LoadingIndicator } from "@/components/shared/LoadingIndicator";

interface ProtectedRouteProps {
  children: ReactNode;
}

/* Protected route component that handles authentication checks,
handles redirect to signin if not authenticated,
handles loading state while authentication state is being determined
 * @param children - ReactNode
 */
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, loadingAuthentication } = useAuth();
  const location = useLocation();

  // Show loading spinner while authentication state is being determined
  if (loadingAuthentication) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingIndicator loading />
      </div>
    );
  }

  // If not authenticated, redirect to signin
  if (!user) {
    return <Navigate to={`/signin`} replace state={{ from: location }} />;
  }

  // User is authenticated, render children
  return <>{children}</>;
};

export default ProtectedRoute;
