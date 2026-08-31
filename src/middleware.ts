import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Widened from ["/", "/(ar|en)/:path*"] so unprefixed legacy paths (from
  // before the locale migration) reach next-intl's locale-prefix redirect
  // and the [...rest] catch-all too, instead of hitting Next's default 404
  // before this integration ever runs.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
