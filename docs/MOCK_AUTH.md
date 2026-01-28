# Mock Authentication System

The React Project Accelerator includes a complete mock authentication system that allows the application to work without a backend API. This is perfect for development, demos, and testing.

## Overview

The `VITE_MOCK_AUTH` environment variable controls authentication behavior:

### `VITE_MOCK_AUTH`

Controls which authentication service is used and navigation UI:

- **`true`**: Uses mock auth service (`authServiceMockV2.ts`)
  - All sign-in/sign-up/password-reset operations return fake responses
  - No backend API calls are made
  - User sessions are stored in localStorage
  - Shows simple "Sign In" / "Sign Out" button in navigation
  - Perfect for development without a backend

- **`false`**: Uses real auth service (`authService.ts`)
  - Makes actual API calls to backend
  - Requires `VITE_BASE_API_URL` to be configured
  - Full authentication flow with real backend
  - Shows full authentication UI with user dropdown

## Setup

### For Development (No Backend)

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Ensure this value is set:
   ```env
   VITE_MOCK_AUTH=true
   ```

3. Start the dev server:
   ```bash
   npm run dev
   ```

4. Sign in with any email/password - they will all work!

### For Production (With Backend)

1. Update your `.env` or `.env.production`:
   ```env
   VITE_MOCK_AUTH=false
   VITE_BASE_API_URL=https://your-api.com/api
   ```

2. Build and deploy:
   ```bash
   npm run build
   ```

## How It Works

### Architecture

```
┌─────────────────────────────────────────┐
│  Components (SignIn, SignUp, etc.)      │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│  AuthContext                             │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│  @/services/auth (wrapper)               │
│  ├─ if VITE_MOCK_AUTH=true              │
│  │  └─ authServiceMockV2.ts             │
│  └─ else                                 │
│     └─ authService.ts                    │
└─────────────────────────────────────────┘
```

### Mock Auth Service Features

The mock auth service (`authServiceMockV2.ts`) provides:

- ✅ **Sign In**: Accepts any email/password combination
- ✅ **Sign Up**: Creates mock user account
- ✅ **Sign Out**: Clears localStorage token
- ✅ **Session Management**: Returns mock session data
- ✅ **Password Reset**: Returns success without sending emails
- ✅ **Token Verification**: Returns mock verification success
- ✅ **Access Requests**: Returns success without backend

### Mock User Data

When using mock auth, you'll be signed in as:

```typescript
{
  id: "mock-user-123",
  email: "demo@example.com", // or the email you entered
  name: "Demo User",
  createdAt: "2024-01-01T00:00:00.000Z",
  updatedAt: "2024-01-01T00:00:00.000Z"
}
```

## Testing

### Test Sign In Flow

1. Navigate to `/signin`
2. Enter any email (e.g., `test@example.com`)
3. Enter any password (e.g., `password123`)
4. Click "Sign In"
5. You'll be redirected to `/home` as an authenticated user

### Test Sign Up Flow

1. Navigate to `/signup`
2. Fill in the form with any data
3. Click "Sign Up"
4. You'll receive a success message
5. Sign in with the same credentials

### Test Sign Out

1. When signed in, click the "Sign Out" button in navigation
2. You'll be signed out and redirected to landing page

## Switching Between Mock and Real Auth

You can switch between mock and real authentication at any time by changing the environment variable:

```bash
# Development with mock auth
VITE_MOCK_AUTH=true npm run dev

# Development with real backend
VITE_MOCK_AUTH=false npm run dev
```

## Implementation Details

### Service Wrapper

The `@/services/auth/index.ts` file conditionally exports the appropriate service:

```typescript
const useMockAuth = import.meta.env.VITE_MOCK_AUTH === "true";

if (useMockAuth) {
  export * from "../authServiceMockV2";
} else {
  export * from "../authService";
}
```

### AuthContext Integration

The `AuthContext` imports from the wrapper, so it automatically uses the correct service:

```typescript
import { getSession, signOut } from "@/services/auth";
```

No conditional logic needed in components or contexts!

## Benefits

✅ **No Backend Required**: Develop and demo without running a backend server
✅ **Fast Development**: No API latency, instant responses
✅ **Easy Testing**: Test auth flows without database setup
✅ **Production Ready**: Switch to real backend with one env variable
✅ **Type Safe**: Same TypeScript interfaces for mock and real services
✅ **Consistent API**: Components don't know if they're using mock or real auth

## Troubleshooting

### "No session found" error

- Check that `VITE_MOCK_AUTH=true` in your `.env` file
- Clear localStorage and try signing in again
- Restart the dev server after changing `.env`

### Sign in doesn't work

- Verify the `.env` file exists and has correct values
- Check browser console for errors
- Ensure you're using the correct import path: `@/services/auth`

### Can't switch to real backend

- Set `VITE_MOCK_AUTH=false`
- Configure `VITE_BASE_API_URL` to your backend URL
- Ensure your backend is running and accessible
- Restart the dev server after changing `.env`

## Next Steps

When you're ready to connect a real backend:

1. Set `VITE_MOCK_AUTH=false`
2. Configure `VITE_BASE_API_URL` to your API endpoint
3. Ensure your backend implements the expected API endpoints:
   - `POST /auth/signin/email`
   - `POST /auth/signup/email`
   - `POST /auth/session`
   - `POST /auth/session/revoke`
   - `POST /auth/signup/email/verify`
   - `POST /auth/password/forgot`
   - `POST /auth/password/reset`
   - `POST /auth/password/reset/validate`
   - `POST /auth/access/request`

4. All endpoints should return `ApiResponse<T>` format:
   ```typescript
   {
     success: boolean;
     data?: T;
     message?: string;
   }
   ```
