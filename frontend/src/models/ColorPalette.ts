export type ColorFormat = "hex" | "oklch" | "rgb" | "hsl";

export type ColorStep =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 950;

export interface ColorPalette {
  id: string;
  name: string;
  baseColor: string;
  shades: Partial<Record<ColorStep, string>>;
  anchors?: Record<number, string>;
  includedShades: ColorStep[];
}

export default ColorPalette;
