/** 訂單號比對用：去空白、大寫 */
export function normalizeConfirmationCode(value: string): string {
  return value.trim().toUpperCase().replace(/\s+/g, "");
}

export function isValidConfirmationCodeInput(value: string): boolean {
  const normalized = normalizeConfirmationCode(value);
  return normalized.length >= 6 && /^[A-Z0-9][A-Z0-9-]{5,}$/.test(normalized);
}
