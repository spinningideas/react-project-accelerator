---
version: alpha
name: "Dual Theme Clean Modern"
description: "Supports light and dark themes via Tailwind CSS v4 class-based dark mode. Tokens are full hsl() CSS custom properties in src/index.css. @theme inline maps them to Tailwind utility classes. Dark mode activates via .dark class on the root element, toggled through ThemeContext."
dark-mode-strategy: "@custom-variant dark (&:is(.dark *))" # Tailwind v4 CSS-first - no tailwind.config.ts
token-pattern: "full hsl() values in :root/.dark — mapped via @theme inline"
theme-file: "frontend/src/index.css"
tailwind-version: "4.x"

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
    muted-foreground: "hsl(0 0% 40%) — #666666"
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
    muted-foreground: "hsl(0 0% 50.20%) — #808080"
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

brand-colors: # same in both themes
  brand-blue-dark: "#2563eb"
  brand-blue-primary: "#3c83f6"
  brand-green-dark: "#16a34a"
  brand-green-light: "#4ade80"
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

| Concern    | Tailwind v3  | Tailwind v4 |
| ----------------------- | ------------------------------------- | ---------------------------------------------- |
| **Config file**         | `tailwind.config.ts` (JavaScript)     | None - config is in CSS  |
| **Theme tokens**        | `theme.extend` object    | `@theme { --variable: value; }` in CSS         |
| **Dark mode**  | `darkMode: ['class']` in config       | `@custom-variant dark (&:is(.dark *));` in CSS |
| **PostCSS plugin**      | `tailwindcss`   | `@tailwindcss/postcss`   |
| **CSS import** | `@tailwind base/components/utilities` | `@import "tailwindcss";` |
| **Color palette**       | RGB/Hex based   | OKLCH by default (HSL still fully supported)   |
| **Engine** | JavaScript  | Rust-based Oxide (3-10x faster builds)         |
| **`autoprefixer`**      | Required in PostCSS      | Built-in - remove from PostCSS    |
| **Content detection**   | `content: [...]` array   | Automatic - scans all source files |
| **Gray/Slate override** | Separate palette in config   | Overridden via `--color-gray-*` in `@theme`    |

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

| Concern  | Implementation        |
| --------------------- | ------------------------------------------------------------------------- |
| **Dark mode variant** | `@custom-variant dark (&:is(.dark *));` in `src/index.css`   |
| **Token file**        | `src/index.css` - `:root` for light, `.dark` for dark        |
| **Toggle**   | `ThemeContext` + `ThemeToggle` component sets/removes `.dark` on `<html>` |
| **Persistence**       | Theme choice stored via `LocalCacheService` in `localStorage` |
| **Default**  | Configurable via `defaultTheme` prop on `ThemeProvider` in `App.tsx`      |

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
- Brand greens (#16a34a, #4ade80) and blues (#2563eb, #3c83f6)
- `--radius` (1.35rem base)
- Font variables (`--font-sans`, `--font-mono`, `--font-serif`)
- All spacing tokens

## Colors

All tokens are defined in `src/index.css`. Edit the `:root` and `.dark` blocks there — there is **no** `tailwind.config.ts`. Tailwind v4 utility classes (`bg-background`, `text-foreground`, etc.) are generated from the `@theme inline` block.

### Semantic Token Reference

| CSS Variable  | Tailwind Class   | Light Value    | Light Hex   | Dark Value     | Dark Hex    | Usage |
| -------------------------- | ----------------------------- | --------------------------- | ----------- | --------------------------- | ----------- | --------------------------- |
| `--background` | `bg-background`  | `hsl(0 0% 100%)`   | #ffffff     | `hsl(0 0% 10.20%)` | #1a1a1a     | Page & section background   |
| `--foreground` | `text-foreground` | `hsl(0 0% 20%)` | #333333     | `hsl(0 0% 85.10%)` | #d9d9d9     | Primary body & heading text |
| `--card`      | `bg-card`        | `hsl(0 0% 100%)`   | #ffffff     | `hsl(0 0% 12.55%)` | #202020     | Card surface   |
| `--card-foreground`        | `text-card-foreground`        | `hsl(0 0% 20%)` | #333333     | `hsl(0 0% 85.10%)` | #d9d9d9     | Card text      |
| `--primary`   | `bg-primary`     | `hsl(209.84 78.72% 46.08%)` | **#1a7fc1** | `hsl(209.84 78.72% 46.08%)` | **#1a7fc1** | Primary CTA, links |
| `--primary-foreground`     | `text-primary-foreground`     | `hsl(0 0% 100%)`   | #ffffff     | `hsl(0 0% 96.08%)` | #f5f5f5     | Text on primary |
| `--secondary` | `bg-secondary`   | `hsl(205.38 86.67% 94.12%)` | #daeefb     | `hsl(0 0% 18.82%)` | #303030     | Secondary buttons, chips    |
| `--secondary-foreground`   | `text-secondary-foreground`   | `hsl(0 0% 20%)` | #333333     | `hsl(0 0% 96.08%)` | #f5f5f5     | Text on secondary  |
| `--muted`     | `bg-muted`       | `hsl(205.38 86.67% 94.12%)` | #daeefb     | `hsl(0 0% 16.47%)` | #2a2a2a     | Subtle backgrounds |
| `--muted-foreground`       | `text-muted-foreground`       | `hsl(0 0% 40%)` | #666666     | `hsl(0 0% 50.20%)` | #808080     | Captions, placeholders      |
| `--accent`    | `bg-accent`      | `hsl(211.93 80.28% 41.76%)` | #1566b3     | `hsl(211.93 80.28% 41.76%)` | #1566b3     | Hover states, active tints  |
| `--accent-foreground`      | `text-accent-foreground`      | `hsl(0 0% 100%)`   | #ffffff     | `hsl(0 0% 96.08%)` | #f5f5f5     | Text on accent |
| `--destructive`   | `bg-destructive` | `hsl(0 60% 50%)`   | **#cc3333** | `hsl(0 66.30% 63.92%)`      | **#e05555** | Errors, delete actions      |
| `--destructive-foreground` | `text-destructive-foreground` | `hsl(0 0% 100%)`   | #ffffff     | `hsl(0 0% 100%)`   | #ffffff     | Text on destructive         |
| `--border`    | `border-border`  | `hsl(0 0% 81.57%)` | #d0d0d0     | `hsl(0 0% 20.78%)` | #353535     | Borders, dividers  |
| `--input`     | `border-input`   | `hsl(0 0% 87.84%)` | #e0e0e0     | `hsl(0 0% 18.82%)` | #303030     | Input borders  |
| `--ring`      | `ring-ring`      | `hsl(0 0% 37.65%)` | #606060     | `hsl(0 0% 62.75%)` | #a0a0a0     | Focus rings    |

### Status Colors (Same in Both Themes)

| Token   | CSS Variable      | Hex     | Usage     |
| ------- | ----------------- | ------- | ----------------------------------- |
| Success | `--success-color` | #22c55e | Success toasts, confirmation states |
| Error   | `--error-color`   | #ef4444 | Error toasts, destructive actions   |
| Info    | `--info-color`    | #3b82f6 | Info toasts, informational states   |
| Warning | `--warning-color` | #f59e0b | Warning toasts, caution states      |

### Brand Colors (Same in Both Themes)

| Name  | Hex     | Usage  |
| ------------------ | ------- | -------------------------------------------- |
| Brand Blue Primary | #3c83f6 | Sign In button, nav buttons, links  |
| Brand Blue Dark    | #2563eb | Hover/active blue interactions, footer links |
| Brand Green Dark   | #16a34a | Get Started CTA button, green headings       |
| Brand Green Light  | #4ade80 | Hero decorative accents, heading highlights  |

### Gray Palette (v4 @theme Override)

Both `gray` and `slate` are overridden in the `@theme` block of `src/index.css` using neutral true-gray values. Tailwind v4 ships with an OKLCH-based default palette; this project intentionally overrides `--color-gray-*` and `--color-slate-*` to maintain the neutral true-gray scale:

| Scale | Hex     | Notes   |
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

## Typography

Typography uses Inter (sans), Georgia (serif), and Fira Code (mono) via CSS `--font-*` variables registered in `@theme inline`. Keep hierarchy mapped to these token rows before adding decorative type styles.

Weight range spans bold, semi-bold, medium, regular. Sizes range from 14px to 60px.

### Font Variables

| Variable       | Value   | Tailwind Token | Usage   |
| -------------- | --------------------------------------------- | -------------- | ----------------------------- |
| `--font-sans`  | `Inter, ui-sans-serif, sans-serif, system-ui` | `font-sans`    | All UI text      |
| `--font-serif` | `Georgia, serif`    | `font-serif`   | Long-form / editorial content |
| `--font-mono`  | `Fira Code, monospace`  | `font-mono`    | Code blocks, technical labels |

### Font Roles

- **Headline Font**: Inter (sans)
- **Body Font**: Inter (sans)
- **Code Font**: Fira Code (mono)

### Type Scale Evidence

| Role         | Font      | Size | Weight | Line Height | Letter Spacing | Notes  |
| -------------------------------------- | --------- | ---- | ------ | ----------- | -------------- | --------------- |
| Hero section main heading | Inter     | 60px | 700    | 60px        | -1.5px         | Extracted token |
| Major section headings    | Inter     | 48px | 700    | 48px        | normal         | Extracted token |
| Sub-section headings      | Inter     | 36px | 700    | 40px        | normal         | Extracted token |
| Card and feature block titles | Inter     | 20px | 700    | 28px        | -0.5px         | Extracted token |
| Card subtitles / emphasized labels     | Inter     | 20px | 600    | 28px        | -0.5px         | Extracted token |
| Primary body copy         | Inter     | 16px | 400    | 24px        | normal         | Extracted token |
| Hero subtitle / lead paragraph         | Inter     | 16px | 400    | 26px        | normal         | Extracted token |
| Button labels, badge text, nav items   | Inter     | 14px | 500    | 20px        | normal         | Extracted token |
| Secondary labels and helper text       | Inter     | 14px | 400    | 20px        | normal         | Extracted token |
| Code snippets, technical inline labels | Fira Code | 14px | 400    | 20px        | normal         | Extracted token |

## Layout

Responsive system uses 1 breakpoint tier(s): desktop.

### Responsive Strategy

- **desktop (Unknown)**: Expand layout density and horizontal composition for wide viewports.

### Spacing System

| Token      | Value | Px  | Notes      |
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

| Token | Tailwind Class | Value         |
| -------------- | -------------- | ----------------------------------------------------------------- |
| `--shadow-2xs` | `shadow-2xs`   | `0px 0px 0px 0px hsl(0 0% 20% / 0.03)`  |
| `--shadow-xs`  | `shadow-xs`    | `0px 0px 0px 0px hsl(0 0% 20% / 0.03)`  |
| `--shadow-sm`  | `shadow-sm`    | `0px 0px 0px 0px / 0.05), 0px 1px 2px -1px hsl(0 0% 20% / 0.05)`  |
| `--shadow`     | `shadow`       | `0px 0px 0px 0px / 0.05), 0px 1px 2px -1px hsl(0 0% 20% / 0.05)`  |
| `--shadow-md`  | `shadow-md`    | `0px 0px 0px 0px / 0.05), 0px 2px 4px -1px hsl(0 0% 20% / 0.05)`  |
| `--shadow-lg`  | `shadow-lg`    | `0px 0px 0px 0px / 0.05), 0px 4px 6px -1px hsl(0 0% 20% / 0.05)`  |
| `--shadow-xl`  | `shadow-xl`    | `0px 0px 0px 0px / 0.05), 0px 8px 10px -1px hsl(0 0% 20% / 0.05)` |
| `--shadow-2xl` | `shadow-2xl`   | `0px 0px 0px 0px hsl(0 0% 20% / 0.13)`  |

> Shadow color is `hsl(0 0% 20% / opacity)` — a near-black neutral. Use `shadow-sm` for cards, `shadow-md` for popovers, `shadow-lg`/`shadow-xl` for modals/drawers.

### Interaction Signals

| Theme | Signal | Evidence       |
| ----- | --------------- | ----------------------------------------------------- |
| Light | backdrop-filter | blur(4px) ; blur(8px)       |
| Light | outline-color   | rgb(13, 13, 13) ; rgb(51, 51, 51) ; rgb(74, 222, 128) |
| Light | outline-width   | 3px   |
| Light | outline-offset  | 0px   |

## Shapes

Shape language maps to the radius scale derived from `--radius: 1.35rem`. All radius tokens are computed relative to this base. Keep component corners consistent with the role mapping below.

### Radius Roles

| Token         | Tailwind Class | Value | Role Mapping        |
| ------------- | -------------- | ------------------------------ | ------------------- |
| `--radius-xl` | `rounded-xl`   | `calc(1.35rem + 4px)` ≈ 25.6px | Modals, large cards |
| `--radius-lg` | `rounded-lg`   | `1.35rem` ≈ 21.6px | Cards, panels       |
| `--radius-md` | `rounded-md`   | `calc(1.35rem - 2px)` ≈ 19.6px | Buttons, inputs     |
| `--radius-sm` | `rounded-sm`   | `calc(1.35rem - 4px)` ≈ 17.6px | Badges, chips       |
| pill | `rounded-full` | `9999px` | Tags, avatars       |

### Geometry Evidence

| Radius Token  | Shape  | Units |
| ------------- | ------ | ----- |
| radius-pill   | 9999px | px    |
| radius-card   | 16px   | px    |
| radius-medium | 12px   | px    |
| radius-small  | 6px    | px    |

## Components

(none detected)

## Do''s and Don''ts

| Do    | Don''t        |
| ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Use semantic token names (`bg-background`, `text-foreground`) so both themes work automatically | Don''t hardcode hex values or Tailwind fixed-shade classes (e.g. `bg-white`, `text-gray-900`) directly in components |
| Edit `src/index.css` `:root` and `.dark` blocks to change theme colors globally    | Don''t create or edit a `tailwind.config.ts` - this project uses Tailwind v4 CSS-first config  |
| Add new palette tokens inside the `@theme { }` block in `src/index.css`   | Don''t invent new CSS variables without adding them to both `:root` and `.dark`, and mapping them in `@theme`        |
| Use `dark:` Tailwind prefix only for values that can''t be expressed as semantic tokens         | Don''t use `dark:bg-white` / `dark:text-black` patterns when a token already covers it     |
| Maintain WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large text) in both themes     | Don''t mix rounded and sharp corners in the same view   |
| Keep status colors (success/error/info/warning) and primary blue consistent across both themes  | Don''t create theme-specific variants of brand colors   |
| Use `hsl(var(--token) / 0.5)` for opacity variants of tokens | Don''t add raw `rgba()` values - keep everything in the HSL token system      |
| Test every new component in both light and dark mode before committing | Don''t assume light-mode-only visual review is sufficient        |
| Use [tweakcn.com](https://tweakcn.com/) to preview and generate shadcn/ui theme variations      | Don''t copy v3 config patterns (e.g. `tailwind.config.ts` or `@tailwind` directives) into this codebase |

## Responsive Evidence

### Breakpoints

| Name         | Width   | Key Changes         |
| ------------ | ------- | -------------------------------- |
| Breakpoint 1 | Unknown | (prefers-reduced-motion: reduce) |

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
