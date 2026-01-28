import React, { useState } from "react";
import { X, ZoomIn, ZoomOut, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageViewerProps {
  src: string;
  alt: string;
  onClose: () => void;
}

/**
 * ImageViewer Component
 *
 * A modal component for viewing images in full screen with pan and zoom capabilities.
 *
 * @param src - The source URL of the image to display (can be base64)
 * @param alt - Alternative text for the image
 * @param onClose - Callback function to close the viewer modal
 */
const ImageViewer = ({ src, alt, onClose }: ImageViewerProps) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleWheel = (e: React.WheelEvent) => {
    e.stopPropagation();
    const delta = e.deltaY * -0.001;
    const newScale = Math.min(Math.max(0.5, scale + delta), 4);
    setScale(newScale);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-gray-950/95 backdrop-blur-md flex flex-col animate-in fade-in duration-200">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-6 py-4 bg-gray-900/50 border-b border-white/10 z-50">
        <h3 className="text-gray-200 font-mono text-sm truncate max-w-[50%]">
          {alt}
        </h3>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setScale((s) => Math.max(0.5, s - 0.25))}
            className="text-gray-400 border-white/10 hover:bg-white/10 hover:text-white"
          >
            <ZoomOut className="w-5 h-5" />
          </Button>
          <span className="font-mono text-xs text-gray-500 w-12 text-center">
            {Math.round(scale * 100)}%
          </span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setScale((s) => Math.min(4, s + 0.25))}
            className="text-gray-400 border-white/10 hover:bg-white/10 hover:text-white"
          >
            <ZoomIn className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              setScale(1);
              setPosition({ x: 0, y: 0 });
            }}
            className="ml-2 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white"
            title="Reset"
          >
            <Maximize className="w-5 h-5" />
          </Button>
          <div className="w-px h-6 bg-white/10 mx-2"></div>
          <Button
            variant="outline"
            size="icon"
            onClick={onClose}
            className="bg-white/10 border-white/10 hover:bg-red-500/20 hover:text-red-400 text-white"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Image Container */}
      <div
        className="flex-1 overflow-hidden flex items-center justify-center cursor-grab active:cursor-grabbing relative"
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <img
          src={src}
          alt={alt}
          className="transition-transform duration-75 ease-out max-w-none select-none"
          draggable={false}
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            maxHeight: "90vh",
            maxWidth: "90vw",
          }}
        />

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-gray-900/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs text-gray-400 font-mono pointer-events-none">
          Scroll to Zoom • Drag to Pan
        </div>
      </div>
    </div>
  );
};

export default ImageViewer;
