import UserSubscription from "@/models/user/UserSubscription";

/**
 * User model from better auth but extended with additional fields
 * of role and lang
 * @see https://better-auth.dev/docs/types/user
 */
export default interface User {
  userId: string;
  email: string;
  emailVerified?: boolean;
  name: string;
  nameLower?: string; // Often useful for case-insensitive searches/sorting
  provider?: string; // How the user was created (e.g., 'database', 'google')
  phone?: string;
  image?: string;
  role?: string;
  lang?: string;
  active: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  subscription?: UserSubscription;
  productId?: string;
  productName?: string;
  organizationProductId?: string;
  organizationId?: string;
  organizationName?: string;
  organizationSlug?: string;
}
