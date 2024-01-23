import { NextResponse } from "next/server";
import { CreateMatchPayload } from "~/lib/services/matches";
import { serverServices } from "~/lib/services/server";

export async function GET() {
  const { getMatches } = serverServices();
  const data = await getMatches();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const { createMatch } = serverServices();
  const body = (await request.json()) as CreateMatchPayload;
  const data = await createMatch(body);
  return NextResponse.json(data);
}
