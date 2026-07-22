// Navigation
import { useNavigate } from "react-router-dom";
// Components
import { Button } from "@/components/ui/button";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-r from-blue-900 to-blue-800 dark:from-blue-900 dark:to-blue-800 opacity-70 dark:opacity-60" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Start Building Your Next Project Quickly
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
          Skip the setup and dive straight into building features. Get a
          production-ready React app with authentication, routing, beautiful UI
          components, motion support, and icons - all configured and ready to
          go.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            variant="success"
            className="text-lg rounded-full px-10 h-16 shadow-2xl transition-all hover:scale-105 font-semibold border-1 border-white/80"
            onClick={() => navigate("/signup")}
          >
            Get Started!
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg rounded-full px-10 shadow-2xl h-16 transition-all hover:scale-105 font-semibold border-1 border-white/80"
            onClick={() => navigate("/about")}
          >
            Learn More
          </Button>
        </div>
        <p className="text-sm text-blue-100 mt-6 opacity-90">
          {import.meta.env.VITE_MOCK_AUTH === "true"
            ? "Sign In With Any Email/Password as auth is mocked - No credit card required • Open source • MIT License"
            : "No credit card required • Open source • MIT License"}
        </p>
      </div>
    </section>
  );
}
