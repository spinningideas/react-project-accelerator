/**
 * Mock Auth Service - Returns fake responses without calling backend API
 * This allows the app to work without a real backend
 */
import ApiResponse from "@/models/api/ApiResponse";
import UserSession from "@/models/user/UserSession";
import AuthResponse from "@/models/auth/AuthResponse";
import User from "@/models/user/User";
import UserSignUp from "@/models/user/UserSignUp";

export const AUTH_TOKEN_STORAGE_KEY = "bearer_token";
export const HOME_PAGE_ROUTE = "/";
export const HOME_PAGE_ROUTE_USER = "/home";
export const USER_PRODUCT_STORAGE_KEY = "user_product_id";
export const USERORG_ORG_SLUG_STORAGE_KEY = "user_organization_slug";

// Mock user data
const MOCK_USER: User = {
  userId: "mock-user-123",
  email: "demo@example.com",
  name: "Demo User",
  active: true,
  createdAt: new Date(),
  updatedAt: new Date(),
};

const MOCK_TOKEN = "mock-jwt-token-" + Date.now();

/**
 * Get the current session - returns mock session if token exists
 */
export async function getSession(): Promise<ApiResponse<UserSession>> {
  try {
    const token = localStorage.getItem(AUTH_TOKEN_STORAGE_KEY);
    if (!token) {
      return { success: false, message: "No session found" };
    }

    const mockSession: UserSession = {
      session: {
        id: "mock-session-" + Date.now(),
        userId: MOCK_USER.userId,
        token: token,
        expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000),
        refreshTokenExpiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
        createdDate: new Date(),
      },
      user: MOCK_USER,
    };

    return { success: true, data: mockSession };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
}

/**
 * Get the current user - returns mock user if authenticated
 */
export async function getUser(): Promise<ApiResponse<User | undefined>> {
  try {
    const token = localStorage.getItem(AUTH_TOKEN_STORAGE_KEY);
    if (!token) {
      return { success: false, message: "No user session found" };
    }

    return { success: true, data: MOCK_USER };
  } catch (error: any) {
    console.error("Error getting user:", error);
    return { success: false, message: error.message };
  }
}

/**
 * Sign out - removes token from localStorage
 */
export async function signOut(): Promise<ApiResponse<void>> {
  try {
    localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);
    localStorage.removeItem(USER_PRODUCT_STORAGE_KEY);
    localStorage.removeItem(USERORG_ORG_SLUG_STORAGE_KEY);
    return { success: true, message: "Signed out successfully" };
  } catch (error: any) {
    console.error("Error signing out:", error);
    return { success: false, message: error.message };
  }
}

/**
 * Sign in with email/password - returns mock auth response
 */
export const signInWithPassword = async (
  email: string,
  password: string,
  productId?: string,
  organizationSlug?: string
): Promise<ApiResponse<AuthResponse>> => {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Accept any email/password for demo purposes
    const token = MOCK_TOKEN;
    const mockAuthResponse: AuthResponse = {
      token: token,
      user: {
        ...MOCK_USER,
        email: email, // Use the provided email
        productId: productId,
        organizationSlug: organizationSlug,
      },
    };

    // Store token in localStorage
    localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, token);
    if (productId) {
      localStorage.setItem(USER_PRODUCT_STORAGE_KEY, productId);
    }
    if (organizationSlug) {
      localStorage.setItem(USERORG_ORG_SLUG_STORAGE_KEY, organizationSlug);
    }

    return { success: true, data: mockAuthResponse };
  } catch (error: any) {
    console.error("Error signing in with password:", error);
    return { success: false, message: error.message };
  }
};

/**
 * Sign up with email/password - returns mock auth response
 */
export const signUpWithPassword = async (
  userSignUp: UserSignUp
): Promise<ApiResponse<AuthResponse>> => {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const token = MOCK_TOKEN;
    const mockAuthResponse: AuthResponse = {
      token: token,
      user: {
        ...MOCK_USER,
        email: userSignUp.email,
        name: userSignUp.name || "New User",
      },
    };

    // Store token in localStorage
    localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, token);

    return {
      success: true,
      data: mockAuthResponse,
      message: "Account created successfully! You can now sign in.",
    };
  } catch (error: any) {
    console.error("Error signing up with password:", error);
    return { success: false, message: error.message };
  }
};

/**
 * Get auth session - returns mock session
 */
export async function getAuthSession(): Promise<ApiResponse<UserSession>> {
  return getSession();
}

/**
 * Revoke auth session - removes token
 */
export async function revokeAuthSession(
  token: string
): Promise<ApiResponse<boolean>> {
  try {
    localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);
    return { success: true, data: true };
  } catch (error: any) {
    console.error("Error revoking session:", error);
    return { success: false, message: error.message };
  }
}

/**
 * Verify user by token - returns mock session
 */
export const verifyUserByToken = async (
  token: string
): Promise<ApiResponse<UserSession>> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const mockSession: UserSession = {
      session: {
        id: "mock-session-" + Date.now(),
        userId: MOCK_USER.userId,
        token: MOCK_TOKEN,
        expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000),
        refreshTokenExpiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        createdDate: new Date(),
      },
      user: MOCK_USER,
    };

    localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, MOCK_TOKEN);

    return { success: true, data: mockSession };
  } catch (error: any) {
    console.error("Error validating user:", error);
    return { success: false, message: error.message };
  }
};

/**
 * Request access - returns mock success
 */
export const requestAccess = async (
  fullName: string,
  email: string,
  reason: string,
  budgetRange?: string
): Promise<ApiResponse<any>> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return {
      success: true,
      message: "Access request submitted successfully! We'll be in touch soon.",
      data: { fullName, email, reason, budgetRange },
    };
  } catch (error: any) {
    console.error("Error requesting access:", error);
    return { success: false, message: error.message };
  }
};

/**
 * Request password reset - returns mock success
 */
export const requestPasswordReset = async (
  email: string
): Promise<ApiResponse<{ message: string }>> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return {
      success: true,
      data: { message: "Password reset email sent! Check your inbox." },
    };
  } catch (error: any) {
    console.error("Error requesting password reset:", error);
    return { success: false, message: error.message };
  }
};

/**
 * Validate reset token - returns mock email
 */
export const validateResetToken = async (
  token: string
): Promise<ApiResponse<{ email: string }>> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return {
      success: true,
      data: { email: "demo@example.com" },
    };
  } catch (error: any) {
    console.error("Error validating reset token:", error);
    return { success: false, message: error.message };
  }
};

/**
 * Reset password - returns mock success
 */
export const resetPassword = async (
  token: string,
  newPassword: string
): Promise<ApiResponse<{ message: string }>> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return {
      success: true,
      data: { message: "Password reset successfully! You can now sign in." },
    };
  } catch (error: any) {
    console.error("Error resetting password:", error);
    return { success: false, message: error.message };
  }
};
