
// JSON-related transformation utilities for ObjectTemplate stats.
// These are intentionally generic and environment-agnostic so they can be reused
// both in browser and Node contexts.

export function parseJSON<T = unknown>(value: string | null | undefined): T | null {
  if (value == null || value === "") return null
  try {
    return JSON.parse(value) as T
  } catch {
    return null
  }
}

export function isJSONArray(value: string | null | undefined): boolean {
  const parsed = parseJSON(value)
  return Array.isArray(parsed)
}

export function isJSONObject(value: string | null | undefined): boolean {
  const parsed = parseJSON(value)
  return typeof parsed === "object" && parsed !== null && !Array.isArray(parsed)
}
