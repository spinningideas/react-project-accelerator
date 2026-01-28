/**
 * AuthUser interface for authentication-specific properties
 */
export interface AuthUser {
  // Core user properties
  id: string;
  name: string;
  email: string;
  
  // Authentication specific properties
  emailVerified: boolean;
  provider?: string;
  image?: string | null | undefined;
  createdAt: Date;
  updatedAt: Date;
  // JWT token related properties
  token?: string;
  refreshToken?: string;
  expiresAt?: number;
}

export default AuthUser;
