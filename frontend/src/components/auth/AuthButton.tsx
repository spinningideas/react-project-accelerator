import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LogIn, LogOut, User, UserCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toastError } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { AuthDialog } from "@/components/auth/AuthDialog";

export default function AuthButton() {
  const [loading, setLoading] = useState(false);
  const { user, signOutAuthenticatedUser } = useAuth();

  const navigate = useNavigate();

  const handleProfileNavigation = () => {
    navigate(`/profile`);
  };

  const handleSignOut = async () => {
    try {
      setLoading(true);
      await signOutAuthenticatedUser();
    } catch (_error) {
      toastError({
        title: "Sign Out Failed",
        description: "Unable to complete sign out using your email",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center">
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="secondary"
              className="w-10 flex items-center rounded-full"
            >
              <User size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="text-foreground">
              {user.email}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleProfileNavigation}>
              <UserCircle className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleSignOut} disabled={loading}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Sign out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <AuthDialog
          tab="signin"
          children={
            <Button className="flex items-center bg-green-600 text-gray-100 hover:text-green-50 hover:bg-green-500 rounded-full">
              <LogIn size={16} />
              <span>Sign In</span>
            </Button>
          }
        />
      )}
    </div>
  );
}
