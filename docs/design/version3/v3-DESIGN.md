---
version: alpha
name: "v3 Light Clean Modern"
description: "v3 is a clean, light-mode marketing site. The design centers on a single typeface (Plus Jakarta Sans) spanning all weights, a vivid blue (#1570ef) as the sole brand accent, and generous whitespace with rounded cards (16px dominant radius). The hero pairs large display text with a product UI mockup screenshot, establishing trust through product visibility. Elevation is handled via subtle box-shadows rather than heavy borders, and semantic color tokens are consistently applied via CSS custom properties."
colors:
  link-blue: "#175cd3"
  surface-primary: "#ffffff"
  surface-tertiary: "#f5f5f5"
  surface-tint: "#eff8ff"
  accent-soft: "#2e90fa"
  brand-blue: "#1570ef"
  text-muted: "#a4a7ae"
  text-primary: "#181d27"
  text-secondary: "#535862"
  text-tertiary: "#717680"
  border-primary: "#d5d7da"
  border-secondary: "#e9eaeb"
typography:
  display-hero:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "44px"
    fontWeight: "600"
    lineHeight: "48.4px"
    letterSpacing: "-0.88px"
  h1-probe:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "52px"
    fontWeight: "600"
    lineHeight: "1.1"
    letterSpacing: "-0.88px"
  body-base:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "24px"
  body-small:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "14px"
    fontWeight: "400"
    lineHeight: "20px"
  label-medium:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "14px"
    fontWeight: "500"
    lineHeight: "20px"
  label-semibold:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "14px"
    fontWeight: "600"
    lineHeight: "20px"
    letterSpacing: "-0.16px"
  caption:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "12px"
    fontWeight: "600"
    lineHeight: "16px"
    letterSpacing: "-0.14px"
  body-semibold:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "16px"
    fontWeight: "600"
    lineHeight: "24px"
    letterSpacing: "-0.16px"
  code-mono:
    fontFamily: "Geist Mono"
    fontSize: "8px"
    fontWeight: "400"
    lineHeight: "12px"
    letterSpacing: "0.8px"
rounded:
  radius-md: "8px"
  radius-lg: "12px"
  radius-xl: "16px"
  radius-2xl: "20px"
  radius-pill: "100px"
  radius-3xl: "32px"
  radius-4xl: "40px"
spacing:
  spacing-1: "4px"
  spacing-2: "6px"
  spacing-3: "8px"
  spacing-4: "10px"
  spacing-5: "12px"
  spacing-6: "14px"
  spacing-7: "16px"
  spacing-8: "20px"
  spacing-9: "24px"
  spacing-10: "28px"
  spacing-11: "32px"
  spacing-12: "36px"
  spacing-13: "40px"
  spacing-14: "48px"
  spacing-15: "64px"
  spacing-16: "78px"
---

## Overview

v3 is a clean, light-mode marketing site. The design centers on a single typeface (Plus Jakarta Sans) spanning all weights, a vivid blue (#1570ef) as the sole brand accent, and generous whitespace with rounded cards (16px dominant radius). The hero pairs large display text with a product UI mockup screenshot, establishing trust through product visibility. Elevation is handled via subtle box-shadows rather than heavy borders, and semantic color tokens are consistently applied via CSS custom properties.

**Signature traits:**
- Dual typeface system: Pairs Plus Jakarta Sans and Geist Mono across the type hierarchy.
- Soft, rounded geometry: Generous corner rounding up to 100px.
- Layered elevation: Depth comes from 1 validated shadow token.

## Colors

The palette uses 12 validated color tokens across 1 theme profile. Semantic roles stay attached to observed usage so generation agents can choose accents without inventing new color meaning.

**Semantic naming:**
- **action-text** maps to `brand-blue`: Role "text" is grounded by usage context "Primary CTA buttons, active nav states, accent text, links, badge foregrounds".
- **surface-background** maps to `surface-primary`: Role "background" is grounded by usage context "Page background, card surfaces, elevated panels".
- **content-text** maps to `text-primary`: Role "text" is grounded by usage context "Hero headings, high-emphasis body text".
- **border-border** maps to `border-primary`: Role "border" is grounded by usage context "Card borders, dividers, input outlines".

### Text Scale
- **Accent Soft** (#2e90fa): Hover states, secondary blue accents, progress indicators. Role: text. {authored: rgb(46, 144, 250), space: rgb}
- **Brand Blue** (#1570ef): Primary CTA buttons, active nav states, accent text, links, badge foregrounds. Role: text. {authored: rgb(21, 112, 239), space: rgb}
- **Text Muted** (#a4a7ae): Placeholder text, disabled states, muted captions. Role: text. {authored: rgb(164, 167, 174), space: rgb}
- **Text Primary** (#181d27): Hero headings, high-emphasis body text. Role: text. {authored: rgb(24, 29, 39), space: rgb}
- **Text Secondary** (#535862): Body copy, nav links, secondary labels — most-used text color. Role: text. {authored: rgb(83, 88, 98), space: rgb}
- **Text Tertiary** (#717680): Supporting labels, meta text, tertiary UI copy. Role: text. {authored: rgb(113, 118, 128), space: rgb}

### Interactive
- **Link Blue** (#175cd3): Hyperlinks, link-style interactive elements. Role: secondary. {authored: rgb(23, 92, 211), space: rgb}
- **Border Primary** (#d5d7da): Card borders, dividers, input outlines. Role: border. {authored: rgb(213, 215, 218), space: rgb}
- **Border Secondary** (#e9eaeb): Subtle dividers, tab borders, secondary separators. Role: border. {authored: rgb(233, 234, 235), space: rgb}

### Surface & Shadows
- **Surface Primary** (#ffffff): Page background, card surfaces, elevated panels. Role: background. {authored: rgb(255, 255, 255), space: rgb}
- **Surface Tertiary** (#f5f5f5): Secondary surface fills, sidebar backgrounds, subtle section backgrounds. Role: background. {authored: rgb(245, 245, 245), space: rgb}
- **Surface Tint** (#eff8ff): Blue-tinted badge backgrounds, info chip fills. Role: background. {authored: rgb(239, 248, 255), space: rgb}

## Typography

Typography uses Plus Jakarta Sans, Geist Mono across extracted hierarchy roles. Keep hierarchy mapped to these token rows before adding decorative type styles.

Mixes Plus Jakarta Sans and Geist Mono for visual contrast. Weight range spans semi-bold, regular, medium. Sizes range from 8px to 52px.

### Font Roles
- **Headline Font**: Plus Jakarta Sans
- **Body Font**: Plus Jakarta Sans

### Type Scale Evidence
| Role | Font | Size | Weight | Line Height | Letter Spacing | Stack / Features | Notes |
|------|------|------|--------|-------------|----------------|------------------|-------|
| Hero headline — large display text for primary value proposition | Plus Jakarta Sans | 44px | 600 | 48.4px | -0.88px | Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif | Extracted token |
| Page-level H1 heading (probe-confirmed at 52px) | Plus Jakarta Sans | 52px | 600 | 1.1 | -0.88px | Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif | Extracted token |
| Primary body copy, nav links, general UI text — most frequent tuple | Plus Jakarta Sans | 16px | 400 | 24px | normal | Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif | Extracted token |
| Secondary body text, card descriptions, form labels | Plus Jakarta Sans | 14px | 400 | 20px | normal | Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif | Extracted token |
| Medium-weight labels, button text, nav items | Plus Jakarta Sans | 14px | 500 | 20px | normal | Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif | Extracted token |
| Semibold labels, card titles, emphasized UI text | Plus Jakarta Sans | 14px | 600 | 20px | -0.16px | Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif | Extracted token |
| Badge text, chip labels, small metadata | Plus Jakarta Sans | 12px | 600 | 16px | -0.14px | Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif | Extracted token |
| Emphasized body text, section subheadings | Plus Jakarta Sans | 16px | 600 | 24px | -0.16px | Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif | Extracted token |
| Monospace code snippets, technical labels | Geist Mono | 8px | 400 | 12px | 0.8px | Geist Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace | Extracted token |

## Layout

Responsive system uses 1 breakpoint tier(s): desktop.

This system uses a 4px base grid with scale values 4, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 36, 40, 48, 64, 78, 112, 128.

### Responsive Strategy
- **desktop (Unknown)**: Expand layout density and horizontal composition for wide viewports.

### Spacing System
| Token | Value | Px | Notes |
|------|-------|----|-------|
| spacing-1 | 4px | 4 | Extracted spacing token |
| spacing-2 | 6px | 6 | Extracted spacing token |
| spacing-3 | 8px | 8 | Extracted spacing token |
| spacing-4 | 10px | 10 | Extracted spacing token |
| spacing-5 | 12px | 12 | Extracted spacing token |
| spacing-6 | 14px | 14 | Extracted spacing token |
| spacing-7 | 16px | 16 | Extracted spacing token |
| spacing-8 | 20px | 20 | Extracted spacing token |
| spacing-9 | 24px | 24 | Extracted spacing token |
| spacing-10 | 28px | 28 | Extracted spacing token |
| spacing-11 | 32px | 32 | Extracted spacing token |
| spacing-12 | 36px | 36 | Extracted spacing token |
| spacing-13 | 40px | 40 | Extracted spacing token |
| spacing-14 | 48px | 48 | Extracted spacing token |
| spacing-15 | 64px | 64 | Extracted spacing token |
| spacing-16 | 78px | 78 | Extracted spacing token |
| spacing-17 | 112px | 112 | Extracted spacing token |
| spacing-18 | 128px | 128 | Extracted spacing token |

## Elevation & Depth

Keep depth flat unless validated shadow or interaction evidence appears in the extraction payload. Do not invent shadows beyond this evidence boundary.

### Shadow Evidence
| Shadow Token | Layers | Details |
|--------------|--------|---------|
| shadow-soft-xs | 1 | 0px 0px 2px 0px rgba(0, 0, 0, 0.25) |

### Interaction Signals
| Theme | Signal | Evidence |
|-------|--------|----------|
| Light | outline-color | rgb(83, 88, 98) ; rgb(21, 112, 239) ; rgb(164, 167, 174) |
| Light | outline-width | 3px |
| Light | outline-offset | 0px |
| Light | transform | matrix(1, 0, 0, 1, 0, 32) ; matrix(0.92, 0, 0, 0.92, 0, 0) ; matrix(-0.206785, 0.978386, -0.978386, -0.206785, 0, 0) |

## Shapes

Shape language maps directly to rounded tokens. Keep component corners consistent with the role mapping below before introducing bespoke geometry.

### Radius Roles
| Token | Value | Px | Role Mapping |
|------|-------|----|--------------|
| radius-md | 8px | 8 | Control corner |
| radius-lg | 12px | 12 | Control corner |
| radius-xl | 16px | 16 | Card corner |
| radius-2xl | 20px | 20 | Card corner |
| radius-3xl | 32px | 32 | Large surface corner |
| radius-4xl | 40px | 40 | Large surface corner |
| radius-pill | 100px | 100 | Large surface corner |

### Geometry Evidence
| Radius Token | Shape | Units |
|--------------|-------|-------|
| radius-md | 8px | px |
| radius-lg | 12px | px |
| radius-xl | 16px | px |
| radius-2xl | 20px | px |
| radius-pill | 100px | px |
| radius-3xl | 32px | px |
| radius-4xl | 40px | px |

## Components

(none detected)

## Do's and Don'ts

Guardrails protect Dual typeface system, Soft, rounded geometry, Layered elevation without adding unsupported visual claims.

| Do | Don't |
|----|---------|
| Do maintain consistent spacing using the base grid | Don't make unsupported claims about absent visual features |
| Do maintain WCAG AA contrast ratios (4.5:1 for normal text) | Don't mix rounded and sharp corners in the same view |
| Do use the primary color only for the single most important action per screen |  |
| Do verify evidence before writing new design-system guidance |  |

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
