import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import Bookmark from "@/models/Bookmark";

interface BookmarksContextType {
  bookmarks: Bookmark[];
  addBookmark: (bookmark: Omit<Bookmark, "internalId">) => void;
  removeBookmark: (internalId: string) => void;
  clearBookmarks: () => void;
  isUrlBookmarked: (bookmarkUrl: string) => boolean;
  // Aliases for compatibility
  sites: Bookmark[];
  removeSite: (internalId: string) => void;
}

const BookmarksContext = createContext<BookmarksContextType | undefined>(
  undefined
);

const STORAGE_KEY = "react-project-accelerator-bookmarks";

export function BookmarksProvider({ children }: { children: ReactNode }) {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addBookmark = (bookmark: Omit<Bookmark, "internalId">) => {
    const newBookmark: Bookmark = {
      ...bookmark,
      internalId: crypto.randomUUID(),
    };
    setBookmarks((prev) => [...prev, newBookmark]);
  };

  const removeBookmark = (internalId: string) => {
    setBookmarks((prev) =>
      prev.filter((bookmark) => bookmark.internalId !== internalId)
    );
  };

  const clearBookmarks = () => {
    setBookmarks([]);
  };

  const isUrlBookmarked = (bookmarkUrl: string) => {
    return bookmarks.some((bookmark) => bookmark.bookmarkUrl === bookmarkUrl);
  };

  return (
    <BookmarksContext.Provider
      value={{
        bookmarks,
        addBookmark,
        removeBookmark,
        clearBookmarks,
        isUrlBookmarked,
        // Aliases
        sites: bookmarks,
        removeSite: removeBookmark,
      }}
    >
      {children}
    </BookmarksContext.Provider>
  );
}

export function useBookmarks() {
  const context = useContext(BookmarksContext);
  if (!context) {
    throw new Error("useBookmarks must be used within a BookmarksProvider");
  }
  return context;
}
