import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { X } from "lucide-react";
import "@/components/shared/toast.css";

/** Toast variant types */
export type ToastType = "success" | "error" | "info" | "warning" | "default";

/** Toast position types */
export type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

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
  toastSuccess: (arg: ToastArg) => void;
  toastError: (arg: ToastArg) => void;
  toastInfo: (arg: ToastArg) => void;
  toastWarning: (arg: ToastArg) => void;
  toastDismiss: (id: number) => void;
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
  location?: ToastPosition;
  duration?: number;
  maxVisibleNotifications?: number;
}

/**
 * Unified Toast Provider
 * Manages the state and display of toast notifications using custom CSS styles.
 */
export const ToastProvider = ({
  children,
  location = "bottom-right",
  duration = 5000,
  maxVisibleNotifications = 5,
}: ToastProviderProps) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toastDismiss = useCallback((id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback(
    (message: string, type: ToastType = "default", title?: string) => {
      const id = Date.now();
      setToasts((prev) => {
        const newToasts = [...prev, { id, message, type, title }];
        // Limit number of visible notifications
        if (newToasts.length > maxVisibleNotifications) {
          return newToasts.slice(newToasts.length - maxVisibleNotifications);
        }
        return newToasts;
      });

      // Automatically remove toast after specified duration
      if (duration > 0) {
        setTimeout(() => {
          toastDismiss(id);
        }, duration);
      }
    },
    [toastDismiss, duration, maxVisibleNotifications],
  );

  const normalizeArg = (arg: ToastArg): { message: string; title?: string } => {
    if (typeof arg === "string") {
      return { message: arg };
    }
    return { message: arg.description, title: arg.title };
  };

  // Helper methods for common toast types
  const toastSuccess = useCallback(
    (arg: ToastArg) => {
      const { message, title } = normalizeArg(arg);
      showToast(message, "success", title);
    },
    [showToast],
  );

  const toastError = useCallback(
    (arg: ToastArg) => {
      const { message, title } = normalizeArg(arg);
      showToast(message, "error", title);
    },
    [showToast],
  );

  const toastInfo = useCallback(
    (arg: ToastArg) => {
      const { message, title } = normalizeArg(arg);
      showToast(message, "info", title);
    },
    [showToast],
  );

  const toastWarning = useCallback(
    (arg: ToastArg) => {
      const { message, title } = normalizeArg(arg);
      showToast(message, "warning", title);
    },
    [showToast],
  );

  // Parse position into vertical and horizontal components
  const [verticalPos, horizontalPos] = location.split("-") as [
    "top" | "bottom",
    "left" | "center" | "right",
  ];

  return (
    <ToastContext.Provider
      value={{
        showToast,
        toastSuccess,
        toastError,
        toastInfo,
        toastWarning,
        toastDismiss,
      }}
    >
      {children}
      <div
        className={`toast-container toast-container-${verticalPos} toast-container-${horizontalPos}`}
        data-position={location}
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`toast toast-${toast.type} transition-all`}
            role="alert"
          >
            <button
              className="toast-close-btn"
              onClick={() => toastDismiss(toast.id)}
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
