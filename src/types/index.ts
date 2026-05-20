// ─── Form ──────────────────────────────────────────────────────────────────────

export type SubmitStatus = "idle" | "loading" | "success" | "error";

// ─── i18n ──────────────────────────────────────────────────────────────────────

export type Locale = "en" | "ar";

// ─── Window ────────────────────────────────────────────────────────────────────
// Cloudflare Turnstile global — avoids repeating declare global in every file

declare global {
  interface Window {
    turnstile?: {
      reset: (id: string) => void;
      remove: (id: string) => void;
    };
  }
}
