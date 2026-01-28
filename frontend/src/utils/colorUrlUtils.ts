/**
 * URL State Utility
 * Handles encoding/decoding color palette state to/from URL query parameters
 */

import type { ColorPalette } from "@/models/ColorPalette";

/**
 * Encode palettes to a compressed query string for URL sharing
 */
export function generatePalettesQueryString(palettes: ColorPalette[]): string {
  if (palettes.length === 0) return "";

  try {
    // Create a simplified representation for URL
    const simplified = palettes.map((palette) => ({
      n: palette.name,
      b: palette.baseColor,
      i: palette.includedShades,
      a: palette.anchors,
    }));

    const json = JSON.stringify(simplified);
    const encoded = btoa(json); // Base64 encode
    return `palettes=${encodeURIComponent(encoded)}`;
  } catch (error) {
    console.error("Failed to generate palettes query string:", error);
    return "";
  }
}

/**
 * Decode palettes from URL query string
 */
export function parsePalettesFromQueryString(
  queryString: string,
): ColorPalette[] {
  try {
    const params = new URLSearchParams(queryString);
    const palettesParam = params.get("palettes");

    if (!palettesParam) return [];

    const decoded = atob(decodeURIComponent(palettesParam));
    const simplified = JSON.parse(decoded);

    if (!Array.isArray(simplified)) return [];

    // Reconstruct full palette objects
    return simplified.map((item: any, index: number) => {
      const palette: ColorPalette = {
        id: `palette-${Date.now()}-${index}`,
        name: item.n || `Color ${index + 1}`,
        baseColor: item.b || "#000000",
        shades: {}, // Will be regenerated
        anchors: item.a,
        includedShades: item.i || [
          50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
        ],
      };

      return palette;
    });
  } catch (error) {
    console.error("Failed to parse palettes from query string:", error);
    return [];
  }
}

/**
 * Get the current URL with updated palette state
 */
export function getShareableUrl(palettes: ColorPalette[]): string {
  const baseUrl = window.location.origin + window.location.pathname;
  const queryString = generatePalettesQueryString(palettes);

  if (!queryString) return baseUrl;

  return `${baseUrl}?${queryString}`;
}

/**
 * Copy shareable URL to clipboard
 */
export async function copyShareableUrl(
  palettes: ColorPalette[],
): Promise<boolean> {
  try {
    const url = getShareableUrl(palettes);
    await navigator.clipboard.writeText(url);
    return true;
  } catch (error) {
    console.error("Failed to copy URL to clipboard:", error);
    return false;
  }
}
