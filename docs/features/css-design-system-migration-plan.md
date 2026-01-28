# CSS Design System Migration Plan

## Overview

This document outlines the differences between the reference CSS file (stored at `docs/features/index-to-migrate.css`) and the current `frontend/src/index.css` file, with a detailed plan for carefully migrating meaningful improvements while preserving existing functionality.

**Reference File:** `docs/features/index-to-migrate.css`  
**Target File:** `frontend/src/index.css`

### Current State

The current `index.css` file contains:
- Complete HSL-based design system with CSS custom properties
- Light and dark theme support
- Scrollbar customization (global)
- Animations (dramaticEntrance, slideInRight, spin, fadeIn, scaleIn, ambientFadeIn)
- Drawer component styles
- Confirmation dialog styles
- Toast notification styles
- Modal dialog styles with responsive/fullscreen support
- Badge count styles
- Animated button with conic gradient border
- Button utility classes (btn-large)

### Target State

After migration, the CSS file will include:
- Custom font definitions (Inter, Space Grotesk, Fira Code)
- Custom scrollbar utility class (`.custom-scrollbar`) in addition to global scrollbar
- Button utility classes (`.btn-icon`, `.btn-large` improvements)
- Material symbols support
- No-scrollbar utility class
- Improved body font-family declaration

---

## Key Differences Analysis

### 1. **Font Definitions** ⭐ HIGH PRIORITY

**Reference File Has:**
```css
@font-face {
  font-family: "Inter";
  src: url("/fonts/Inter-Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
/* + Inter Bold, Space Grotesk, Fira Code */
```

**Current File Has:**
- No custom font definitions

**Impact:** Missing custom fonts means the app relies on system fonts only.

---

### 2. **Foreground Color** ⚠️ MEDIUM PRIORITY

**Reference File:**
```css
--foreground: 0 0% 26%; /* Light mode */
```

**Current File:**
```css
--foreground: 0 0% 5%; /* Light mode - much darker */
```

**Impact:** Current file has much darker text (5% vs 26% lightness). Reference is lighter/softer.

---

### 3. **Dark Mode Input Color** ⚠️ MEDIUM PRIORITY

**Reference File:**
```css
--input: 0 0% 20%; /* Dark mode */
```

**Current File:**
```css
--input: 0 0% 25%; /* Dark mode - slightly lighter */
```

**Impact:** Minor difference in input field background darkness.

---

### 4. **Body Font Family** ⭐ HIGH PRIORITY

**Reference File:**
```css
body {
  @apply bg-background text-foreground font-sans;
}
```

**Current File:**
```css
body {
  @apply bg-background text-foreground;
}
```

**Impact:** Reference explicitly applies `font-sans` utility class for consistent font stack.

---

### 5. **Scrollbar Styles** ⭐ HIGH PRIORITY

**Reference File:**
- Has `.custom-scrollbar` utility class with 8px width
- Uses `scrollbar-width: thin` and `scrollbar-color` for Firefox

**Current File:**
- Has global scrollbar styles (10px width)
- Uses `scrollbar-width: thin` globally

**Impact:** Reference provides opt-in scrollbar styling via class, current applies globally. Both approaches valid, but utility class offers more flexibility.

---

### 6. **Button Utility Classes** ⭐ HIGH PRIORITY

**Reference File:**
```css
.btn-icon {
  padding: 0 !important;
  width: 34px !important;
  aspect-ratio: 1 / 1;
}

.btn-large.btn-icon {
  width: 42px !important;
  height: 42px;
}
```

**Current File:**
- Only has `.btn-large` class
- Missing `.btn-icon` class

**Impact:** Missing utility for icon-only circular buttons.

---

### 7. **Material Symbols Support** 🔵 LOW PRIORITY

**Reference File:**
```css
.material-symbols-outlined {
  font-variation-settings:
    "FILL" 0,
    "wght" 400,
    "GRAD" 0,
    "opsz" 24;
}
.material-symbols-outlined.filled {
  font-variation-settings: "FILL" 1;
}
```

**Current File:**
- No Material Symbols support

**Impact:** If using Material Symbols icons, this styling is needed.

---

### 8. **No-Scrollbar Utility** 🔵 LOW PRIORITY

**Reference File:**
```css
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
```

**Current File:**
- No `.no-scrollbar` utility

**Impact:** Useful utility for hiding scrollbars when needed.

---

### 9. **Drawer Overlay Background** ⚠️ MEDIUM PRIORITY

**Reference File:**
```css
.drawer-overlay {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
}
```

**Current File:**
```css
.drawer-overlay {
  background: var(--background);
  backdrop-filter: blur(4px);
}
```

**Impact:** Reference uses semi-transparent black overlay, current uses theme background. Reference approach is more standard for overlays.

---

### 10. **Dark Mode Color Scheme** 🔵 LOW PRIORITY

**Reference File:**
```css
.dark {
  /* No color-scheme property */
}
```

**Current File:**
```css
.dark {
  color-scheme: dark;
}
```

**Impact:** Current file has `color-scheme: dark` which helps browser render native form controls in dark mode. This is a GOOD thing in current file.

---

## Items Identical (No Changes Needed)

✅ All CSS custom properties for colors (primary, secondary, muted, accent, destructive, etc.)
✅ Border radius (`--radius: 0.375rem`)
✅ Sidebar variables
✅ Chart colors
✅ Gradient definitions
✅ Autofill input styling
✅ All animations (dramaticEntrance, slideInRight, spin, fadeIn, scaleIn, ambientFadeIn)
✅ Hidden-on-mobile utility
✅ Drawer styles (header, body, close-button)
✅ Confirmation dialog styles
✅ Toast notification styles
✅ Modal dialog styles
✅ Badge count styles
✅ Animated button styles

---

## Phase 1: Font System Setup

### Task 1.1: Add Font Files to Project

**Status: TODO**

Add custom font files to the project's public fonts directory.

**Implementation Details:**

1. Create `/frontend/public/fonts/` directory if it doesn't exist
2. Add the following font files:
   - `Inter-Regular.ttf`
   - `Inter-Bold.ttf`
   - `SpaceGrotesk-Regular.ttf`
   - `FiraCode-Regular.ttf`

**Files Affected:**
- `frontend/public/fonts/` (new directory)

**Notes:**
- Font files must be obtained from their respective sources (Google Fonts, etc.)
- Ensure proper licensing for font usage

---

### Task 1.2: Add Font-Face Declarations

**Status: TODO**

Add `@font-face` declarations to `index.css` immediately after the Tailwind imports.

**Implementation Details:**

Add after line 3 in `frontend/src/index.css`:

```css
@font-face {
  font-family: "Inter";
  src: url("/fonts/Inter-Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Inter";
  src: url("/fonts/Inter-Bold.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Space Grotesk";
  src: url("/fonts/SpaceGrotesk-Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Fira Code";
  src: url("/fonts/FiraCode-Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

**Files Affected:**
- `frontend/src/index.css` (modify)

---

### Task 1.3: Update Tailwind Config for Custom Fonts

**Status: TODO**

Update `tailwind.config.ts` to include custom font families.

**Implementation Details:**

Add to the `theme.extend.fontFamily` section:

```typescript
fontFamily: {
  sans: ["Inter", "system-ui", "sans-serif"],
  mono: ["Fira Code", "monospace"],
  display: ["Space Grotesk", "system-ui", "sans-serif"],
}
```

**Files Affected:**
- `frontend/tailwind.config.ts` (modify)

---

## Phase 2: Color Adjustments

### Task 2.1: Evaluate Foreground Color Change

**Status: TODO - REQUIRES DECISION**

**Current:** `--foreground: 0 0% 5%` (very dark, almost black)
**Reference:** `--foreground: 0 0% 26%` (softer, medium-dark gray)

**Decision Required:**
- Test both values in the UI
- Consider readability and contrast ratios
- Determine if softer text color improves aesthetics

**Implementation:**
If approved, change line 12 in `frontend/src/index.css`:

```css
--foreground: 0 0% 26%;
```

**Files Affected:**
- `frontend/src/index.css` (modify)

---

### Task 2.2: Evaluate Dark Mode Input Color

**Status: TODO - REQUIRES DECISION**

**Current:** `--input: 0 0% 25%` (slightly lighter)
**Reference:** `--input: 0 0% 20%` (slightly darker)

**Decision Required:**
- Minor visual difference
- Test in dark mode to see which looks better
- Consider consistency with other dark mode elements

**Implementation:**
If approved, change line 95 in `frontend/src/index.css`:

```css
--input: 0 0% 20%;
```

**Files Affected:**
- `frontend/src/index.css` (modify)

---

## Phase 3: Body and Scrollbar Improvements

### Task 3.1: Add font-sans to Body

**Status: TODO**

Add explicit `font-sans` utility to body element.

**Implementation Details:**

Change line 132 in `frontend/src/index.css`:

**Before:**
```css
body {
  @apply bg-background text-foreground;
}
```

**After:**
```css
body {
  @apply bg-background text-foreground font-sans;
}
```

**Files Affected:**
- `frontend/src/index.css` (modify)

---

### Task 3.2: Add Custom Scrollbar Utility Class

**Status: TODO**

Add `.custom-scrollbar` utility class as an alternative to global scrollbar styling.

**Implementation Details:**

Add after line 196 in `frontend/src/index.css`:

```css
/* Custom Scrollbar Styles - Theme Aware */
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: hsl(var(--muted));
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: hsl(var(--muted-foreground) / 0.3);
  border-radius: 4px;
  transition: background 0.2s ease;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--muted-foreground) / 0.5);
}

/* Firefox scrollbar support */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: hsl(var(--muted-foreground) / 0.3) hsl(var(--muted));
}
```

**Files Affected:**
- `frontend/src/index.css` (modify)

**Notes:**
- This provides opt-in scrollbar styling
- Global scrollbar styles remain for default behavior
- Components can use `.custom-scrollbar` class for themed scrollbars

---

## Phase 4: Button Utilities

### Task 4.1: Add Icon Button Utility Classes

**Status: TODO**

Add `.btn-icon` utility classes for circular icon-only buttons.

**Implementation Details:**

Add after line 268 in `frontend/src/index.css` (after `.hidden-on-mobile`):

```css
/* Explicit circular style for icon-only buttons */
.btn-icon {
  padding: 0 !important;
  width: 34px !important;
  aspect-ratio: 1 / 1;
}

.btn-large.btn-icon {
  width: 42px !important;
  height: 42px;
}
```

**Files Affected:**
- `frontend/src/index.css` (modify)

---

## Phase 5: Additional Utilities

### Task 5.1: Add No-Scrollbar Utility

**Status: TODO**

Add `.no-scrollbar` utility class for hiding scrollbars.

**Implementation Details:**

Add after the custom scrollbar section (after Task 3.2):

```css
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
```

**Files Affected:**
- `frontend/src/index.css` (modify)

---

### Task 5.2: Add Material Symbols Support (Optional)

**Status: TODO - CONDITIONAL**

Add Material Symbols icon styling if the project uses Material Symbols.

**Implementation Details:**

Add after the no-scrollbar utility:

```css
.material-symbols-outlined {
  font-variation-settings:
    "FILL" 0,
    "wght" 400,
    "GRAD" 0,
    "opsz" 24;
}
.material-symbols-outlined.filled {
  font-variation-settings: "FILL" 1;
}
```

**Files Affected:**
- `frontend/src/index.css` (modify)

**Notes:**
- Only add if project uses Material Symbols icons
- Currently using Lucide icons, so this may not be needed

---

## Phase 6: Drawer Overlay Improvement

### Task 6.1: Update Drawer Overlay Background

**Status: TODO - REQUIRES DECISION**

Change drawer overlay to use semi-transparent black instead of theme background.

**Current (line 287):**
```css
.drawer-overlay {
  background: var(--background);
  backdrop-filter: blur(4px);
}
```

**Reference:**
```css
.drawer-overlay {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
}
```

**Decision Required:**
- Test both approaches
- Semi-transparent black is more standard for modal overlays
- Current approach may look better with light/dark theme transitions

**Files Affected:**
- `frontend/src/index.css` (modify)

---

## Implementation Order

### Phase 1: Font System (Optional - Requires Font Files)
- [ ] Task 1.1: Add font files to `/frontend/public/fonts/`
- [ ] Task 1.2: Add `@font-face` declarations to `index.css`
- [ ] Task 1.3: Update `tailwind.config.ts` with custom font families

### Phase 2: Color Adjustments (Requires Testing/Decision)
- [ ] Task 2.1: Evaluate and potentially change foreground color
- [ ] Task 2.2: Evaluate and potentially change dark mode input color

### Phase 3: Body and Scrollbar (Safe to Implement)
- [ ] Task 3.1: Add `font-sans` to body element
- [ ] Task 3.2: Add `.custom-scrollbar` utility class

### Phase 4: Button Utilities (Safe to Implement)
- [ ] Task 4.1: Add `.btn-icon` utility classes

### Phase 5: Additional Utilities (Safe to Implement)
- [ ] Task 5.1: Add `.no-scrollbar` utility class
- [ ] Task 5.2: Add Material Symbols support (if needed)

### Phase 6: Drawer Overlay (Requires Testing/Decision)
- [ ] Task 6.1: Update drawer overlay background

---

## Questions

1. **Font Files**: Do we have the font files (Inter, Space Grotesk, Fira Code) available, or should we use Google Fonts CDN instead?
   - Option A: Host font files locally in `/public/fonts/`
   - Option B: Use Google Fonts CDN links
   - Option C: Skip custom fonts and continue using system fonts

2. **Foreground Color**: Should we change the foreground color from `5%` to `26%` for softer text?
   - Option A: Keep current darker text (`5%`)
   - Option B: Switch to softer text (`26%`)
   - Option C: Test both and decide based on visual preference

3. **Drawer Overlay**: Should we use semi-transparent black or theme background for drawer overlays?
   - Option A: Keep current theme background approach
   - Option B: Switch to semi-transparent black (`rgba(0, 0, 0, 0.3)`)
   - Option C: Make it configurable via CSS variable

4. **Material Symbols**: Are we using Material Symbols icons anywhere in the project?
   - Current: Using Lucide icons
   - If yes, add Material Symbols support
   - If no, skip this task

5. **Global vs Utility Scrollbar**: Should we keep global scrollbar styling or switch to utility class approach?
   - Option A: Keep current global scrollbar styling
   - Option B: Remove global styling, use `.custom-scrollbar` utility only
   - Option C: Keep both (global default + utility override)

---

## Files Summary

### Files to Create
| File | Purpose |
|------|---------|
| `frontend/public/fonts/Inter-Regular.ttf` | Inter font regular weight |
| `frontend/public/fonts/Inter-Bold.ttf` | Inter font bold weight |
| `frontend/public/fonts/SpaceGrotesk-Regular.ttf` | Space Grotesk display font |
| `frontend/public/fonts/FiraCode-Regular.ttf` | Fira Code monospace font |

### Files to Modify
| File | Changes |
|------|---------|
| `frontend/src/index.css` | Add font-face declarations, utility classes, color adjustments |
| `frontend/tailwind.config.ts` | Add custom font family definitions |

### Files to Delete
| File | Reason |
|------|--------|
| None | No files need to be deleted |

---

## Risk Assessment

### Low Risk (Safe to Implement)
- ✅ Adding utility classes (`.btn-icon`, `.custom-scrollbar`, `.no-scrollbar`)
- ✅ Adding `font-sans` to body
- ✅ Adding Material Symbols support (if needed)

### Medium Risk (Requires Testing)
- ⚠️ Changing foreground color (affects all text)
- ⚠️ Changing drawer overlay background (visual change)
- ⚠️ Changing dark mode input color (minor visual change)

### High Risk (Requires Font Files)
- 🔴 Adding custom fonts (requires font files and licensing)
- 🔴 Updating Tailwind config (affects entire font stack)

---

## Recommendations

### Immediate Actions (Low Risk)
1. ✅ Add `.btn-icon` utility classes
2. ✅ Add `.custom-scrollbar` utility class
3. ✅ Add `.no-scrollbar` utility class
4. ✅ Add `font-sans` to body element

### Test and Decide (Medium Risk)
1. ⚠️ Test foreground color change in light mode
2. ⚠️ Test drawer overlay with semi-transparent black
3. ⚠️ Test dark mode input color change

### Plan Separately (High Risk)
1. 🔴 Obtain font files and licenses
2. 🔴 Create separate font implementation plan
3. 🔴 Test font loading performance

---

## Notes

- The reference CSS file is very similar to the current file
- Most differences are minor improvements or additions
- No breaking changes identified
- Current file has some advantages (e.g., `color-scheme: dark`)
- Migration can be done incrementally without risk
