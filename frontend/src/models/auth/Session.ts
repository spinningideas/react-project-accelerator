export default interface Session {
  id: string;
  userId: string;
  expires_at: Date;
  refreshTokenExpiresAt: Date;
  token: string;
  productId?: string;
  productName?: string;
  organizationProductId?: string;
  organizationId?: string;
  organizationName?: string;
  role?: string;
  password?: string;
  ipAddress?: string;
  userAgent?: string;
  createdDate: Date;
  updatedDate?: Date;
}
