import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AuthSection = () => {
  const navigate = useNavigate();

  return (
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
            className="text-lg rounded-full px-8 h-14 bg-linear-to-r from-green-700 to-green-600 hover:from-green-700 hover:to-green-700 shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => navigate("/signup")}
          >
            Get Started!
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg rounded-full px-8 h-14 bg-linear-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => navigate("/signin")}
          >
            Sign In
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AuthSection;
