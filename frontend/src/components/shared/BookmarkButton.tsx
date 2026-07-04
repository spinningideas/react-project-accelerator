import React from "react";
import { BookmarkIcon, BookmarkFilledIcon } from "@/components/shared/Icons";
import { useBookmarks } from "@/contexts/BookmarksContext";
import { Button } from "@/components/ui/button";

interface BookmarkButtonProps {
  bookmarkName: string;
  bookmarkUrl: string;
  bookmarkDescription?: string;
  className?: string;
}

const BookmarkButton = ({
  bookmarkName,
  bookmarkUrl,
  bookmarkDescription,
  className,
}: BookmarkButtonProps) => {
  const { isUrlBookmarked, addBookmark, removeBookmark, bookmarks } =
    useBookmarks();
  const isBookmarked = isUrlBookmarked(bookmarkUrl);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isBookmarked) {
      const bookmark = bookmarks.find((b) => b.bookmarkUrl === bookmarkUrl);
      if (bookmark) {
        removeBookmark(bookmark.internalId);
      }
    } else {
      addBookmark({ bookmarkName, bookmarkUrl, bookmarkDescription });
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className={`bookmark-toggle-btn ${className || ""}`}
      onClick={handleClick}
      title={isBookmarked ? "Remove bookmark" : "Add bookmark"}
    >
      {isBookmarked ? <BookmarkFilledIcon /> : <BookmarkIcon />}
    </Button>
  );
};

export default BookmarkButton;
