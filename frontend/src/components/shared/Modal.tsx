import React from "react";
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  width?: string;
  height?: string;
  fullScreen?: boolean;
}

const Modal = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  width,
  height,
  fullScreen,
}: ModalProps) => {
  if (!isOpen) return null;

  const contentStyle: React.CSSProperties = {
    width: fullScreen ? "100%" : width || "100%",
    height: fullScreen ? "100%" : height || "100%",
    maxWidth: fullScreen ? "none" : width ? "none" : "100%",
    maxHeight: fullScreen ? "none" : height ? "none" : "100%",
  };

  return (
    <div
      className={`modal-overlay ${fullScreen ? "full-screen-overlay" : ""}`}
      onClick={onClose}
    >
      <div
        className={`modal-content ${fullScreen ? "modal-fullscreen" : ""}`}
        onClick={(e) => e.stopPropagation()}
        style={contentStyle}
      >
        <div className="flex justify-between items-start px-6 py-2 border-b bg-background">
          <div className="flex-1">
            <h3 className="mt-1 m-0 text-lg font-semibold text-[var(--text-primary)]">
              {title}
            </h3>
            {subtitle && (
              <p className="mt-1 text-sm text-[var(--text-secondary)] opacity-60 font-normal leading-snug">
                {subtitle}
              </p>
            )}
          </div>
          <Button variant="outline" onClick={onClose} aria-label="Close modal">
            <XIcon />
          </Button>
        </div>
        <div
          className="modal-body"
          style={{ height: height ? "calc(100% - 65px)" : "100%" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
