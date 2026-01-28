import { useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useLocalization } from "@/contexts/LocalizationContext";


const PricingPlans = () => {
  const { locData, loadLocalizedText } = useLocalization();

  useEffect(() => {
    loadLocalizedText([
      "pricing_heading",
      "pricing_description",
      "pricing_best_value",
      "pricing_plan_starter",
      "pricing_plan_pro",
      "pricing_plan_premium",
      "pricing_credits",
      "pricing_unlimited_storage",
      "pricing_priority_support",
      "pricing_purchase_credits"
    ]);
  }, []);

  const plans = [
    {
      name: locData["pricing_plan_starter"] || "Starter",
      price: 5,
      credits: 50,
      popular: false,
    },
    {
      name: locData["pricing_plan_pro"] || "Pro",
      price: 10,
      credits: 120,
      popular: true,
    },
    {
      name: locData["pricing_plan_premium"] || "Premium",
      price: 20,
      credits: 300,
      popular: false,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="mb-8"
    >
      <Card className="p-6 card-gradient border-border/50 bg-transparent">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">EXAMPLE PRICING PLANS: {locData["pricing_heading"] || "Purchase Credits"}</h2>
          <p className="text-sm text-muted-foreground">
            {locData["pricing_description"] || "Get credits for enhanced search capabilities"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {locData["pricing_best_value"] || "Best Value"}
                </div>
              )}
              <Card
                className={`p-6 text-center transition-all duration-300 ${
                  plan.popular
                    ? "bg-green-600/10 border-green-600 shadow-lg"
                    : "hover:border-primary/50"
                }`}
              >
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">${plan.price}</span>
                </div>
                <div className="mb-6 space-y-2">
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>{plan.credits} {locData["pricing_credits"] || "credits"}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>{locData["pricing_unlimited_storage"] || "Unlimited storage"}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>{locData["pricing_priority_support"] || "Priority support"}</span>
                  </div>
                </div>
                <Button
                  variant={plan.popular ? "primary" : "default"}
                  className="w-full"
                >
                  {locData["pricing_purchase_credits"] || "Purchase"} {plan.credits} {locData["pricing_credits"] || "Credits"}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

export default PricingPlans;
