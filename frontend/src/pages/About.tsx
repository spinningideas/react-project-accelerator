import { useEffect } from "react";
import { useLocalization } from "@/contexts/LocalizationContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const { locData, loadLocalizedText } = useLocalization();

  useEffect(() => {
    loadLocalizedText([
      "about",
      "aboutdescription",
      "technology",
      "technologydescription",
      "reactjs",
      "reactjsdescription",
      "tailwind_css",
      "tailwind_css_description",
      "shadcn_ui",
      "shadcn_ui_description",
      "lucide_icons",
      "lucide_icons_description",
      "vite",
      "vite_description",
      "moreinfo",
    ]);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h3 className="text-3xl font-bold mb-4">{locData.about}</h3>
      <p className="mb-6">{locData.aboutdescription}</p>

      <h4 className="text-2xl font-semibold mb-4">{locData.technology}</h4>
      <p className="mb-6">{locData.technologydescription}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>{locData.reactjs || "React JS"}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{locData.reactjsdescription || "React makes it painless to create interactive UIs using encapsulated components that manage their own state."}</p>
          </CardContent>
          <CardFooter>
            <Button variant="secondary" asChild>
              <a
                href="https://react.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {locData.moreinfo || "More Information"}
              </a>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{locData.tailwind_css || "Tailwind CSS"}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              {locData.tailwind_css_description || "A utility-first CSS framework for rapidly building custom user interfaces with low-level utility classes."}
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="secondary" asChild>
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {locData.moreinfo || "More Information"}
              </a>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{locData.shadcn_ui || "shadcn/ui"}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              {locData.shadcn_ui_description || "Beautifully designed components built with Radix UI and Tailwind CSS that you can copy and paste into your apps."}
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="secondary" asChild>
              <a
                href="https://ui.shadcn.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {locData.moreinfo || "More Information"}
              </a>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{locData.lucide_icons || "Lucide Icons"}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              {locData.lucide_icons_description || "Beautiful, consistent icon library with over 1,000 open-source icons for modern web applications."}
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="secondary" asChild>
              <a
                href="https://lucide.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {locData.moreinfo || "More Information"}
              </a>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{locData.vite || "Vite"}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              {locData.vite_description || "Lightning-fast build tool and dev server that provides instant hot module replacement for modern web development."}
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="secondary" asChild>
              <a
                href="https://vitejs.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {locData.moreinfo || "More Information"}
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default About;
