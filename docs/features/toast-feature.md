# Toast Notification Feature - Core Implementation Plan

## Overview

This document outlines the implementation of a unified toast notification system. The system uses a custom React Context-based provider to manage and display notifications without external toast libraries, ensuring full control over styling, performance, and behavior.

## Core Requirements

1. **Centralized Management**: All toast logic resides in a single component `frontend\src\components\shared\Toast.tsx`.
2. **Unified Interface**: Standardized hook `useToast` providing a consistent API across the application.
3. **Rich Styling**: Support for Success, Error, Info, Warning, and Default variants with animations.
4. **Flexible Placement**: Support for 6 screen positions.
5. **Configurable Behavior**: Global settings for duration and maximum visible notifications.

## Architecture

The system consists of three main parts:

1. **Toast Context & Provider** (`Toast.tsx`): Manages the queue of active notifications.
2. **Toast Hook** (`useToast`): Accessible interface for components to trigger notifications.
3. **CSS Design System**: Dedicated styles and animations for the toast UI.

### The Toast Interface

The `ToastContextType` manages the following methods:

```typescript
interface ToastContextType {
  showToast: (message: string, type?: ToastType, title?: string) => void;
  toastSuccess: (arg: ToastArg) => void;
  toastError: (arg: ToastArg) => void;
  toastInfo: (arg: ToastArg) => void;
  toastWarning: (arg: ToastArg) => void;
  toastDismiss: (id: number) => void;
}
```

---

## Implementation Steps

### Step 1: Design Tokens (CSS Variables)

Add the following tokens to your global CSS (typically `index.css`):

```css
:root {
  --success-color: 142 71% 45%;
  --success-foreground: 0 0% 100%;
  --error-color: 0 84% 60%;
  --error-foreground: 0 0% 100%;
  --info-color: 217 91% 60%;
  --info-foreground: 0 0% 100%;
  --warning-color: 38 92% 50%;
  --warning-foreground: 0 0% 100%;
}
```

### Step 2: The Core Component (`Toast.tsx`)

Implement the provider and hook in `frontend\src\components\shared\Toast.tsx`.

```typescript
import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
  useEffect,
} from "react";
import { X } from "lucide-react";
import "@/components/shared/toast.css";

export type ToastType = "success" | "error" | "info" | "warning" | "default";

export type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

interface Toast {
  id: number;
  message: string;
  title?: string;
  type: ToastType;
}

type ToastArg = string | { title?: string; description: string };

interface ToastContextType {
  showToast: (message: string, type?: ToastType, title?: string) => void;
  toastSuccess: (arg: ToastArg) => void;
  toastError: (arg: ToastArg) => void;
  toastInfo: (arg: ToastArg) => void;
  toastWarning: (arg: ToastArg) => void;
  toastDismiss: (id: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

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
        if (newToasts.length > maxVisibleNotifications) {
          return newToasts.slice(newToasts.length - maxVisibleNotifications);
        }
        return newToasts;
      });

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
```

### Step 3: App Integration (`App.tsx`)

Wrap the application root with the `ToastProvider` and configure global behavior.

```typescript
import { ToastProvider } from "@/components/shared/Toast";

function App() {
  return (
    <ToastProvider
      location="bottom-right"
      duration={2000}
      maxVisibleNotifications={6}
    >
      <ThemeProvider defaultTheme={defaultTheme}>
        <LocalizationProvider>
          {/* ... other providers ... */}
          <AuthProvider>{PageRouter}</AuthProvider>
        </LocalizationProvider>
      </ThemeProvider>
    </ToastProvider>
  );
}
```

---

## Usage Examples

### Example 1: Basic Success Toast

Use the `toastSuccess` method for positive feedback.

```typescript
import { useToast } from "@/components/shared/Toast";

function SaveButton() {
  const { toastSuccess } = useToast();

  const handleSave = () => {
    // Perform save logic
    toastSuccess("Changes saved successfully!");
  };

  return <button onClick={handleSave}>Save</button>;
}
```

### Example 2: Error Toast with Title

Use an object argument to provide both a title and description.

```typescript
import { useToast } from "@/components/shared/Toast";

function LoginForm() {
  const { toastError } = useToast();

  const handleSubmit = async () => {
    try {
      await login();
    } catch (err) {
      toastError({
        title: "Login Failed",
        description: "Invalid email or password. Please try again.",
      });
    }
  };
}
```

### Example 3: Info and Warning Toasts

```typescript
import { useToast } from "@/components/shared/Toast";

const { toastInfo, toastWarning } = useToast();

// Trigger an info toast
toastInfo("A new update is available.");

// Trigger a warning toast
toastWarning({
  title: "Cloud Sync",
  description: "You are working offline. Changes will sync later.",
});
```

---

## Verification Checklist

- [ ] `useToast` correctly throws error if used outside `ToastProvider`.
- [ ] Notifications respect the `maxVisibleNotifications` limit (oldest removed).
- [ ] Notifications auto-dismiss after the configured `duration`.
- [ ] Position updates correctly when Changing the `location` prop in `App.tsx`.
- [ ] All 5 variants (Success, Error, Info, Warning, Default) have correct color coding.
- [ ] "X" button correctly dismisses individual toasts.
