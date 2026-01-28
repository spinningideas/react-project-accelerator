import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { requestAccess as requestAccessApi } from "@/services/auth";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const RequestAccessForm = ({
  fullName,
  setFullName,
  email,
  setEmail,
  budgetRange,
  setBudgetRange,
  reason,
  setReason,
  agree,
  setAgree,
  errors,
  isSubmitting,
  onSubmit,
}: {
  fullName: string;
  setFullName: (v: string) => void;
  email: string;
  setEmail: (v: string) => void;
  budgetRange: string;
  setBudgetRange: (v: string) => void;
  reason: string;
  setReason: (v: string) => void;
  agree: boolean;
  setAgree: (v: boolean) => void;
  errors: {
    fullName?: string;
    email?: string;
    reason?: string;
    agree?: string;
  };
  isSubmitting: boolean;
  onSubmit: (e: React.FormEvent) => void;
}) => {
  const navigate = useNavigate();
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <p className="text-gray-600 dark:text-gray-300">
        User Hubs is in early alpha and thus is in active development and
        is using a waiting list to evaluate folks that are interested for
        inclusion in the first set of customers
      </p>
      <div>
        <Label
          htmlFor="fullName"
          className="text-xs font-semibold text-gray-700 dark:text-gray-200"
        >
          FULL NAME
        </Label>
        <Input
          id="fullName"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="mt-1"
        />
        {errors.fullName ? (
          <p className="text-sm text-red-600 mt-1">{errors.fullName}</p>
        ) : null}
      </div>

      <div>
        <Label
          htmlFor="email"
          className="text-xs font-semibold text-gray-700 dark:text-gray-200"
        >
          EMAIL ADDRESS
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1"
        />
        {errors.email ? (
          <p className="text-sm text-red-600 mt-1">{errors.email}</p>
        ) : null}
      </div>

      <div>
        <Label className="text-xs font-semibold text-gray-700 dark:text-gray-200">
          MONTHLY BUDGET (USD)
        </Label>
        <Select value={budgetRange} onValueChange={setBudgetRange}>
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Select a monthly budget range (optional)" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="under-50">Under $50</SelectItem>
            <SelectItem value="50-99">$50 - $99</SelectItem>
            <SelectItem value="100-249">$100 - $249</SelectItem>
            <SelectItem value="250-499">$250 - $499</SelectItem>
            <SelectItem value="500-999">$500 - $999</SelectItem>
            <SelectItem value="1000-2499">$1,000 - $2,499</SelectItem>
            <SelectItem value="2500-4999">$2,500 - $4,999</SelectItem>
            <SelectItem value="5000-plus">$5,000+</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          This helps us tailor plans for projects of different sizes.
        </p>
      </div>

      <div>
        <Label
          htmlFor="reason"
          className="text-xs font-semibold text-gray-700 dark:text-gray-200"
        >
          WHY ARE YOU INTERESTED?
        </Label>

        <Textarea
          id="reason"
          placeholder="Tell us about your SaaS product(s), how you currently manage users and organizations, subscriptions and plans, and any credit or usage-based billing you support today. What problems are you trying to solve with User Hubs (e.g., central user directory across products, shared subscription logic, flexible credit plans, better visibility into account health)? Also share which capabilities are must-haves for your team."
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          rows={5}
          className="mt-1"
        />
        {errors.reason ? (
          <p className="text-sm text-red-600 mt-1">{errors.reason}</p>
        ) : null}
      </div>

      <div className="flex items-start gap-2">
        <Checkbox
          id="agree"
          checked={agree}
          onCheckedChange={(v: boolean) => setAgree(!!v)}
        />
        <Label
          htmlFor="agree"
          className="text-sm text-gray-700 dark:text-gray-300"
        >
          I agree and understand that I may be contacted at the email address
          provided about this request for follow up information and questions
          about use cases and product fit.
        </Label>
      </div>
      {errors.agree ? (
        <p className="text-sm text-red-600 -mt-2">{errors.agree}</p>
      ) : null}

      <div className="pt-2 flex flex-col sm:flex-row gap-3">
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting || !agree}
          className="w-full sm:w-auto text-white bg-green-600 hover:bg-green-700"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="lg"
          className="w-full sm:w-auto"
          onClick={() => navigate("/")}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

const RequestAccessConfirmation = ({
  fullName,
  email,
  message,
  onBackHome,
  onSubmitAnother,
}: {
  fullName: string;
  email: string;
  message?: string;
  onBackHome: () => void;
  onSubmitAnother: () => void;
}) => {
  return (
    <div className="text-center py-6">
      <div className="mx-auto mb-3 w-14 h-14 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
        <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
      </div>
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
        Request Received
      </h3>
      {message ? (
        <p className="text-green-700 dark:text-green-400 mb-2">{message}</p>
      ) : null}
      <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
        Thanks {fullName || "there"}! We'll notify {email} when your account is
        ready. In the meantime, please think about how you currently manage
        users, organizations, subscriptions, and credit or usage plans, and how
        User Hubs could simplify that across your SaaS products.
      </p>
      <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
        <Button
          variant="secondary"
          className="bg-blue-600 text-white hover:bg-blue-700"
          onClick={onBackHome}
        >
          Back to Home
        </Button>
        <Button variant="secondary" onClick={onSubmitAnother}>
          Submit another request
        </Button>
      </div>
    </div>
  );
};

/*
 * RequestAccess page
 */
const RequestAccess = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [budgetRange, setBudgetRange] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState<
    string | undefined
  >(undefined);
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    reason?: string;
    agree?: string;
  }>({});

  useEffect(() => {
    // Keep pattern parity with auth pages if we later use a redirect param
  }, []);

  const validate = () => {
    const next: typeof errors = {};
    if (!fullName.trim()) next.fullName = "Please enter your full name";
    if (!email.trim()) next.email = "Please enter your email address";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Enter a valid email";
    if (!reason.trim())
      next.reason =
        "Tell us briefly how you'll use User Hubs for users, subscriptions, and credit plans";
    if (!agree) next.agree = "You must agree before submitting";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      const result = await requestAccessApi(
        fullName,
        email,
        reason,
        budgetRange || undefined
      );
      if (result.success) {
        setSubmitted(true);
        setConfirmationMessage(result.message || "Access request received");
      } else {
        setErrors((prev) => ({
          ...prev,
          reason: result.message || "Unable to submit request at this time",
        }));
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white/80 dark:bg-black">
      <div className="max-w-2xl w-full  my-6">
        <Card className="border-2 border-blue-100 bg-white/80 dark:bg-[#0e0f12] dark:border-gray-800">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-green-600 dark:text-green-400">
              Request Access
            </CardTitle>
          </CardHeader>
          <CardContent>
            {!submitted ? (
              <RequestAccessForm
                fullName={fullName}
                setFullName={setFullName}
                email={email}
                setEmail={setEmail}
                budgetRange={budgetRange}
                setBudgetRange={setBudgetRange}
                reason={reason}
                setReason={setReason}
                agree={agree}
                setAgree={setAgree}
                errors={errors}
                isSubmitting={isSubmitting}
                onSubmit={handleSubmit}
              />
            ) : (
              <RequestAccessConfirmation
                fullName={fullName}
                email={email}
                message={confirmationMessage}
                onBackHome={() => navigate("/")}
                onSubmitAnother={() => {
                  setSubmitted(false);
                  setConfirmationMessage(undefined);
                  setFullName("");
                  setEmail("");
                  setReason("");
                  setAgree(false);
                  setErrors({});
                }}
              />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RequestAccess;
