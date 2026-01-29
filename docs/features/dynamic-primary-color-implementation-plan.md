# Dynamic Primary Color Selection Implementation Plan

## Overview

Implement a dynamic primary color selection system that allows users to choose a primary color from the Settings page, which will update all CSS custom properties (`--primary` and related variables) and Tailwind color utilities throughout the application in real-time.

### Current State

- Settings page (`frontend/src/pages/Settings.tsx`) has a color selection UI with 8 predefined colors (blue, green, purple, red, orange, pink, teal, indigo)
- Selected color is stored in localStorage via `LocalCacheService` but **not applied** to the theme
- CSS custom properties for `--primary` are hardcoded in `frontend/src/index.css` (HSL: `217 91% 60%` for blue)
- Tailwind config (`frontend/tailwind.config.ts`) references CSS variables via `hsl(var(--primary))`
- ThemeContext manages light/dark mode but does not handle primary color changes

### Target State

- User selects a color from Settings page
- Selected color is persisted to localStorage
- CSS custom properties (`--primary`, `--primary-foreground`, `--ring`, etc.) are dynamically updated
- All components using `bg-primary`, `text-primary`, `border-primary`, etc. reflect the new color immediately
- Color changes work seamlessly with both light and dark themes
- Gradients and accent colors are derived from the primary color
- Color selection persists across page reloads and sessions

---

## Key Findings

### Existing Color System Architecture

1. **CSS Custom Properties** (`frontend/src/index.css`)
   - `:root` defines light theme colors (lines 10-66)
   - `.dark` defines dark theme colors (lines 68-123)
   - Primary color is defined as `--primary: 217 91% 60%` (blue in HSL)
   - Related variables: `--primary-foreground`, `--ring`, `--sidebar-primary`, `--chart-1`, gradients

2. **Tailwind Configuration** (`frontend/tailwind.config.ts`)
   - Colors reference CSS variables: `primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" }`

3. **Settings Page** (`frontend/src/pages/Settings.tsx`)
   - Has 8 predefined colors with hex values
   - Stores selection in localStorage as color name (e.g., "blue")
   - Does NOT apply the color to the theme

4. **Theme Context** (`frontend/src/contexts/ThemeContext.tsx`)
   - Manages light/dark/system theme switching
   - Does NOT manage primary color changes
   - Updates `<html>` element classes for theme

### Color Palette Mapping

Current predefined colors need HSL equivalents:

| Name    | Hex     | HSL (Approximate)      |
|---------|---------|------------------------|
| blue    | #3b82f6 | 217 91% 60%           |
| green   | #22c55e | 142 71% 45%           |
| purple  | #a855f7 | 271 91% 65%           |
| red     | #ef4444 | 0 84% 60%             |
| orange  | #f97316 | 21 90% 52%            |
| pink    | #ec4899 | 330 81% 60%           |
| teal    | #14b8a6 | 173 80% 40%           |
| indigo  | #6366f1 | 239 84% 67%           |

---

## Phase 1: Create Color Configuration

### Task 1.1: Create Color Palette Configuration File

**Status: TODO**

Create a centralized color configuration file with HSL values for all predefined colors and their derived shades.

**Implementation Details:**

Create `frontend/src/config/colorPalette.ts`:

```typescript
export interface ColorShade {
  name: string;
  hex: string;
  hsl: {
    h: number; // Hue (0-360)
    s: number; // Saturation (0-100)
    l: number; // Lightness (0-100)
  };
}

export interface ColorTheme {
  primary: string; // HSL format: "217 91% 60%"
  primaryForeground: string;
  ring: string;
  accent: string;
  accentForeground: string;
  gradientPrimary: string;
  gradientHero: string;
  chart1: string;
  chart2: string;
  chart3: string;
  chart4: string;
  chart5: string;
}

export const COLOR_PALETTE: Record<string, ColorShade> = {
  blue: {
    name: "blue",
    hex: "#3b82f6",
    hsl: { h: 217, s: 91, l: 60 },
  },
  green: {
    name: "green",
    hex: "#22c55e",
    hsl: { h: 142, s: 71, l: 45 },
  },
  purple: {
    name: "purple",
    hex: "#a855f7",
    hsl: { h: 271, s: 91, l: 65 },
  },
  red: {
    name: "red",
    hex: "#ef4444",
    hsl: { h: 0, s: 84, l: 60 },
  },
  orange: {
    name: "orange",
    hex: "#f97316",
    hsl: { h: 21, s: 90, l: 52 },
  },
  pink: {
    name: "pink",
    hex: "#ec4899",
    hsl: { h: 330, s: 81, l: 60 },
  },
  teal: {
    name: "teal",
    hex: "#14b8a6",
    hsl: { h: 173, s: 80, l: 40 },
  },
  indigo: {
    name: "indigo",
    hex: "#6366f1",
    hsl: { h: 239, s: 84, l: 67 },
  },
};

// Generate theme colors based on primary color
export function generateColorTheme(
  colorName: string,
  isDark: boolean
): ColorTheme {
  const color = COLOR_PALETTE[colorName] || COLOR_PALETTE.blue;
  const { h, s, l } = color.hsl;

  if (isDark) {
    return {
      primary: `${h} ${s}% ${l}%`,
      primaryForeground: "0 0% 100%",
      ring: `${h} ${s}% ${l}%`,
      accent: `${h} ${Math.max(s - 18, 20)}% ${Math.max(l - 27, 33)}%`,
      accentForeground: `${h} 95% 87%`,
      gradientPrimary: `linear-gradient(135deg, hsl(${h} ${s}% ${l}% / 0.15) 0%, hsl(${h} ${Math.max(s - 18, 20)}% ${Math.max(l - 27, 33)}% / 0.15) 100%)`,
      gradientHero: `linear-gradient(to bottom, hsl(${h} ${s}% ${l}% / 0.08), transparent 50%)`,
      chart1: `${h} 97% 87%`,
      chart2: `${h} ${s}% ${l}%`,
      chart3: `${h} ${Math.max(s - 8, 20)}% ${Math.max(l - 7, 40)}%`,
      chart4: `${h} ${Math.max(s - 15, 20)}% ${Math.max(l - 12, 35)}%`,
      chart5: `${h} ${Math.max(s - 18, 20)}% ${Math.max(l - 20, 30)}%`,
    };
  }

  return {
    primary: `${h} ${s}% ${l}%`,
    primaryForeground: "0 0% 100%",
    ring: `${h} ${s}% ${l}%`,
    accent: `${h} 95% 94%`,
    accentForeground: `${h} ${Math.max(s - 18, 20)}% ${Math.max(l - 27, 33)}%`,
    gradientPrimary: `linear-gradient(135deg, hsl(${h} ${s}% ${l}% / 0.1) 0%, hsl(${h} 95% 94% / 0.1) 100%)`,
    gradientHero: `linear-gradient(to bottom, hsl(${h} ${s}% ${l}% / 0.05), transparent 50%)`,
    chart1: `${h} ${s}% ${l}%`,
    chart2: `${h} ${Math.max(s - 8, 20)}% ${Math.max(l - 7, 50)}%`,
    chart3: `${h} ${Math.max(s - 15, 20)}% ${Math.max(l - 12, 45)}%`,
    chart4: `${h} ${Math.max(s - 20, 20)}% ${Math.max(l - 20, 38)}%`,
    chart5: `${h} ${Math.max(s - 18, 20)}% ${Math.max(l - 27, 33)}%`,
  };
}
```

**Files Affected:**
- `frontend/src/config/colorPalette.ts` - Create new file

---

## Phase 2: Extend Theme Context

### Task 2.1: Add Primary Color Management to ThemeContext

**Status: TODO**

Extend the ThemeContext to manage primary color selection and apply CSS custom properties dynamically.

**Implementation Details:**

Update `frontend/src/contexts/ThemeContext.tsx`:

1. Add `primaryColor` state
2. Add `setPrimaryColor` function
3. Add `useEffect` to apply color changes to CSS custom properties
4. Load saved color from localStorage on mount

**Changes:**

```typescript
// Add to imports
import { COLOR_PALETTE, generateColorTheme } from "@/config/colorPalette";

// Update ThemeProviderState interface
type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  themeIsDark: boolean;
  primaryColor: string;
  setPrimaryColor: (color: string) => void;
};

// Add to ThemeProvider component
const [primaryColor, setPrimaryColorState] = useState<string>("blue");

// Load saved color from localStorage
useEffect(() => {
  const savedColor = localStorage.getItem("primaryColor") || "blue";
  setPrimaryColorState(savedColor);
}, []);

// Apply primary color changes to CSS custom properties
useEffect(() => {
  const root = window.document.documentElement;
  const isDark = root.classList.contains("dark");
  const colorTheme = generateColorTheme(primaryColor, isDark);

  // Apply all color theme variables
  root.style.setProperty("--primary", colorTheme.primary);
  root.style.setProperty("--primary-foreground", colorTheme.primaryForeground);
  root.style.setProperty("--ring", colorTheme.ring);
  root.style.setProperty("--accent", colorTheme.accent);
  root.style.setProperty("--accent-foreground", colorTheme.accentForeground);
  root.style.setProperty("--chart-1", colorTheme.chart1);
  root.style.setProperty("--chart-2", colorTheme.chart2);
  root.style.setProperty("--chart-3", colorTheme.chart3);
  root.style.setProperty("--chart-4", colorTheme.chart4);
  root.style.setProperty("--chart-5", colorTheme.chart5);
  
  // Update sidebar colors to match primary
  root.style.setProperty("--sidebar-primary", colorTheme.primary);
  root.style.setProperty("--sidebar-ring", colorTheme.ring);
}, [primaryColor, theme]);

// Add setPrimaryColor function
const setPrimaryColor = (color: string) => {
  localStorage.setItem("primaryColor", color);
  setPrimaryColorState(color);
};

// Update value object
const value = {
  theme,
  setTheme: (theme: Theme) => { /* existing code */ },
  toggleTheme: () => { /* existing code */ },
  themeIsDark,
  primaryColor,
  setPrimaryColor,
};
```

**Files Affected:**
- `frontend/src/contexts/ThemeContext.tsx` - Add primary color management

---

## Phase 3: Update Settings Page

### Task 3.1: Update Settings Page to Use ThemeContext

**Status: TODO**

Update the Settings page to use the new `setPrimaryColor` function from ThemeContext instead of just storing in localStorage.

**Implementation Details:**

Update `frontend/src/pages/Settings.tsx`:

```typescript
// Update imports
import { COLOR_PALETTE } from "@/config/colorPalette";

// Update useTheme destructuring
const { theme, setTheme, primaryColor, setPrimaryColor } = useTheme();

// Remove local colorSetting state
// const [colorSetting, setColorSetting] = useState<string>("blue");

// Remove useEffect that loads from localStorage
// useEffect(() => {
//   const savedColor = localCacheService.get("color", "blue");
//   setColorSetting(savedColor);
// }, []);

// Update handleColorChange
const handleColorChange = (color: string) => {
  setPrimaryColor(color);
  notificationsService.show(locData.success, "success");
};

// Update colors array to use COLOR_PALETTE
const colors = Object.values(COLOR_PALETTE);

// Update button rendering
{colors.map((color) => (
  <Button
    key={color.name}
    onClick={() => handleColorChange(color.name)}
    style={{
      backgroundColor: color.hex,
      color: "#ffffff",
    }}
    className="min-w-[140px] hover:opacity-90"
  >
    {primaryColor === color.name && (
      <Check className="h-4 w-4 mr-2" />
    )}
    {capitalize(color.name)}
  </Button>
))}
```

**Files Affected:**
- `frontend/src/pages/Settings.tsx` - Update to use ThemeContext

---

## Phase 4: Testing and Refinement

### Task 4.1: Test Color Changes Across Components

**Status: TODO**

Manually test color changes across all major components to ensure proper application.

**Test Cases:**

1. **Navigation Component**
   - Primary buttons should reflect selected color
   - Hover states should work correctly

2. **Landing Page**
   - Hero section gradients should update
   - CTA buttons should use new primary color
   - Feature badges should reflect color

3. **Forms (Sign In/Sign Up)**
   - Submit buttons should use primary color
   - Focus rings should match primary color

4. **Cards and UI Elements**
   - Card borders with primary color
   - Badge components
   - Loading indicators

5. **Theme Switching**
   - Test color changes in light mode
   - Test color changes in dark mode
   - Verify colors persist after theme switch

6. **Persistence**
   - Reload page and verify color persists
   - Clear localStorage and verify default (blue)

**Files Affected:**
- Manual testing across all pages

---

### Task 4.2: Add Color Preview to Settings

**Status: TODO**

Add a live preview section showing how the selected color looks with various UI elements.

**Implementation Details:**

Add preview section to Settings page:

```typescript
<Card>
  <CardHeader>
    <CardTitle>Color Preview</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button variant="default">Primary Button</Button>
        <Button variant="outline">Outline Button</Button>
      </div>
      <div className="p-4 border-2 border-primary rounded-lg">
        <p className="text-primary font-semibold">Primary Text</p>
      </div>
      <div className="h-20 bg-gradient-primary rounded-lg" />
    </div>
  </CardContent>
</Card>
```

**Files Affected:**
- `frontend/src/pages/Settings.tsx` - Add preview section

---

### Task 4.3: Optimize Performance

**Status: TODO**

Ensure color changes don't cause unnecessary re-renders or performance issues.

**Implementation Details:**

1. Verify `useEffect` dependencies are correct
2. Consider using `useMemo` for color theme generation if needed
3. Test with React DevTools Profiler
4. Ensure CSS custom property updates are efficient

**Files Affected:**
- `frontend/src/contexts/ThemeContext.tsx` - Performance optimization

---

## Phase 5: Documentation and Cleanup

### Task 5.1: Update Documentation

**Status: TODO**

Document the dynamic color system for future developers.

**Implementation Details:**

Add section to README or create separate docs:

- How to add new colors to the palette
- How the color system works (CSS variables + Tailwind)
- How to use primary color in custom components
- Migration guide if needed

**Files Affected:**
- `README.md` or `docs/features/dynamic-colors.md` - Add documentation

---

### Task 5.2: Remove Deprecated Code

**Status: TODO**

Clean up any deprecated color-related code.

**Implementation Details:**

1. Remove hardcoded color references if any
2. Remove unused LocalCacheService calls for color in Settings
3. Verify no components have hardcoded primary color values

**Files Affected:**
- Various files - Cleanup

---

## Implementation Order

### Phase 1: Color Configuration
- [ ] Task 1.1: Create Color Palette Configuration File

### Phase 2: Theme Context
- [ ] Task 2.1: Add Primary Color Management to ThemeContext

### Phase 3: Settings Page
- [ ] Task 3.1: Update Settings Page to Use ThemeContext

### Phase 4: Testing
- [ ] Task 4.1: Test Color Changes Across Components
- [ ] Task 4.2: Add Color Preview to Settings
- [ ] Task 4.3: Optimize Performance

### Phase 5: Documentation
- [ ] Task 5.1: Update Documentation
- [ ] Task 5.2: Remove Deprecated Code

---

## Questions

1. **Color Palette Expansion**: Should users be able to add custom colors beyond the 8 predefined ones?
   - Option A: Keep it limited to 8 predefined colors (simpler, more consistent)
   - Option B: Add a color picker for custom colors (more flexible, requires HSL conversion logic)
   - **Recommendation**: Start with Option A, add Option B in future if needed

2. **Accent Color Derivation**: Should accent colors be automatically derived from primary, or should users select them separately?
   - Option A: Auto-derive accent colors (current approach in generateColorTheme)
   - Option B: Allow separate accent color selection
   - **Recommendation**: Option A for simplicity

3. **Migration Strategy**: What should happen to users who already have a color saved in localStorage under the old key "color"?
   - Option A: Migrate old "color" key to new "primaryColor" key on app load
   - Option B: Ignore old key and start fresh with "primaryColor"
   - **Recommendation**: Option A for better UX

4. **Chart Colors**: Should chart colors be derived from primary or remain independent?
   - Option A: Derive chart colors from primary (current approach)
   - Option B: Keep chart colors independent for better data visualization
   - **Recommendation**: Option A for consistency, but consider Option B if charts become hard to read

5. **Gradient Customization**: Should gradients be fully derived from primary or have separate controls?
   - Option A: Auto-derive gradients (current approach)
   - Option B: Allow gradient customization
   - **Recommendation**: Option A

---

## Files Summary

### Files to Create

| File | Purpose |
|------|---------|
| `frontend/src/config/colorPalette.ts` | Color palette configuration with HSL values and theme generation logic |

### Files to Modify

| File | Changes |
|------|---------|
| `frontend/src/contexts/ThemeContext.tsx` | Add primary color state, setPrimaryColor function, and CSS custom property updates |
| `frontend/src/pages/Settings.tsx` | Use ThemeContext for color changes, update to use COLOR_PALETTE config |
| `README.md` or `docs/features/dynamic-colors.md` | Add documentation for dynamic color system |

### Files to Delete

| File | Reason |
|------|--------|
| None | No files need to be deleted |

---

## Technical Considerations

### CSS Custom Properties vs Tailwind Classes

The implementation uses CSS custom properties as the source of truth because:
- Tailwind config already references CSS variables
- CSS custom properties can be updated at runtime via JavaScript
- No need to rebuild Tailwind or reload the page
- Works seamlessly with existing shadcn/ui components

### HSL Color Format

HSL (Hue, Saturation, Lightness) is used instead of RGB or HEX because:
- Easier to derive shades (adjust lightness)
- Better for generating complementary colors
- Already used in the existing CSS custom properties
- More intuitive for color manipulation

### Performance Implications

- CSS custom property updates are very fast (no DOM reflow)
- Color changes only trigger re-paint, not re-layout
- No component re-renders needed (CSS handles the updates)
- localStorage writes are minimal (only on color change)

### Browser Compatibility

- CSS custom properties: Supported in all modern browsers
- `setProperty()` API: Widely supported
- localStorage: Universal support
- No polyfills needed

---

## Success Criteria

- [ ] User can select from 8 predefined colors in Settings
- [ ] Selected color is applied immediately across all components
- [ ] Color persists after page reload
- [ ] Color works correctly in both light and dark themes
- [ ] No visual glitches or layout shifts during color changes
- [ ] Performance remains smooth (no lag or stuttering)
- [ ] All Tailwind utilities using `primary` reflect the new color
- [ ] Gradients and derived colors look visually appealing
- [ ] Documentation is clear and complete

---

## Estimated Time

- **Phase 1**: 30 minutes (Color configuration)
- **Phase 2**: 1 hour (Theme context updates)
- **Phase 3**: 30 minutes (Settings page updates)
- **Phase 4**: 1.5 hours (Testing and refinement)
- **Phase 5**: 30 minutes (Documentation and cleanup)

**Total Estimated Time: 4 hours**
