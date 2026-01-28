import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useLocalization } from "@/contexts/LocalizationContext";
// icons
import {
  Sparkles,
  LayoutTemplate,
  Palette,
  Code2,
  Zap,
  Layers
} from "lucide-react";
// components - ui shared
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// components - app
import NavigationPublic from "@/components/app/NavigationPublic";
import Logo from "@/components/app/Logo";
import LoadingIndicator from "@/components/shared/LoadingIndicator";
import BackgroundAnimations from "@/components/shared/BackgroundAnimations";
// components - landing page
import Hero from "@/components/landing/Hero";
import PricingPlans from "@/components/landing/PricingPlans";
// constants
import { APPLICATION_NAME } from "@/constants";
import { useTheme } from "@/contexts/ThemeContext";
/** Main landing page for un-authenticated users */
export default function LandingPage() {
  const [loading, setLoading] = useState(true);
  const { user, loadingAuthentication } = useAuth();
  const { themeIsDark } = useTheme();
  const { locData, loadLocalizedText } = useLocalization();
  const navigate = useNavigate();

  useEffect(() => {
    loadLocalizedText([
      "loading_message",
      "button_get_started",
      "button_sign_in",
      "button_get_started_free",
      "button_learn_more",
      "landing_features_heading",
      "landing_features_description",
      "landing_feature_modern_tech_title",
      "landing_feature_modern_tech_desc",
      "landing_feature_beautiful_ui_title",
      "landing_feature_beautiful_ui_desc",
      "landing_feature_production_ready_title",
      "landing_feature_production_ready_desc",
      "landing_getstarted_heading",
      "landing_getstarted_description",
      "landing_getstarted_step1_title",
      "landing_getstarted_step1_desc",
      "landing_getstarted_step1_clone_label",
      "landing_getstarted_step1_install_label",
      "landing_getstarted_step2_title",
      "landing_getstarted_step2_desc",
      "landing_getstarted_step3_title",
      "landing_getstarted_step3_desc",
      "landing_getstarted_step4_title",
      "landing_getstarted_step4_desc",
      "landing_getstarted_step5_title",
      "landing_getstarted_step5_desc",
      "landing_feature_typescript_title",
      "landing_feature_typescript_desc",
      "landing_feature_component_library_title",
      "landing_feature_component_library_desc",
      "landing_feature_developer_experience_title",
      "landing_feature_developer_experience_desc",
      "landing_cta_heading",
      "landing_cta_description",
      "landing_cta_footer_text",
      "landing_cta_footer_text_mock",
      "hero_mock_auth_note",
      "footer_tagline",
      "footer_product_heading",
      "footer_resources_heading",
      "footer_link_features",
      "footer_link_showcase",
      "footer_link_pricing",
      "footer_link_about",
      "footer_link_terms",
      "footer_link_privacy",
      "footer_copyright"
    ]);
  }, []);

  const features = [
    {
      icon: Sparkles,
      title: locData["landing_feature_modern_tech_title"] || "Modern Tech Stack",
      description: locData["landing_feature_modern_tech_desc"] || "Built with React 19, TypeScript, Vite, and the latest web technologies for optimal performance and developer experience.",
    },
    {
      icon: Palette,
      title: locData["landing_feature_beautiful_ui_title"] || "Beautiful UI Components",
      description: locData["landing_feature_beautiful_ui_desc"] || "Pre-configured with shadcn/ui and Tailwind CSS for a modern, accessible, and customizable design system out of the box.",
    },
    {
      icon: LayoutTemplate,
      title: locData["landing_feature_production_ready_title"] || "Production Ready",
      description: locData["landing_feature_production_ready_desc"] || "Includes authentication, routing, state management, and best practices. Start building features immediately, not infrastructure.",
    },
    {
      icon: Code2,
      title: locData["landing_feature_typescript_title"] || "TypeScript First",
      description: locData["landing_feature_typescript_desc"] || "Full TypeScript support with strict typing, ensuring code quality and catching errors before they reach production.",
    },
    {
      icon: Layers,
      title: locData["landing_feature_component_library_title"] || "Component Library",
      description: locData["landing_feature_component_library_desc"] || "Comprehensive set of reusable components including forms, modals, navigation, and more - all fully typed and documented.",
    },
    {
      icon: Zap,
      title: locData["landing_feature_developer_experience_title"] || "Developer Experience",
      description: locData["landing_feature_developer_experience_desc"] || "Hot module replacement, fast builds with Vite, ESLint configuration, and modern development tools for maximum productivity.",
    },
  ];

  useEffect(() => {
    // If user is authenticated, redirect to home
    if (!loadingAuthentication) {
      if (user) {
        navigate("/home");
      } else {
        setLoading(false);
      }
    }
  }, [user, loadingAuthentication, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-black dark:via-black dark:to-black">
      <BackgroundAnimations showGradient={false} />
      
      <NavigationPublic />

      {loading ? (
        <div className="flex items-center justify-center min-h-[50vh]">
          <LoadingIndicator
            loading={true}
            message={locData["loading_message"] || "Loading..."}
            className="mt-2"
          />
        </div>
      ) : (
        <>
          {/* Hero Section */}
          <Hero />

          <section className="container mx-auto px-4 mt-4 relative z-10">
            {/* Get Started Card */}
            <div className="max-w-4xl mx-auto text-center">
              {import.meta.env.VITE_MOCK_AUTH === "true" && (
                <p className="text-sm text-orange-600 dark:text-orange-400 font-medium mb-3 bg-orange-50 dark:bg-orange-950/30 px-4 py-2 rounded-lg inline-block">
                  {locData["hero_mock_auth_note"] || "Sign In With Any Email/Password as auth is mocked"}
                </p>
              )}
              <div className="flex gap-2 justify-center">
                <Button
                  size="lg"
                  className="text-lg rounded-full px-8 h-14 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-700 shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => navigate("/signup")}
                >
                  {locData["button_get_started"] || "Get Started!"}
                </Button>
              <Button
                size="lg"
                variant="secondary"
                className="text-lg rounded-full px-8 h-14 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => navigate("/signin")}
              >
                {locData["button_sign_in"] || "Sign In"}
              </Button>
            </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
            <div className="container mx-auto px-4 relative">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-green-500 dark:from-blue-300 dark:via-green-300 dark:to-green-400 mb-6">
                  {locData["landing_features_heading"] || "Built with Industry-Leading Tools"}
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  {locData["landing_features_description"] || "Powered by Tailwind CSS, shadcn/ui, Lucide Icons, Framer Motion, and more. Everything you need to build modern, beautiful web applications—pre-configured and ready to go."}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <Card
                    key={index}
                    className="group hover:scale-105 transition-all duration-300 border border-gray-100 dark:border-gray-800 bg-white dark:bg-zinc-900/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/10"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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

          {/* Get Started Section */}
          <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-zinc-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-400 dark:to-green-400 mb-6">
                  {locData["landing_getstarted_heading"] || "Get Started in Minutes"}
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  {locData["landing_getstarted_description"] || "Follow these simple steps to start building your next project"}
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-6">
                {/* Step 1 */}
                <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                        1
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">
                          {locData["landing_getstarted_step1_title"] || "Clone Repository and Install Dependencies"}
                        </CardTitle>
                        <p className="text-muted-foreground mb-3">
                          {locData["landing_getstarted_step1_desc"] || "Clone the repository and run npm install to get all dependencies set up"}
                        </p>
                        <div className="bg-slate-900 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm">
                          <div className="text-slate-400 mb-1">
                            {locData["landing_getstarted_step1_clone_label"] || "# Clone the repository"}
                          </div>
                          <code className="text-green-400">
                            git clone https://github.com/spinningideas/react-project-accelerator.git
                          </code>
                          <div className="text-slate-400 mt-3 mb-1">
                            {locData["landing_getstarted_step1_install_label"] || "# Install dependencies"}
                          </div>
                          <code className="text-green-400">
                            cd react-project-accelerator/frontend && npm install
                          </code>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                {/* Step 2 */}
                <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                        2
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">
                          {locData["landing_getstarted_step2_title"] || "Customize Logo, Landing Page, and Home Sections"}
                        </CardTitle>
                        <p className="text-muted-foreground">
                          {locData["landing_getstarted_step2_desc"] || "Update the logo, landing page content, and home sections to match your brand and requirements"}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                {/* Step 3 */}
                <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                        3
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">
                          {locData["landing_getstarted_step3_title"] || "Review and Optimize NPM Packages"}
                        </CardTitle>
                        <p className="text-muted-foreground">
                          {locData["landing_getstarted_step3_desc"] || "Review the installed npm packages and remove any you don't need for your project"}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                {/* Step 4 */}
                <Card className="border-l-4 border-l-orange-500 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                        4
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">
                          {locData["landing_getstarted_step4_title"] || "Configure Localization"}
                        </CardTitle>
                        <p className="text-muted-foreground">
                          {locData["landing_getstarted_step4_desc"] || "Remove localization entirely or keep English and continue localizing new strings as needed"}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                {/* Step 5 */}
                <Card className="border-l-4 border-l-pink-500 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                        5
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">
                          {locData["landing_getstarted_step5_title"] || "Update About, Terms, and Contact Pages"}
                        </CardTitle>
                        <p className="text-muted-foreground">
                          {locData["landing_getstarted_step5_desc"] || "Customize the About, Terms of Service, and Contact pages with your information"}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-900 dark:to-green-900 opacity-70 dark:opacity-60" />
            <div className="container mx-auto px-4 text-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {locData["landing_cta_heading"] || "Start Building Your Next Project Today"}
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
                {locData["landing_cta_description"] || "Skip the setup and dive straight into building features. Get a production-ready React app with authentication, routing, beautiful UI components, and modern best practices—all configured and ready to go."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg rounded-full px-10 h-16 bg-white text-green-600 hover:bg-gray-100 shadow-xl transition-all hover:scale-105 font-semibold"
                  onClick={() => navigate("/signup")}
                >
                  {locData["button_get_started_free"] || "Get Started Free"}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg rounded-full px-10 h-16 bg-transparent text-white border-2 border-white hover:bg-white/10 shadow-xl transition-all hover:scale-105 font-semibold"
                  onClick={() => navigate("/about")}
                >
                  {locData["button_learn_more"] || "Learn More"}
                </Button>
              </div>
              <p className="text-sm text-blue-100 mt-6 opacity-90">
                {import.meta.env.VITE_MOCK_AUTH === "true" 
                  ? (locData["landing_cta_footer_text_mock"] || "Sign In With Any Email/Password as auth is mocked - No credit card required • Open source • MIT License")
                  : (locData["landing_cta_footer_text"] || "No credit card required • Open source • MIT License")
                }
              </p>
            </div>
          </section>

          <PricingPlans />

          {/* Footer */}
          <footer className="bg-gray-50 dark:bg-black border-t dark:border-gray-800 py-16 text-sm">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-4 gap-12">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Logo themeIsDark={true} />
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      {APPLICATION_NAME}
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    {locData["footer_tagline"] || "Next-generation UI builder powered by advanced AI models."}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                    {locData["footer_product_heading"] || "Product"}
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>
                      <a
                        href="#"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {locData["footer_link_features"] || "Features"}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {locData["footer_link_showcase"] || "Showcase"}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {locData["footer_link_pricing"] || "Pricing"}
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                    {locData["footer_resources_heading"] || "Resources"}
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>
                      <a
                        href="/about"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {locData["footer_link_about"] || "About"}
                      </a>
                    </li>
                    <li>
                      <a
                        href="/support/terms"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {locData["footer_link_terms"] || "Terms of Service"}
                      </a>
                    </li>
                    <li>
                      <a
                        href="/support/privacy-policy"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {locData["footer_link_privacy"] || "Privacy Policy"}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center text-muted-foreground">
                <p>
                  &copy; {new Date().getFullYear()} {APPLICATION_NAME}. {locData["footer_copyright"] || "All rights reserved."}
                </p>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}
