import React from "react";
import { Artifact } from "@/models/types";
import { BookmarkIcon, BookmarkFilledIcon } from "@/components/shared/Icons";
import { useArtifacts } from "@/contexts/ArtifactsContext";
import { Button } from "@/components/ui/button";

interface BookmarkButtonProps {
  artifact: Artifact;
  className?: string;
}

const BookmarkButton = ({ artifact, className }: BookmarkButtonProps) => {
  const { isArtifactBookmarked, toggleBookmark } = useArtifacts();
  const isBookmarked = isArtifactBookmarked(artifact.id);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleBookmark(artifact);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className={`bookmark-toggle-btn ${className || ""}`}
      onClick={handleClick}
      title={isBookmarked ? "Remove from saved" : "Save to generations"}
    >
      {isBookmarked ? <BookmarkFilledIcon /> : <BookmarkIcon />}
    </Button>
  );
};

export default BookmarkButton;
