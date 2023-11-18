/**
 * @see https://supabase.com/docs/guides/auth/server-side/creating-a-client?environment=server-component
 */
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { Database } from "~/lib/database.types";

export const createSupabaseServerComponentClient = () => {
  const cookieStore = cookies();
  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    },
  );
};
