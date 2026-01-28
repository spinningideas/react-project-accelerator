import Session from "@/models/auth/Session";
import User from "@/models/user/User";

export default interface UserSession {
  user: User;
  session: Session;
}
