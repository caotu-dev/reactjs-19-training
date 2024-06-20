import CountryFlag from "@/shared/components/CountryFlag";
import {
  formatIsoToHourMinutes,
  getRelativeDate,
} from "@/shared/utils/common.utils";

export default function MatchGeneralInfo({ matchDetails }: any) {
  return (
    <div className="border border-gray-400 rounded-md w-full p-4">
      <div className="flex items-center justify-between">
        <div>
          <span className="capitalize">{matchDetails?.description}</span>
          {" "}-{" "}
          <span>
            {getRelativeDate(matchDetails?.date)}{" "}
            {!matchDetails?.isFinished &&
              formatIsoToHourMinutes(matchDetails?.date)}
          </span>
        </div>
        <div>
        {matchDetails?.isFinished && "Fulltime"}
        </div>
      </div>
      <div className="h-60 flex items-center justify-around">
        <TeamInfo teamInfo={matchDetails?.teamA} />
        <div className="w-1/3 flex items-center justify-around">
          <span className="text-3xl">{matchDetails?.teamA?.score}</span>
          <span className="text-md">vs</span>
          <span className="text-3xl">{matchDetails?.teamB?.score}</span>
        </div>
        <TeamInfo teamInfo={matchDetails?.teamB} />
      </div>
      <div className="text-center">
        <span className="capitalize">{matchDetails?.stage}</span>
        <span className="capitalize">{" "}-{" "}{matchDetails?.stadium} Stadium</span>
        <span className="capitalize">{" "}-{" "}{matchDetails?.city}</span>
      </div>
    </div>
  );
}

function TeamInfo({ teamInfo }: any) {
  return (
    <div className="w-1/3 flex flex-col justify-center items-center">
      <CountryFlag
        country={teamInfo?.details?.name}
        width={60}
        height={40}
      />
      <p className="text-lg capitalize  pt-4">{teamInfo?.details?.name}</p>
    </div>
  );
}
