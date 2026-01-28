import React from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface AnimatedButtonProps extends Omit<ButtonProps, "type"> {
  /**
   * Array of hex color codes for the rotating border gradient.
   * Defaults to a green/lime theme.
   */
  borderColors?: string[];

  /**
   * Defines the visual style of the button.
   * - "outline": Background matches page, border is the animation.
   * - "primary": Solid colored background, border animation visible around edges.
   */
  type?: "primary" | "outline";

  /**
   * The HTML button type behavior.
   * Defaults to "button".
   */
  htmlType?: "button" | "submit" | "reset";
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  (
    {
      className,
      borderColors = ["#10b981", "#22c55e", "#a3e635", "#2dd4bf", "#10b981"],
      type = "outline",
      htmlType = "button",
      style,
      variant, // We intercept variant to prevent conflict, or we can use it as base
      ...props
    },
    ref,
  ) => {
    // Construct the colors string for the CSS variable
    const colorsString = borderColors.join(", ");

    const customStyle = {
      ...style,
      "--animated-button-colors": colorsString,
    } as React.CSSProperties;

    // We map our 'type' prop to specific styling classes
    // We default the base variant to "ghost" or "outline" to avoid conflicting Shadcn styles
    // However, since we apply our own classes effectively overriding background/border,
    // "ghost" is likely the safest base to avoid default borders.
    const baseVariant = "ghost";

    return (
      <Button
        ref={ref}
        type={htmlType}
        variant={baseVariant} // Use ghost to strip default styles so our custom classes take over
        {...props}
        className={cn(
          "animated-button-wrapper rounded-full", // Default to rounded-full for this style of button
          type === "primary"
            ? "animated-button-type-primary"
            : "animated-button-type-outline",
          className,
        )}
        style={customStyle}
      >
        {props.children}
      </Button>
    );
  },
);

AnimatedButton.displayName = "AnimatedButton";

export { AnimatedButton };
