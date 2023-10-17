import Link from "next/link";
import { Button } from "~/components/Button";
import { Icon } from "~/components/Icon";
import { services } from "~/lib/services";
import { createSupabaseClient } from "~/lib/utils/supabase/serverComponentClient";
import MatchTable from "./MatchTable";

export default async function Match({
  params: { matchId },
}: {
  params: { matchId: string };
}) {
  const supabaseClient = createSupabaseClient();
  const { getMatch, getGames } = services(supabaseClient);
  const [match, games] = await Promise.all([
    getMatch({ matchId }),
    getGames({ matchId }),
  ]);

  return (
    <div>
      <header className="mb-1 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Button isIconOnly variant="light" as={Link} href="/matches">
            <Icon className="h-5 w-5 fill-current" name="back" />
          </Button>
        </div>
        <div>{match.date}</div>
      </header>
      <MatchTable match={match} games={games} />
    </div>
  );
}
