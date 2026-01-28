import User from "@/models/user/User";

export interface AuthResponse {
  token: string;
  user: User;
}

export default AuthResponse;
