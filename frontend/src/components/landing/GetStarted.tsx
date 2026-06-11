// React/state
import React from "react";

// Components
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function GetStarted() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-600 dark:from-blue-400 dark:to-blue-400 mb-6">
            Get Started in Minutes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow these simple steps to start building your next project
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Step 1 */}
          <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">
                    Clone the Repository
                  </CardTitle>
                  <p className="text-muted-foreground mb-3">
                    Clone the project code to your local machine to begin.
                  </p>
                  <div className="bg-slate-900 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm">
                    <div className="text-slate-400 mb-1">
                      # Clone the repository
                    </div>
                    <code className="text-green-400 break-all">
                      git clone https://github.com/spinningideas/react-project-accelerator.git
                    </code>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Step 2 */}
          <Card className="border-l-4 border-l-indigo-500 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">
                    Install Dependencies and Start
                  </CardTitle>
                  <p className="text-muted-foreground mb-3">
                    Navigate to the frontend directory, install npm packages, and start the development server.
                  </p>
                  <div className="bg-slate-900 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm">
                    <div className="text-slate-400 mb-1">
                      # Navigate and install dependencies
                    </div>
                    <code className="text-green-400 break-all">
                      cd react-project-accelerator/frontend && npm install
                    </code>
                    <div className="text-slate-400 mt-3 mb-1">
                      # Start development server
                    </div>
                    <code className="text-green-400">npm run dev</code>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Step 3 */}
          <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                  3
                </div>
                <div>
                  <CardTitle className="text-xl mb-2">
                    Review and Optimize NPM Packages
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Review the installed npm packages and remove any you
                    don't need for your project.
                  </p>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Step 4 */}
          <Card className="border-l-4 border-l-orange-500 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                  4
                </div>
                <div>
                  <CardTitle className="text-xl mb-2">
                    Customize Design
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Review and update Tailwind CSS theme variables in{" "}
                    <code className="text-xs bg-muted px-1 py-0.5 rounded">
                      src/index.css
                    </code>{" "}
                    — colors, fonts, border radius, and spacing. Use{" "}
                    <a
                      href="https://tweakcn.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      tweakcn.com
                    </a>{" "}
                    to visually generate a custom shadcn/ui theme and
                    paste the output directly into your tailwind config.
                  </p>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Step 5 */}
          <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                  5
                </div>
                <div>
                  <CardTitle className="text-xl mb-2">
                    Get Started Building Your Application
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Update the logo, landing page content, home sections, and customize the About, Terms of Service, and Contact pages with your information to begin building your application using this starter kit.
                  </p>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
