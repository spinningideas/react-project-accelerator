import { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "@/components/app/Navigation";

import { AuthDialog } from "@/components/auth/AuthDialog";

type AuthDialogContextValue = {
  openAuthDialog: () => void;
  closeAuthDialog: () => void;
};

const AuthDialogContext = createContext<AuthDialogContextValue | undefined>(
  undefined
);

export const useAuthDialog = () => {
  const ctx = useContext(AuthDialogContext);
  if (!ctx) {
    throw new Error("useAuthDialog must be used within Layout");
  }
  return ctx;
};

const DefaultLayout = () => {
  const [authDialogOpen, setAuthDialogOpen] = useState(false);

  const contextValue: AuthDialogContextValue = {
    openAuthDialog: () => setAuthDialogOpen(true),
    closeAuthDialog: () => setAuthDialogOpen(false),
  };

  return (
    <AuthDialogContext.Provider value={contextValue}>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Outlet />
        <AuthDialog
          open={authDialogOpen}
          onOpenChange={setAuthDialogOpen}
          tab="signup"
        />
      </div>
    </AuthDialogContext.Provider>
  );
};

export default DefaultLayout;
