export default interface UserSubscription {
  userSubcriptionId: string;
  userId: string;
  createdDate: Date;
  updatedDate?: Date;
  productName?: string;
  billingInterval?: string;
  price?: string | number;
  organizationProductId?: string;
  customerId?: string;
  trialActive?: boolean;
  trialEndDate?: Date;
  subscriptionActive?: boolean;
  subscriptionId?: string;
  subscriptionPlanId?: string;
  subscriptionStartedDate?: Date;
  subscriptionLastPaymentDate?: Date;
  subscriptionLastPaymentId?: string;
  subscriptionEndDate?: Date;
  subscriptionMessages?: string;
}
