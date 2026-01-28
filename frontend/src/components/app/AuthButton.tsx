import { LogIn, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const AuthButton = () => {
  const { user, signOutAuthenticatedUser } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/signin");
  };

  const handleSignOut = async () => {
    await signOutAuthenticatedUser();
  };

  if (user) {
    return (
      <Button variant="ghost" size="sm" onClick={handleSignOut}>
        <LogOut className="h-4 w-4 mr-2" />
        Sign Out
      </Button>
    );
  }

  return (
    <Button variant="ghost" size="sm" onClick={handleSignIn}>
      <LogIn className="h-4 w-4 mr-2" />
      Sign In
    </Button>
  );
};

export default AuthButton;
