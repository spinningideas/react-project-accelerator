import { useNavigate } from "react-router-dom";
// components
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/app/ThemeToggle";
import Logo from "@/components/app/Logo";
// contexts
import { useTheme } from "@/contexts/ThemeContext";
// constants
import { APPLICATION_NAME } from "@/constants";

const NavigationPublic = () => {
  const navigate = useNavigate();
  const { themeIsDark } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationPublic;
