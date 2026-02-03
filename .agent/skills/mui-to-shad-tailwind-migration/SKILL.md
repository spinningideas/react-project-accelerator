# Material-UI to shadcn/ui + Tailwind CSS Migration Skill

## Overview

This skill provides a comprehensive recipe for migrating React applications from Material-UI (MUI) to shadcn/ui with Tailwind CSS, while preserving functionality, adding modern features, and maintaining code quality.

## When to Use This Skill

- Migrating from Material-UI to shadcn/ui + Tailwind CSS
- Modernizing legacy React applications with new UI frameworks
- Converting Create React App projects to Vite
- Implementing mock authentication for frontend-only development
- Adding localization support to modern React apps
- Integrating framer-motion animations

## Migration Strategy

### Phase 1: Service Layer Foundation

**Objective**: Update services to work with new patterns while maintaining functionality.

#### 1.1 Create Mock Authentication Service

When migrating authentication, create a mock service that mirrors the original but works without a backend:

```typescript
// AuthServiceMock.ts
const MOCK_AUTH_STORAGE_KEY = "usersignedin";

export const AuthServiceMock = () => {
  const userHasSignedIn = (): boolean => {
    const signedInVal = window.localStorage.getItem(MOCK_AUTH_STORAGE_KEY);
    return signedInVal === "true";
  };

  const setUserHasSignedIn = (signedInVal: boolean): void => {
    window.localStorage.setItem(MOCK_AUTH_STORAGE_KEY, signedInVal.toString());
  };

  const signIn = (): void => setUserHasSignedIn(true);
  const signOut = (): void => setUserHasSignedIn(false);

  return { userHasSignedIn, setUserHasSignedIn, signIn, signOut };
};
```

**Key Principle**: Use environment variables to toggle between mock and real authentication.

#### 1.2 Standardize API Response Patterns

Wrap all service responses in consistent `ApiResponse<T>` envelopes:

```typescript
// Before (v1 - inconsistent responses)
const getData = async (url) => {
  const response = await fetch(url);
  return { data: response.data, code: response.status };
};

// After (v2 - consistent ApiResponse)
const getCurrentIPAddress = async (): Promise<ApiResponse<GeoServiceLocation>> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return { success: false, message: `Failed: ${response.statusText}` };
    }
    const data = await response.json();
    return { success: true, data: transformedData };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
```

**Key Principle**: ALL services return `ApiResponse<T>` or `ApiResponsePaged<T>`, even for external APIs.

#### 1.3 Update Path References for Vite

```typescript
// Before (Create React App)
const path = process.env.PUBLIC_URL + `/i18n/${locale}.json`;

// After (Vite)
const path = `/i18n/${locale}.json`;
```

**Key Principle**: Vite serves `public/` files directly at root; no `PUBLIC_URL` needed.

#### 1.4 Integrate Modern Toast System

```typescript
// Before (Material-UI Snackbar or custom)
const show = (message, type) => {
  alert(message); // or custom implementation
};

// After (sonner)
import { toast } from "sonner";

const show = (message: string, type: "success" | "error" | "info" = "info") => {
  switch (type) {
    case "success": toast.success(message); break;
    case "error": toast.error(message); break;
    default: toast.info(message); break;
  }
};
```

---

### Phase 2: Context Integration

**Objective**: Create React contexts for state management following modern patterns.

#### 2.1 Create Localization Context

```typescript
import { createContext, useContext, useState, ReactNode } from "react";
import LocalizationService from "@/services/LocalizationService";

type Locale = "enUS" | "zhCN" | "esES";

interface LocalizationContextProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  locData: Record<string, string>;
  loadLocalizedText: (keys: string[]) => Promise<void>;
}

const LocalizationContext = createContext<LocalizationContextProps | undefined>(undefined);

export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (!context) throw new Error("useLocalization must be used within LocalizationProvider");
  return context;
};

export const LocalizationProvider = ({ children }: { children: ReactNode }) => {
  const localizationService = LocalizationService();
  const [locale, setLocaleState] = useState<Locale>(
    (localizationService.getUserLocale() as Locale) || "enUS"
  );
  const [locData, setLocData] = useState<Record<string, string>>({});

  const setLocale = (newLocale: Locale) => {
    localizationService.setUserLocale(newLocale);
    setLocaleState(newLocale);
  };

  const loadLocalizedText = async (keys: string[]) => {
    const textSet = await localizationService.getLocalizedTextSet(keys, locale);
    setLocData((prev) => ({ ...prev, ...textSet }));
  };

  return (
    <LocalizationContext.Provider value={{ locale, setLocale, locData, loadLocalizedText }}>
      {children}
    </LocalizationContext.Provider>
  );
};
```

**Key Principle**: Follow the same pattern as existing contexts (ThemeContext, AuthContext).

#### 2.2 Extend AuthContext for Mock Mode

```typescript
const MOCK_AUTH_MODE = import.meta.env.VITE_MOCK_AUTH === "true";

useEffect(() => {
  const getInitialSession = async () => {
    if (MOCK_AUTH_MODE) {
      const mockAuthService = AuthServiceMock();
      if (mockAuthService.userHasSignedIn()) {
        const mockUser: User = { id: "mock-user-id", email: "mock@example.com", name: "Mock User" };
        const mockSession: Session = { token: "mock-token", expiresAt: new Date(Date.now() + 86400000).toISOString() };
        setSession(mockSession);
        setUser(mockUser);
      }
      setLoadingAuthentication(false);
      return;
    }
    // Original backend auth logic...
  };
}, []);
```

**Key Principle**: Use environment variables to switch between mock and real auth without code changes.

---

### Phase 3: Component Migration

**Objective**: Convert Material-UI components to shadcn/ui + Tailwind CSS.

#### 3.1 Material-UI to shadcn/ui Component Mapping

| Material-UI | shadcn/ui | Notes |
|-------------|-----------|-------|
| `Button` | `Button` | Use `variant` prop (default, secondary, outline, ghost) |
| `Card`, `CardContent`, `CardActions` | `Card`, `CardContent`, `CardFooter`, `CardHeader` | More semantic structure |
| `Grid` | Tailwind Flex/Grid | Use `flex`, `grid`, `space-y-*`, `gap-*` utilities |
| `Menu`, `MenuItem` | `DropdownMenu`, `DropdownMenuItem` | More accessible, built on Radix UI |
| `Dialog` | `Dialog`, `DialogContent`, `DialogHeader` | Similar API, better accessibility |
| `TextField` | `Input`, `Textarea`, `Label` | Separate components for better composition |
| `CircularProgress` | `Loader2` icon with `animate-spin` | Use Lucide icons |

#### 3.2 Example: LanguageSelection Component

```typescript
// Before (Material-UI)
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TranslateIcon from "@mui/icons-material/Translate";

const LanguageSelection = ({ setUserLocale }) => {
  const [anchorEl, setAnchorEl] = useState(undefined);
  
  return (
    <>
      <Button onClick={(e) => setAnchorEl(e.currentTarget)}>
        <TranslateIcon />
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(undefined)}>
        <MenuItem onClick={() => { setUserLocale("enUS"); setAnchorEl(undefined); }}>
          English
        </MenuItem>
      </Menu>
    </>
  );
};

// After (shadcn/ui + Tailwind)
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useLocalization } from "@/contexts/LocalizationContext";

const LanguageSelection = () => {
  const { setLocale } = useLocalization();

  const handleLanguageChange = (newLocale: "enUS" | "zhCN" | "esES") => {
    setLocale(newLocale);
    window.location.reload();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleLanguageChange("enUS")}>English</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("zhCN")}>Chinese</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("esES")}>Spanish</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
```

**Key Principles**:
- Use Lucide icons instead of Material Icons
- Use `asChild` prop for composition
- Use Tailwind utilities for sizing (`h-5 w-5`)
- Leverage context instead of prop drilling

#### 3.3 Styling Migration Patterns

```typescript
// Before (Material-UI sx prop)
<Box sx={{ display: "flex", flexDirection: "column", p: 2 }}>
  <Card sx={{ marginTop: 2, padding: 3 }}>
    <CardContent>Content</CardContent>
  </Card>
</Box>

// After (Tailwind CSS)
<div className="flex flex-col p-2">
  <Card className="mt-2 p-3">
    <CardContent>Content</CardContent>
  </Card>
</div>
```

**Key Principle**: Replace `sx` props with Tailwind utility classes.

---

### Phase 4: Page Migration with Modern Features

**Objective**: Migrate pages with enhanced UX using framer-motion and React Hook Form.

#### 4.1 Add framer-motion Animations

```typescript
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

return (
  <motion.div initial="hidden" animate="visible" variants={containerVariants} className="space-y-6">
    <motion.div variants={itemVariants}>
      <h2>{locData.title}</h2>
    </motion.div>
    <motion.div variants={itemVariants}>
      <Card>...</Card>
    </motion.div>
  </motion.div>
);
```

**Key Principle**: Use stagger animations for lists, spring animations for smooth motion.

#### 4.2 Migrate Forms to React Hook Form

```typescript
// Before (Formik)
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";

<Formik
  initialValues={{ name: "", email: "" }}
  validate={(values) => {
    const errors = {};
    if (!values.email) errors.email = "Required";
    return errors;
  }}
  onSubmit={(values) => console.log(values)}
>
  {({ submitForm }) => (
    <Form>
      <Field component={TextField} name="email" label="Email" />
      <Button onClick={submitForm}>Submit</Button>
    </Form>
  )}
</Formik>

// After (React Hook Form)
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const { register, handleSubmit, formState: { errors } } = useForm({
  defaultValues: { name: "", email: "" }
});

const onSubmit = (data) => console.log(data);

<form onSubmit={handleSubmit(onSubmit)}>
  <div className="space-y-2">
    <Label htmlFor="email">Email *</Label>
    <Input
      id="email"
      {...register("email", {
        required: "This field is required",
        pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Invalid email" }
      })}
    />
    {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
  </div>
  <Button type="submit">Submit</Button>
</form>
```

**Key Principles**:
- React Hook Form is more performant and actively maintained
- Use `register` for simple fields
- Use `Controller` for complex components
- Display errors inline with Tailwind utilities

---

### Phase 5: Routing and Navigation

**Objective**: Update routing structure and navigation components.

#### 5.1 Update Routes

```typescript
// Add new routes
const Home = lazy(() => import("@/pages/Home"));
const Contact = lazy(() => import("@/pages/Contact"));
const Settings = lazy(() => import("@/pages/Settings"));

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/contact/:name" element={<Contact />} />
  <Route path="/settings" element={<Settings />} />
</Routes>
```

#### 5.2 Update Navigation

```typescript
// Add new components to navigation
import LanguageSelection from "@/components/app/LanguageSelection";
import AuthButton from "@/components/app/AuthButton";

// In Navigation component
<LanguageSelection />
<ThemeToggle />
{import.meta.env.VITE_MOCK_AUTH === "true" ? (
  <AuthButton />
) : (
  // Regular auth UI
)}
```

---

### Phase 6: App Integration

**Objective**: Wire all contexts together in the correct order.

```typescript
import { LocalizationProvider } from "@/contexts/LocalizationContext";

const App = () => (
  <BrowserRouter>
    <ToastProvider>
      <ThemeProvider defaultTheme={defaultTheme}>
        <LocalizationProvider>
          <QueryClientProvider client={queryClient}>
            <BookmarksProvider>
              <AuthProvider>
                <Toaster />
                <ToasterSonner />
                {PageRouter}
              </AuthProvider>
            </BookmarksProvider>
          </QueryClientProvider>
        </LocalizationProvider>
      </ThemeProvider>
    </ToastProvider>
  </BrowserRouter>
);
```

**Key Principle**: Context order matters - theme and localization should wrap everything.

---

## Environment Configuration

### .env.example

```env
# Mock Authentication Mode
VITE_MOCK_AUTH=true

# API Configuration (when not using mock auth)
# VITE_API_URL=http://localhost:3000
# VITE_API_KEY=your-api-key-here
```

**Usage**: Copy to `.env` and set `VITE_MOCK_AUTH=true` for frontend-only development.

---

## Dependencies Required

```json
{
  "dependencies": {
    "framer-motion": "^12.x",
    "react-hook-form": "^7.x",
    "sonner": "^2.x",
    "lucide-react": "latest",
    "@radix-ui/react-dropdown-menu": "latest",
    "@radix-ui/react-dialog": "latest"
  }
}
```

---

## Common Pitfalls and Solutions

### 1. Import Path Issues

**Problem**: Relative imports break when moving files.

**Solution**: Always use path aliases (`@/`):

```typescript
// ❌ Bad
import { Button } from "../../components/ui/button";

// ✅ Good
import { Button } from "@/components/ui/button";
```

### 2. Theme Not Applied

**Problem**: Components don't respect dark mode.

**Solution**: Use Tailwind's `dark:` prefix and ensure ThemeProvider wraps app:

```typescript
<div className="bg-background text-foreground dark:bg-gray-900 dark:text-white">
```

### 3. Localization Not Loading

**Problem**: Localization data is empty.

**Solution**: Call `loadLocalizedText` in `useEffect`:

```typescript
useEffect(() => {
  loadLocalizedText(["key1", "key2", "key3"]);
}, []);
```

### 4. Forms Not Validating

**Problem**: React Hook Form validation not working.

**Solution**: Ensure validation rules are in `register`:

```typescript
{...register("email", {
  required: "Required",
  pattern: { value: /regex/, message: "Invalid" }
})}
```

### 5. Animations Not Smooth

**Problem**: framer-motion animations feel janky.

**Solution**: Use `type: "spring"` for natural motion:

```typescript
transition: { type: "spring", stiffness: 100, damping: 15 }
```

---

## Testing Checklist

After migration, verify:

- [ ] Language selection works and persists
- [ ] Theme toggle works (light/dark/system)
- [ ] Mock sign-in/sign-out works
- [ ] Authenticated content shows/hides correctly
- [ ] All pages load without errors
- [ ] Forms validate and submit correctly
- [ ] Notifications display properly
- [ ] Modals/dialogs open and close
- [ ] Animations are smooth
- [ ] Responsive design works on mobile
- [ ] No console errors
- [ ] TypeScript compiles without errors

---

## Migration Benefits

✅ **Modern Stack**: shadcn/ui + Tailwind CSS is actively maintained and widely adopted
✅ **Better Performance**: Smaller bundle size, faster builds with Vite
✅ **Improved DX**: Better TypeScript support, easier customization
✅ **Accessibility**: Built on Radix UI with ARIA support out of the box
✅ **Flexibility**: No backend required for development (mock auth)
✅ **Animations**: Smooth, professional animations with framer-motion
✅ **Forms**: Better performance and DX with React Hook Form

---

## Key Takeaways

1. **Standardize Responses**: Wrap all API calls in `ApiResponse<T>`
2. **Use Contexts**: Leverage React Context for global state (theme, locale, auth)
3. **Path Aliases**: Always use `@/` imports for consistency
4. **Component Composition**: Use `asChild` pattern for flexible components
5. **Tailwind First**: Use utility classes instead of custom CSS
6. **Type Safety**: Maintain strong TypeScript types throughout
7. **Progressive Enhancement**: Add features (animations, forms) incrementally
8. **Environment Flexibility**: Use env vars to toggle between mock and real services

---

## Example Migration Timeline

- **Day 1**: Services and contexts (Phases 1-2)
- **Day 2**: Core components (Phase 3)
- **Day 3**: Pages and routing (Phases 4-5)
- **Day 4**: Integration and testing (Phase 6)
- **Day 5**: Polish, animations, and documentation

---

## Resources

- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [framer-motion Documentation](https://www.framer.com/motion/)
- [React Hook Form Documentation](https://react-hook-form.com/)
- [Vite Documentation](https://vitejs.dev/)
