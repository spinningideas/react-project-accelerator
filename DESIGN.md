---
name: "themed-material-design-system"
description: "Supports light and dark themes via Tailwind CSS v4 class-based dark mode. Tokens are full hsl() CSS custom properties in src/index.css. @theme inline maps them to Tailwind utility classes. Dark mode activates via .dark class on the root element, toggled through ThemeContext."
conventions: "Green = primary actions (Button primary/success), blue = secondary actions + semantic primary token. Pill-shaped controls (rounded-full), rounded-2xl cards, glass-free sticky headers, Framer Motion entrances, CSS keyframes for overlays."
dark-mode-strategy: "@custom-variant dark (&:is(.dark *))" # Tailwind v4 CSS-first - no tailwind.config.ts
token-pattern: "full hsl() values in :root/.dark — mapped via @theme inline"
theme-file: "frontend/src/index.css"
tailwind-version: "4.x"
version: 1.0

light-theme:
  colors:
    background: "hsl(0 0% 100%) — #ffffff"
    foreground: "hsl(0 0% 20%) — #333333"
    card: "hsl(0 0% 100%) — #ffffff"
    card-foreground: "hsl(0 0% 20%) — #333333"
    popover: "hsl(0 0% 96.08%) — #f5f5f5"
    popover-foreground: "hsl(0 0% 20%) — #333333"
    primary: "hsl(209.84 78.72% 46.08%) — #1a7fc1"
    primary-foreground: "hsl(0 0% 100%) — #ffffff"
    secondary: "hsl(205.38 86.67% 94.12%) — #daeefb"
    secondary-foreground: "hsl(0 0% 20%) — #333333"
    muted: "hsl(205.38 86.67% 94.12%) — #daeefb"
    muted-foreground: "hsl(0 0% 30%) — #4d4d4d"
    accent: "hsl(211.93 80.28% 41.76%) — #1566b3"
    accent-foreground: "hsl(0 0% 100%) — #ffffff"
    destructive: "hsl(0 60% 50%) — #cc3333"
    destructive-foreground: "hsl(0 0% 100%) — #ffffff"
    border: "hsl(0 0% 81.57%) — #d0d0d0"
    input: "hsl(0 0% 87.84%) — #e0e0e0"
    ring: "hsl(0 0% 37.65%) — #606060"
    sidebar: "hsl(0 0% 100%) — #ffffff"
    sidebar-foreground: "hsl(0 0% 20%) — #333333"
  status:
    success: "hsl(142 71% 45%) — #22c55e"
    error: "hsl(0 84% 60%) — #ef4444"
    info: "hsl(217 91% 60%) — #3b82f6"
    warning: "hsl(38 92% 50%) — #f59e0b"

dark-theme:
  colors:
    background: "hsl(0 0% 10.20%) — #1a1a1a"
    foreground: "hsl(0 0% 85.10%) — #d9d9d9"
    card: "hsl(0 0% 12.55%) — #202020"
    card-foreground: "hsl(0 0% 85.10%) — #d9d9d9"
    popover: "hsl(0 0% 12.55%) — #202020"
    popover-foreground: "hsl(0 0% 85.10%) — #d9d9d9"
    primary: "hsl(209.84 78.72% 46.08%) — #1a7fc1  <- unchanged"
    primary-foreground: "hsl(0 0% 96.08%) — #f5f5f5"
    secondary: "hsl(0 0% 18.82%) — #303030"
    secondary-foreground: "hsl(0 0% 96.08%) — #f5f5f5"
    muted: "hsl(0 0% 16.47%) — #2a2a2a"
    muted-foreground: "hsl(0 0% 95%) — #f2f2f2"
    accent: "hsl(211.93 80.28% 41.76%) — #1566b3  <- unchanged"
    accent-foreground: "hsl(0 0% 96.08%) — #f5f5f5"
    destructive: "hsl(0 66.30% 63.92%) — #e05555"
    destructive-foreground: "hsl(0 0% 100%) — #ffffff"
    border: "hsl(0 0% 20.78%) — #353535"
    input: "hsl(0 0% 18.82%) — #303030"
    ring: "hsl(0 0% 62.75%) — #a0a0a0"
    sidebar: "hsl(0 0% 12.16%) — #1f1f1f"
    sidebar-foreground: "hsl(0 0% 85.10%) — #d9d9d9"
  status:
    success: "hsl(142 71% 45%) — #22c55e  <- unchanged"
    error: "hsl(0 84% 60%) — #ef4444  <- unchanged"
    info: "hsl(217 91% 60%) — #3b82f6  <- unchanged"
    warning: "hsl(38 92% 50%) — #f59e0b  <- unchanged"

brand-colors: # Material palette scale classes; same in both themes
  action-green: "green-600 #43a047 (fill) / green-700 #388e3c (hover) / green-500 #4caf50 (highlights)"
  action-blue: "blue-600 #1e88e5 (fill) / blue-700 #1976d2 (hover) / blue-500 #2196f3 (highlights)"
fonts:
  sans: "Inter, ui-sans-serif, sans-serif, system-ui"
  serif: "Georgia, serif"
  mono: "Fira Code, monospace"
typography:
  hero-display:
    fontFamily: "Inter, ui-sans-serif"
    fontSize: "60px"
    fontWeight: "700"
    lineHeight: "60px"
    letterSpacing: "-1.5px"
  section-heading-large:
    fontFamily: "Inter, ui-sans-serif"
    fontSize: "48px"
    fontWeight: "700"
    lineHeight: "48px"
  section-heading-medium:
    fontFamily: "Inter, ui-sans-serif"
    fontSize: "36px"
    fontWeight: "700"
    lineHeight: "40px"
  card-heading:
    fontFamily: "Inter, ui-sans-serif"
    fontSize: "20px"
    fontWeight: "700"
    lineHeight: "28px"
    letterSpacing: "-0.5px"
  card-subheading:
    fontFamily: "Inter, ui-sans-serif"
    fontSize: "20px"
    fontWeight: "600"
    lineHeight: "28px"
    letterSpacing: "-0.5px"
  body-default:
    fontFamily: "Inter, ui-sans-serif"
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "24px"
  body-large:
    fontFamily: "Inter, ui-sans-serif"
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "26px"
  label-medium:
    fontFamily: "Inter, ui-sans-serif"
    fontSize: "14px"
    fontWeight: "500"
    lineHeight: "20px"
  label-small:
    fontFamily: "Inter, ui-sans-serif"
    fontSize: "14px"
    fontWeight: "400"
    lineHeight: "20px"
  code-label:
    fontFamily: "Fira Code, ui-monospace"
    fontSize: "14px"
    fontWeight: "400"
    lineHeight: "20px"
rounded:
  radius-base: "1.35rem" # --radius CSS variable
  radius-xl: "calc(1.35rem + 4px)"
  radius-lg: "1.35rem"
  radius-md: "calc(1.35rem - 2px)"
  radius-sm: "calc(1.35rem - 4px)"
  radius-pill: "9999px"
spacing:
  spacing-1: "4px"
  spacing-2: "8px"
  spacing-3: "12px"
  spacing-4: "16px"
  spacing-6: "24px"
  spacing-8: "32px"
  spacing-10: "40px"
  spacing-12: "48px"
  spacing-16: "64px"
  spacing-20: "80px"
  spacing-24: "96px"
  spacing-28: "112px"
  spacing-44: "176px"
  spacing-60: "240px"
  spacing-72: "288px"
shadows:
  shadow-2xs: "0px 0px 0px 0px hsl(0 0% 20% / 0.03)"
  shadow-xs: "0px 0px 0px 0px hsl(0 0% 20% / 0.03)"
  shadow-sm: "0px 0px 0px 0px hsl(0 0% 20% / 0.05), 0px 1px 2px -1px hsl(0 0% 20% / 0.05)"
  shadow: "0px 0px 0px 0px hsl(0 0% 20% / 0.05), 0px 1px 2px -1px hsl(0 0% 20% / 0.05)"
  shadow-md: "0px 0px 0px 0px hsl(0 0% 20% / 0.05), 0px 2px 4px -1px hsl(0 0% 20% / 0.05)"
  shadow-lg: "0px 0px 0px 0px hsl(0 0% 20% / 0.05), 0px 4px 6px -1px hsl(0 0% 20% / 0.05)"
  shadow-xl: "0px 0px 0px 0px hsl(0 0% 20% / 0.05), 0px 8px 10px -1px hsl(0 0% 20% / 0.05)"
  shadow-2xl: "0px 0px 0px 0px hsl(0 0% 20% / 0.13)"
---

## Overview

Dual-theme design system for React Project Accelerator. All color tokens are full `hsl(...)` CSS custom properties defined in `src/index.css`. Dark mode is class-based — Tailwind v4 applies `.dark` to the root element via `ThemeContext`, toggled by `ThemeToggle` in the nav.

This project runs **Tailwind CSS v4** with a **CSS-first configuration** — there is no `tailwind.config.ts`. Token values are full `hsl(...)` expressions stored directly in `:root` and `.dark`, mapped to Tailwind utility classes via `@theme inline`.

Light theme uses `#ffffff` page surface. Dark theme uses `#1a1a1a` — a near-black neutral for comfortable reading. **Primary blue (`#1a7fc1`), brand greens, and all status colors remain identical across both themes.** Only surface, foreground, border, muted, and accent tokens change.

This system uses a 4px base grid with scale values 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 112, 176, 240, 288.

**Signature traits:**

- Core token rhythm: Consistent color, spacing, and radius across both themes.
- Single source of truth: Edit `src/index.css` `:root` (light) and `.dark` (dark) to update all tokens app-wide.
- Use [tweakcn.com](https://tweakcn.com/) to visually generate a new shadcn/ui theme and paste the output into `src/index.css`.

## Tailwind v4 Architecture

This project uses **Tailwind CSS v4**, which represents a significant architectural shift from v3. Understanding these changes is essential for maintaining and extending the design system.

### v3 ? v4: Key Changes

| Concern                 | Tailwind v3                           | Tailwind v4                                    |
| ----------------------- | ------------------------------------- | ---------------------------------------------- |
| **Config file**         | `tailwind.config.ts` (JavaScript)     | None - config is in CSS                        |
| **Theme tokens**        | `theme.extend` object                 | `@theme { --variable: value; }` in CSS         |
| **Dark mode**           | `darkMode: ['class']` in config       | `@custom-variant dark (&:is(.dark *));` in CSS |
| **PostCSS plugin**      | `tailwindcss`                         | `@tailwindcss/postcss`                         |
| **CSS import**          | `@tailwind base/components/utilities` | `@import "tailwindcss";`                       |
| **Color palette**       | RGB/Hex based                         | OKLCH by default (HSL still fully supported)   |
| **Engine**              | JavaScript                            | Rust-based Oxide (3-10x faster builds)         |
| **`autoprefixer`**      | Required in PostCSS                   | Built-in - remove from PostCSS                 |
| **Content detection**   | `content: [...]` array                | Automatic - scans all source files             |
| **Gray/Slate override** | Separate palette in config            | Overridden via `--color-gray-*` in `@theme`    |

### Current Setup (v4)

**PostCSS** (`postcss.config.js`):

```js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

> No `autoprefixer` needed - Tailwind v4 handles vendor prefixes natively.

**CSS entry** (`src/index.css`):

```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));
```

> `@import "tailwindcss"` replaces the v3 `@tailwind base/components/utilities` directives.

**Token mapping** (in `@theme inline` block, `src/index.css`):

```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --color-border: var(--border);
  /* ... all semantic tokens ... */
  --font-sans: var(--font-sans);
  --font-mono: var(--font-mono);
  --radius-lg: var(--radius);
  --radius-md: calc(var(--radius) - 2px);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-xl: calc(var(--radius) + 4px);
  --shadow-sm: var(--shadow-sm);
  --shadow-md: var(--shadow-md);
  /* ... */
}
```

> **`@theme inline`** is the v4 pattern when tokens are already full CSS values (e.g. `hsl(0 0% 100%)`). It simply maps `--color-*` names to `var(--token)` — no `hsl()` wrapper needed. Defining `--color-primary` here automatically generates `bg-primary`, `text-primary`, `border-primary`, etc.

## Theme System

### How It Works

| Concern               | Implementation                                                            |
| --------------------- | ------------------------------------------------------------------------- |
| **Dark mode variant** | `@custom-variant dark (&:is(.dark *));` in `src/index.css`                |
| **Token file**        | `src/index.css` - `:root` for light, `.dark` for dark                     |
| **Toggle**            | `ThemeContext` + `ThemeToggle` component sets/removes `.dark` on `<html>` |
| **Persistence**       | Theme choice stored via `LocalCacheService` in `localStorage`             |
| **Default**           | Configurable via `defaultTheme` prop on `ThemeProvider` in `App.tsx`      |

### Token Anatomy

Tokens store **full `hsl(...)` values** directly in `:root` and `.dark`. The `@theme inline` block then maps Tailwind's `--color-*` names to these variables — no additional `hsl()` wrapper needed.

```css
/* Full hsl() values stored in :root / .dark */
:root {
  --background: hsl(0 0% 100%);
  --primary: hsl(209.84 78.72% 46.08%);
  --radius: 1.35rem;
}

.dark {
  --background: hsl(0 0% 10.2%);
  --primary: hsl(209.84 78.72% 46.08%); /* unchanged */
}

/* @theme inline maps them to Tailwind utility classes */
@theme inline {
  --color-background: var(--background);
  --color-primary: var(--primary);
  --radius-lg: var(--radius);
}
```

**Opacity variants** — since values are full `hsl()`, use `color-mix` or pass raw values through a utility:

```css
/* Using CSS color-mix (preferred in v4) */
color-mix(in srgb, var(--primary) 50%, transparent)

/* Or use Tailwind opacity modifier on utility classes */
bg-primary/50
```

### What Changes vs What Stays the Same

**Changes between light and dark:**

- `--background`, `--foreground` (page surface + text)
- `--card`, `--card-foreground` (surface elevation)
- `--popover`, `--popover-foreground`
- `--secondary`, `--secondary-foreground`
- `--muted`, `--muted-foreground`
- `--accent`, `--accent-foreground`
- `--border`, `--input` (borders tighten in dark: `#d0d0d0` → `#353535`)
- `--sidebar`, `--sidebar-foreground`

**Stays the same in both themes:**

- `--primary` / `--primary-foreground` (#1a7fc1 blue)
- `--accent` (#1566b3 dark blue — same in both)
- All status colors: success, error, info, warning
- Brand action greens (green-500/600/700) and blues (blue-500/600/700) from the palette overrides
- `--radius` (1.35rem base)
- Font variables (`--font-sans`, `--font-mono`, `--font-serif`)
- All spacing tokens

## Colors

All tokens are defined in `src/index.css`. Edit the `:root` and `.dark` blocks there — there is **no** `tailwind.config.ts`. Tailwind v4 utility classes (`bg-background`, `text-foreground`, etc.) are generated from the `@theme inline` block.

### Semantic Token Reference

| CSS Variable               | Tailwind Class                | Light Value                 | Light Hex   | Dark Value                  | Dark Hex    | Usage                       |
| -------------------------- | ----------------------------- | --------------------------- | ----------- | --------------------------- | ----------- | --------------------------- |
| `--background`             | `bg-background`               | `hsl(0 0% 100%)`            | #ffffff     | `hsl(0 0% 10.20%)`          | #1a1a1a     | Page & section background   |
| `--foreground`             | `text-foreground`             | `hsl(0 0% 20%)`             | #333333     | `hsl(0 0% 85.10%)`          | #d9d9d9     | Primary body & heading text |
| `--card`                   | `bg-card`                     | `hsl(0 0% 100%)`            | #ffffff     | `hsl(0 0% 12.55%)`          | #202020     | Card surface                |
| `--card-foreground`        | `text-card-foreground`        | `hsl(0 0% 20%)`             | #333333     | `hsl(0 0% 85.10%)`          | #d9d9d9     | Card text                   |
| `--primary`                | `bg-primary`                  | `hsl(209.84 78.72% 46.08%)` | **#1a7fc1** | `hsl(209.84 78.72% 46.08%)` | **#1a7fc1** | Primary CTA, links          |
| `--primary-foreground`     | `text-primary-foreground`     | `hsl(0 0% 100%)`            | #ffffff     | `hsl(0 0% 96.08%)`          | #f5f5f5     | Text on primary             |
| `--secondary`              | `bg-secondary`                | `hsl(205.38 86.67% 94.12%)` | #daeefb     | `hsl(0 0% 18.82%)`          | #303030     | Secondary buttons, chips    |
| `--secondary-foreground`   | `text-secondary-foreground`   | `hsl(0 0% 20%)`             | #333333     | `hsl(0 0% 96.08%)`          | #f5f5f5     | Text on secondary           |
| `--muted`                  | `bg-muted`                    | `hsl(205.38 86.67% 94.12%)` | #daeefb     | `hsl(0 0% 16.47%)`          | #2a2a2a     | Subtle backgrounds          |
| `--muted-foreground`       | `text-muted-foreground`       | `hsl(0 0% 30%)`             | #4d4d4d     | `hsl(0 0% 95%)`             | #f2f2f2     | Captions, placeholders      |
| `--accent`                 | `bg-accent`                   | `hsl(211.93 80.28% 41.76%)` | #1566b3     | `hsl(211.93 80.28% 41.76%)` | #1566b3     | Hover states, active tints  |
| `--accent-foreground`      | `text-accent-foreground`      | `hsl(0 0% 100%)`            | #ffffff     | `hsl(0 0% 96.08%)`          | #f5f5f5     | Text on accent              |
| `--destructive`            | `bg-destructive`              | `hsl(0 60% 50%)`            | **#cc3333** | `hsl(0 66.30% 63.92%)`      | **#e05555** | Errors, delete actions      |
| `--destructive-foreground` | `text-destructive-foreground` | `hsl(0 0% 100%)`            | #ffffff     | `hsl(0 0% 100%)`            | #ffffff     | Text on destructive         |
| `--border`                 | `border-border`               | `hsl(0 0% 81.57%)`          | #d0d0d0     | `hsl(0 0% 20.78%)`          | #353535     | Borders, dividers           |
| `--input`                  | `border-input`                | `hsl(0 0% 87.84%)`          | #e0e0e0     | `hsl(0 0% 18.82%)`          | #303030     | Input borders               |
| `--ring`                   | `ring-ring`                   | `hsl(0 0% 37.65%)`          | #606060     | `hsl(0 0% 62.75%)`          | #a0a0a0     | Focus rings                 |

### Status Colors (Same in Both Themes)

| Token   | CSS Variable      | Hex     | Usage                               |
| ------- | ----------------- | ------- | ----------------------------------- |
| Success | `--success-color` | #22c55e | Success toasts, confirmation states |
| Error   | `--error-color`   | #ef4444 | Error toasts, destructive actions   |
| Info    | `--info-color`    | #3b82f6 | Info toasts, informational states   |
| Warning | `--warning-color` | #f59e0b | Warning toasts, caution states      |

### Brand & Action Colors (Same in Both Themes)

These come from the Material `green`/`blue` palette overrides (see Palette Overrides) — reference them as scale classes, not raw hex.

| Role                   | Classes                                                                                                                                               | Hex               | Usage                                                         |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ------------------------------------------------------------- |
| Green action fill      | `bg-green-600` → `hover:bg-green-700`                                                                                                                 | #43a047 → #388e3c | Button `primary`/`success`: Sign Up, Get Started, closing CTA |
| Green highlight        | `text-green-500`                                                                                                                                      | #4caf50           | Hero highlight words                                          |
| Green heading gradient | `bg-linear-to-r from-green-600 via-green-500 to-green-600 dark:from-green-400 dark:via-green-500 dark:to-green-400` + `bg-clip-text text-transparent` | —                 | Section H2s on landing                                        |
| Blue action fill       | `bg-blue-600` → `hover:bg-blue-700`                                                                                                                   | #1e88e5 → #1976d2 | Button `secondary`: Sign In, Learn More                       |
| Blue highlight         | `text-blue-500`                                                                                                                                       | #2196f3           | Hero highlight words                                          |
| Blue icon tile         | `bg-linear-to-br from-blue-50 to-blue-100/20 dark:from-blue-900/20 dark:to-blue-800/20` + `text-blue-600 dark:text-blue-400`                          | —                 | Feature card icons                                            |
| Blue tint pill         | `bg-blue-50/50 border-blue-100 hover:border-blue-400 dark:bg-blue-900/20 dark:border-blue-800`                                                        | —                 | Hero feature pills                                            |
| CTA band wash          | `bg-linear-to-r from-blue-900 to-blue-800 opacity-70 dark:opacity-60`                                                                                 | #0d47a1 → #1565c0 | Landing CTA band background                                   |

### Palette Overrides (v4 @theme)

`gray`, `slate`, `blue`, and `green` are overridden in the `@theme` block of `src/index.css` using Material Design values (source: `src/styling/colors.ts`). Tailwind v4 ships with an OKLCH-based default palette; this project intentionally overrides `--color-gray-*` and `--color-slate-*` to maintain the neutral true-gray scale, and `--color-blue-*` / `--color-green-*` so `bg-blue-600` = `#1e88e5` and `bg-green-600` = `#43a047`. These two scales power the Button `secondary` (blue) and `primary`/`success` (green) variants — see Component Conventions.

| Scale | Hex     | Notes            |
| ----- | ------- | ---------------- |
| 50    | #fafafa | Near white       |
| 100   | #f5f5f5 | Card surfaces    |
| 200   | #eeeeee | Subtle dividers  |
| 300   | #e0e0e0 | Border light     |
| 400   | #bdbdbd | Disabled states  |
| 500   | #9e9e9e | Placeholder text |
| 600   | #757575 | Secondary icons  |
| 700   | #616161 | Dense body text  |
| 800   | #424242 | Dark surface     |
| 900   | #212121 | Near black       |
| 950   | #121212 | Deepest dark     |

### Chart & Gradient Tokens

`--chart-1` … `--chart-5` are defined in `:root` and `.dark` (pastel ramps for data visualization) and mapped in `@theme inline` as `--color-chart-*`.

`--background-image-gradient-primary` and `--background-image-gradient-hero` are mapped in `@theme inline` to `var(--gradient-primary)` / `var(--gradient-hero)`. To activate them, define `--gradient-primary` and `--gradient-hero` in `:root` and `.dark` — e.g. a soft `linear-gradient` wash in primary/accent tones. `Hero.tsx` already applies `bg-gradient-hero`.

> Note: semantic `--primary` is `#1a7fc1`; palette `blue-600` is `#1e88e5`. They are close but distinct — components use whichever is specified.

## Typography

Typography uses Inter (sans), Georgia (serif), and Fira Code (mono) via CSS `--font-*` variables registered in `@theme inline`. Keep hierarchy mapped to these token rows before adding decorative type styles.

Weight range spans bold, semi-bold, medium, regular. Sizes range from 14px to 60px.

### Font Variables

| Variable       | Value                                         | Tailwind Token | Usage                         |
| -------------- | --------------------------------------------- | -------------- | ----------------------------- |
| `--font-sans`  | `Inter, ui-sans-serif, sans-serif, system-ui` | `font-sans`    | All UI text                   |
| `--font-serif` | `Georgia, serif`                              | `font-serif`   | Long-form / editorial content |
| `--font-mono`  | `Fira Code, monospace`                        | `font-mono`    | Code blocks, technical labels |

### Font Roles

- **Headline Font**: Inter (sans)
- **Body Font**: Inter (sans)
- **Code Font**: Fira Code (mono)

### Type Scale Evidence

| Role                                   | Font      | Size | Weight | Line Height | Letter Spacing | Notes           |
| -------------------------------------- | --------- | ---- | ------ | ----------- | -------------- | --------------- |
| Hero section main heading              | Inter     | 60px | 700    | 60px        | -1.5px         | Extracted token |
| Major section headings                 | Inter     | 48px | 700    | 48px        | normal         | Extracted token |
| Sub-section headings                   | Inter     | 36px | 700    | 40px        | normal         | Extracted token |
| Card and feature block titles          | Inter     | 20px | 700    | 28px        | -0.5px         | Extracted token |
| Card subtitles / emphasized labels     | Inter     | 20px | 600    | 28px        | -0.5px         | Extracted token |
| Primary body copy                      | Inter     | 16px | 400    | 24px        | normal         | Extracted token |
| Hero subtitle / lead paragraph         | Inter     | 16px | 400    | 26px        | normal         | Extracted token |
| Button labels, badge text, nav items   | Inter     | 14px | 500    | 20px        | normal         | Extracted token |
| Secondary labels and helper text       | Inter     | 14px | 400    | 20px        | normal         | Extracted token |
| Code snippets, technical inline labels | Fira Code | 14px | 400    | 20px        | normal         | Extracted token |

## Layout

### Container & Page Shell

- The `container` utility is overridden via `@utility container` in `src/index.css`: `margin-inline: auto; padding-inline: 2rem;` — no max-width until `sm`, then capped at **1400px** at `≥1400px`. Pages typically use `container mx-auto px-4`.
- Page shell: `<div className="min-h-screen bg-background">` containing the navigation header then the routed page.
- Sticky headers: app nav `h-[55px]`, public/landing nav `h-16`; both `sticky top-0 z-50` with a bottom hairline border.

### Common Section Rhythms

| Section               | Classes                                             |
| --------------------- | --------------------------------------------------- |
| Hero                  | `py-6 md:py-8`                                      |
| Features grid section | `py-12`, `grid md:grid-cols-2 lg:grid-cols-3 gap-8` |
| CTA band              | `py-24`                                             |
| Footer                | `py-16`, `grid md:grid-cols-4 gap-12`               |
| Centered text block   | `max-w-2xl mx-auto text-center`                     |

### Responsive Breakpoints

| Breakpoint    | Behavior                                                                                      |
| ------------- | --------------------------------------------------------------------------------------------- |
| `<600px`      | `.hidden-on-mobile` hides labels (`@media (max-width: 600px)`)                                |
| `sm` (640px)  | Sign In text button appears; landing wordmark appears                                         |
| `md` (768px)  | App wordmark appears; nav links appear; feature grids go 2-col; modals stop being full-screen |
| `lg` (1024px) | Feature grid 3-col; hero H1 reaches `text-6xl`                                                |
| `≥1400px`     | Container capped at 1400px                                                                    |

### Spacing System

| Token      | Value | Px  | Notes                   |
| ---------- | ----- | --- | ----------------------- |
| spacing-1  | 4px   | 4   | Extracted spacing token |
| spacing-2  | 8px   | 8   | Extracted spacing token |
| spacing-3  | 12px  | 12  | Extracted spacing token |
| spacing-4  | 16px  | 16  | Extracted spacing token |
| spacing-6  | 24px  | 24  | Extracted spacing token |
| spacing-8  | 32px  | 32  | Extracted spacing token |
| spacing-10 | 40px  | 40  | Extracted spacing token |
| spacing-12 | 48px  | 48  | Extracted spacing token |
| spacing-16 | 64px  | 64  | Extracted spacing token |
| spacing-20 | 80px  | 80  | Extracted spacing token |
| spacing-24 | 96px  | 96  | Extracted spacing token |
| spacing-28 | 112px | 112 | Extracted spacing token |
| spacing-44 | 176px | 176 | Extracted spacing token |
| spacing-60 | 240px | 240 | Extracted spacing token |
| spacing-72 | 288px | 288 | Extracted spacing token |

## Elevation & Depth

This design system includes a defined shadow scale via CSS variables. Shadows are subtle (very low opacity) and layered.

### Shadow Scale

| Token          | Tailwind Class | Value                                                             |
| -------------- | -------------- | ----------------------------------------------------------------- |
| `--shadow-2xs` | `shadow-2xs`   | `0px 0px 0px 0px hsl(0 0% 20% / 0.03)`                            |
| `--shadow-xs`  | `shadow-xs`    | `0px 0px 0px 0px hsl(0 0% 20% / 0.03)`                            |
| `--shadow-sm`  | `shadow-sm`    | `0px 0px 0px 0px / 0.05), 0px 1px 2px -1px hsl(0 0% 20% / 0.05)`  |
| `--shadow`     | `shadow`       | `0px 0px 0px 0px / 0.05), 0px 1px 2px -1px hsl(0 0% 20% / 0.05)`  |
| `--shadow-md`  | `shadow-md`    | `0px 0px 0px 0px / 0.05), 0px 2px 4px -1px hsl(0 0% 20% / 0.05)`  |
| `--shadow-lg`  | `shadow-lg`    | `0px 0px 0px 0px / 0.05), 0px 4px 6px -1px hsl(0 0% 20% / 0.05)`  |
| `--shadow-xl`  | `shadow-xl`    | `0px 0px 0px 0px / 0.05), 0px 8px 10px -1px hsl(0 0% 20% / 0.05)` |
| `--shadow-2xl` | `shadow-2xl`   | `0px 0px 0px 0px hsl(0 0% 20% / 0.13)`                            |

> Shadow color is `hsl(0 0% 20% / opacity)` — a near-black neutral. Use `shadow-sm` for cards, `shadow-md` for popovers, `shadow-lg`/`shadow-xl` for modals/drawers.

### Interaction Signals

| Theme | Signal          | Evidence                                              |
| ----- | --------------- | ----------------------------------------------------- |
| Light | backdrop-filter | blur(4px) ; blur(8px)                                 |
| Light | outline-color   | rgb(13, 13, 13) ; rgb(51, 51, 51) ; rgb(74, 222, 128) |
| Light | outline-width   | 3px                                                   |
| Light | outline-offset  | 0px                                                   |

## Shapes

Shape language maps to the radius scale derived from `--radius: 1.35rem`. All radius tokens are computed relative to this base. Keep component corners consistent with the role mapping below.

### Radius Roles

| Token         | Tailwind Class | Value                          | Role Mapping        |
| ------------- | -------------- | ------------------------------ | ------------------- |
| `--radius-xl` | `rounded-xl`   | `calc(1.35rem + 4px)` ≈ 25.6px | Modals, large cards |
| `--radius-lg` | `rounded-lg`   | `1.35rem` ≈ 21.6px             | Cards, panels       |
| `--radius-md` | `rounded-md`   | `calc(1.35rem - 2px)` ≈ 19.6px | Buttons, inputs     |
| `--radius-sm` | `rounded-sm`   | `calc(1.35rem - 4px)` ≈ 17.6px | Badges, chips       |
| pill          | `rounded-full` | `9999px`                       | Tags, avatars       |

### Geometry Evidence

| Radius Token  | Shape  | Units |
| ------------- | ------ | ----- |
| radius-pill   | 9999px | px    |
| radius-card   | 16px   | px    |
| radius-medium | 12px   | px    |
| radius-small  | 6px    | px    |

## Component Conventions

- **Green = primary actions.** `Button variant="primary"` and `variant="success"` render `bg-green-600 → hover:bg-green-700` (`#43a047 → #388e3c`, palette scale). Use for the main CTA on a screen, Sign Up, and positive confirmations.
- **Blue = secondary actions + semantic primary.** `Button variant="secondary"` renders `bg-blue-600 → hover:bg-blue-700` (`#1e88e5 → #1976d2`, palette scale). The semantic `--primary` token (`#1a7fc1`) drives `bg-primary`, links, focus rings, and `border-primary` hover tints.
- **Pill controls.** Buttons, inputs, nav icon buttons, and feature pills are `rounded-full`. Cards are `rounded-2xl`; modals 20px, confirm dialogs 16px.
- **Muted body copy.** Card/feature descriptions use `text-muted-foreground leading-relaxed`.
- **`cn()`** from `@/lib/utils` (clsx + tailwind-merge) for class composition; cva for variants; `asChild` + `<Link>` for navigation buttons.
- Notifications use the shared toast helpers (`components/shared/Toast.tsx`) — never raw `alert()`.

## Components

### Buttons (`components/ui/button.tsx`, cva)

Base classes (always applied): `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`

| Variant       | Classes                                                                  | When to use                                        |
| ------------- | ------------------------------------------------------------------------ | -------------------------------------------------- |
| `default`     | `bg-primary text-primary-foreground hover:bg-primary/90`                 | Neutral semantic-blue action, dialog confirm       |
| `primary`     | `bg-green-600 text-white hover:bg-green-700` (same dark)                 | Main brand action; Sign Up; active state           |
| `secondary`   | `bg-blue-600 text-white hover:bg-blue-700` (same dark)                   | Second action beside primary (Sign In, Learn More) |
| `success`     | same as `primary`                                                        | Positive confirmations, closing CTA band           |
| `destructive` | `bg-destructive text-destructive-foreground hover:bg-destructive/90`     | Delete / irreversible                              |
| `outline`     | `border bg-background hover:bg-primary/80 hover:text-primary-foreground` | Nav links, toolbar actions, icon buttons           |
| `ghost`       | `hover:bg-accent hover:text-accent-foreground`                           | Low-emphasis actions, menus                        |
| `link`        | `text-primary underline-offset-4 hover:underline`                        | Inline text action                                 |

| Size      | Classes          |
| --------- | ---------------- |
| `default` | `h-10 px-4 py-2` |
| `sm`      | `h-9 px-3`       |
| `lg`      | `h-11 px-8`      |
| `icon`    | `h-10 w-10`      |

Rules:

- One `primary` per view region; pair with `secondary`, `outline`, or `ghost`.
- `primary`/`secondary` are explicit palette fills (green-600 / blue-600), NOT the semantic tokens — `default` is the semantic `bg-primary` variant.
- Icon-only buttons: `size="icon"`, `rounded-full`, icon `h-5 w-5`, always `sr-only` text or `aria-label` + `title`.
- Hero/CTA overrides: `h-16 px-10 text-lg rounded-full shadow-2xl transition-all hover:scale-105` (CTA band adds `border-1 border-white/30`).
- `.btn-large` helper in `src/index.css`: 42px height, `padding 0 20px`, `font-size .9rem`, `gap 10px`, svg 20px.

#### Animated gradient-border button (optional)

`src/index.css` ships `.animated-button-wrapper`: an inline-flex wrapper with a `::before` conic-gradient ring driven by `@property --animated-button-angle` (4s linear rotation), masked to a 2px border. Default ring colors `#10b981, #22c55e, #a3e635, #2dd4bf` — override via `--animated-button-colors`. Inner variants: `.animated-button-type-primary` (uses `var(--primary)` fill, weight 600) and `.animated-button-type-outline` (background fill, weight 500, transparent border so the ring shows as the border).

### Cards (`components/ui/card.tsx`)

| Piece                     | Classes / Behavior                                                                                                                                                                             |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Card` (default)          | `rounded-2xl border bg-card text-card-foreground shadow-xs hover:border-primary/50 transition-colors duration-300`                                                                             |
| `Card variant="animated"` | Card classes + `hover:shadow-xl`; Framer Motion `layout`, entrance `initial={{ opacity: 0, y: 20 }} → animate={{ opacity: 1, y: 0 }}`, `whileHover={{ y: -2, transition: { duration: 0.1 } }}` |
| `CardHeader`              | `flex flex-col space-y-1.5 p-6`                                                                                                                                                                |
| `CardTitle`               | `text-2xl font-semibold leading-none tracking-tight` (`h3`)                                                                                                                                    |
| `CardDescription`         | `text-sm text-muted-foreground`                                                                                                                                                                |
| `CardContent`             | `p-6 pt-0`                                                                                                                                                                                     |
| `CardFooter`              | `flex items-center p-6 pt-0`                                                                                                                                                                   |

Variants to use:

| Variant                | Recipe                                                                                                                                                                                              | Use                                                        |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| Static panel           | `<Card>` default                                                                                                                                                                                    | Settings, forms, info panels                               |
| Animated content card  | `<Card variant="animated">`                                                                                                                                                                         | Content grids with entrance fade/slide + subtle hover lift |
| Feature card (landing) | `<Card className="group hover:scale-105 transition-all duration-300 border-gray-300 dark:border-gray-800 bg-white dark:bg-zinc-900/50 backdrop-blur-xs hover:shadow-2xl hover:shadow-blue-500/10">` | Marketing grids                                            |
| Feature pill           | `flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:border-primary/50 transition-colors`                                                                             | Hero capability chips                                      |
| Selected row           | `border-primary/20 bg-primary/10`                                                                                                                                                                   | Selected list item                                         |
| Glass panel            | `bg-gray-900/50 backdrop-blur border border-white/10`                                                                                                                                               | HUD over imagery/canvas (dark only)                        |

Feature card anatomy (see `components/landing/Features.tsx`):

```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  <Card className="group hover:scale-105 transition-all duration-300 border-gray-300 dark:border-gray-800 bg-white dark:bg-zinc-900/50 backdrop-blur-xs hover:shadow-2xl hover:shadow-blue-500/10">
    <CardHeader>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-50 to-blue-100/20 dark:from-blue-900/20 dark:to-blue-800/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <CardTitle className="text-xl font-bold">Title</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground leading-relaxed">Description</p>
    </CardContent>
  </Card>
</div>
```

Rules: icon tile is a 48px `rounded-xl` box with a blue gradient; title and tile on one row (`gap-4`); body always `text-muted-foreground`; grid 1col → 2 at `md` → 3 at `lg`, `gap-8`. Optional entrance: wrap in `motion.div` with `initial={{ opacity: 0, y: 20 }}` staggered `index * 0.1`.

### Forms & Inputs

`Input` (`components/ui/input.tsx`):

`flex h-10 w-full rounded-full border border-input bg-background px-3 py-2 text-base md:text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-950 dark:border-zinc-800 dark:ring-offset-zinc-950 dark:text-white`

Rules:

- Use shadcn `Label`, `Select`, `Textarea`, `Switch`, `Tabs`, `Dialog`, `Sheet`, `DropdownMenu` from `@/components/ui`; wrap fields in `div.space-y-2` with a `Label` above.
- Focus ring is `ring-primary` on inputs, `ring-ring` on buttons — keep that pairing.
- Browser autofill is reset in `@layer base` (light: black text on white inset; dark: white text on `#09090b`). Keep it.

## Navigation

### App nav (authenticated shell) — `components/app/Navigation.tsx`

```tsx
<header className="h-[55px] border-b border-border/60 dark:border-border bg-background sticky top-0 z-50">
  <div className="container mx-auto px-4 py-2 flex items-center justify-between max-w-full">
    <Link
      to="/"
      className="flex items-center gap-2 hover:opacity-80 transition-opacity"
    >
      <Logo themeIsDark={themeIsDark} />
      <span className="hidden md:inline text-xl font-bold text-foreground">
        App Name
      </span>
    </Link>
    <div className="flex items-center gap-0 md:gap-2">
      {/* route links: hidden md:flex, outline sm buttons */}
      <Button asChild variant="outline" size="sm" title="Home">
        <Link to="/home">Home</Link>
      </Button>
      <ThemeToggle />
      {/* signed in: outline icon rounded-full + DropdownMenu (User h-5 w-5); signed out: */}
      <Button variant="outline" className="hidden sm:inline-flex">
        Sign In
      </Button>
      <Button variant="primary" className="md:px-4 px-3">
        <LogIn className="h-5 w-5 md:hidden" />
        <span className="hidden md:inline">Sign Up</span>
      </Button>
      {/* hamburger: outline icon rounded-full, Menu h-5 w-5, sr-only "Menu" */}
    </div>
  </div>
</header>
```

Rules:

- Height exactly 55px, sticky `top-0 z-50`, `bg-background`, hairline `border-b border-border/60 dark:border-border` (no glass blur).
- Route links are `outline` `sm` buttons in a `hidden md:flex` cluster.
- Right cluster order: route links → ThemeToggle → account (dropdown or Sign In / Sign Up) → hamburger `Sheet`.
- Logo + wordmark on the left; wordmark hidden below `md`.
- Hamburger `Sheet` contains `nav className="flex flex-col gap-4 mt-8"`; links `text-lg font-medium hover:text-primary transition-colors`; close on click.
- Account dropdown items use `h-4 w-4 mr-2` icons.

### Public nav (landing / unauthenticated) — `components/app/NavigationPublic.tsx`

```tsx
<header className="sticky top-0 z-50 w-full border-b border-border/60 dark:border-border bg-background">
  <div className="container mx-auto px-4">
    <div className="flex h-16 items-center justify-between">
      <div className="flex items-center gap-2 cursor-pointer">
        <Logo themeIsDark={themeIsDark} />
        <span className="text-xl font-bold hidden sm:inline-block">
          {APPLICATION_NAME}
        </span>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        {/* outline buttons: Home / About / Contact */}
      </nav>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <div className="hidden md:flex items-center gap-2">
          <Button variant="outline">Sign In</Button>
          <Button variant="success">Sign Up</Button>
        </div>
        {/* same hamburger Sheet as app nav */}
      </div>
    </div>
  </div>
</header>
```

64px header, same sticky/hairline treatment; `Sign Up` uses `variant="success"` (green). Mobile collapses nav + auth buttons behind the hamburger sheet.

## Landing Page Anatomy (`pages/LandingPage.tsx`)

Top to bottom:

1. **Page wrapper**: `min-h-screen bg-linear-to-r from-white via-blue-50/30 to-white dark:from-background dark:via-card dark:to-background`. Optional `<BackgroundAnimations />` layer.
2. **Header**: `NavigationPublic` (above).
3. **Hero** (`components/landing/Hero.tsx`): `section.relative.overflow-hidden` with an absolute `bg-gradient-hero pointer-events-none` layer plus two animated gradient orbs (`motion.div`, `bg-primary/10` and `bg-accent/10`, `blur-3xl`, 8s scale/opacity loop). Content `relative container mx-auto px-4 py-6 md:py-8`, centered `max-w-4xl mx-auto text-center space-y-6`.
   - H1 `text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground` with `text-green-500` and `text-blue-500` highlight spans.
   - Lead `text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed`.
   - Feature pills `flex flex-wrap justify-center gap-3 pt-2`; each `flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/50 border border-blue-100 hover:border-blue-400 dark:bg-blue-900/20 dark:border-blue-800 dark:hover:border-blue-600 transition-colors` with `w-4 h-4 text-blue-600 dark:text-blue-400` icon and `text-sm font-medium` label.
   - Motion: container fade/slide (`opacity 0→1, y 20→0, 0.6s`), H1 (`y -10→0`, delay .3), lead (fade, delay .4), pills row (`y 10→0`, delay .5), each pill (`scale .8→1, 0.4s, delay 0.6 + index*0.1`).
4. **AuthSection** (`components/landing/AuthSection.tsx`): centered auth entry point.
5. **Features** (`components/landing/Features.tsx`): `py-12 relative overflow-hidden`; decorative `bg-grid-gray-100` masked layer (dark: `bg-grid-gray-700/25`); centered heading block (`mb-16`) with gradient H2 `bg-clip-text text-transparent bg-linear-to-r from-green-600 via-green-500 to-green-600 dark:from-green-400 dark:via-green-500 dark:to-green-400` and muted lead; then the feature-card grid (see Cards).
6. **GetStarted** (`components/landing/GetStarted.tsx`): secondary CTA block.
7. **CTA band** (`components/landing/CTA.tsx`): `py-24 relative overflow-hidden`; background `absolute inset-0 bg-linear-to-r from-blue-900 to-blue-800 opacity-70 dark:opacity-60`; content `container mx-auto px-4 text-center relative z-10`; H2 `text-4xl md:text-5xl font-bold text-white mb-6`; lead `text-xl text-blue-100 mb-10 max-w-3xl mx-auto`; button pair `h-16 px-10 text-lg rounded-full shadow-2xl hover:scale-105 font-semibold border-1 border-white/30` — `variant="success"` primary, `variant="secondary"` paired; small-print `text-sm text-blue-100 mt-6 opacity-90`.
8. **PricingPlans** (`components/landing/PricingPlans.tsx`): pricing card grid.
9. **Footer** (`components/landing/Footer.tsx`): muted footer with link columns.

## Overlays

All overlay chrome lives in `src/index.css` as plain CSS classes plus shadcn `Sheet`/`Dialog`.

| Overlay                     | Spec                                                                                                                                                                                                                                                                                                                                                                     |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Drawer (`.drawer-content`)  | right-aligned, `max-width 420px`, background `var(--background)` at 85% + `backdrop-filter: blur(24px) saturate(180%)`, left border `var(--border)`, `slideInRight .4s cubic-bezier(.2,.8,.2,1)`, shadow `-20px 0 50px rgba(0,0,0,.2)`, header padding 10px with 1.25rem/600 title (`letter-spacing -0.02em`) and 32px circular `.close-button` (muted bg, accent hover) |
| Modal (`.modal-content`)    | scrim `rgba(0,0,0,.6)` + `blur(8px)`, `var(--background)`, radius 20px, 1px `var(--border)` border, `modalScaleUp .3s cubic-bezier(.16,1,.3,1)`, shadow `0 50px 100px -20px rgba(0,0,0,.3)`; **≤768px**: full-screen `100dvh`, no radius/border                                                                                                                          |
| Confirm (`.confirm-dialog`) | scrim `rgba(0,0,0,.7)` + `blur(4px)`, radius 16px, padding 24px, `max-width 400px`, title 1.1rem/600, body `var(--muted-foreground)` `line-height 1.5`, actions right-aligned `gap 12px`, `scaleIn .2s`                                                                                                                                                                  |
| Sheet (mobile nav)          | shadcn `SheetContent`, slides from right                                                                                                                                                                                                                                                                                                                                 |

Z-index scale: header `50`, modal `2000`, drawer `3000`, confirm `4000`.

> Token-alpha caveat: these classes predate the full-`hsl()` token format — `hsl(var(--token) / 0.x)` no longer resolves (tokens aren't channel triplets). When touching them, use `color-mix(in srgb, var(--background) 85%, transparent)` or plain `var(--token)`.

## Motion

| Use                             | Spec                                                                                                                                                                                                                         |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hero entrance                   | Framer Motion `opacity` + `y` 10–20px, 0.4–0.6s, staggered delays (Landing anatomy)                                                                                                                                          |
| Ambient orbs                    | `motion.div` 8s `easeInOut` scale/opacity loop, `blur-3xl`, `pointer-events-none`                                                                                                                                            |
| Animated card                   | `<Card variant="animated">`: fade/slide entrance + `whileHover y:-2` (0.1s)                                                                                                                                                  |
| Hover scale                     | `hover:scale-105 transition-all duration-300` (feature cards, CTA); icon tile `group-hover:scale-110`                                                                                                                        |
| Controls                        | `transition-colors` (~150ms)                                                                                                                                                                                                 |
| CSS keyframes (`src/index.css`) | `dramaticEntrance` (blur 20px + translateY 40px + scale .95 → settled), `slideInRight`, `fadeIn`, `scaleIn` (.95→1), `ambientFadeIn`, `modalFadeIn`, `modalScaleUp`, `spin`/`animate-spin`, `accordion-down/up .2s ease-out` |
| Animated border                 | `@property --animated-button-angle` conic ring, 4s linear infinite                                                                                                                                                           |

Rules: durations 0.2–0.6s; motion clarifies entrance/selection only; respect `prefers-reduced-motion` for decorative loops (animated border, orbs).

## Scrollbars & Autofill

Thin, theme-aware scrollbars in `@layer base`: 10px, transparent track, pill thumb (2px transparent border + `background-clip: content-box`), hover darkens, Firefox `scrollbar-width: thin`. Thumb color should reference `var(--muted-foreground)` via `color-mix` (see token-alpha caveat in Overlays).

Autofill reset forces black-on-white (light) / white-on-`#09090b` (dark) so Chrome's autofill styling doesn't break the theme.

## Accessibility

- Visible focus ring on every control (`focus-visible:ring-2 ring-ring` / `ring-primary`, offset 2).
- Icon-only buttons need `sr-only` text or `aria-label` plus `title`.
- White text on green-600 / blue-600 fills; muted text only on background/card surfaces.
- Touch targets ≥ 40px (buttons `h-10`); prefer `lg`/`h-16` for primary mobile CTAs.
- Color is never the only status signal — pair with an icon, text, or toast.

## Do''s and Don''ts

| Do                                                                                                                                              | Don''t                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Use semantic token names (`bg-background`, `text-foreground`) so both themes work automatically                                                 | Don''t hardcode hex values or Tailwind fixed-shade classes (e.g. `bg-white`, `text-gray-900`) directly in components                                           |
| Edit `src/index.css` `:root` and `.dark` blocks to change theme colors globally                                                                 | Don''t create or edit a `tailwind.config.ts` - this project uses Tailwind v4 CSS-first config                                                                  |
| Add new palette tokens inside the `@theme { }` block in `src/index.css`                                                                         | Don''t invent new CSS variables without adding them to both `:root` and `.dark`, and mapping them in `@theme`                                                  |
| Use `dark:` Tailwind prefix only for values that can''t be expressed as semantic tokens                                                         | Don''t use `dark:bg-white` / `dark:text-black` patterns when a token already covers it                                                                         |
| Maintain WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large text) in both themes                                                     | Don''t mix rounded and sharp corners in the same view                                                                                                          |
| Keep status colors (success/error/info/warning) and primary blue consistent across both themes                                                  | Don''t create theme-specific variants of brand colors                                                                                                          |
| Use `color-mix(in srgb, var(--token) 50%, transparent)` or Tailwind `/50` modifiers for opacity variants                                        | Don''t write `hsl(var(--token) / 0.5)` - tokens are full `hsl()` values, not channel triplets; the wrapper produces invalid CSS                                |
| Test every new component in both light and dark mode before committing                                                                          | Don''t assume light-mode-only visual review is sufficient                                                                                                      |
| Use green (`primary`/`success` button variants, `bg-green-600`) for the main action and blue (`secondary`, `bg-blue-600`) for the paired action | Don''t mix green and blue for the same action level, and don''t use `bg-primary` when you mean the green action button                                         |
| Keep controls pill-shaped (`rounded-full`) and cards `rounded-2xl` with the thin `border` token                                                 | Don''t mix rounded and sharp corners in the same view, or put large radii on small inputs (pills excepted)                                                     |
| Provide both light and dark classes wherever a raw palette color is used (`text-blue-600 dark:text-blue-400`)                                   | Don''t hardcode `#fff`/`#000` surfaces or unsemantic grays in app screens                                                                                      |
| Use `cn()` and cva for variants; `asChild` + `Link` for navigation buttons; shared toast helpers for notifications                              | Don''t use `React.FC`, raw `<button>`/`<input>`, or raw `toast`/`alert`                                                                                        |
| Use purple/indigo scales from `src/styling/colors.ts` ONLY for user-selectable color pickers                                                    | Don''t use purple or variations (violet, indigo, fuchsia, magenta, lavender) in UI styling, gradients, shadows, charts, or accents unless explicitly requested |
| Use [tweakcn.com](https://tweakcn.com/) to preview and generate shadcn/ui theme variations                                                      | Don''t copy v3 config patterns (e.g. `tailwind.config.ts` or `@tailwind` directives) into this codebase                                                        |

## Responsive Evidence

See the breakpoint table in [Layout](#responsive-breakpoints). Additional rules:

- `prefers-reduced-motion`: honor it for decorative loops (animated border ring, hero orbs, shimmer effects).
- Mobile modals go full-screen at `≤768px` (`100dvh`, no radius) — design overlay content accordingly.
- Test viewports: 375px, 768px, 1440px.

## Agent Prompt Guide

### Example Component Prompts

- Create button component using validated primary color role and spacing tokens.
- Create card component with mapped radius role and evidence-backed elevation.
- Create form input component using inferred typography hierarchy and border roles.

### Iteration Guide

1. Start with extracted palette and typography roles only.
2. Map spacing and radius directly from token tables before visual polish.
3. Apply component patterns one section at a time and compare against source intent.
4. Keep elevation claims tied to explicit evidence in output.
5. Iterate with smallest diffs and re-check section hierarchy after each change.

### Tailwind v4 Quick Reference for Agents

When generating or modifying CSS/components in this project:

```css
/* v4: Import - replaces @tailwind directives */
@import "" tailwindcss "";

/* v4: Dark mode - replaces darkMode: [''class''] in tailwind.config.ts */
@custom-variant dark (&:is(.dark *));

/* v4: Define tokens + generate utility classes */
@theme {
  --color-primary: hsl(var(--primary));
  --radius-lg: var(--radius);
}

/* v4: Custom utilities */
@utility container {
  margin-inline: auto;
  padding-inline: 2rem;
}

/* v4: Extend with new semantic token */
@theme {
  --color-brand-green: #16a34a;
}
/* Now bg-brand-green, text-brand-green, etc. are available */
```

```css
/* v3 patterns - do NOT use in this project */
@tailwind base;
@tailwind components;
@tailwind utilities;
/* and no tailwind.config.ts / tailwind.config.js */
```
