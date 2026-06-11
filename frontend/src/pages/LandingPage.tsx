import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
// components - ui shared
import { Button } from "@/components/ui/button";
// components - app
import NavigationPublic from "@/components/app/NavigationPublic";
import LoadingIndicator from "@/components/shared/LoadingIndicator";
import BackgroundAnimations from "@/components/shared/BackgroundAnimations";
// components - landing page
import Hero from "@/components/landing/Hero";
import PricingPlans from "@/components/landing/PricingPlans";
import GetStarted from "@/components/landing/GetStarted";
import Features from "@/components/landing/Features";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
/** Main landing page for un-authenticated users */
export default function LandingPage() {
  const [loading, setLoading] = useState(true);
  const { user, loadingAuthentication } = useAuth();

  const navigate = useNavigate();

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
            message="Loading..."
            className="mt-2"
          />
        </div>
      ) : (
        <>
          {/* Hero Section */}
          <Hero />

          {/* Auth Section */}
          <section className="container mx-auto px-4 mt-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {import.meta.env.VITE_MOCK_AUTH === "true" && (
                <p className="text-sm text-orange-600 dark:text-orange-400 font-medium mb-3 bg-orange-50 dark:bg-orange-950/30 px-4 py-2 rounded-lg inline-block">
                  Sign In With Any Email/Password as auth is mocked
                </p>
              )}
              <div className="flex gap-2 justify-center">
                <Button
                  size="lg"
                  className="text-lg rounded-full px-8 h-14 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-700 shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => navigate("/signup")}
                >
                  Get Started!
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg rounded-full px-8 h-14 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => navigate("/signin")}
                >
                  Sign In
                </Button>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <Features />

          {/* Get Started Section */}
          <GetStarted />

          {/* CTA Section */}
          <CTA />

          <PricingPlans />

          {/* Footer */}
          <Footer />
        </>
      )}
    </div>
  );
}
