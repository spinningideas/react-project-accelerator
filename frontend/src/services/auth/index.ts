/**
 * Auth Service Wrapper
 * Conditionally exports either the real authService or mock authService
 * based on VITE_MOCK_AUTH environment variable
 */

// Import both services
import * as realAuthService from "../authService";
import * as mockAuthService from "../authServiceMockV2";

// Check if we should use mock auth
const useMockAuth = import.meta.env.VITE_MOCK_AUTH === "true";

// Select the appropriate service
const authService = useMockAuth ? mockAuthService : realAuthService;

// Re-export all functions from the selected service
export const {
  AUTH_TOKEN_STORAGE_KEY,
  HOME_PAGE_ROUTE,
  HOME_PAGE_ROUTE_USER,
  getSession,
  getUser,
  signOut,
  signInWithPassword,
  signUpWithPassword,
  getAuthSession,
  revokeAuthSession,
  verifyUserByToken,
  requestAccess,
  requestPasswordReset,
  validateResetToken,
  resetPassword,
} = authService;
