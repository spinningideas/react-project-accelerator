import { BrowserRouter } from "react-router-dom";
// tanstack query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// contexts
import { BookmarksProvider } from "@/contexts/BookmarksContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LocalizationProvider } from "@/contexts/LocalizationContext";
// types
import Theme from "@/models/Theme";
// auth
import { AuthProvider } from "@/contexts/AuthContext";
// routing
import PageRouter from "@/routing/PageRouter";
// components
import { ToastProvider } from "@/components/shared/Toast";

const queryClient = new QueryClient();

const storedTheme = localStorage.getItem("theme");
const defaultTheme: Theme = (storedTheme as Theme) ?? "system";

// Get base path from environment variable for GitHub Pages deployment
const basename = import.meta.env.VITE_BASE_PATH || "/";

const App = () => (
  <BrowserRouter basename={basename}>
    <ToastProvider
      location="bottom-right"
      duration={2000}
      maxVisibleNotifications={6}
    >
      <ThemeProvider defaultTheme={defaultTheme}>
        <LocalizationProvider>
          <QueryClientProvider client={queryClient}>
            <BookmarksProvider>
              <AuthProvider>{PageRouter}</AuthProvider>
            </BookmarksProvider>
          </QueryClientProvider>
        </LocalizationProvider>
      </ThemeProvider>
    </ToastProvider>
  </BrowserRouter>
);

export default App;
