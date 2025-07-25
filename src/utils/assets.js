/**
 * Get the correct asset path for the current environment
 * In development, this returns the path as-is
 * In production with a custom base, this prepends the base URL
 */
export const getAssetPath = (path) => {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In Vite, import.meta.env.BASE_URL gives us the base path
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};
