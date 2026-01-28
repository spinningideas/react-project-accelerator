import React, { useState, useEffect, useMemo } from "react";
import {
  Cpu,
  AlertCircle,
  Activity,
  WandSparkles,
  Sparkles,
  Flame,
  BrainCircuit,
  Brain,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingProgressProps {
  status: "initializing" | "streaming" | "complete" | "error" | "saved";
  messages?: string[];
  error?: string;
  className?: string;
  icon?: React.ElementType;
  footerMessage?: string;
}

const ICONS = [WandSparkles, Sparkles, Flame, BrainCircuit, Brain, Cpu];

const LoadingProgress = ({
  status,
  messages = [],
  error,
  className,
  icon,
  footerMessage,
}: LoadingProgressProps) => {
  const [displayedMessages, setDisplayedMessages] = useState<
    { text: string; timestamp: string }[]
  >([]);

  // Stable random icon selection
  const IconComponent = useMemo(() => {
    if (icon) return icon;
    return ICONS[Math.floor(Math.random() * ICONS.length)];
  }, [icon]);

  // Reset messages when status changes or messages prop updates
  const messageKey = messages.join("|");

  useEffect(() => {
    if (status === "error") return;

    let currentIndex = 0;
    setDisplayedMessages([]); // Clear on new sequence

    const interval = setInterval(() => {
      if (currentIndex >= messages.length) {
        clearInterval(interval);
        return;
      }

      const now = new Date();
      const timeString = `${now.getHours().toString().padStart(2, "0")}:${now
        .getMinutes()
        .toString()
        .padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`;

      setDisplayedMessages((prev) => {
        // Prevent duplicate consecutive messages
        if (
          prev.length > 0 &&
          prev[prev.length - 1].text === messages[currentIndex]
        ) {
          return prev;
        }
        return [
          ...prev,
          { text: messages[currentIndex], timestamp: timeString },
        ];
      });
      currentIndex++;
    }, 800); // Add a new message every 800ms

    return () => clearInterval(interval);
  }, [messageKey, status]);

  if (status === "complete" || status === "saved") return null;

  return (
    <div
      className={cn(
        "absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/90 text-green-500 font-mono overflow-hidden select-none",
        className,
      )}
    >
      {/* Background Grid Effect */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(transparent 24px, rgba(34, 197, 94, 0.2) 25px), linear-gradient(90deg, transparent 24px, rgba(34, 197, 94, 0.2) 25px)`,
          backgroundSize: "25px 25px",
        }}
      />

      <AnimatePresence mode="wait">
        {status === "error" ? (
          <motion.div
            key="error"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-6 max-w-md text-center p-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full" />
              <AlertCircle className="w-16 h-16 text-red-500 relative z-10" />
            </div>
            <h2 className="text-2xl font-bold text-red-500 tracking-widest uppercase">
              System Failure
            </h2>
            <div className="bg-red-500/10 border border-red-500/20 p-4 rounded text-sm text-red-400 font-mono">
              <span className="opacity-50 mr-2">{">"}</span>
              {error || "Unknown error occurred during generation."}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center w-full max-w-lg relative z-10"
          >
            {/* Central HUD Icon */}
            <div className="relative mb-8">
              {/* Spinner Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-20px] rounded-full border border-green-500/20 border-dashed w-32 h-32"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-10px] rounded-full border border-green-500/10 w-28 h-28"
              />

              {/* Core Icon */}
              <div className="w-24 h-24 bg-black/50 backdrop-blur-sm rounded-full border border-green-500/50 flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                <IconComponent className="w-10 h-10 text-green-400 animate-pulse" />
              </div>

              {/* Orbiting Dot */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-2 h-2 bg-green-400 rounded-full blur-[2px] shadow-[0_0_10px_rgba(34,197,94,1)] absolute left-1/2 -translate-x-1/2 -top-[15px]" />
              </motion.div>
            </div>

            {/* Main Title */}
            <h2 className="text-xl font-bold text-green-400 tracking-[0.2em] uppercase mb-8 text-center typewriter-effect">
              {status === "initializing"
                ? "Initializing..."
                : "Assembling Visualization..."}
            </h2>

            {/* Terminal Log Output */}
            <div className="w-full space-y-2 mb-8 min-h-[120px] flex flex-col justify-end px-8">
              <AnimatePresence>
                {displayedMessages.slice(-4).map((msg, idx) => (
                  <motion.div
                    key={`${msg.text}-${idx}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-3 text-xs md:text-sm text-green-500/80 font-mono w-full"
                  >
                    <span className="opacity-40 whitespace-nowrap">
                      [{msg.timestamp}]
                    </span>
                    <span className="opacity-60">{">"}</span>
                    <span className="truncate">{msg.text}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Footer Status */}
            {footerMessage && (
              <div className="flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-green-500/40">
                <Activity className="w-3 h-3 animate-pulse" />
                {footerMessage}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoadingProgress;
