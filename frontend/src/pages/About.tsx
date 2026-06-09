import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import NavigationPublic from "@/components/app/NavigationPublic";

const About = () => {
  return (
    <>
      <NavigationPublic />
      <div className="container mx-auto px-4 py-8">
        <h3 className="text-3xl font-bold mb-4">About</h3>
      <p className="mb-6">This app was created to provide an example reference implementation to bootstrap and accelerate react project and to explore using various client side libraries to compose a rich user experience.</p>

      <h4 className="text-2xl font-semibold mb-4">Technology</h4>
      <p className="mb-6">This application was built using the following technologies:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        <Card variant="animated">
          <CardHeader>
            <CardTitle>React JS</CardTitle>
          </CardHeader>
          <CardContent>
            <p>React makes it painless to create interactive UIs using encapsulated components that manage their own state.</p>
          </CardContent>
          <CardFooter>
            <Button variant="secondary" asChild>
              <a
                href="https://react.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                More Information
              </a>
            </Button>
          </CardFooter>
        </Card>

        <Card variant="animated">
          <CardHeader>
            <CardTitle>Tailwind CSS</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              A utility-first CSS framework for rapidly building custom user interfaces with low-level utility classes.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="secondary" asChild>
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                More Information
              </a>
            </Button>
          </CardFooter>
        </Card>

        <Card variant="animated">
          <CardHeader>
            <CardTitle>shadcn/ui</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Beautifully designed components built with Radix UI and Tailwind CSS that you can copy and paste into your apps.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="secondary" asChild>
              <a
                href="https://ui.shadcn.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                More Information
              </a>
            </Button>
          </CardFooter>
        </Card>

        <Card variant="animated">
          <CardHeader>
            <CardTitle>Lucide Icons</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Beautiful, consistent icon library with over 1,000 open-source icons for modern web applications.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="secondary" asChild>
              <a
                href="https://lucide.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                More Information
              </a>
            </Button>
          </CardFooter>
        </Card>

        <Card variant="animated">
          <CardHeader>
            <CardTitle>Vite</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Lightning-fast build tool and dev server that provides instant hot module replacement for modern web development.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="secondary" asChild>
              <a
                href="https://vitejs.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                More Information
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
      </div>
    </>
  );
};

export default About;
