import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalization } from "@/contexts/LocalizationContext";
// components
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/app/ThemeToggle";
import LanguageSelection from "@/components/app/LanguageSelection";
import Logo from "@/components/app/Logo";
// contexts
import { useTheme } from "@/contexts/ThemeContext";
// constants
import { APPLICATION_NAME } from "@/constants";

const NavigationPublic = () => {
  const { locData, loadLocalizedText } = useLocalization();
  const navigate = useNavigate();
  const { themeIsDark } = useTheme();

  useEffect(() => {
    loadLocalizedText([
      "apptitle",
      "home",
      "about",
      "contact",
      "signin",
      "signup",
    ]);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
            <Logo themeIsDark={themeIsDark} />
            <span className="text-xl font-bold hidden sm:inline-block">
              {locData.apptitle || APPLICATION_NAME}
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
            >
              {locData.home || "Home"}
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate("/about")}
            >
              {locData.about || "About"}
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate("/contact")}
            >
              {locData.contact || "Contact"}
            </Button>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <LanguageSelection />
            <ThemeToggle />
            <div className="hidden md:flex items-center gap-2">
              <Button
                variant="ghost"
                onClick={() => navigate("/signin")}
              >
                {locData.signin || "Sign In"}
              </Button>
              <Button
                onClick={() => navigate("/signup")}
              >
                {locData.signup || "Sign Up"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationPublic;
