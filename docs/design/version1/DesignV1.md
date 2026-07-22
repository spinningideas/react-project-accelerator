---
version: alpha
name: "v1 Light Clean Modern"
description: "Primary visual anchor uses #ffffff with page and card surface background. Typography baseline relies on ui-sans-serif for hero section main heading — large display text."
colors:
  background: "#ffffff"
  card-surface: "#f5f5f5"
  info-blue-tint: "#dbeafe"
  brand-blue-dark: "#2563eb"
  brand-blue-primary: "#3c83f6"
  brand-green-dark: "#16a34a"
  brand-green-light: "#4ade80"
  foreground-text: "#0d0d0d"
  muted-text: "#6b7280"
  border-default: "#e5e7eb"
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

Primary visual anchor uses #ffffff with page and card surface background. Typography baseline relies on ui-sans-serif for hero section main heading — large display text.

This system uses a 4px base grid with scale values 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 112, 176, 240, 288.

**Signature traits:**
- Core token rhythm: Token evidence indicates consistent color, spacing, and radius rhythm across visible UI.

## Colors

The palette uses 10 validated color tokens across 1 theme profile. Semantic roles stay attached to observed usage so generation agents can choose accents without inventing new color meaning.

**Semantic naming:**
- **surface-primary** maps to `background`: Role "primary" is grounded by usage context "Page and card surface background".
- **content-text** maps to `foreground-text`: Role "text" is grounded by usage context "Primary body and heading text color across all zones".
- **action-border** maps to `border-default`: Role "border" is grounded by usage context "Default border color for buttons, inputs, dividers, and badge chips".
- **action-text** maps to `brand-green-dark`: Role "text" is grounded by usage context "Primary CTA button fill (Get Started!), section headings green text".

### Primary Brand
- **Background** (#ffffff): Page and card surface background. Role: primary. {authored: rgb(255, 255, 255), space: rgb, alpha: 0.6}

### Text Scale
- **Brand Blue Dark** (#2563eb): Hover/active state for blue interactive elements, footer links. Role: text. {authored: rgb(37, 99, 235), space: rgb}
- **Brand Blue Primary** (#3c83f6): Secondary CTA button (Sign In), nav Sign Up button, links. Role: text. {authored: rgb(60, 131, 246), space: rgb, alpha: 0.1}
- **Brand Green Dark** (#16a34a): Primary CTA button fill (Get Started!), section headings green text. Role: text. {authored: rgb(22, 163, 74), space: rgb, alpha: 0.1}
- **Brand Green Light** (#4ade80): Hero decorative dots, gradient accents, and green highlight spans in headings. Role: text. {authored: rgb(74, 222, 128), space: rgb}
- **Foreground Text** (#0d0d0d): Primary body and heading text color across all zones. Role: text. {authored: rgb(13, 13, 13), space: rgb}
- **Muted Text** (#6b7280): Secondary/muted body text, subtitles, and captions. Role: text. {authored: rgb(107, 114, 128), space: rgb}

### Interactive
- **Border Default** (#e5e7eb): Default border color for buttons, inputs, dividers, and badge chips. Role: border. {authored: rgb(229, 231, 235), space: rgb, alpha: 0.5}

### Surface & Shadows
- **Card Surface** (#f5f5f5): Card and secondary surface backgrounds. Role: background. {authored: rgb(245, 245, 245), space: rgb}
- **Info Blue Tint** (#dbeafe): Hero gradient from-color, accent tint backgrounds. Role: background. {authored: rgb(219, 234, 254), space: rgb}

## Typography

Typography uses ui-sans-serif, ui-monospace across extracted hierarchy roles. Keep hierarchy mapped to these token rows before adding decorative type styles.

Mixes ui-sans-serif and ui-monospace for visual contrast. Weight range spans bold, semi-bold, regular, medium. Sizes range from 14px to 60px.

### Font Roles
- **Headline Font**: ui-sans-serif
- **Body Font**: ui-sans-serif

### Type Scale Evidence
| Role | Font | Size | Weight | Line Height | Letter Spacing | Stack / Features | Notes |
|------|------|------|--------|-------------|----------------|------------------|-------|
| Hero section main heading — large display text | ui-sans-serif | 60px | 700 | 60px | -1.5px | ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji | Extracted token |
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

## Do's and Don'ts

Guardrails protect Core token rhythm without adding unsupported visual claims.

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
