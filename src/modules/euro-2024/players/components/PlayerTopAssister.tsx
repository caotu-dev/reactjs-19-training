import Loading from "@/shared/components/Loading";
import PlayerTable from "./PlayerTable";
import { useQuery } from "react-query";
import { EuroPlayerApi } from "@/shared/services/api/euro-players.api";

export default function PlayerTopAssister() {
  const usePlayersQuery = () => {
    const query = useQuery({
      queryKey: ["euro-top-assist-players"],
      queryFn: () => EuroPlayerApi.getTopAssisters(),
      staleTime: 60 * 1000,
    });

    return {
      ...query,
      topPlayers: query?.data?.data?.map((player: any, index: number) => {
        return {
          _id: player?._id,
          rank: index + 1,
          name: player?.name,
          team: player?.teamName,
          value: player?.assists,
        };
      }),
    };
  };

  const labels = [
    { id: 1, title: "Ranking" },
    { id: 2, title: "Player" },
    { id: 3, title: "Team" },
    { id: 4, title: "Assists" },
  ];

  const { topPlayers, isLoading } = usePlayersQuery();

  return (
    <div className="flex flex-wrap items-center">
      {isLoading ? (
        <Loading />
      ) : (
        <PlayerTable labels={labels} list={topPlayers} />
      )}
    </div>
  );
}
