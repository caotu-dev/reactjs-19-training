"use client";
import { EuroPlayerApi } from "@/shared/services/api/euro-players.api";
import { useQuery } from "react-query";
import { TEuroPlayerStats } from "../types/player.model";
import Loading from "@/shared/components/Loading";
import PlayerCard from "../components/PlayerCard";

export default function PlayerList() {
  const usePlayersQuery = () => {
    const query = useQuery({
      queryKey: ["euro-players"],
      queryFn: () => EuroPlayerApi.getPlayers(),
      staleTime: 60 * 1000,
    });

    return {
      ...query,
      players: query?.data?.data,
    };
  };

  const { players, isLoading } = usePlayersQuery();

  return (
    <div className="flex flex-wrap items-center">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {players?.map((player: TEuroPlayerStats) => (
            <div key={player?._id} className="w-full md:w-1/3 p-2">
              <PlayerCard player={player} />
            </div>
          ))}
        </>
      )}
    </div>
  );
}
