import { useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, LayoutTemplate, Image, Palette } from "lucide-react";
import { useLocalization } from "@/contexts/LocalizationContext";

const Hero = () => {
  const { locData, loadLocalizedText } = useLocalization();

  useEffect(() => {
    loadLocalizedText([
      "hero_title_part1",
      "hero_title_part2",
      "hero_title_part3",
      "hero_title_part4",
      "hero_description",
      "hero_feature_modern_stack",
      "hero_feature_tailwind_shadcn",
      "hero_feature_typescript",
      "hero_feature_dark_mode"
    ]);
  }, []);

  const features = [
    {
      icon: Sparkles,
      text: locData["hero_feature_modern_stack"] || "Modern React Stack",
    },
    {
      icon: LayoutTemplate,
      text: locData["hero_feature_tailwind_shadcn"] || "Tailwind CSS + shadcn/ui",
    },
    {
      icon: Image,
      text: locData["hero_feature_typescript"] || "TypeScript Support",
    },
    {
      icon: Palette,
      text: locData["hero_feature_dark_mode"] || "Dark Mode Ready",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 py-6 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
          >
            <span className="text-green-500">{locData["hero_title_part1"] || "React Project"}</span> {locData["hero_title_part2"] || "Accelerator"}{" "}
            <span className="text-green-500">{locData["hero_title_part3"] || "for Modern"}</span>{" "}
            <span className="text-blue-500">{locData["hero_title_part4"] || "Web Apps"}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            {locData["hero_description"] || "A production-ready React starter with Tailwind CSS, shadcn/ui, TypeScript, and modern best practices. Build beautiful web applications faster with this comprehensive accelerator."}
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 pt-2"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <feature.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
