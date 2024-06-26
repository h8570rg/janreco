import { CookieOptions, createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const noAuthRoutes = [
  "/auth-code-error",
  "/login",
  "/sign-up",
  "/api/auth/callback",
];

/**
 * @see https://supabase.com/docs/guides/auth/server-side/creating-a-client?environment=middleware
 * @see https://supabase.com/docs/guides/auth/server-side/nextjs
 */
export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value: "",
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value: "",
            ...options,
          });
        },
      },
    },
  );

  const { data, error } = await supabase.auth.getUser();

  const { pathname } = request.nextUrl;

  if (!noAuthRoutes.includes(pathname)) {
    if (error || !data.user) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return response;
}

/**
 * @see https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
 * @see https://supabase.com/docs/guides/auth/server-side/nextjs
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
