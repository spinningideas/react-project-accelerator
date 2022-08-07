import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingIndicator from "components/Shared/LoadingIndicator";

const HomePage = React.lazy(() => import("pages/Home"));
const AboutPage = React.lazy(() => import("pages/About"));
const ContactPage = React.lazy(() => import("pages/Contact"));
const SettingsPage = React.lazy(() => import("pages/Settings"));

const PageRouter = (
  <Suspense fallback={<LoadingIndicator />}>
    <Routes>
      <Route path="/" key="home" element={<HomePage />} />
      <Route path="/about" key="about" element={<AboutPage />} />
      <Route
        path="/contact/:name"
        key="contact-name"
        element={<ContactPage />}
      />
      <Route path="/contact" key="contact" element={<ContactPage />} />
      <Route path="/settings" key="contact" element={<SettingsPage />} />
      <Route path="*" element={<HomePage />} />;
    </Routes>
  </Suspense>
);

export default PageRouter;
