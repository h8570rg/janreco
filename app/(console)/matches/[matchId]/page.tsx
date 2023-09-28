import Link from "next/link";
import { Button } from "~/components/Button";
import { Icon } from "~/components/Icon";
import { services } from "~/lib/services";
import { createSupabaseClient } from "~/lib/utils/supabase/serverComponentClient";
import MatchAddButton from "./MatchAddButton";
import MatchTable from "./MatchTable";

export default async function Matche({
  params: { matchId },
}: {
  params: { matchId: string };
}) {
  const supabaseClient = createSupabaseClient();
  const { getMatch } = services(supabaseClient);
  const match = await getMatch({ matchId });

  return (
    <div>
      <header className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Button isIconOnly variant="light" as={Link} href="/matches">
            <Icon className="h-5 w-5 fill-current" name="back" />
          </Button>
          <h1 className="heading-1">成績表</h1>
        </div>
        <div>{match.date}</div>
      </header>
      <MatchTable defaultValue={match} />
      <MatchAddButton />
    </div>
  );
}
