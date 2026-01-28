import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { LoadingIndicator } from "@/components/shared/LoadingIndicator";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import DefaultLayout from "@/components/DefaultLayout";

// Lazy load page components
const LandingPage = lazy(() => import("@/pages/LandingPage"));
const SignIn = lazy(() => import("@/pages/auth/SignIn"));
const SignUp = lazy(() => import("@/pages/auth/SignUp"));
const SignUpVerify = lazy(() => import("@/pages/auth/SignUpVerify"));
const ForgotPassword = lazy(() => import("@/pages/auth/ForgotPassword"));
const ResetPassword = lazy(() => import("@/pages/auth/ResetPassword"));
const RequestAccess = lazy(() => import("@/pages/auth/RequestAccess"));

// custom pages - authenticated
const Home = lazy(() => import("@/pages/Home"));
// standard pages
const Bookmarks = lazy(() => import("@/pages/Bookmarks"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const Settings = lazy(() => import("@/pages/Settings"));
const Privacy = lazy(() => import("@/pages/Privacy"));
const Terms = lazy(() => import("@/pages/Terms"));

// User pages
const Profile = lazy(() => import("@/pages/auth/Profile"));

// 404 page
const NotFound = lazy(() => import("@/pages/NotFound"));

const PageRouter = (
  <Suspense
    fallback={
      <LoadingIndicator
        loading
        className="flex h-screen items-center justify-center max-w-[100px] max-h-[100px] mx-auto mt-24"
        size={20}
      />
    }
  >
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/contact/:name" element={<Contact />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signup/verify/:token" element={<SignUpVerify />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/auth/reset-password/:token" element={<ResetPassword />} />

      <Route path="/requestaccess/:token?" element={<RequestAccess />} />
      <Route path="/support/privacy-policy" element={<Privacy />} />
      <Route path="/support/terms" element={<Terms />} />

      {/*       <Route
        path="/support/contact/:reason?"
        element={<ContactSupportPage />}
      /> */}

      {/* Protected routes requiring user auth */}
      <Route
        element={
          <ProtectedRoute>
            <DefaultLayout />
          </ProtectedRoute>
        }
      >
        {/** AuthenticatedRoutes */}
        <Route path="/home" element={<Home />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      {/* Catch-all route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);

export default PageRouter;
