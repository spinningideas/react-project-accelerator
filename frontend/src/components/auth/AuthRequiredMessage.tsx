import AuthButton from "@/components/auth/AuthButton";

/* Authentication required message and sign-in prompt
 */
export const AuthRequiredMessage = () => (
  <div className="flex justify-center">
    <div className="bg-blue-50 dark:bg-blue-900/30 p-8 rounded-xl max-w-md mx-auto shadow-sm">
      <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-100">
        Sign In Required
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Please sign in or create an account to continue to your User Hubs.
      </p>
      <div className="flex justify-center">
        <AuthButton />
      </div>
    </div>
  </div>
);
