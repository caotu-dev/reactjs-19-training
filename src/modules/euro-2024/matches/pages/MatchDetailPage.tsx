"use client";
import { EuroMatchApi } from "@/shared/services/api/euro-match.api";
import MatchGeneralInfo from "../components/match-details/MatchDetailGeneralInfo";
import { useQuery } from "react-query";
import Loading from "@/shared/components/Loading";
import { TEuroMatchTab } from "../types/match.types";
import MatchDetailTab from "../components/match-details/MatchDetailTab";
import TeamStat from "../components/match-details/TeamStat";
import Lineups from "../components/match-details/Lineups";
import MatchEvents from "../components/match-details/MatchEvents";

export default function MatchDetailPage({ id }: { id: string }) {
  const useMatchDetailQuery = () => {
    const query = useQuery({
      queryKey: ["matchDetails", id],
      queryFn: () => EuroMatchApi.getMatchById(id),
      staleTime: 60 * 60 * 1000,
    });

    return {
      ...query,
      matchDetails: query?.data?.data,
    };
  };

  const { matchDetails, isLoading } = useMatchDetailQuery();

  const tabs: TEuroMatchTab[] = [
    {
      id: 1,
      selector: "about-team",
      title: "Teams",
      children: <TeamStat matchDetails={matchDetails} />,
      isActive: true,
    },
    {
      id: 2,
      selector: "lineups",
      title: "Lineups",
      children: <Lineups matchDetails={matchDetails} />,
      isActive: false,
    },
    {
      id: 3,
      selector: "match-events",
      title: "Match Events",
      children: <MatchEvents matchEvents={matchDetails?.matchEvents} />,
      isActive: false,
    },
    {
      id: 4,
      selector: "ai-prediction",
      title: "AI Prediction",
      children: null,
      isActive: false,
    },
  ];

  return (
    <div className="flex flex-col p-4">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <MatchGeneralInfo matchDetails={matchDetails} />
          <MatchDetailTab tabs={tabs} />
        </>
      )}
    </div>
  );
}
