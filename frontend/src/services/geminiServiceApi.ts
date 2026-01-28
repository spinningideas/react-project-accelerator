import HttpClient from "@/services/HttpClient";
import { baseApiUrl } from "@/services/config";


export async function generateInfographic(
  topic: string,
  complexityLevel: string,
  visualStyle: string,
  language: string,
): Promise<string | null> {
  const httpClient = HttpClient(baseApiUrl);
  const response = await httpClient.postAuthenticated<{ imageData: string }>(
    "/gemini/generate/infographic",
    {
      topic,
      complexityLevel,
      visualStyle,
      language,
    },
  );

  if (!response.success) {
    throw new Error(response.message);
  }

  return response.data?.imageData ?? null;
}

/** IMAGE GENERATION FUNCTIONS */

/**
 * Generate SVG content
 */
export async function generateSVGContent(
  prompt: string,
  referenceImage?: string | null,
  type: "svg" | "mermaid" | "threejs" = "svg",
): Promise<{ content: string; type: string }> {
  const httpClient = HttpClient(baseApiUrl);
  const response = await httpClient.postAuthenticated<{
    content: string;
    type: string;
  }>("/gemini/generate/content/svg", {
    prompt,
    referenceImage,
    type,
  });

  if (!response.success) {
    throw new Error(response.message);
  }

  return response.data!;
}

/**
 * Edit image with Gemini
 * - used by ImageEditor and in theme studio
 */
export async function editImageWithGemini(
  base64Data: string,
  mimeType: string,
  prompt: string,
): Promise<string | null> {
  const httpClient = HttpClient(baseApiUrl);
  const response = await httpClient.postAuthenticated<{ imageData: string }>(
    "/gemini/edit/image",
    {
      base64Data,
      mimeType,
      prompt,
    },
  );

  if (!response.success) {
    throw new Error(response.message);
  }

  return response.data?.imageData ?? null;
}

