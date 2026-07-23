import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
// components - app
import NavigationPublic from "@/components/app/NavigationPublic";
import LoadingIndicator from "@/components/shared/LoadingIndicator";
import BackgroundAnimations from "@/components/shared/BackgroundAnimations";
// components - landing page
import Hero from "@/components/landing/Hero";
import AuthSection from "@/components/landing/AuthSection";
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
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-blue-50 dark:from-background dark:via-card dark:to-background">
      {/* OPTIONAL: <BackgroundAnimations showGradient={true} /> */}

      <NavigationPublic />

      {loading ? (
        <div className="flex items-center justify-center min-h-[50vh]">
          <LoadingIndicator
            loading={true}
            message="Loading..."
            className="mt-6"
          />
        </div>
      ) : (
        <>
          {/* Hero Section */}
          <Hero />

          {/* Auth Section */}
          <AuthSection />

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
