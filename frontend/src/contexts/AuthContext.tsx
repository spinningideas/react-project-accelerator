import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useNavigate } from "react-router-dom";
// models
import Session from "@/models/auth/Session";
import User from "@/models/user/User";
import UserSession from "@/models/user/UserSession";
// api client that uses auth and token obtained
import {
  AUTH_TOKEN_STORAGE_KEY,
  getSession,
  signOut,
} from "@/services/auth";

/** AUTHENICATED SCENARIOS (Auth Required/AuthContext present) */
interface AuthContextProps {
  /**
   * The current session if authentication has occurred
   */
  session: Session | null;
  /**
   * The current user if authentication has occurred
   */
  user: User | null;
  /**
   * True when the authentication context is loading the session and user
   */
  loadingAuthentication: boolean;
  /**
   * Sets the current user in the authentication context
   */
  setSignedInUser: (user: User | null) => void;
  /**
   * Handles signing out the current user from the Authenticated Context
   */
  signOutAuthenticatedUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({
  session: null,
  user: null,
  loadingAuthentication: true,
  setSignedInUser: () => {},
  signOutAuthenticatedUser: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loadingAuthentication, setLoadingAuthentication] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;
    const getInitialSession = async () => {
      try {
        const response = await getSession();
        if (mounted && response.success && response.data) {
          const userSession = response.data as UserSession;
          setSession(userSession.session);
          setUser(userSession.user);
        }
        setLoadingAuthentication(false);
      } catch (_error) {
        if (mounted) {
          setLoadingAuthentication(false);
        }
      }
    };
    setLoadingAuthentication(true);
    getInitialSession();

    return () => {
      mounted = false;
    };
  }, []);

  /**
   * Sets the current user in the authentication context
   */
  const setSignedInUser = (user: User | null) => {
    setUser(user);
  };

  /**
   * Handles signing out the current user from the Authenticated Context
   */
  const signOutAuthenticatedUser = async () => {
    try {
      // Clean up auth state
      cleanupAuthState();
      // Call signout (mock or real depending on env)
      await signOut();
      // Navigate to home page
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  /**
   * Removes auth state (user and session) from context
   * and removes auth tokens from local storage
   */
  const cleanupAuthState = () => {
    setUser(null);
    setSession(null);
    // Remove standard auth tokens
    localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);
  };

  return (
    <AuthContext.Provider
      value={{
        session,
        user,
        loadingAuthentication,
        setSignedInUser,
        signOutAuthenticatedUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
