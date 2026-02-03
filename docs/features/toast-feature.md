# Toast Notification Feature - Migration Plan

## Overview

This document provides a comprehensive plan to migrate the toast notification system from this application to another React/TypeScript application. The implementation includes a custom toast provider with support for four toast variants (success, error, info, default), custom CSS styling, and convenient helper functions.

## Architecture

The toast system consists of three main components:

1. **Toast Provider & Context** (`Toast.tsx`) - Simple custom implementation using React Context
2. **Toast Hook** (`use-toast.ts`) - Radix UI-based implementation with helper functions
3. **CSS Styles** (`index.css`) - Custom toast styling with animations

**Note**: This application has TWO toast implementations:

- A **simple custom toast** in `components/shared/Toast.tsx` (Context-based)
- A **Radix UI toast** in `components/ui/toast.tsx` with hooks in `hooks/use-toast.ts`

This plan focuses on the **Radix UI implementation** as it's more feature-rich and is actively used throughout the application.

---

## Migration Steps

### Step 1: Install Dependencies

Install the required Radix UI toast primitive:

```bash
npm install @radix-ui/react-toast
```

If not already installed, you'll also need:

```bash
npm install class-variance-authority lucide-react
```

### Step 2: Copy Utility Functions

Ensure you have the `cn` utility function (typically in `lib/utils.ts`):

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### Step 3: Add CSS Variables

Add the following CSS variables to your `index.css` or global stylesheet (in the `:root` and `.dark` sections):

```css
@layer base {
  :root {
    /* ... other variables ... */

    --success-color: 142 71% 45%;
    --success-foreground: 0 0% 100%;
    --error-color: 0 84% 60%;
    --error-foreground: 0 0% 100%;
    --info-color: 217 91% 60%;
    --info-foreground: 0 0% 100%;
    --warning-color: 38 92% 50%;
    --warning-foreground: 0 0% 100%;
  }

  .dark {
    /* ... other dark mode variables ... */

    --success-color: 142 71% 45%;
    --success-foreground: 0 0% 100%;
    --error-color: 0 84% 60%;
    --error-foreground: 0 0% 100%;
    --info-color: 217 91% 60%;
    --info-foreground: 0 0% 100%;
    --warning-color: 38 92% 50%;
    --warning-foreground: 0 0% 100%;
  }
}
```

### Step 4: Add Toast Animation Styles

Add the toast-specific CSS to your global stylesheet (lines 386-495 from `index.css`):

```css
/* === Toast Notifications === */
.toast-container {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 1000;
  pointer-events: none;
  width: auto;
  min-width: 300px;
  max-width: 90vw;
}

.toast-container-top {
  top: 24px;
  flex-direction: column;
}

.toast-container-bottom {
  bottom: 24px;
  flex-direction: column-reverse;
}

.toast {
  position: relative;
  background: hsl(var(--card));
  border: 1px solid hsl(var(--border));
  color: hsl(var(--card-foreground));
  padding: 16px 40px 16px 16px;
  border-radius: var(--radius);
  font-size: 0.875rem;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  animation: toastFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  pointer-events: auto;
  min-width: 320px;
  max-width: 400px;
}

.toast-success {
  border-left: 4px solid hsl(var(--success-color));
  background-color: hsl(var(--card));
  background-image: linear-gradient(
    hsl(var(--success-color) / 0.1),
    hsl(var(--success-color) / 0.1)
  );
  color: hsl(var(--success-color));
}

.toast-error {
  border-left: 4px solid hsl(var(--error-color));
  background-color: hsl(var(--card));
  background-image: linear-gradient(
    hsl(var(--error-color) / 0.1),
    hsl(var(--error-color) / 0.1)
  );
  color: hsl(var(--error-color));
}

.toast-info {
  border-left: 4px solid hsl(var(--info-color));
  background-color: hsl(var(--card));
  background-image: linear-gradient(
    hsl(var(--info-color) / 0.1),
    hsl(var(--info-color) / 0.1)
  );
  color: hsl(var(--info-color));
}

.toast-default {
  border-left: 4px solid hsl(var(--border));
  background-color: hsl(var(--card));
  background-image: linear-gradient(
    hsl(var(--muted-foreground) / 0.05),
    hsl(var(--muted-foreground) / 0.05)
  );
}

.toast-close-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 4px;
  border-radius: 4px;
  opacity: 0.5;
  transition: opacity 0.2s;
  cursor: pointer;
  background: transparent;
  border: none;
  color: currentColor;
}

.toast-close-btn:hover {
  opacity: 1;
  background: hsl(var(--muted));
}

@keyframes toastFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
```

### Step 5: Create Toast UI Component

Create `components/ui/toast.tsx`:

```typescript
import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport> & {
    location?: "top" | "bottom";
  }
>(({ className, location = "top", ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed right-0 z-[100] flex max-h-screen w-full flex-col p-4 md:max-w-[420px]",
      location === "top" ? "top-0" : "bottom-0 flex-col-reverse",
      className,
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default:
          "border bg-card text-card-foreground dark:bg-neutral-900 bg-white",
        success: "success border-success bg-success text-success-foreground",
        warning: "warning border-warning bg-warning text-warning-foreground",
        info: "info border-info bg-info text-info-foreground",
        destructive:
          "destructive border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm text-foreground font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className,
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100",
      className,
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("text-sm font-semibold", className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("text-sm", className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
```

### Step 6: Create Toast Hook

Create `hooks/use-toast.ts`:

```typescript
import * as React from "react";
import type { ToastActionElement, ToastProps } from "@/components/ui/toast";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

type ToasterToast = Omit<ToastProps, "title" | "description"> & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

type ActionType = typeof actionTypes;

type Action =
  | {
      type: ActionType["ADD_TOAST"];
      toast: ToasterToast;
    }
  | {
      type: ActionType["UPDATE_TOAST"];
      toast: Partial<ToasterToast>;
    }
  | {
      type: ActionType["DISMISS_TOAST"];
      toastId?: ToasterToast["id"];
    }
  | {
      type: ActionType["REMOVE_TOAST"];
      toastId?: ToasterToast["id"];
    };

interface State {
  toasts: ToasterToast[];
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t,
        ),
      };

    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t,
        ),
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
  }
};

const listeners: Array<(state: State) => void> = [];

let memoryState: State = { toasts: [] };

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

/**
 * Toast base type
 */
type Toast = Omit<ToasterToast, "id">;

function toast({ ...props }: Toast) {
  const id = genId();

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return {
    id: id,
    dismiss,
    update,
  };
}

// Convenience helpers to reduce repetitive variant/description wiring
type ToastHelperProps = Omit<Toast, "description" | "variant" | "title"> & {
  title?: React.ReactNode;
};

type ToastHelperObjectArg = ToastHelperProps & {
  description: React.ReactNode;
};

function isObjectArg(arg: unknown): arg is ToastHelperObjectArg {
  return (
    !!arg &&
    typeof arg === "object" &&
    ("description" in (arg as any) || "title" in (arg as any))
  );
}

// Success
function toastSuccess(
  descriptionOrObj: React.ReactNode | ToastHelperObjectArg,
  props?: ToastHelperProps,
) {
  if (isObjectArg(descriptionOrObj)) {
    const { title, description, ...rest } = descriptionOrObj;
    return toast({ title, description, variant: "success", ...rest });
  }
  return toast({
    description: descriptionOrObj,
    variant: "success",
    ...(props ?? {}),
  });
}

// Error
function toastError(
  descriptionOrObj: React.ReactNode | ToastHelperObjectArg,
  props?: ToastHelperProps,
) {
  if (isObjectArg(descriptionOrObj)) {
    const { title, description, ...rest } = descriptionOrObj;
    return toast({ title, description, variant: "destructive", ...rest });
  }
  return toast({
    description: descriptionOrObj,
    variant: "destructive",
    ...(props ?? {}),
  });
}

// Info
function toastInfo(
  descriptionOrObj: React.ReactNode | ToastHelperObjectArg,
  props?: ToastHelperProps,
) {
  if (isObjectArg(descriptionOrObj)) {
    const { title, description, ...rest } = descriptionOrObj;
    return toast({ title, description, variant: "info", ...rest });
  }
  return toast({
    description: descriptionOrObj,
    variant: "info",
    ...(props ?? {}),
  });
}

// Default
function toastDefault(
  descriptionOrObj: React.ReactNode | ToastHelperObjectArg,
  props?: ToastHelperProps,
) {
  if (isObjectArg(descriptionOrObj)) {
    const { title, description, ...rest } = descriptionOrObj;
    return toast({ title, description, variant: "info", ...rest });
  }
  return toast({
    description: descriptionOrObj,
    variant: "info",
    ...(props ?? {}),
  });
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  };
}

export { useToast, toast, toastSuccess, toastError, toastInfo, toastDefault };
```

### Step 7: Create Toaster Component

Create `components/ui/toaster.tsx`:

```typescript
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
```

### Step 8: Add Toaster to App Root

In your main `App.tsx` or root layout component:

```typescript
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      {/* Your app content */}
      <Toaster />
    </>
  );
}
```

---

## Usage Examples

### Example 1: Simple Success Toast

```typescript
import { toastSuccess } from "@/hooks/use-toast";

// Simple message
toastSuccess("Operation completed successfully!");

// With title
toastSuccess({
  title: "Success",
  description: "Your changes have been saved.",
});
```

**Real-world usage from `use-clipboard.ts`:**

```typescript
import { toastError, toastSuccess } from "@/hooks/use-toast";

export const useClipboard = () => {
  const copyToClipboard = async (
    text: string,
    successMessage?: string,
  ): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(text);
      toastSuccess(successMessage || "Copied to clipboard");
      return true;
    } catch (err) {
      console.error("Failed to copy:", err);
      toastError("Failed to copy to clipboard");
      return false;
    }
  };

  return { copyToClipboard };
};
```

### Example 2: Error Toast

```typescript
import { toastError } from "@/hooks/use-toast";

// Simple error message
toastError("Failed to save changes");

// With title and description
toastError({
  title: "Error",
  description: "Unable to connect to the server. Please try again.",
});
```

**Real-world usage from `SignUpForm.tsx`:**

```typescript
import { toastError, toastSuccess } from "@/hooks/use-toast";

const handleSubmit = async (data: SignUpFormData) => {
  try {
    await signUp(data);
    toastSuccess({
      title: "Account Created",
      description: "Welcome! Your account has been created successfully.",
    });
    navigate("/dashboard");
  } catch (error) {
    toastError({
      title: "Sign Up Failed",
      description: error.message || "An error occurred during sign up.",
    });
  }
};
```

### Example 3: Info Toast

```typescript
import { toastInfo } from "@/hooks/use-toast";

// Simple info message
toastInfo("Processing your request...");

// With title
toastInfo({
  title: "Information",
  description: "This action may take a few moments to complete.",
});
```

**Real-world usage example:**

```typescript
import { toastInfo } from "@/hooks/use-toast";

const handleFileUpload = async (file: File) => {
  toastInfo({
    title: "Upload Started",
    description: `Uploading ${file.name}...`,
  });

  try {
    await uploadFile(file);
    toastSuccess("File uploaded successfully!");
  } catch (error) {
    toastError("Upload failed. Please try again.");
  }
};
```

### Example 4: Default Toast

```typescript
import { toastDefault } from "@/hooks/use-toast";

// Simple default message
toastDefault("Notification message");

// With title
toastDefault({
  title: "Notification",
  description: "You have a new message.",
});
```

**Real-world usage example:**

```typescript
import { toastDefault } from "@/hooks/use-toast";

const handleNotification = (message: string) => {
  toastDefault({
    title: "System Notification",
    description: message,
  });
};

// Usage
handleNotification("Your session will expire in 5 minutes.");
```

### Example 5: Password Reset Flow

From `pages/auth/ResetPassword.tsx`:

```typescript
import { toastError, toastSuccess } from "@/hooks/use-toast";

const handleResetPassword = async (newPassword: string) => {
  try {
    await resetPassword(token, newPassword);
    toastSuccess({
      title: "Password Reset Successful",
      description: "Your password has been updated. You can now log in.",
    });
    navigate("/login");
  } catch (error) {
    toastError({
      title: "Reset Failed",
      description: "Unable to reset password. Please try again.",
    });
  }
};
```

### Example 6: Forgot Password Request

From `pages/auth/ForgotPassword.tsx`:

```typescript
import { toastError, toastSuccess } from "@/hooks/use-toast";

const handleForgotPassword = async (email: string) => {
  try {
    await requestPasswordReset(email);
    toastSuccess({
      title: "Email Sent",
      description: "Check your inbox for password reset instructions.",
    });
  } catch (error) {
    toastError({
      title: "Request Failed",
      description: "Unable to send reset email. Please try again.",
    });
  }
};
```

### Example 7: Form Validation

```typescript
import { toastError, toastInfo } from "@/hooks/use-toast";

const validateForm = (data: FormData) => {
  if (!data.email) {
    toastError("Email is required");
    return false;
  }

  if (!data.password || data.password.length < 8) {
    toastError({
      title: "Invalid Password",
      description: "Password must be at least 8 characters long.",
    });
    return false;
  }

  toastInfo("Validating your information...");
  return true;
};
```

### Example 8: API Request with Loading State

```typescript
import { toastSuccess, toastError, toastInfo } from "@/hooks/use-toast";

const saveData = async (data: any) => {
  const loadingToast = toastInfo("Saving changes...");

  try {
    await api.save(data);
    loadingToast.dismiss();
    toastSuccess("Changes saved successfully!");
  } catch (error) {
    loadingToast.dismiss();
    toastError({
      title: "Save Failed",
      description: error.message || "An unexpected error occurred.",
    });
  }
};
```

---

## Configuration Options

### Toast Limit

By default, only 1 toast is shown at a time. To change this, modify `TOAST_LIMIT` in `hooks/use-toast.ts`:

```typescript
const TOAST_LIMIT = 3; // Show up to 3 toasts simultaneously
```

### Toast Duration

By default, toasts auto-dismiss after a very long time (1000000ms). To change this, modify `TOAST_REMOVE_DELAY`:

```typescript
const TOAST_REMOVE_DELAY = 5000; // Auto-dismiss after 5 seconds
```

### Toast Position

Toasts appear at the top-right by default. To change position, modify the `ToastViewport` in `toaster.tsx`:

```typescript
<ToastViewport location="bottom" /> // Show at bottom instead of top
```

---

## Customization

### Custom Toast Variants

To add new toast variants, update the `toastVariants` in `components/ui/toast.tsx`:

```typescript
const toastVariants = cva(
  // ... base classes
  {
    variants: {
      variant: {
        default: "...",
        success: "...",
        warning: "...",
        info: "...",
        destructive: "...",
        // Add your custom variant
        custom: "border-purple-500 bg-purple-50 text-purple-900",
      },
    },
  },
);
```

### Custom Colors

Modify the CSS variables in Step 3 to match your brand colors:

```css
:root {
  --success-color: 142 71% 45%; /* Green */
  --error-color: 0 84% 60%; /* Red */
  --info-color: 217 91% 60%; /* Blue */
  --warning-color: 38 92% 50%; /* Orange */
}
```

---

## Testing Checklist

After migration, verify:

- [ ] Toasts appear in the correct position
- [ ] All four toast types (success, error, info, default) display correctly
- [ ] Toast animations work smoothly
- [ ] Toasts auto-dismiss after the configured delay
- [ ] Close button works on each toast
- [ ] Multiple toasts stack correctly (if TOAST_LIMIT > 1)
- [ ] Dark mode styling works correctly
- [ ] Mobile responsive behavior is correct
- [ ] Toast messages are accessible (screen readers)

---

## Troubleshooting

### Toasts Not Appearing

1. Ensure `<Toaster />` is added to your app root
2. Check that CSS variables are defined
3. Verify Radix UI toast is installed

### Styling Issues

1. Ensure all CSS from Step 4 is added
2. Check that CSS variables match your theme
3. Verify `cn` utility function is working

### TypeScript Errors

1. Ensure all type imports are correct
2. Check that `@/` path alias is configured in `tsconfig.json`
3. Verify all dependencies are installed

---

## Dependencies Summary

```json
{
  "dependencies": {
    "@radix-ui/react-toast": "^1.x.x",
    "class-variance-authority": "^0.x.x",
    "lucide-react": "^0.x.x",
    "clsx": "^2.x.x",
    "tailwind-merge": "^2.x.x"
  }
}
```

---

## File Structure

```
src/
├── components/
│   └── ui/
│       ├── toast.tsx          # Toast UI components
│       └── toaster.tsx        # Toaster container
├── hooks/
│   └── use-toast.ts           # Toast hook and helpers
├── lib/
```

---

## Alternative: Simple Custom Toast Implementation

If you prefer a lighter-weight solution without Radix UI dependencies, this application also includes a **simple custom toast** implementation in `components/shared/Toast.tsx`. This implementation uses React Context and custom CSS, with **support for 6 position options**.

### Features

- ✅ **No external dependencies** (except lucide-react for icons)
- ✅ **6 position options**: top-left, top-center, top-right, bottom-left, bottom-center, bottom-right
- ✅ **4 toast types**: success, error, info, default
- ✅ **Auto-dismiss** after 5 seconds
- ✅ **Manual dismiss** with close button
- ✅ **Title and description** support
- ✅ **Lightweight** and easy to customize

### Implementation Steps

#### Step 1: Create Toast Component

Create `components/shared/Toast.tsx`:

```typescript
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
export type ToastType = "success" | "error" | "info" | "default";

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
  location?: ToastPosition;
}

/**
 * Unified Toast Provider
 * Manages the state and display of toast notifications using custom CSS styles.
 */
export const ToastProvider = ({
  children,
  location = "bottom-right",
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

  // Parse position into vertical and horizontal components
  const [verticalPos, horizontalPos] = location.split("-") as [
    "top" | "bottom",
    "left" | "center" | "right",
  ];

  return (
    <ToastContext.Provider value={{ showToast, success, error, info, dismiss }}>
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
```

#### Step 2: Create Toast CSS

Create `components/shared/toast.css`:

```css
/* === Toast Notifications === */
.toast-container {
  position: fixed;
  display: flex;
  gap: 12px;
  z-index: 1000;
  pointer-events: none;
  width: auto;
  min-width: 300px;
  max-width: 90vw;
}

/* Vertical positioning */
.toast-container-top {
  top: 24px;
  flex-direction: column;
}

.toast-container-bottom {
  bottom: 24px;
  flex-direction: column-reverse;
}

/* Horizontal positioning */
.toast-container-left {
  left: 24px;
  align-items: flex-start;
}

.toast-container-center {
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}

.toast-container-right {
  right: 24px;
  align-items: flex-end;
}

.toast {
  position: relative;
  background: hsl(var(--card));
  border: 1px solid hsl(var(--border));
  color: hsl(var(--card-foreground));
  padding: 16px 40px 16px 16px;
  border-radius: var(--radius);
  font-size: 0.875rem;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  animation: toastFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  pointer-events: auto;
  min-width: 320px;
  max-width: 400px;
}

.toast-success {
  border-left: 4px solid hsl(var(--success-color));
  background-color: hsl(var(--card));
  background-image: linear-gradient(
    hsl(var(--success-color) / 0.1),
    hsl(var(--success-color) / 0.1)
  );
  color: hsl(var(--success-color));
}

.toast-error {
  border-left: 4px solid hsl(var(--error-color));
  background-color: hsl(var(--card));
  background-image: linear-gradient(
    hsl(var(--error-color) / 0.1),
    hsl(var(--error-color) / 0.1)
  );
  color: hsl(var(--error-color));
}

.toast-info {
  border-left: 4px solid hsl(var(--info-color));
  background-color: hsl(var(--card));
  background-image: linear-gradient(
    hsl(var(--info-color) / 0.1),
    hsl(var(--info-color) / 0.1)
  );
  color: hsl(var(--info-color));
}

.toast-default {
  border-left: 4px solid hsl(var(--border));
  background-color: hsl(var(--card));
  background-image: linear-gradient(
    hsl(var(--muted-foreground) / 0.05),
    hsl(var(--muted-foreground) / 0.05)
  );
}

.toast-close-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 4px;
  border-radius: 4px;
  opacity: 0.5;
  transition: opacity 0.2s;
  cursor: pointer;
  background: transparent;
  border: none;
  color: currentColor;
}

.toast-close-btn:hover {
  opacity: 1;
  background: hsl(var(--muted));
}

@keyframes toastFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
```

#### Step 3: Add CSS Variables

Ensure these CSS variables are in your global stylesheet:

```css
:root {
  --success-color: 142 71% 45%;
  --error-color: 0 84% 60%;
  --info-color: 217 91% 60%;
  --card: 0 0% 100%;
  --border: 220 13% 91%;
  --muted: 210 20% 98%;
  --muted-foreground: 220 9% 46%;
  --radius: 0.375rem;
}
```

#### Step 4: Add Provider to App

Wrap your app with the `ToastProvider`:

```typescript
import { ToastProvider } from "@/components/shared/Toast";

function App() {
  return (
    <ToastProvider location="bottom-right">
      {/* Your app content */}
    </ToastProvider>
  );
}
```

### Usage Examples

#### Example 1: All 6 Positions

```typescript
import { ToastProvider } from "@/components/shared/Toast";

// Top positions
<ToastProvider location="top-left">...</ToastProvider>
<ToastProvider location="top-center">...</ToastProvider>
<ToastProvider location="top-right">...</ToastProvider>

// Bottom positions
<ToastProvider location="bottom-left">...</ToastProvider>
<ToastProvider location="bottom-center">...</ToastProvider>
<ToastProvider location="bottom-right">...</ToastProvider>
```

#### Example 2: Using Toast Helpers

```typescript
import { useToast } from "@/components/shared/Toast";

function MyComponent() {
  const { success, error, info, showToast } = useToast();

  return (
    <>
      <button onClick={() => success("Operation successful!")}>
        Success Toast
      </button>

      <button onClick={() => error("Something went wrong!")}>
        Error Toast
      </button>

      <button onClick={() => info("Here's some information")}>
        Info Toast
      </button>

      <button onClick={() => showToast("Default message", "default")}>
        Default Toast
      </button>
    </>
  );
}
```

#### Example 3: With Title and Description

```typescript
import { useToast } from "@/components/shared/Toast";

function MyComponent() {
  const { success, error } = useToast();

  const handleSave = () => {
    success({
      title: "Success",
      description: "Your changes have been saved successfully.",
    });
  };

  const handleError = () => {
    error({
      title: "Error",
      description: "Unable to save changes. Please try again.",
    });
  };

  return (
    <>
      <button onClick={handleSave}>Save</button>
      <button onClick={handleError}>Trigger Error</button>
    </>
  );
}
```

### Comparison: Simple vs Radix UI

| Feature              | Simple Custom Toast  | Radix UI Toast                                  |
| -------------------- | -------------------- | ----------------------------------------------- |
| **Dependencies**     | lucide-react only    | @radix-ui/react-toast, class-variance-authority |
| **Bundle Size**      | ~2KB                 | ~15KB                                           |
| **Positions**        | 6 options            | 6 options                                       |
| **Toast Types**      | 4 types              | 5 types (includes loading)                      |
| **Accessibility**    | Basic                | Full ARIA support                               |
| **Swipe to Dismiss** | ❌                   | ✅                                              |
| **Promise Support**  | ❌                   | ✅                                              |
| **Custom JSX**       | ❌                   | ✅                                              |
| **Action Buttons**   | ❌                   | ✅                                              |
| **Complexity**       | Low                  | Medium                                          |
| **Best For**         | Simple notifications | Complex toast scenarios                         |

### When to Use Simple Custom Toast

Choose the simple custom toast implementation when:

- ✅ You want minimal dependencies
- ✅ You need basic toast notifications
- ✅ Bundle size is a concern
- ✅ You want full control over the implementation
- ✅ You don't need advanced features like swipe-to-dismiss or promise handling

### When to Use Radix UI Toast

Choose the Radix UI toast implementation when:

- ✅ You need advanced accessibility features
- ✅ You want swipe-to-dismiss functionality
- ✅ You need promise-based toasts
- ✅ You want action buttons in toasts
- ✅ You need custom JSX rendering
- ✅ You're already using other Radix UI components

---

## File Structure

```
src/
├── components/
│   ├── shared/
│   │   ├── Toast.tsx          # Simple custom toast (Context-based)
│   │   └── toast.css          # Toast styles
│   └── ui/
│       ├── toast.tsx          # Radix UI toast components
│       └── toaster.tsx        # Toaster container
├── hooks/
│   └── use-toast.ts           # Toast hook and helpers (Radix UI)
├── lib/
│   └── utils.ts               # cn utility function
└── index.css                  # Global styles with toast CSS
```

---

## Notes

- This implementation uses Radix UI primitives for accessibility
- Toasts are managed via a global state using React hooks
- The system supports both simple string messages and complex objects with titles
- All toast functions can be called from anywhere in the app without needing context
- The implementation is fully typed with TypeScript
- Animations are smooth and performant using CSS keyframes
- The toast system is framework-agnostic and can be easily adapted to other React applications
