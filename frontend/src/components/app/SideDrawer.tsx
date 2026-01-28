import React from "react";
import { Button } from "@/components/ui/button";
import { X as XIcon } from "lucide-react";

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children?: React.ReactNode;
  headerAction?: React.ReactNode;
}

const SideDrawer = ({
  isOpen,
  onClose,
  title,
  children,
  headerAction,
}: SideDrawerProps) => {
  if (!isOpen) return null;

  return (
    <div className="drawer-overlay" onClick={onClose}>
      <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <h2>{title}</h2>
          <div
            className="header-actions"
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            {headerAction}
            <Button
              variant="outline"
              size="icon"
              onClick={onClose}
              className="close-button"
            >
              <XIcon />
            </Button>
          </div>
        </div>
        <div className="drawer-body">{children}</div>
      </div>
    </div>
  );
};

export default SideDrawer;
