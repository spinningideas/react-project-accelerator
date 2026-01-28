import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocalization } from "@/contexts/LocalizationContext";
import {
  Menu,
  LogOut,
  User,
  ImageUp,
  LogIn,
  Palette,
  PencilRuler,
  SquarePen,
  SwatchBook,
} from "lucide-react";
// components
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/app/ThemeToggle";
import LanguageSelection from "@/components/app/LanguageSelection";
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
  const { locData, loadLocalizedText } = useLocalization();

  const navigate = useNavigate();

  const { themeIsDark } = useTheme();

  useEffect(() => {
    loadLocalizedText([
      "apptitle",
      "home",
      "about",
      "contact",
      "bookmarks",
      "profile",
      "settings",
      "privacy",
      "signin",
      "signout",
      "signup_button",
      "nav_menu",
      "nav_user_menu"
    ]);
  }, []);

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
    <header className="h-[55px] border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between max-w-full">
        <Link
          to="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Logo themeIsDark={themeIsDark} />
          <span className="hidden md:inline text-xl font-bold text-foreground">
            {locData.apptitle || "React Project Accelerator"}
          </span>
        </Link>

        <div className="flex items-center gap-0 md:gap-2">
          <div className="hidden md:flex items-center gap-1">
            <Button title={locData.home || "Home"} asChild variant="ghost" size="sm">
              <Link to="/home">{locData.home || "Home"}</Link>
            </Button>
            <Button title={locData.about || "About"} asChild variant="ghost" size="sm">
              <Link to="/about">{locData.about || "About"}</Link>
            </Button>
            <Button title={locData.contact || "Contact"} asChild variant="ghost" size="sm">
              <Link to="/contact">{locData.contact || "Contact"}</Link>
            </Button>
          </div>

          <LanguageSelection />
          <ThemeToggle />

          {import.meta.env.VITE_MOCK_AUTH === "true" ? (
            <AuthButton />
          ) : user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                  <span className="sr-only">{locData.nav_user_menu || "User menu"}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleProfileClick}>
                  <User className="mr-2 h-4 w-4" />
                  {locData.profile || "Profile"}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={signOutAuthenticatedUser}>
                  <LogOut className="mr-2 h-4 w-4" />
                  {locData.signout || "Sign Out"}
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
                {locData.signin || "Sign In"}
              </Button>
              <Button
                variant="primary"
                onClick={() => handleAuthClick("signup")}
                className="md:px-4 px-3"
              >
                <LogIn className="h-5 w-5 md:hidden" />
                <span className="hidden md:inline">{locData.signup_button || "Sign Up"}</span>
              </Button>
            </>
          )}

          <Sheet open={sideNavigationOpen} onOpenChange={setSideNavigationOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu className="h-5 w-5" />
                <span className="sr-only">{locData.nav_menu || "Menu"}</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  to="/"
                  onClick={handleLinkClick}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  {locData.home || "Home"}
                </Link>
                <Link
                  to="/bookmarks"
                  onClick={handleLinkClick}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  {locData.bookmarks || "Bookmarks"}
                </Link>
                <Link
                  to="/profile"
                  onClick={handleLinkClick}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  {locData.profile || "Profile"}
                </Link>
                <Link
                  to="/about"
                  onClick={handleLinkClick}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  {locData.about || "About"}
                </Link>
                <Link
                  to="/contact"
                  onClick={handleLinkClick}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  {locData.contact || "Contact"}
                </Link>
                <Link
                  to="/settings"
                  onClick={handleLinkClick}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  {locData.settings || "Settings"}
                </Link>
                <Link
                  to="/support/privacy-policy"
                  onClick={handleLinkClick}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  {locData.privacy || "Privacy"}
                </Link>
                <Link
                  to="/support/terms"
                  onClick={handleLinkClick}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  {locData.footer_link_terms || "Terms"}
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
