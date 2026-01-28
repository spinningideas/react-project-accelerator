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
      "tailwind_shadcn",
      "tailwind_shadcn_description",
      "lucide_vite",
      "lucide_vite_description",
      "moreinfo",
    ]);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h3 className="text-3xl font-bold mb-4">{locData.about}</h3>
      <p className="mb-6">{locData.aboutdescription}</p>

      <h4 className="text-2xl font-semibold mb-4">{locData.technology}</h4>
      <p className="mb-6">{locData.technologydescription}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>{locData.reactjs}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{locData.reactjsdescription}</p>
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
            <CardTitle>{locData.tailwind_shadcn || "Tailwind CSS & shadcn/ui"}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              {locData.tailwind_shadcn_description || "A utility-first CSS framework combined with beautifully designed components built with Radix UI and Tailwind CSS."}
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
            <CardTitle>{locData.lucide_vite || "Lucide Icons & Vite"}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              {locData.lucide_vite_description || "Beautiful, consistent icons from Lucide.dev powered by Vite's lightning-fast build tooling for modern web development."}
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
      </div>
    </div>
  );
};

export default About;
