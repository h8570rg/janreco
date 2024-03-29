import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "~/lib/database.types";
import { friendsService } from "./friends";
import { gameService } from "./game";
import { matchService } from "./match";
import { matchesService } from "./matches";
import { profileService } from "./profile";

export const services = (supabaseClient: SupabaseClient<Database>) => {
  return {
    ...matchesService(supabaseClient),
    ...matchService(supabaseClient),
    ...profileService(supabaseClient),
    ...friendsService(supabaseClient),
    ...gameService(supabaseClient),
  };
};
