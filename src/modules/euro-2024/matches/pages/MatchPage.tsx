import MatchTab from "../components/MatchTab";
import { TEuroMatchDTO, TEuroMatchTab } from "../types/match.types";
import { EuroMatchApi } from "@/shared/services/api/euro-match.api";
import IncomingMatch from "../components/IncomingMatch";
import ErrorPage from "@/modules/static/ErrorPage";

export default async function MatchPage() {
  const response: TEuroMatchDTO = await EuroMatchApi.getMatches();
  if(!response) return <ErrorPage />;

  const incomingMatches = response?.data?.filter(
    (match) =>
      (match?.relativeDate === "Today" || match?.relativeDate === "Tomorrow") &&
      match?.isFinished === false
  );
  const groupStage = response?.data?.filter((_) => _?.stage === "groupStage");
  const roundOfSixteen = response?.data?.filter(
    (_) => _?.stage === "roundOfSixteen"
  );
  const quarterFinal = response?.data?.filter(
    (_) => _?.stage === "quarterFinal"
  );
  const semiFinal = response?.data?.filter((_) => _?.stage === "semiFinal");
  const final = response?.data?.filter((_) => _?.stage === "final");

  const tabs: TEuroMatchTab[] = [
    {
      id: 1,
      selector: "group-stage",
      title: "Group Stage",
      data: groupStage,
      isActive: true,
    },
    {
      id: 2,
      selector: "round-of-sixteen",
      title: "Round Of Sixteen",
      data: roundOfSixteen,
      isActive: false,
    },
    {
      id: 3,
      selector: "quarter-final",
      title: "Quarter Final",
      data: quarterFinal,
      isActive: false,
    },
    {
      id: 4,
      selector: "semi-final",
      title: "Semi Final",
      data: semiFinal,
      isActive: false,
    },
    {
      id: 5,
      selector: "final",
      title: "Final",
      data: final,
      isActive: false,
    },
  ];

  return (
    <div className="flex flex-col">
      <IncomingMatch matches={incomingMatches} />
      <div className="p-4 md:md:px-32">
        <MatchTab tabs={tabs} />
      </div>
    </div>
  );
}
