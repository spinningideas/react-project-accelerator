import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
// components
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/app/ThemeToggle";
import Logo from "@/components/app/Logo";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// contexts
import { useTheme } from "@/contexts/ThemeContext";
// constants
import { APPLICATION_NAME } from "@/constants";

const NavigationPublic = () => {
  const navigate = useNavigate();
  const { themeIsDark } = useTheme();
  const [sideNavigationOpen, setSideNavigationOpen] = useState(false);

  const handleLinkClick = () => {
    setSideNavigationOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
            <Logo themeIsDark={themeIsDark} />
            <span className="text-xl font-bold hidden sm:inline-block">
              {APPLICATION_NAME}
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
            >
              Home
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate("/about")}
            >
              About
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate("/contact")}
            >
              Contact
            </Button>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="hidden md:flex items-center gap-2">
              <Button
                variant="ghost"
                onClick={() => navigate("/signin")}
              >
                Sign In
              </Button>
              <Button
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </Button>
            </div>

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
      </div>
    </header>
  );
};

export default NavigationPublic;
