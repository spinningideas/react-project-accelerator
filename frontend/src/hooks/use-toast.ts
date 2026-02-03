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

export { toastSuccess, toastError, toastInfo, toastDefault };
