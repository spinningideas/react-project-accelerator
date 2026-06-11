// React/state
import React from "react";

// Components
import Logo from "@/components/app/Logo";

// Constants
import { APPLICATION_NAME } from "@/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-black border-t dark:border-gray-800 py-16 text-sm">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Logo themeIsDark={true} />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                {APPLICATION_NAME}
              </span>
            </div>
            <p className="text-muted-foreground">
              Next-generation UI builder powered by advanced AI models.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Product
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Showcase
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Resources
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a
                  href="/about"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/support/terms"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/support/privacy-policy"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {APPLICATION_NAME}. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
