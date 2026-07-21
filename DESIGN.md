---
version: alpha
name: "Dual Theme Design System"
description: "Supports light and dark themes via Tailwind CSS v4 class-based dark mode. All semantic tokens are CSS custom properties in src/index.css using HSL. Dark mode activates via .dark class on the root element, toggled through ThemeContext. Tailwind v4 palette tokens are registered in the @theme block."
dark-mode-strategy: "@custom-variant dark (&:is(.dark *))" # Tailwind v4 CSS-first - no tailwind.config.ts
theme-file: "frontend/src/index.css"
tailwind-version: "4.x"

light-theme:
  colors:
    background:           "hsl(0 0% 100%)    � #ffffff"
    foreground:           "hsl(0 0% 5%)      � #0d0d0d"
    card:                 "hsl(0 0% 100%)    � #ffffff"
    card-foreground:      "hsl(0 0% 20%)     � #333333"
    popover:              "hsl(0 0% 100%)    � #ffffff"
    popover-foreground:   "hsl(0 0% 20%)     � #333333"
    primary:              "hsl(217 91% 60%)  � #3b82f6"
    primary-foreground:   "hsl(0 0% 100%)    � #ffffff"
    secondary:            "hsl(220 14% 96%)  � #f1f5f9"
    secondary-foreground: "hsl(217 19% 35%)  � #4a5568"
    muted:                "hsl(210 20% 98%)  � #f8fafc"
    muted-foreground:     "hsl(220 9% 46%)   � #6b7280"
    accent:               "hsl(199 95% 94%)  � #e0f2fe"
    accent-foreground:    "hsl(225 73% 33%)  � #1e3a8a"
    destructive:          "hsl(0 84% 60%)    � #ef4444"
    destructive-foreground: "hsl(0 0% 100%) � #ffffff"
    border:               "hsl(220 13% 91%)  � #e2e8f0"
    input:                "hsl(220 13% 91%)  � #e2e8f0"
    ring:                 "hsl(217 91% 60%)  � #3b82f6"
    sidebar-background:   "hsl(210 20% 98%)  � #f8fafc"
  status:
    success:  "hsl(142 71% 45%) � #22c55e"
    error:    "hsl(0 84% 60%)   � #ef4444"
    info:     "hsl(217 91% 60%) � #3b82f6"
    warning:  "hsl(38 92% 50%)  � #f59e0b"

dark-theme:
  colors:
    background:           "hsl(0 0% 9%)      � #171717"
    foreground:           "hsl(0 0% 98%)     � #fafafa"
    card:                 "hsl(0 0% 15%)     � #262626"
    card-foreground:      "hsl(0 0% 90%)     � #e5e5e5"
    popover:              "hsl(0 0% 15%)     � #262626"
    popover-foreground:   "hsl(0 0% 90%)     � #e5e5e5"
    primary:              "hsl(217 91% 60%)  � #3b82f6  ? unchanged"
    primary-foreground:   "hsl(0 0% 100%)    � #ffffff  ? unchanged"
    secondary:            "hsl(0 0% 15%)     � #262626"
    secondary-foreground: "hsl(0 0% 90%)     � #e5e5e5"
    muted:                "hsl(0 0% 12%)     � #1f1f1f"
    muted-foreground:     "hsl(0 0% 64%)     � #a3a3a3"
    accent:               "hsl(225 73% 33%)  � #1e3a8a"
    accent-foreground:    "hsl(214 95% 87%)  � #bfdbfe"
    destructive:          "hsl(0 84% 60%)    � #ef4444  ? unchanged"
    destructive-foreground: "hsl(0 0% 100%) � #ffffff  ? unchanged"
    border:               "hsl(0 0% 25%)     � #404040"
    input:                "hsl(0 0% 25%)     � #404040"
    ring:                 "hsl(217 91% 60%)  � #3b82f6  ? unchanged"
    sidebar-background:   "hsl(0 0% 9%)      � #171717"
  status:
    success:  "hsl(142 71% 45%) � #22c55e  ? unchanged"
    error:    "hsl(0 84% 60%)   � #ef4444  ? unchanged"
    info:     "hsl(217 91% 60%) � #3b82f6  ? unchanged"
    warning:  "hsl(38 92% 50%)  � #f59e0b  ? unchanged"

brand-colors: # same in both themes
  brand-blue-dark:    "#2563eb"
  brand-blue-primary: "#3c83f6"
  brand-green-dark:   "#16a34a"
  brand-green-light:  "#4ade80"
typography:
  hero-display:
    fontFamily: "ui-sans-serif"
    fontSize: "60px"
    fontWeight: "700"
    lineHeight: "60px"
    letterSpacing: "-1.5px"
  section-heading-large:
    fontFamily: "ui-sans-serif"
    fontSize: "48px"
    fontWeight: "700"
    lineHeight: "48px"
  section-heading-medium:
    fontFamily: "ui-sans-serif"
    fontSize: "36px"
    fontWeight: "700"
    lineHeight: "40px"
  card-heading:
    fontFamily: "ui-sans-serif"
    fontSize: "20px"
    fontWeight: "700"
    lineHeight: "28px"
    letterSpacing: "-0.5px"
  card-subheading:
    fontFamily: "ui-sans-serif"
    fontSize: "20px"
    fontWeight: "600"
    lineHeight: "28px"
    letterSpacing: "-0.5px"
  body-default:
    fontFamily: "ui-sans-serif"
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "24px"
  body-large:
    fontFamily: "ui-sans-serif"
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "26px"
  label-medium:
    fontFamily: "ui-sans-serif"
    fontSize: "14px"
    fontWeight: "500"
    lineHeight: "20px"
  label-small:
    fontFamily: "ui-sans-serif"
    fontSize: "14px"
    fontWeight: "400"
    lineHeight: "20px"
  code-label:
    fontFamily: "ui-monospace"
    fontSize: "14px"
    fontWeight: "400"
    lineHeight: "20px"
rounded:
  radius-pill: "9999px"
  radius-card: "16px"
  radius-medium: "12px"
  radius-small: "6px"
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
---

## Overview

Dual-theme design system for React Project Accelerator. All color tokens are CSS custom properties (`hsl(...)`) defined in `src/index.css`. Dark mode is class-based � Tailwind v4 applies `.dark` to the root element via `ThemeContext`, toggled by `ThemeToggle` in the nav.

This project runs **Tailwind CSS v4** with a **CSS-first configuration** � there is no `tailwind.config.ts`. All theme tokens, dark mode variants, and palette overrides live directly in `src/index.css`.

Light theme uses `#ffffff` page surface. Dark theme uses `#171717` � a near-black neutral, not pure black, for comfortable reading. **Primary blue (`#3b82f6`), brand greens, and all status colors remain identical across both themes.** Only surface, foreground, border, muted, and accent tokens change.

This system uses a 4px base grid with scale values 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 112, 176, 240, 288.

**Signature traits:**
- Core token rhythm: Consistent color, spacing, and radius across both themes.
- Single source of truth: Edit `src/index.css` `:root` (light) and `.dark` (dark) to update all tokens app-wide.
- Use [tweakcn.com](https://tweakcn.com/) to visually generate a new shadcn/ui theme and paste the output into `src/index.css`.

## Tailwind v4 Architecture

This project uses **Tailwind CSS v4**, which represents a significant architectural shift from v3. Understanding these changes is essential for maintaining and extending the design system.

### v3 ? v4: Key Changes

| Concern | Tailwind v3 | Tailwind v4 |
|---------|-------------|-------------|
| **Config file** | `tailwind.config.ts` (JavaScript) | None � config is in CSS |
| **Theme tokens** | `theme.extend` object | `@theme { --variable: value; }` in CSS |
| **Dark mode** | `darkMode: ['class']` in config | `@custom-variant dark (&:is(.dark *));` in CSS |
| **PostCSS plugin** | `tailwindcss` | `@tailwindcss/postcss` |
| **CSS import** | `@tailwind base/components/utilities` | `@import "tailwindcss";` |
| **Color palette** | RGB/Hex based | OKLCH by default (HSL still fully supported) |
| **Engine** | JavaScript | Rust-based Oxide (3�10x faster builds) |
| **`autoprefixer`** | Required in PostCSS | Built-in � remove from PostCSS |
| **Content detection** | `content: [...]` array | Automatic � scans all source files |
| **Gray/Slate override** | Separate palette in config | Overridden via `--color-gray-*` in `@theme` |

### Current Setup (v4)

**PostCSS** (`postcss.config.js`):
```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
```
> No `autoprefixer` needed � Tailwind v4 handles vendor prefixes natively.

**CSS entry** (`src/index.css`):
```css
@import 'tailwindcss';
@import 'tw-animate-css';

@custom-variant dark (&:is(.dark *));
```
> `@import "tailwindcss"` replaces the v3 `@tailwind base/components/utilities` directives.

**Palette overrides** (in `@theme` block, `src/index.css`):
```css
@theme {
  --color-gray-50: #fafafa;
  /* ... */
  --color-border: hsl(var(--border));
  --color-primary: hsl(var(--primary));
  --radius-lg: var(--radius);
}
```
> `@theme` is v4's CSS-first replacement for `tailwind.config.ts ? theme.extend`. Defining `--color-primary` here automatically generates `bg-primary`, `text-primary`, `border-primary`, etc.

## Theme System

### How It Works

| Concern | Implementation |
|---------|----------------|
| **Dark mode variant** | `@custom-variant dark (&:is(.dark *));` in `src/index.css` |
| **Token file** | `src/index.css` � `:root` for light, `.dark` for dark |
| **Toggle** | `ThemeContext` + `ThemeToggle` component sets/removes `.dark` on `<html>` |
| **Persistence** | Theme choice stored via `LocalCacheService` in `localStorage` |
| **Default** | Configurable via `defaultTheme` prop on `ThemeProvider` in `App.tsx` |

### Token Anatomy

Semantic tokens follow the pattern `--token-name: H S% L%` (no commas, raw HSL channel values). They are consumed in the `@theme` block via `hsl(var(--token-name))`, and referenced in class-based utilities as `bg-primary`, `text-foreground`, etc.

```css
/* In @theme � maps HSL vars to Tailwind utility classes */
--color-background: hsl(var(--background));
--color-primary:    hsl(var(--primary));

/* In @layer base :root � light theme values */
--background: 0 0% 100%;
--primary:    217 91% 60%;

/* In @layer base .dark � dark theme overrides */
--background: 0 0% 9%;
--primary:    217 91% 60%;  /* unchanged */
```

**Opacity variants** use the native CSS `/` syntax:
```css
hsl(var(--primary) / 0.5)
```

### What Changes vs What Stays the Same

**Changes between light and dark:**
- `--background`, `--foreground` (page surface + text)
- `--card`, `--card-foreground` (surface elevation)
- `--popover`, `--popover-foreground`
- `--secondary`, `--secondary-foreground`
- `--muted`, `--muted-foreground`
- `--accent`, `--accent-foreground` (inverted � dark accent is deep navy, light accent is pale blue)
- `--border`, `--input` (borders tighten in dark: `#e2e8f0` ? `#404040`)
- `--sidebar-background`

**Stays the same in both themes:**
- `--primary` / `--primary-foreground` (#3b82f6 blue)
- `--destructive` (#ef4444 red)
- `--ring` (#3b82f6)
- All status colors: success, error, info, warning
- Brand greens (#16a34a, #4ade80) and blues (#2563eb, #3c83f6)
- `--radius` (6px base)
- All typography tokens
- All spacing tokens

## Colors

All tokens are defined in `src/index.css`. Edit there � there is **no** `tailwind.config.ts` � to change theme colors. Tailwind v4 semantic color names (`bg-background`, `text-foreground`, `border-border`, etc.) are generated from the `@theme` block, which wraps every semantic variable in `hsl(var(...))`.

### Semantic Token Reference

| CSS Variable | Tailwind Class | Light Value | Light Hex | Dark Value | Dark Hex | Usage |
|---|---|---|---|---|---|---|
| `--background` | `bg-background` | `0 0% 100%` | #ffffff | `0 0% 9%` | #171717 | Page & section background |
| `--foreground` | `text-foreground` | `0 0% 5%` | #0d0d0d | `0 0% 98%` | #fafafa | Primary body & heading text |
| `--card` | `bg-card` | `0 0% 100%` | #ffffff | `0 0% 15%` | #262626 | Card surface |
| `--card-foreground` | `text-card-foreground` | `0 0% 20%` | #333333 | `0 0% 90%` | #e5e5e5 | Card text |
| `--primary` | `bg-primary` | `217 91% 60%` | **#3b82f6** | `217 91% 60%` | **#3b82f6** | Primary CTA, links, ring |
| `--primary-foreground` | `text-primary-foreground` | `0 0% 100%` | #ffffff | `0 0% 100%` | #ffffff | Text on primary |
| `--secondary` | `bg-secondary` | `220 14% 96%` | #f1f5f9 | `0 0% 15%` | #262626 | Secondary buttons, chips |
| `--secondary-foreground` | `text-secondary-foreground` | `217 19% 35%` | #4a5568 | `0 0% 90%` | #e5e5e5 | Text on secondary |
| `--muted` | `bg-muted` | `210 20% 98%` | #f8fafc | `0 0% 12%` | #1f1f1f | Subtle backgrounds |
| `--muted-foreground` | `text-muted-foreground` | `220 9% 46%` | #6b7280 | `0 0% 64%` | #a3a3a3 | Captions, placeholders |
| `--accent` | `bg-accent` | `199 95% 94%` | #e0f2fe | `225 73% 33%` | #1e3a8a | Hover states, tints |
| `--accent-foreground` | `text-accent-foreground` | `225 73% 33%` | #1e3a8a | `214 95% 87%` | #bfdbfe | Text on accent |
| `--destructive` | `bg-destructive` | `0 84% 60%` | **#ef4444** | `0 84% 60%` | **#ef4444** | Errors, delete actions |
| `--border` | `border-border` | `220 13% 91%` | #e2e8f0 | `0 0% 25%` | #404040 | Borders, dividers |
| `--input` | `border-input` | `220 13% 91%` | #e2e8f0 | `0 0% 25%` | #404040 | Input borders |
| `--ring` | `ring-ring` | `217 91% 60%` | #3b82f6 | `217 91% 60%` | #3b82f6 | Focus rings |

### Status Colors (Same in Both Themes)

| Token | CSS Variable | Hex | Usage |
|---|---|---|---|
| Success | `--success-color` | #22c55e | Success toasts, confirmation states |
| Error | `--error-color` | #ef4444 | Error toasts, destructive actions |
| Info | `--info-color` | #3b82f6 | Info toasts, informational states |
| Warning | `--warning-color` | #f59e0b | Warning toasts, caution states |

### Brand Colors (Same in Both Themes)

| Name | Hex | Usage |
|---|---|---|
| Brand Blue Primary | #3c83f6 | Sign In button, nav buttons, links |
| Brand Blue Dark | #2563eb | Hover/active blue interactions, footer links |
| Brand Green Dark | #16a34a | Get Started CTA button, green headings |
| Brand Green Light | #4ade80 | Hero decorative accents, heading highlights |

### Gray Palette (v4 @theme Override)

Both `gray` and `slate` are overridden in the `@theme` block of `src/index.css` using neutral true-gray values. Tailwind v4 ships with an OKLCH-based default palette; this project intentionally overrides `--color-gray-*` and `--color-slate-*` to maintain the neutral true-gray scale:

| Scale | Hex | Notes |
|---|---|---|
| 50 | #fafafa | Near white |
| 100 | #f5f5f5 | Card surfaces |
| 200 | #eeeeee | Subtle dividers |
| 300 | #e0e0e0 | Border light |
| 400 | #bdbdbd | Disabled states |
| 500 | #9e9e9e | Placeholder text |
| 600 | #757575 | Secondary icons |
| 700 | #616161 | Dense body text |
| 800 | #424242 | Dark surface |
| 900 | #212121 | Near black |
| 950 | #121212 | Deepest dark |

## Typography

Typography uses ui-sans-serif, ui-monospace across extracted hierarchy roles. Keep hierarchy mapped to these token rows before adding decorative type styles.

Mixes ui-sans-serif and ui-monospace for visual contrast. Weight range spans bold, semi-bold, regular, medium. Sizes range from 14px to 60px.

### Font Roles
- **Headline Font**: ui-sans-serif
- **Body Font**: ui-sans-serif

### Type Scale Evidence
| Role | Font | Size | Weight | Line Height | Letter Spacing | Stack / Features | Notes |
|------|------|------|--------|-------------|----------------|------------------|-------|
| Hero section main heading � large display text | ui-sans-serif | 60px | 700 | 60px | -1.5px | ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji | Extracted token |
| Major section headings below the hero | ui-sans-serif | 48px | 700 | 48px | normal | ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji | Extracted token |
| Sub-section headings | ui-sans-serif | 36px | 700 | 40px | normal | ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji | Extracted token |
| Card and feature block titles | ui-sans-serif | 20px | 700 | 28px | -0.5px | ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji | Extracted token |
| Card subtitles and emphasized labels | ui-sans-serif | 20px | 600 | 28px | -0.5px | ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji | Extracted token |
| Primary body copy and paragraph text | ui-sans-serif | 16px | 400 | 24px | normal | ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji | Extracted token |
| Hero subtitle and lead paragraph text | ui-sans-serif | 16px | 400 | 26px | normal | ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji | Extracted token |
| Button labels, badge chip text, nav items | ui-sans-serif | 14px | 500 | 20px | normal | ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji | Extracted token |
| Secondary labels and helper text | ui-sans-serif | 14px | 400 | 20px | normal | ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji | Extracted token |
| Code snippets, technical inline labels | ui-monospace | 14px | 400 | 20px | normal | ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace | Extracted token |

## Layout

Responsive system uses 1 breakpoint tier(s): desktop.

### Responsive Strategy
- **desktop (Unknown)**: Expand layout density and horizontal composition for wide viewports.

### Spacing System
| Token | Value | Px | Notes |
|------|-------|----|-------|
| spacing-1 | 4px | 4 | Extracted spacing token |
| spacing-2 | 8px | 8 | Extracted spacing token |
| spacing-3 | 12px | 12 | Extracted spacing token |
| spacing-4 | 16px | 16 | Extracted spacing token |
| spacing-6 | 24px | 24 | Extracted spacing token |
| spacing-8 | 32px | 32 | Extracted spacing token |
| spacing-10 | 40px | 40 | Extracted spacing token |
| spacing-12 | 48px | 48 | Extracted spacing token |
| spacing-16 | 64px | 64 | Extracted spacing token |
| spacing-20 | 80px | 80 | Extracted spacing token |
| spacing-24 | 96px | 96 | Extracted spacing token |
| spacing-28 | 112px | 112 | Extracted spacing token |
| spacing-44 | 176px | 176 | Extracted spacing token |
| spacing-60 | 240px | 240 | Extracted spacing token |
| spacing-72 | 288px | 288 | Extracted spacing token |

## Elevation & Depth

Keep depth flat unless validated shadow or interaction evidence appears in the extraction payload. Do not invent shadows beyond this evidence boundary.

### Shadow Evidence
| Shadow Token | Layers | Details |
|--------------|--------|---------|
| n/a | 0 | No validated shadow payload |

### Interaction Signals
| Theme | Signal | Evidence |
|-------|--------|----------|
| Light | backdrop-filter | blur(4px) ; blur(8px) |
| Light | outline-color | rgb(13, 13, 13) ; rgb(51, 51, 51) ; rgb(74, 222, 128) |
| Light | outline-width | 3px |
| Light | outline-offset | 0px |
| Light | transform | matrix(1, 0, 0, 1, 168, 142) ; matrix(1, 0, 0, 1, 106.336, 24.4102) ; matrix(1, 0, 0, 1, 108, 79) |

## Shapes

Shape language maps directly to rounded tokens. Keep component corners consistent with the role mapping below before introducing bespoke geometry.

### Radius Roles
| Token | Value | Px | Role Mapping |
|------|-------|----|--------------| 
| radius-small | 6px | 6 | Subtle corner |
| radius-medium | 12px | 12 | Control corner |
| radius-card | 16px | 16 | Card corner |
| radius-pill | 9999px | 9999 | Large surface corner |

### Geometry Evidence
| Radius Token | Shape | Units |
|--------------|-------|-------|
| radius-pill | 9999px | px |
| radius-card | 16px | px |
| radius-medium | 12px | px |
| radius-small | 6px | px |

## Components

(none detected)

## Do''s and Don''ts

| Do | Don''t |
|----|---------|
| Use semantic token names (`bg-background`, `text-foreground`) so both themes work automatically | Don''t hardcode hex values or Tailwind fixed-shade classes (e.g. `bg-white`, `text-gray-900`) directly in components |
| Edit `src/index.css` `:root` and `.dark` blocks to change theme colors globally | Don''t create or edit a `tailwind.config.ts` � this project uses Tailwind v4 CSS-first config |
| Add new palette tokens inside the `@theme { }` block in `src/index.css` | Don''t invent new CSS variables without adding them to both `:root` and `.dark`, and mapping them in `@theme` |
| Use `dark:` Tailwind prefix only for values that can''t be expressed as semantic tokens | Don''t use `dark:bg-white` / `dark:text-black` patterns when a token already covers it |
| Maintain WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large text) in both themes | Don''t mix rounded and sharp corners in the same view |
| Keep status colors (success/error/info/warning) and primary blue consistent across both themes | Don''t create theme-specific variants of brand colors |
| Use `hsl(var(--token) / 0.5)` for opacity variants of tokens | Don''t add raw `rgba()` values � keep everything in the HSL token system |
| Test every new component in both light and dark mode before committing | Don''t assume light-mode-only visual review is sufficient |
| Use [tweakcn.com](https://tweakcn.com/) to preview and generate shadcn/ui theme variations | Don''t copy v3 config patterns (e.g. `tailwind.config.ts` or `@tailwind` directives) into this codebase |

## Responsive Evidence

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
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
/* v4: Import � replaces @tailwind directives */
@import ''tailwindcss'';

/* v4: Dark mode � replaces darkMode: [''class''] in tailwind.config.ts */
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
/* v3 patterns � do NOT use in this project */
@tailwind base;
@tailwind components;
@tailwind utilities;
/* and no tailwind.config.ts / tailwind.config.js */
```
