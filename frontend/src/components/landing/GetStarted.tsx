import { useState } from "react";
import { Check, Copy, ExternalLink } from "lucide-react";
// Components
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function GetStarted() {
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStates((prev) => ({ ...prev, [key]: true }));
    setTimeout(() => {
      setCopiedStates((prev) => ({ ...prev, [key]: false }));
    }, 2000);
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gray-50/50 dark:bg-black/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-blue-500 to-blue-600 dark:from-blue-400 dark:via-blue-500 dark:to-blue-400 mb-6">
            Get Started in Minutes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Follow these simple steps to start building your next project
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto space-y-8">
          {/* Vertical timeline connector line */}
          <div className="absolute left-[28px] top-6 bottom-6 w-0.5 bg-linear-to-b from-blue-500 via-indigo-500 via-purple-500 via-orange-500 to-green-500 hidden md:block opacity-30 dark:opacity-40" />

          {/* Step 1 */}
          <div className="relative pl-0 md:pl-20 group">
            {/* Step Number Circle */}
            <div className="absolute left-2 top-6 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg shadow-md border-2 border-background dark:border-zinc-950 z-10 group-hover:scale-110 transition-transform duration-300 hidden md:flex">
              1
            </div>
            <Card className="border border-border/80 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-xs hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.06)] transition-all duration-300 rounded-2xl">
              <CardHeader className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg shrink-0 md:hidden">
                    1
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold tracking-tight mb-2">
                      Clone the Repository
                    </CardTitle>
                    <p className="text-muted-foreground leading-relaxed mb-4 text-[15px]">
                      Clone the project code to your local machine to begin.
                    </p>
                    <div className="relative bg-slate-950 dark:bg-black rounded-xl p-4 font-mono text-sm border border-border/40 group/code">
                      <div className="text-slate-400 mb-1 select-none">
                        # Clone the repository
                      </div>
                      <code className="text-green-400 break-all pr-12 block">
                        git clone
                        https://github.com/spinningideas/react-project-accelerator.git
                      </code>
                      <button
                        onClick={() =>
                          handleCopy(
                            "git clone https://github.com/spinningideas/react-project-accelerator.git",
                            "clone"
                          )
                        }
                        className="absolute right-3 top-3 p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800/80 transition-all opacity-0 group-hover/code:opacity-100 focus:opacity-100"
                        title="Copy to clipboard"
                      >
                        {copiedStates["clone"] ? (
                          <Check className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          {/* Step 2 */}
          <div className="relative pl-0 md:pl-20 group">
            <div className="absolute left-2 top-6 w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-lg shadow-md border-2 border-background dark:border-zinc-950 z-10 group-hover:scale-110 transition-transform duration-300 hidden md:flex">
              2
            </div>
            <Card className="border border-border/80 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-xs hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.06)] transition-all duration-300 rounded-2xl">
              <CardHeader className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-lg shrink-0 md:hidden">
                    2
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold tracking-tight mb-2">
                      Install Dependencies and Start
                    </CardTitle>
                    <p className="text-muted-foreground leading-relaxed mb-4 text-[15px]">
                      Navigate to the frontend directory, install npm packages,
                      and start the development server.
                    </p>
                    <div className="space-y-3">
                      <div className="relative bg-slate-950 dark:bg-black rounded-xl p-4 font-mono text-sm border border-border/40 group/code">
                        <div className="text-slate-400 mb-1 select-none">
                          # Navigate and install dependencies
                        </div>
                        <code className="text-green-400 break-all pr-12 block">
                          cd react-project-accelerator/frontend && npm install
                        </code>
                        <button
                          onClick={() =>
                            handleCopy(
                              "cd react-project-accelerator/frontend && npm install",
                              "install"
                            )
                          }
                          className="absolute right-3 top-3 p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800/80 transition-all opacity-0 group-hover/code:opacity-100 focus:opacity-100"
                          title="Copy to clipboard"
                        >
                          {copiedStates["install"] ? (
                            <Check className="w-4 h-4 text-green-400" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>

                      <div className="relative bg-slate-950 dark:bg-black rounded-xl p-4 font-mono text-sm border border-border/40 group/code">
                        <div className="text-slate-400 mb-1 select-none">
                          # Start development server
                        </div>
                        <code className="text-green-400 pr-12 block">
                          npm run dev
                        </code>
                        <button
                          onClick={() => handleCopy("npm run dev", "runDev")}
                          className="absolute right-3 top-3 p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800/80 transition-all opacity-0 group-hover/code:opacity-100 focus:opacity-100"
                          title="Copy to clipboard"
                        >
                          {copiedStates["runDev"] ? (
                            <Check className="w-4 h-4 text-green-400" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          {/* Step 3 */}
          <div className="relative pl-0 md:pl-20 group">
            <div className="absolute left-2 top-6 w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-lg shadow-md border-2 border-background dark:border-zinc-950 z-10 group-hover:scale-110 transition-transform duration-300 hidden md:flex">
              3
            </div>
            <Card className="border border-border/80 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-xs hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.06)] transition-all duration-300 rounded-2xl">
              <CardHeader className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-lg shrink-0 md:hidden">
                    3
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold tracking-tight mb-2">
                      Review and Optimize NPM Packages
                    </CardTitle>
                    <p className="text-muted-foreground leading-relaxed text-[15px]">
                      Review the installed npm packages and remove any you don't
                      need for your project. This ensures a lightweight, fast,
                      and optimized production bundle.
                    </p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          {/* Step 4 */}
          <div className="relative pl-0 md:pl-20 group">
            <div className="absolute left-2 top-6 w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg shadow-md border-2 border-background dark:border-zinc-950 z-10 group-hover:scale-110 transition-transform duration-300 hidden md:flex">
              4
            </div>
            <Card className="border border-border/80 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-xs hover:border-orange-500/30 hover:shadow-[0_0_30px_rgba(249,115,22,0.06)] transition-all duration-300 rounded-2xl">
              <CardHeader className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg shrink-0 md:hidden">
                    4
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold tracking-tight mb-2">
                      Customize Design
                    </CardTitle>
                    <p className="text-muted-foreground leading-relaxed text-[15px]">
                      Review and update Tailwind CSS theme variables in{" "}
                      <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono text-foreground font-semibold">
                        src/index.css
                      </code>{" "}
                      - colors, fonts, border radius, and spacing. Use{" "}
                      <a
                        href="https://tweakcn.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                      >
                        tweakcn.com
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>{" "}
                      to visually generate a custom shadcn/ui theme and paste
                      the output directly into your tailwind config.
                    </p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          {/* Step 5 */}
          <div className="relative pl-0 md:pl-20 group">
            <div className="absolute left-2 top-6 w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-lg shadow-md border-2 border-background dark:border-zinc-950 z-10 group-hover:scale-110 transition-transform duration-300 hidden md:flex">
              5
            </div>
            <Card className="border border-border/80 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-xs hover:border-green-500/30 hover:shadow-[0_0_30px_rgba(34,197,94,0.06)] transition-all duration-300 rounded-2xl">
              <CardHeader className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-lg shrink-0 md:hidden">
                    5
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold tracking-tight mb-2">
                      Get Started Building Your Application
                    </CardTitle>
                    <p className="text-muted-foreground leading-relaxed text-[15px]">
                      Update the logo, landing page content, home sections, and
                      customize the About, Terms of Service, and Contact pages
                      with your information to begin building your application
                      using this starter kit.
                    </p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
