import { baseApiUrl } from "@/services/config";
import HttpClient from "@/services/HttpClient";
/**
 * User-related API functions
 */
import ApiResponse from "@/models/api/ApiResponse";
import User from "@/models/user/User";

/**
 * Get a user by ID
 */
export async function getUser(userId: string): Promise<ApiResponse<User>> {
  try {
    const httpClient = HttpClient(baseApiUrl);
    const userResponse = await httpClient.postAuthenticated(
      `/user/get/${userId}`,
      {
        userId,
      }
    );
    return userResponse.data as ApiResponse<User>;
  } catch (error: any) {
    console.error("Error fetching user:", error);
    return { success: false, message: error.message };
  }
}

/**
 * Get a user's profile by ID
 */
export async function updateUser(
  userId: string,
  name: string,
  email: string
): Promise<ApiResponse<User>> {
  try {
    const httpClient = HttpClient(baseApiUrl);
    const user = {
      id: userId,
      name,
      email,
    };
    const userResponse = await httpClient.postAuthenticated(`/user/upsert`, {
      user,
    });
    return userResponse.data as ApiResponse<User>;
  } catch (error: any) {
    console.error("Error updating user:", error);
    return { success: false, message: error.message };
  }
}
