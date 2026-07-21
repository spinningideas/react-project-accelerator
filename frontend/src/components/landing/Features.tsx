// Icons
import {
  Sparkles,
  LayoutTemplate,
  Palette,
  Code2,
  Zap,
  Layers,
} from "lucide-react";
// Components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Features() {
  const features = [
    {
      icon: Sparkles,
      title: "Modern Tech Stack",
      description:
        "Built with React 19, TypeScript, Vite, and the latest web technologies for optimal performance and developer experience.",
    },
    {
      icon: Palette,
      title: "Beautiful UI Components",
      description:
        "Pre-configured with shadcn/ui and Tailwind CSS for a modern, accessible, and customizable design system out of the box.",
    },
    {
      icon: LayoutTemplate,
      title: "Production Ready",
      description:
        "Includes authentication, routing, state management, and best practices. Start building features immediately, not infrastructure.",
    },
    {
      icon: Code2,
      title: "TypeScript First",
      description:
        "Full TypeScript support with strict typing, ensuring code quality and catching errors before they reach production.",
    },
    {
      icon: Layers,
      title: "Component Library",
      description:
        "Comprehensive set of reusable components including forms, modals, navigation, and more - all fully typed and documented.",
    },
    {
      icon: Zap,
      title: "Developer Experience",
      description:
        "Hot module replacement, fast builds with Vite, ESLint configuration, and modern development tools for maximum productivity.",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 mask-[linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:mask-[linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-green-600 via-green-500 to-green-600 dark:from-green-400 dark:via-green-500 dark:to-green-400 mb-6">
            Built with Industry-Leading Tools
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powered by Tailwind CSS, shadcn/ui, Lucide Icons, Framer Motion, and
            more. Everything you need to build modern, beautiful web
            applications - pre-configured and ready to go.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:scale-105 transition-all duration-300 border border-gray-100 dark:border-gray-800 bg-white dark:bg-zinc-900/50 backdrop-blur-xs hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {feature.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
