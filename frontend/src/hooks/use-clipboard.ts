import { useState } from "react";
import { useToast } from "@/components/shared/Toast";

/**
 * Hook for clipboard operations with user feedback
 */
export function useClipboard() {
  const { toastSuccess, toastError } = useToast();
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (
    text: string,
    successMessage?: string,
  ): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);

      // Show success toast
      toastSuccess(successMessage || "Copied to clipboard");

      // Reset copied state after 2 seconds
      setTimeout(() => setIsCopied(false), 2000);

      return true;
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
      toastError("Failed to copy to clipboard");
      return false;
    }
  };

  return {
    isCopied,
    copyToClipboard,
  };
}
