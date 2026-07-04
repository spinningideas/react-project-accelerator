import { useState, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import LocalCacheService from "@/services/LocalCacheService";
import NotificationsService from "@/services/NotificationsService";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Settings = () => {
  const { theme, setTheme } = useTheme();
  const localCacheService = LocalCacheService();
  const notificationsService = NotificationsService();

  const [colorSetting, setColorSetting] = useState<string>("blue");

  const colors = [
    { name: "blue", hex: "#3b82f6" },
    { name: "green", hex: "#22c55e" },
    { name: "purple", hex: "#a855f7" },
    { name: "red", hex: "#ef4444" },
    { name: "orange", hex: "#f97316" },
    { name: "pink", hex: "#ec4899" },
    { name: "teal", hex: "#14b8a6" },
    { name: "indigo", hex: "#6366f1" },
  ];

  useEffect(() => {
    const savedColor = localCacheService.get("color", "blue");
    setColorSetting(savedColor);
  }, []);

  const handleColorChange = (color: string) => {
    localCacheService.set("color", color);
    setColorSetting(color);
    notificationsService.show("Success", "success");
  };

  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h3 className="text-3xl font-bold mb-6">Settings</h3>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Color</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Choose a primary color for the application theme</p>
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <Button
                  key={color.name}
                  onClick={() => handleColorChange(color.name)}
                  style={{
                    backgroundColor: color.hex,
                    color: "#ffffff",
                  }}
                  className="min-w-[140px] hover:opacity-90"
                >
                  {colorSetting === color.name && (
                    <Check className="h-4 w-4 mr-2" />
                  )}
                  {capitalize(color.name)}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Theme</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Choose your preferred theme</p>
            <div className="flex gap-2">
              <Button
                onClick={() => setTheme("light")}
                variant={theme === "light" ? "default" : "outline-solid"}
              >
                {theme === "light" && <Check className="h-4 w-4 mr-2" />}
                Light
              </Button>
              <Button
                onClick={() => setTheme("dark")}
                variant={theme === "dark" ? "default" : "outline-solid"}
              >
                {theme === "dark" && <Check className="h-4 w-4 mr-2" />}
                Dark
              </Button>
              <Button
                onClick={() => setTheme("system")}
                variant={theme === "system" ? "default" : "outline-solid"}
              >
                {theme === "system" && <Check className="h-4 w-4 mr-2" />}
                System
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
