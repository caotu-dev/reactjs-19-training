import { NextResponse } from 'next/server';
import { getMatchById, getTeamById } from "./service";

export const dynamic = 'force-dynamic';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const matchId = params?.id;
  if (!matchId) {
    return NextResponse.json({ status: 404, data: { message: "invalid match id" } })
  }
  const matchResponse = await getMatchById(matchId);
  if (matchResponse?.status !== 200) {
    return NextResponse.json({ status: matchResponse.status, data: matchResponse })
  }
  const teamAId = matchResponse?.data?.teamA?.team;
  const teamBId = matchResponse?.data?.teamB?.team;
  const teamAResponse = await getTeamById(teamAId);
  const teamBResponse = await getTeamById(teamBId);

  const matchDetailsData = {
    ...matchResponse?.data,
    teamA: {
      ...matchResponse?.data?.teamA,
      details: teamAResponse?.data
    },
    teamB: {
      ...matchResponse?.data?.teamB,
      details: teamBResponse?.data
    }
  }
  return NextResponse.json({ status: matchResponse.status, data: matchDetailsData })
}

