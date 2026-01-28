import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

type SliderFieldProps = {
  name: string;
  label: string;
  value: number;
  onValueChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  decimalPlaces?: number;
  className?: string;
};

const SliderField = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderFieldProps
>(
  (
    {
      name,
      label,
      value,
      onValueChange,
      min = 0,
      max = 100,
      step = 1,
      unit = "",
      decimalPlaces = 0,
      className,
      ...props
    },
    ref
  ) => {
    const displayValue =
      decimalPlaces > 0 ? value.toFixed(decimalPlaces) : Math.round(value);

    return (
      <div className={cn("flex flex-col gap-2", className)}>
        <div className="flex items-center justify-between">
          <Label htmlFor={name} className="text-sm font-medium">
            {label}
          </Label>
          <span className="text-sm text-muted-foreground">
            {displayValue}
            {unit}
          </span>
        </div>
        <SliderPrimitive.Root
          ref={ref}
          id={name}
          min={min}
          max={max}
          step={step}
          value={[value]}
          onValueChange={(values) => onValueChange(values[0])}
          className={cn(
            "relative flex w-full touch-none select-none items-center"
          )}
          {...props}
        >
          <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
            <SliderPrimitive.Range className="absolute h-full bg-primary" />
          </SliderPrimitive.Track>
          <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
        </SliderPrimitive.Root>
      </div>
    );
  }
);

SliderField.displayName = "SliderField";

export default SliderField;
