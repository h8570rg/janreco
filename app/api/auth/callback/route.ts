import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "~/lib/utils/supabase/serverClient";

/**
 * @see https://supabase.com/docs/guides/auth/server-side/oauth-with-pkce-flow-for-ssr
 */
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const supabase = createSupabaseServerClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/auth-code-error`);
}
