/**
 * UserProduct model
 * Associates users with organization products they have purchased.
 * Tracks purchase date, expiration, and active status.
 */
import UserSubscription from "@/models/user/UserSubscription";

export default interface UserProduct {
  id: string;
  userId: string;
  organizationProductId: string;
  purchaseDate?: Date;
  expirationDate?: Date;
  active: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  // Joined fields (populated when fetching with product details)
  productName?: string;
  productDescription?: string;
  productPrice?: number;
  subscriptions?: UserSubscription[];
}
