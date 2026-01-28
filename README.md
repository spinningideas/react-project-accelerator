# React Project Accelerator

React Project Accelerator was conceived to aid starting React JS projects and provide a reference implementation for bootstrapping projects. The project uses [Vite](https://vitejs.dev/) for blazing-fast development and builds, [shadcn/ui](https://ui.shadcn.com/) for beautiful, accessible components, and [Tailwind CSS](https://tailwindcss.com/) for modern utility-first styling.

This application follows modern React best practices with a clean folder structure separating components, pages, services, contexts, and utilities.

## Key Features

The project includes everything you need to start building production-ready React applications:

- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development with full IntelliSense support for better code quality and maintainability.
- **[Vite](https://vitejs.dev/)** - Lightning-fast HMR (Hot Module Replacement) and optimized production builds.
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible UI components built on Radix UI primitives that you own and can customize.
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework for rapid UI development with consistent design.
- **[Lucide Icons](https://lucide.dev/)** - Beautiful, consistent icon library with 1000+ icons.
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready animation library for React.
- **Theming** - Light/dark mode support with customizable themes using next-themes.
- **Localization** - Multi-language support (English, Spanish, Chinese) with easy-to-use localization service.
- **Authentication** - Mock authentication system with environment-based switching for development and production.
- **Forms** - React Hook Form integration with shadcn/ui components for type-safe form handling.
- **Layout System** - Flexible layout components with responsive navigation and routing.
- **Service Layer** - Clean separation of concerns with services, models, and HttpClient for API calls.
- **Local Storage** - Persistent user preferences and settings via LocalCacheService.
- **Testing** - Comprehensive testing setup with @testing-library/react.
- **React Router v6** - Modern routing with protected routes and navigation guards.

## Live Demo

https://spinningideas.github.io/react-project-accelerator/

## Get Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/spinningideas/react-project-accelerator.git
cd react-project-accelerator/frontend
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**

Copy the example environment file and configure as needed:

```bash
cp .env.example .env
```

Key environment variables:

- `VITE_MOCK_AUTH=true` - Use mock authentication (no backend required)
- `VITE_BASE_API_URL` - Backend API URL (only used when mock auth is disabled)

4. **Start the development server**

```bash
npm run dev
```

The app will run at [http://localhost:3100](http://localhost:3100)

The page will hot-reload when you make edits.

### Available Scripts

#### `npm run dev`

Starts the Vite development server with hot module replacement.

#### `npm run build`

Builds the app for production to the `dist` folder. The build is optimized and minified for best performance.

#### `npm run preview`

Preview the production build locally before deploying.

#### `npm test`

Launches the test runner in interactive watch mode.

#### `npm run lint`

Runs ESLint to check code quality and style.

### VS Code Debugging

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Set a breakpoint in your code within VS Code

3. Press F5 or use the Debug panel and select "Debug via Chrome"

## Project Structure

```
frontend/
├── public/           # Static assets
│   └── i18n/        # Localization files (enUS, esES, zhCN)
├── src/
│   ├── components/  # Reusable UI components
│   │   ├── ui/      # shadcn/ui components
│   │   ├── app/     # App-specific components
│   │   ├── auth/    # Authentication components
│   │   └── shared/  # Shared utility components
│   ├── contexts/    # React contexts (Auth, Theme, Localization, etc.)
│   ├── hooks/       # Custom React hooks
│   ├── models/      # TypeScript interfaces and types
│   ├── pages/       # Page components
│   ├── routing/     # React Router configuration
│   ├── services/    # API services and utilities
│   └── utils/       # Utility functions
└── docs/            # Documentation
```

## Tech Stack

### Core

- **[React 18](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Vite](https://vitejs.dev/)** - Build tool and dev server

### UI & Styling

- **[shadcn/ui](https://ui.shadcn.com/)** - Component library
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide Icons](https://lucide.dev/)** - Icon library
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library

### State & Routing

- **[React Router v6](https://reactrouter.com/)** - Client-side routing
- **[React Context](https://react.dev/reference/react/useContext)** - State management
- **[TanStack Query](https://tanstack.com/query)** - Server state management

### Forms & Validation

- **[React Hook Form](https://react-hook-form.com/)** - Form handling
- **[Zod](https://zod.dev/)** - Schema validation

### Development Tools

- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Testing Library](https://testing-library.com/)** - Component testing

## Deployment

### GitHub Pages Deployment

This project is configured for easy deployment to GitHub Pages using the `gh-pages` package.

#### How It Works

The deployment process uses a combination of Vite configuration and GitHub Pages features:

1. **Base Path Configuration** - Vite is configured to use `/react-project-accelerator/` as the base path in production mode (see `vite.config.ts`)
2. **Jekyll Bypass** - A `.nojekyll` file in the `public/` folder tells GitHub Pages to skip Jekyll processing, allowing Vite's asset files (which start with underscores) to be served correctly
3. **SPA Routing Support** - A `404.html` file redirects all 404 errors back to `index.html` with the path encoded in the query string, enabling client-side routing to work on GitHub Pages
4. **URL Restoration** - A script in `index.html` decodes the path and restores the correct URL using the History API

#### Prerequisites

- **Repository must be public** - GitHub Pages is free for public repositories. Private repositories require GitHub Pro, Team, or Enterprise.
- `gh-pages` package installed (already in `devDependencies`)

#### Deployment Steps

1. **Build and deploy in one command:**

   ```bash
   npm run deployghpages
   ```

   This command will:

   - Build the production bundle with `vite build --mode production`
   - Deploy the `dist` folder to the `gh-pages` branch
   - Push to GitHub

2. **Configure GitHub Pages (first time only):**

   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **Deploy from a branch**
   - Select the **gh-pages** branch
   - Select **/ (root)** folder
   - Click **Save**

3. **Access your deployed site:**

   Your site will be available at: `https://spinningideas.github.io/react-project-accelerator/`

   Note: It may take a few minutes for changes to appear after deployment.

#### Manual Build and Deploy

If you need to build and deploy separately:

```bash
# Build for production
npm run buildghpages

# Deploy the dist folder
npm run deployghpages
```

#### Troubleshooting

**404 Errors on Assets:**

- Ensure `.nojekyll` file exists in `public/` folder
- Verify the base path in `vite.config.ts` matches your repository name

**Routing Issues:**

- Ensure `404.html` exists in `public/` folder
- Check that the SPA redirect script is present in `index.html`

**Deployment Fails:**

- Verify you have push access to the repository
- Check that the `gh-pages` branch exists and is not protected
- Ensure `gh-pages` package is installed: `npm install gh-pages --save-dev`

## Resources

### shadcn/ui & Tailwind CSS

- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)

### React & TypeScript

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

### Icons & Design

- [Lucide Icons](https://lucide.dev/icons/)
- [Radix UI Primitives](https://www.radix-ui.com/primitives)
- [Framer Motion Examples](https://www.framer.com/motion/examples/)

### Additional Resources

- [React Application Building](https://github.com/spinningideas/resources/wiki/React-JS)
- [React Folder Structure](https://github.com/spinningideas/resources/wiki/React-JS-Folder-Structure)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details
