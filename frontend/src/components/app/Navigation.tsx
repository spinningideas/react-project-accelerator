import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, LogOut, User, LogIn } from "lucide-react";
// components
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/app/ThemeToggle";
import AuthButton from "@/components/app/AuthButton";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// auth
import { AuthDialog } from "@/components/auth/AuthDialog";
// contexts
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
// components
import Logo from "@/components/app/Logo";

const Navigation = () => {
  const [authDialogOpen, setAuthDialogOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");
  const [sideNavigationOpen, setSideNavigationOpen] = useState(false);

  const { user, signOutAuthenticatedUser } = useAuth();
  const navigate = useNavigate();

  const { themeIsDark } = useTheme();

  const handleAuthClick = (mode: "signin" | "signup") => {
    setAuthMode(mode);
    setAuthDialogOpen(true);
  };

  const handleLinkClick = () => {
    setSideNavigationOpen(false);
  };

  const handleProfileClick = () => {
    navigate("/profile");
    setSideNavigationOpen(false);
  };

  return (
    <header className="h-[55px] border-b border-border/40 bg-background/80 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between max-w-full">
        <Link
          to="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Logo themeIsDark={themeIsDark} />
          <span className="hidden md:inline text-xl font-bold text-foreground">
            React Project Accelerator
          </span>
        </Link>

        <div className="flex items-center gap-0 md:gap-2">
          <div className="hidden md:flex items-center gap-1">
            <Button title="Home" asChild variant="ghost" size="sm">
              <Link to="/home">Home</Link>
            </Button>
            <Button title="About" asChild variant="ghost" size="sm">
              <Link to="/about">About</Link>
            </Button>
            <Button title="Contact" asChild variant="ghost" size="sm">
              <Link to="/contact">Contact</Link>
            </Button>
          </div>

          <ThemeToggle />

          {import.meta.env.VITE_MOCK_AUTH === "true" ? (
            <AuthButton />
          ) : user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                  <span className="sr-only">User menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleProfileClick}>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={signOutAuthenticatedUser}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button
                variant="ghost"
                onClick={() => handleAuthClick("signin")}
                className="hidden sm:inline-flex"
              >
                Sign In
              </Button>
              <Button
                variant="primary"
                onClick={() => handleAuthClick("signup")}
                className="md:px-4 px-3"
              >
                <LogIn className="h-5 w-5 md:hidden" />
                <span className="hidden md:inline">Sign Up</span>
              </Button>
            </>
          )}

          <Sheet open={sideNavigationOpen} onOpenChange={setSideNavigationOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  to="/"
                  onClick={handleLinkClick}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/bookmarks"
                  onClick={handleLinkClick}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  Bookmarks
                </Link>
                <Link
                  to="/profile"
                  onClick={handleLinkClick}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  Profile
                </Link>
                <Link
                  to="/about"
                  onClick={handleLinkClick}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  onClick={handleLinkClick}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  Contact
                </Link>
                <Link
                  to="/settings"
                  onClick={handleLinkClick}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  Settings
                </Link>
                <Link
                  to="/support/privacy-policy"
                  onClick={handleLinkClick}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  Privacy
                </Link>
                <Link
                  to="/support/terms"
                  onClick={handleLinkClick}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <AuthDialog
        open={authDialogOpen}
        onOpenChange={setAuthDialogOpen}
        tab={authMode}
      />
    </header>
  );
};

export default Navigation;
