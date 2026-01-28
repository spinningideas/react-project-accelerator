import { useState } from "react";
import { toast } from "sonner";

/**
 * Hook for clipboard operations with user feedback
 */
export function useClipboard() {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (
    text: string,
    successMessage?: string,
  ): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);

      // Show success toast
      toast.success(successMessage || "Copied to clipboard");

      // Reset copied state after 2 seconds
      setTimeout(() => setIsCopied(false), 2000);

      return true;
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
      toast.error("Failed to copy to clipboard");
      return false;
    }
  };

  return {
    isCopied,
    copyToClipboard,
  };
}
