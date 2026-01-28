export const isSafeRedirect = (path?: string | null): boolean => {
  if (!path) return false;
  try {
    const decoded = decodeURIComponent(path);
    return decoded.startsWith("/") && !decoded.startsWith("//") && !/^https?:/i.test(decoded);
  } catch {
    return false;
  }
};

export const getRedirectFromLocation = (location: Location): string | null => {
  const params = new URLSearchParams(location.search);
  const redirectParam = params.get("redirect");
  if (isSafeRedirect(redirectParam)) return decodeURIComponent(redirectParam as string);
  return null;
};

export const buildRedirectParamFromLocation = (location: Location): string => {
  return encodeURIComponent(location.pathname + location.search);
};

export const resolvePostAuthRedirect = (
  location: Location,
  overrideRedirect?: string | null,
  stateFrom?: { pathname?: string; search?: string } | null
): string => {
  if (isSafeRedirect(overrideRedirect)) return decodeURIComponent(overrideRedirect as string);
  const fromQuery = getRedirectFromLocation(location);
  if (fromQuery) return fromQuery;
  if (stateFrom?.pathname) return stateFrom.pathname + (stateFrom.search ?? "");
  return "/";
};
