"use client";

import { User } from "@supabase/supabase-js";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Database } from "~/lib/database.types";
import { createSupabaseBrowserClient } from "~/lib/utils/supabase/browserClient";

type Todo = Database["public"]["Tables"]["matches"]["Row"];

export default function Page() {
  const [todos, setTodos] = useState<Todo[] | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const supabase = createSupabaseBrowserClient();

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from("matches").select();
      setTodos(data);
    };
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };

    getData();
    getUser();
  }, [supabase]);

  return todos ? (
    <>
      <Link href="/">root</Link>
      <Link href="/server">server</Link>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
      <p>{user?.email}</p>
    </>
  ) : (
    <p>Loading todos...</p>
  );
}
