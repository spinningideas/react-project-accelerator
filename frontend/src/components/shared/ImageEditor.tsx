import React, { useState, useRef, useCallback, useEffect } from "react";
import { editImageWithGemini } from "@/services/geminiServiceApi";
import {
  Upload,
  Wand2,
  Loader2,
  Download,
  ImageIcon,
  Palette,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FLOW_STYLES } from "@/data/flowStyles";

interface ImageEditorProps {
  initialState?: { data: string; mimeType: string } | null;
  onNavigate?: () => void;
}

/**
 * ImageEditor Component
 *
 * Provides an interface for editing images using AI-powered transformations.
 * Used in RepositoryVisualization to allow users to modify generated infographics
 * via natural language prompts.
 *
 * @param initialState - Optional initial state with image data and mime type
 * @param onNavigate - Optional callback function to handle navigation back to the analyzer
 */
const ImageEditor = ({ initialState, onNavigate }: ImageEditorProps) => {
  const [imageData, setImageData] = useState<string | null>(null);
  const [mimeType, setMimeType] = useState<string>("");
  const [prompt, setPrompt] = useState("");
  const [processing, setProcessing] = useState(false);
  const [editedImageData, setEditedImageData] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (initialState) {
      setImageData(initialState.data);
      setMimeType(initialState.mimeType);
      setEditedImageData(null);
    }
  }, [initialState]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please select a valid image file.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        const base64Data = base64.split(",")[1];
        setImageData(base64Data);
        setMimeType(file.type);
        setEditedImageData(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!imageData || !prompt) return;

      setProcessing(true);
      try {
        const resultBase64 = await editImageWithGemini(
          imageData,
          mimeType,
          prompt
        );
        if (resultBase64) {
          setEditedImageData(resultBase64);
        } else {
          alert("Could not generate edited image.");
        }
      } catch (error) {
        alert("An error occurred while processing.");
      } finally {
        setProcessing(false);
      }
    },
    [imageData, mimeType, prompt]
  );

  const applyStylePreset = (style: string) => {
    setPrompt(
      `Redraw this exact infographic in a ${style} style. Maintain all text labels, connection lines, and overall structure accurately, but change the visual theme completely to match ${style}.`
    );
  };

  const triggerUpload = () => inputRef.current?.click();

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto space-y-6 mb-12">
        <h2 className="text-5xl font-extrabold tracking-tight bg-clip-text font-sans">
          Image <span className="text-green-500">Editor</span>
        </h2>
        <p className="text-foreground text-lg font-light tracking-wide">
          Update the visualization with custom styles and manipulate
          architectural visualizations using the prompt to guide the
          transformation.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Input Column */}
        <div className="space-y-6">
          {/* Upload Area */}
          <div
            onClick={triggerUpload}
            className={`group glass-panel rounded-3xl aspect-[4/3] flex flex-col items-center justify-center cursor-pointer transition-all relative overflow-hidden ${
              imageData
                ? "border-green-600/30"
                : "hover:border-green-500/30 hover:bg-white/5"
            }`}
          >
            {imageData ? (
              <>
                <img
                  src={`data:${mimeType};base64,${imageData}`}
                  alt="Source"
                  className="h-full w-full object-contain p-4 relative z-10"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20 backdrop-blur-md">
                  <p className="text-white font-medium flex items-center gap-2 font-mono text-sm">
                    <Upload className="w-4 h-4" /> CHANGE_SOURCE
                  </p>
                </div>
              </>
            ) : (
              <div className="text-center p-6 space-y-6 flex flex-col items-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gray-900/50 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-all shadow-lg">
                  <Upload className="w-6 h-6 text-foreground group-hover:text-green-500 transition-colors" />
                </div>
                <div>
                  <p className="text-gray-300 font-medium text-lg font-sans">
                    Drop source image
                  </p>
                  <p className="text-gray-500 text-xs mt-2 font-mono uppercase tracking-wider mb-4">
                    PNG / JPG supported
                  </p>
                  {onNavigate && (
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        onNavigate();
                      }}
                      className="font-mono text-xs"
                    >
                      <Terminal className="w-4 h-4 mr-2" /> Back to Analyzer
                    </Button>
                  )}
                </div>
              </div>
            )}
            <input
              ref={inputRef}
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>

          {/* Control Panel */}
          <div
            className={`glass-panel p-1.5 rounded-3xl transition-all duration-500 ${
              imageData
                ? "opacity-100 translate-y-0"
                : "opacity-50 translate-y-4 pointer-events-none filter blur-sm"
            }`}
          >
            <div className="bg-gray-900/50 rounded-2xl p-5 space-y-6">
              {/* Style Presets */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-green-500 font-mono text-xs">
                  <Palette className="w-3 h-3" />
                  <span>STYLES</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {FLOW_STYLES.filter((s) => s !== "Custom").map((style) => (
                    <Button
                      key={style}
                      variant="outline"
                      size="sm"
                      type="button"
                      onClick={() => applyStylePreset(style)}
                      className="h-auto py-2 px-3 justify-start font-mono text-[11px] bg-gray-800/50 hover:bg-green-600/20 hover:text-green-400 text-foreground border-white/5 hover:border-green-600/30"
                    >
                      {style}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Prompt Input */}
              <form
                onSubmit={handleEdit}
                className="space-y-4 border-t border-white/5 pt-4"
              >
                <div className="flex items-center gap-2 text-green-500 font-mono text-xs">
                  <Terminal className="w-3 h-3" />
                  <span>PROMPT</span>
                </div>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe desired transformation or select a style above..."
                  className="w-full h-24 bg-gray-950/50 rounded-xl border border-white/10 p-3 text-gray-200 placeholder:text-gray-700 focus:ring-1 focus:ring-green-600/50 focus:border-green-600/50 resize-none font-mono text-sm leading-relaxed"
                />

                <Button
                  type="submit"
                  disabled={processing || !imageData || !prompt}
                  className="w-full font-mono text-sm"
                  variant="primary"
                  size="lg"
                >
                  {processing ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <Wand2 className="w-4 h-4 text-green-100 mr-2" />{" "}
                      RUN_TRANSFORMATION
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Output Column */}
        <div className="space-y-6 lg:sticky lg:top-24">
          <div className="glass-panel rounded-3xl aspect-[4/3] flex items-center justify-center overflow-hidden relative p-1.5">
            <div className="w-full h-full bg-gray-950/50 rounded-2xl flex items-center justify-center overflow-hidden relative">
              {processing ? (
                <div className="text-center space-y-6 relative z-10">
                  <div className="relative mx-auto w-12 h-12">
                    <Loader2 className="w-12 h-12 animate-spin text-green-600 relative opacity-50" />
                  </div>
                  <p className="text-green-400 font-mono text-xs animate-pulse tracking-widest">
                    PROCESSING...
                  </p>
                </div>
              ) : editedImageData ? (
                <img
                  src={`data:image/png;base64,${editedImageData}`}
                  alt="Edited"
                  className="h-full w-full object-contain animate-in fade-in zoom-in-95 duration-700"
                />
              ) : (
                <div className="text-center text-gray-700 flex flex-col items-center">
                  <ImageIcon className="w-12 h-12 opacity-20 mb-4" />
                  <p className="font-mono text-xs uppercase tracking-widest opacity-50">
                    Awaiting Output
                  </p>
                </div>
              )}
            </div>
          </div>

          {editedImageData && !processing && (
            <Button
              asChild
              className="w-full font-mono font-bold"
              variant="default"
              size="lg"
            >
              <a
                href={`data:image/png;base64,${editedImageData}`}
                download="edited-image.png"
              >
                <Download className="w-4 h-4 mr-2" /> DOWNLOAD_RESULT
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;
