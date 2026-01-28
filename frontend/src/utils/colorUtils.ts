/**
 * Color Utility Functions
 * Provides color manipulation and palette generation using OKLCH color space
 */

import {
  parse,
  formatHex,
  formatCss,
  converter,
  interpolate,
  type Oklch,
  type Color,
} from "culori";
import type { ColorFormat, ColorStep } from "@/models/ColorPalette";

const toOklch = converter("oklch");
const toRgb = converter("rgb");
const toHsl = converter("hsl");

/**
 * Parse a color string to OKLCH color object
 */
export function parseColorToOklch(color: string): Oklch | undefined {
  const parsed = parse(color);
  if (!parsed) return undefined;
  return toOklch(parsed);
}

/**
 * Convert OKLCH color to hex string
 */
export function oklchToHex(oklch: Oklch): string {
  return formatHex(oklch);
}

/**
 * Round a number to a specific number of decimal places
 */
function round(value: number, precision: number): number {
  const multiplier = Math.pow(10, precision);
  return Math.round(value * multiplier) / multiplier;
}

/**
 * Format a color value in the specified format
 */
export function formatColorValue(color: string, format: ColorFormat): string {
  const parsed = parse(color);
  if (!parsed) return color;

  switch (format) {
    case "hex":
      return formatHex(parsed);

    case "oklch": {
      const oklch = toOklch(parsed);
      if (!oklch) return color;

      // Modern CSS oklch(L C H)
      const l = round(oklch.l || 0, 3);
      const c = round(oklch.c || 0, 3);
      const h = oklch.h === undefined ? "none" : round(oklch.h, 2);

      return `oklch(${l} ${c} ${h})`;
    }

    case "rgb": {
      const rgb = toRgb(parsed);
      if (!rgb) return color;

      const r = Math.round((rgb.r || 0) * 255);
      const g = Math.round((rgb.g || 0) * 255);
      const b = Math.round((rgb.b || 0) * 255);

      return `rgb(${r}, ${g}, ${b})`;
    }

    case "hsl": {
      const hsl = toHsl(parsed);
      if (!hsl) return color;

      // Custom HSL formatting with rounding
      const h = hsl.h === undefined ? "none" : round(hsl.h, 2);
      const s = round((hsl.s || 0) * 100, 2);
      const l = round((hsl.l || 0) * 100, 2);

      return `hsl(${h} ${s}% ${l}%)`;
    }

    default:
      return formatHex(parsed);
  }
}

/**
 * Mix two colors at a given ratio (0-1)
 */
export function mixColors(color1: string, color2: string, t: number): string {
  const c1 = parse(color1);
  const c2 = parse(color2);
  if (!c1 || !c2) return color1;

  const interpolator = interpolate([c1, c2], "oklch");
  const mixed = interpolator(t);
  return formatHex(mixed);
}

/**
 * Generate a complete Tailwind color scale from a base color
 * Uses OKLCH color space for perceptual uniformity
 */
export function generateColorScale(
  baseColor: string,
  anchors?: Record<number, string>,
): Record<number, string> {
  const shades: Record<number, string> = {};
  const steps: ColorStep[] = [
    50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
  ];

  // Parse base color to OKLCH
  const baseOklch = parseColorToOklch(baseColor);
  if (!baseOklch) {
    // Fallback: return base color for all shades
    steps.forEach((step) => {
      shades[step] = baseColor;
    });
    return shades;
  }

  // Define lightness values for each shade (tailored to match Tailwind trends)
  const lightnessMap: Record<ColorStep, number> = {
    50: 0.985,
    100: 0.97,
    200: 0.92,
    300: 0.84,
    400: 0.74,
    500: 0.63,
    600: 0.52,
    700: 0.42,
    800: 0.33,
    900: 0.25,
    950: 0.18,
  };

  // Define chroma scaling factors (tapering at extremes for natural look)
  const chromaScaleMap: Record<ColorStep, number> = {
    50: 0.15,
    100: 0.3,
    200: 0.5,
    300: 0.7,
    400: 0.9,
    500: 1.0,
    600: 1.0,
    700: 0.9,
    800: 0.8,
    900: 0.7,
    950: 0.6,
  };

  // Generate shades
  steps.forEach((step) => {
    // Check if there's a custom anchor for this shade
    if (anchors && anchors[step]) {
      shades[step] = anchors[step];
      return;
    }

    // Calculate lightness for this shade
    const targetLightness = lightnessMap[step];

    // Scale chroma based on step
    const baseChroma = baseOklch.c ?? 0;
    const targetChroma = baseChroma * (chromaScaleMap[step] ?? 1);

    // Create new color with adjusted lightness and chroma
    const newColor: Oklch = {
      mode: "oklch",
      l: targetLightness,
      c: targetChroma,
      h: baseOklch.h ?? 0,
      alpha: baseOklch.alpha,
    };

    shades[step] = formatHex(newColor);
  });

  return shades;
}

/**
 * Generate a color name suggestion based on the color value
 */
export function generateColorName(
  color: string,
  existingNames: string[],
): string {
  const oklch = parseColorToOklch(color);
  if (!oklch) return "custom";

  const hue = oklch.h ?? 0;
  const chroma = oklch.c ?? 0;

  // Determine base color name from hue
  let baseName = "gray";
  if (chroma > 0.05) {
    if (hue >= 0 && hue < 30) baseName = "red";
    else if (hue >= 30 && hue < 60) baseName = "orange";
    else if (hue >= 60 && hue < 90) baseName = "yellow";
    else if (hue >= 90 && hue < 150) baseName = "green";
    else if (hue >= 150 && hue < 210) baseName = "cyan";
    else if (hue >= 210 && hue < 270) baseName = "blue";
    else if (hue >= 270 && hue < 330) baseName = "purple";
    else baseName = "pink";
  }

  // Check for conflicts and add number suffix if needed
  let finalName = baseName;
  let counter = 1;
  while (existingNames.includes(finalName)) {
    counter++;
    finalName = `${baseName}${counter}`;
  }

  return finalName;
}

/**
 * Validate if a string is a valid color
 */
export function isValidColor(color: string): boolean {
  return parse(color) !== undefined;
}

/**
 * Get contrast ratio between two colors (WCAG)
 */
export function getContrastRatio(color1: string, color2: string): number {
  const c1 = parse(color1);
  const c2 = parse(color2);
  if (!c1 || !c2) return 1;

  const oklch1 = toOklch(c1);
  const oklch2 = toOklch(c2);

  const l1 = oklch1.l ?? 0;
  const l2 = oklch2.l ?? 0;

  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);

  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Determine if a color is light or dark (for text contrast)
 */
export function isLightColor(color: string): boolean {
  const oklch = parseColorToOklch(color);
  if (!oklch) return true;
  return (oklch.l ?? 0) > 0.5;
}
