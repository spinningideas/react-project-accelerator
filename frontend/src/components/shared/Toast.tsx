import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { X } from "lucide-react";

/** Toast variant types */
export type ToastType = "success" | "error" | "info" | "default";

/** Individual toast message structure */
interface Toast {
  id: number;
  message: string;
  title?: string;
  type: ToastType;
}

/** Argument for specialized toast helpers */
type ToastArg = string | { title?: string; description: string };

/** Context interface for the toast system */
interface ToastContextType {
  showToast: (message: string, type?: ToastType, title?: string) => void;
  success: (arg: ToastArg) => void;
  error: (arg: ToastArg) => void;
  info: (arg: ToastArg) => void;
  dismiss: (id: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

/** Custom hook for toast management which uses the ToastContext */
export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

interface ToastProviderProps {
  children: ReactNode;
  location?: "top" | "bottom";
}

/**
 * Unified Toast Provider
 * Manages the state and display of toast notifications using custom CSS styles.
 */
export const ToastProvider = ({
  children,
  location = "top",
}: ToastProviderProps) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const dismiss = useCallback((id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback(
    (message: string, type: ToastType = "default", title?: string) => {
      const id = Date.now();
      setToasts((prev) => [...prev, { id, message, type, title }]);

      // Automatically remove toast after 5 seconds
      setTimeout(() => {
        dismiss(id);
      }, 5000);
    },
    [dismiss],
  );

  const normalizeArg = (arg: ToastArg): { message: string; title?: string } => {
    if (typeof arg === "string") {
      return { message: arg };
    }
    return { message: arg.description, title: arg.title };
  };

  // Helper methods for common toast types
  const success = useCallback(
    (arg: ToastArg) => {
      const { message, title } = normalizeArg(arg);
      showToast(message, "success", title);
    },
    [showToast],
  );

  const error = useCallback(
    (arg: ToastArg) => {
      const { message, title } = normalizeArg(arg);
      showToast(message, "error", title);
    },
    [showToast],
  );

  const info = useCallback(
    (arg: ToastArg) => {
      const { message, title } = normalizeArg(arg);
      showToast(message, "info", title);
    },
    [showToast],
  );

  return (
    <ToastContext.Provider value={{ showToast, success, error, info, dismiss }}>
      {children}
      <div className={`toast-container toast-container-${location}`}>
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`toast toast-${toast.type} transition-all`}
            role="alert"
          >
            <button
              className="toast-close-btn"
              onClick={() => dismiss(toast.id)}
              aria-label="Close"
            >
              <X size={14} />
            </button>
            {toast.title && (
              <div className="font-bold text-sm mb-1">{toast.title}</div>
            )}
            <div className="text-sm opacity-90">{toast.message}</div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
