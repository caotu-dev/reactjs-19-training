"use client";
import { EuroPlayerApi } from "@/shared/services/api/euro-players.api";
import PlayerTable from "./PlayerTable";
import { useQuery } from "react-query";
import Loading from "@/shared/components/Loading";

export default function PlayerTopScore() {
  const usePlayersQuery = () => {
    const query = useQuery({
      queryKey: ["euro-top-score-players"],
      queryFn: () => EuroPlayerApi.getTopScores(),
      staleTime: 60 * 1000,
    });

    return {
      ...query,
      topScoredPlayers: query?.data?.data?.map((player: any, index: number) => {
        return {
          _id: player?._id,
          rank: index + 1,
          name: player?.name,
          team: player?.teamName,
          value: player?.goals,
        };
      }),
    };
  };

  const labels = [
    { id: 1, title: "Ranking" },
    { id: 2, title: "Player" },
    { id: 3, title: "Team" },
    { id: 4, title: "Goal" },
  ];

  const { topScoredPlayers, isLoading } = usePlayersQuery();

  return (
    <div className="flex flex-wrap items-center">
      {isLoading ? (
        <Loading />
      ) : (
        <PlayerTable labels={labels} list={topScoredPlayers} />
      )}
    </div>
  );
}
