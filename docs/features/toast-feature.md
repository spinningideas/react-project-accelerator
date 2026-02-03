# Toast Notification Feature - Unified Standard

## Overview

This document defines the **single, unified standard** for toast notifications across the application. Any other implementation (e.g., Radix UI, external libraries) is considered deprecated and must be removed if found.

The system is built on React Context to provide a lightweight, performant, and highly configurable notification experience with zero external dependencies.

---

## 1. File Architecture

All toast-related code MUST live in these specific locations:

- **Logic & Provider**: `frontend/src/components/shared/Toast.tsx`
- **Styling**: `frontend/src/components/shared/toast.css`
- **Global Tokens**: `frontend/src/index.css` (within `@layer base`)

### ❌ Prohibited Files (Delete if found)

- `frontend/src/hooks/use-toast.ts`
- `frontend/src/components/ui/toast.tsx`
- `frontend/src/components/ui/toaster.tsx`
- `frontend/src/components/ui/sonner.tsx`

### 📦 Deprecated Packages (Uninstall)

- `sonner` (npm uninstall sonner)

---

## 2. The Unified Interface

The system is accessed via the `useToast` hook. All components MUST use these specific method names:

```typescript
interface ToastContextType {
  // Base method
  showToast: (message: string, type?: ToastType, title?: string) => void;

  // High-level helpers
  toastSuccess: (arg: ToastArg) => void; // Success variant (Green)
  toastError: (arg: ToastArg) => void; // Error variant (Red)
  toastInfo: (arg: ToastArg) => void; // Info variant (Blue)
  toastWarning: (arg: ToastArg) => void; // Warning variant (Orange/Yellow)

  // Management
  toastDismiss: (id: number) => void;
}
```

---

## 3. Implementation Details

### Provider Configuration (`App.tsx`)

The `ToastProvider` should be configured at the root.

| Prop                      | Type            | Default        | Description                                   |
| :------------------------ | :-------------- | :------------- | :-------------------------------------------- |
| `location`                | `ToastPosition` | `bottom-right` | Supports 6 positions (e.g., `top-center`)     |
| `duration`                | `number`        | `5000`         | Auto-dismiss time in ms (set to 0 to disable) |
| `maxVisibleNotifications` | `number`        | `5`            | Limits the number of toasts active at once    |

### Styling Checklist

Ensure `toast.css` contains specific classes for each variant:

- [ ] `.toast-success`
- [ ] `.toast-error`
- [ ] `.toast-info`
- [ ] `.toast-warning` (Uses `--warning-color`)
- [ ] `.toast-default`

---

## 4. Usage Rules for Agents

### Rule 1: Import Path

**ALWAYS** import `useToast` from the shared component, never from a hook directory.
✅ `import { useToast } from "@/components/shared/Toast";`
❌ `import { useToast } from "@/hooks/use-toast";`

### Rule 2: Method Naming

**ALWAYS** use the `toast`-prefixed names. This avoids collisions with local variables like `error` or `success`.
✅ `const { toastSuccess, toastError } = useToast();`
❌ `const { success, error } = useToast();`

### Rule 3: Argument Flexibility

Methods support both a simple `string` or a `ToastArg` object.

```typescript
// Simple
toastSuccess("Great job!");

// Detailed
toastError({
  title: "API Error",
  description: "Failed to connect to the server.",
});
```

---

## 5. Verification Protocols

When an agent updates or tests this feature, they must verify:

1. **Queuing**: Trigger 10 toasts; only the `maxVisibleNotifications` amount should remain.
2. **Dismissal**: Clicking the close button immediately removes that specific toast.
3. **Animations**: Toasts should slide in and fade out smoothly.
4. **Z-Index**: Toasts must appear above all modads and drawers (`z-index: 1000+`).
5. **Dark Mode**: Toasts must use `hsl(var(--card))` to respect the current theme.
