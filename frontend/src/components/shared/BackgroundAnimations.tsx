import { useMemo } from "react";

/**
 * Background animations for the app.
 * 
 * @param showGradient - Whether to show the gradient background.
 */
const BackgroundAnimations = ({ showGradient = true }: { showGradient?: boolean }) => {
  const particles = useMemo(
    () =>
      Array.from({ length: 60 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        opacity: 0.1 + Math.random() * 0.3,
        duration: 8 + Math.random() * 12,
        delay: Math.random() * 10,
      })),
    []
  );

  return (
    <>
      {/* Background Elements */}
      {showGradient && (
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-gray-50 to-white dark:from-blue-900 dark:via-gray-950 dark:to-black z-0 transition-colors"></div>
      )}
      {/* Animated floating particles */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <style>{`
          @keyframes float-particle {
            0%, 100% { transform: translate(0, 0); opacity: 0.3; }
            25% { transform: translate(10px, -15px); opacity: 0.6; }
            50% { transform: translate(-5px, -25px); opacity: 0.4; }
            75% { transform: translate(15px, -10px); opacity: 0.5; }
          }
        `}</style>
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-current text-green-400 dark:text-gray-500"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              opacity: p.opacity,
              animation: `float-particle ${p.duration}s ease-in-out infinite`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default BackgroundAnimations;
