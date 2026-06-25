
// Type exports for consumers
// Add specific types as needed
/**
 * deslugify
 * @param slug
 */
export function deslugify(slug: string): string {
  if (!slug || typeof slug !== "string") throw new Error("Input must be a non-empty string");
  return slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
}
