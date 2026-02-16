export function normalizeUiLabel(value: string) {
  return value
    .replace(/^\s*\d+\)\s*/i, "")
    .replace(/^\s*(modul|module|sub\s*-?\s*modul)\s+/i, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}
