import { sortByMultipleKeys } from "@/shared/utils/common.utils";
import MatchTab from "../components/MatchTab";
import { TEuroMatch, TEuroMatchDTO, TEuroMatchTab } from "../types/match.types";
import { EuroMatchApi } from "@/shared/services/api/euro-match.api";

export default async function MatchPage() {
  const response: TEuroMatchDTO = await EuroMatchApi.getMatches();
  const getGroupState = () => {
    const groupStage = response?.data?.filter((_) => _?.stage === "groupStage");
    const keysSort: any = [
      { name: "points", direction: "desc" },
      { name: "goalDifference", direction: "desc" },
    ];
    const sortedMatches = sortByMultipleKeys([...groupStage], keysSort);
    return sortedMatches;
  };
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
    <div className="flex flex-col p-4">
      <MatchTab tabs={tabs} />
    </div>
  );
}
