import { motion } from "framer-motion";
import { Bookmark, ExternalLink, Link, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useBookmarks } from "@/contexts/BookmarksContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Bookmarks = () => {
  const { bookmarks, removeBookmark, clearBookmarks } = useBookmarks();
  const navigate = useNavigate();

  const handleRemove = (internalId: string) => {
    removeBookmark(internalId);
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Bookmark className="h-8 w-8 text-primary" />
                <h1 className="text-4xl font-bold">
                  Bookmarks {bookmarks.length ? `(${bookmarks.length})` : ""}
                </h1>
              </div>
              <p className="text-muted-foreground">Your saved resources</p>
            </div>
            {bookmarks.length > 0 && (
              <Button
                variant="outline"
                size="sm"
                onClick={clearBookmarks}
                className="flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Trash2 className="h-4 w-4" />
                Clear All
              </Button>
            )}
          </div>
        </motion.div>

        {/* Bookmarks List */}
        {bookmarks.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Bookmark className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">No bookmarks yet</h2>
            <p className="text-muted-foreground">
              Start bookmarking resources to see them here
            </p>
          </motion.div>
        ) : (
          <div className="grid gap-4">
            {bookmarks.map((bookmark, index) => (
              <motion.div
                key={bookmark.internalId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="p-4 border hover:border-primary/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <Link className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <a
                            href={bookmark.bookmarkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-primary hover:underline flex items-center gap-2 break-all"
                          >
                            {bookmark.bookmarkName}
                            <ExternalLink className="h-4 w-4 flex-shrink-0" />
                          </a>
                          {bookmark.bookmarkDescription && (
                            <p className="text-sm text-muted-foreground mt-1 line-clamp-3">
                              {bookmark.bookmarkDescription}
                            </p>
                          )}
                        </div>
                        <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleRemove(bookmark.internalId)}
                            className="flex-shrink-0 text-muted-foreground hover:text-primary"
                            title="Remove bookmark"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookmarks;
