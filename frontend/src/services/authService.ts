/**
 * Auth-related API functions
 */
import ApiResponse from "@/models/api/ApiResponse";
import HttpClient from "@/services/HttpClient";
import UserSession from "@/models/user/UserSession";
import AuthResponse from "@/models/auth/AuthResponse";
import User from "@/models/user/User";
import UserSignUp from "@/models/user/UserSignUp";

import { baseApiUrl } from "@/services/config";

export const AUTH_TOKEN_STORAGE_KEY = "bearer_token";
export const HOME_PAGE_ROUTE = "/";
export const HOME_PAGE_ROUTE_USER = "/home";
/**
 * Get the current session via API - used for non-authenticated AND authenticated scenarios
 */
export async function getSession(): Promise<ApiResponse<UserSession>> {
  try {
    const { data } = await getAuthSession();
    if (!data) {
      return { success: false, message: "No session found" };
    }
    return { success: true, data: data as unknown as UserSession };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
}

/**
 * Get the current user via API - used for non-authenticated AND authenticated scenarios
 */
export async function getUser(): Promise<ApiResponse<User | undefined>> {
  try {
    const userAuth = await getAuthSession();
    if (!userAuth.success) {
      return { success: false, message: "No user session found" };
    }
    if (!userAuth.data || !userAuth.data.user) {
      return { success: false, message: "User not found" };
    }
    // Return the user data directly from the data object
    const user = userAuth.data.user as User;
    return { success: true, data: user };
  } catch (error: any) {
    console.error("Error getting user:", error);
    return { success: false, message: error.message };
  }
}

/**
 * Handles signing out the current user directly via API using the auth token
 * provided during signin
 */
export async function signOut(): Promise<ApiResponse<void>> {
  try {
    const session = await getAuthSession();
    if (
      !session ||
      !session.data ||
      !session.data.session ||
      !session.data.session.token
    ) {
      return { success: true, message: "No session found" };
    }
    await revokeAuthSession(session.data.session.token);
    return { success: true, message: "Session revoked" };
  } catch (error: any) {
    console.error("Error signing out:", error);
    return { success: false, message: error.message };
  }
}

/**
 * Handles signing in the current user directly via API using email/password credentials
 */
export const signInWithPassword = async (
  email: string,
  password: string,
  productId?: string,
  organizationSlug?: string
): Promise<ApiResponse<AuthResponse>> => {
  try {
    const httpClient = HttpClient(baseApiUrl);
    const response = await httpClient.post<AuthResponse>("/auth/signin/email", {
      email,
      password,
      productId,
      organizationSlug,
    });
    if (response.success && response.data.token) {
      localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, response.data.token);
    }

    return response;
  } catch (error: any) {
    console.error("Error signing in with password:", error);
    return { success: false, message: error.message };
  }
};

/**
 * Handles signing up the current user using the API directly using email/password
 * credentials and name.
 * Returns an auth response that allows the user to verify their email using the token
 * in the AuthResponse and then signin
 */
export const signUpWithPassword = async (
  userSignUp: UserSignUp
): Promise<ApiResponse<AuthResponse>> => {
  try {
    const httpClient = HttpClient(baseApiUrl);
    const response = await httpClient.post<AuthResponse>(
      "/auth/signup/email",
      userSignUp
    );
    return response;
  } catch (error: any) {
    console.error("Error signing up with password:", error);
    return { success: false, message: error.message };
  }
};

/**
 * Get a user's session via the API for authenication using
 * the auth token provided during signin
 */
export async function getAuthSession(): Promise<ApiResponse<UserSession>> {
  try {
    const httpClient = HttpClient(baseApiUrl);
    const userResponse = await httpClient.postAuthenticated(`/auth/session`);
    return userResponse as ApiResponse<UserSession>;
  } catch (error: any) {
    console.error("Error fetching user:", error);
    return { success: false, message: error.message };
  }
}

/**
 * Revokes a user's session via the API using the auth token provided during signin
 */
export async function revokeAuthSession(
  token: string
): Promise<ApiResponse<boolean>> {
  try {
    const httpClient = HttpClient(baseApiUrl);
    const userResponse = await httpClient.postAuthenticated(
      `/auth/session/revoke`,
      {
        token,
      }
    );
    return userResponse.data as ApiResponse<boolean>;
  } catch (error: any) {
    console.error("Error revoking session:", error);
    return { success: false, message: error.message };
  }
}

/**
 * Verifies a user's email via the API using the verification token provided during signup
 */
export const verifyUserByToken = async (
  token: string
): Promise<ApiResponse<UserSession>> => {
  try {
    const httpClient = HttpClient(baseApiUrl);
    const userResponse = await httpClient.post(`/auth/signup/email/verify`, {
      token,
    });
    return userResponse.data as ApiResponse<UserSession>;
  } catch (error: any) {
    console.error("Error validating user:", error);
    return { success: false, message: error.message };
  }
};

/**
 * Public: Request access to the platform (waitlist/early access)
 */
export const requestAccess = async (
  fullName: string,
  email: string,
  reason: string,
  budgetRange?: string
): Promise<ApiResponse<any>> => {
  try {
    const httpClient = HttpClient(baseApiUrl);
    const response = await httpClient.post(`/auth/access/request`, {
      fullName,
      email,
      reason,
      budgetRange,
    });
    return response;
  } catch (error: any) {
    console.error("Error requesting access:", error);
    return { success: false, message: error.message };
  }
};

/**
 * Request a password reset email
 */
export const requestPasswordReset = async (
  email: string
): Promise<ApiResponse<{ message: string }>> => {
  try {
    const httpClient = HttpClient(baseApiUrl);
    return await httpClient.post<{ message: string }>("/auth/password/forgot", {
      email,
    });
  } catch (error: any) {
    console.error("Error requesting password reset:", error);
    return { success: false, message: error.message };
  }
};

/**
 * Validate a password reset token
 */
export const validateResetToken = async (
  token: string
): Promise<ApiResponse<{ email: string }>> => {
  try {
    const httpClient = HttpClient(baseApiUrl);
    return await httpClient.post<{ email: string }>(
      `/auth/password/reset/validate`,
      {
        token,
      }
    );
  } catch (error: any) {
    console.error("Error validating reset token:", error);
    return { success: false, message: error.message };
  }
};

/**
 * Reset password with token
 */
export const resetPassword = async (
  token: string,
  newPassword: string
): Promise<ApiResponse<{ message: string }>> => {
  try {
    const httpClient = HttpClient(baseApiUrl);
    return await httpClient.post<{ message: string }>("/auth/password/reset", {
      token,
      newPassword,
    });
  } catch (error: any) {
    console.error("Error resetting password:", error);
    return { success: false, message: error.message };
  }
};
