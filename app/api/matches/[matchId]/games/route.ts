import { NextResponse } from "next/server";
import { services } from "~/lib/services";
import { Rule } from "~/lib/services/match";
import { createSupabaseRouteHandlerClient } from "~/lib/utils/supabase/routeHandlerClient";
export const dynamic = "force-dynamic";

export async function POST(
  request: Request,
  { params: { matchId } }: { params: { matchId: string } },
) {
  const supabaseClient = createSupabaseRouteHandlerClient();
  const { createGame } = services(supabaseClient);
  const body = (await request.json()) as {
    playerPoints: {
      profileId: string;
      points: number;
    }[];
    rule: Rule;
    crackBoxPlayerId?: string;
  };
  await createGame({
    matchId,
    ...body,
  });
  return NextResponse.json({});
}

export async function GET(
  request: Request,
  { params: { matchId } }: { params: { matchId: string } },
) {
  const supabaseClient = createSupabaseRouteHandlerClient();
  const { getGames } = services(supabaseClient);
  const match = await getGames({ matchId });
  return NextResponse.json(match);
}
