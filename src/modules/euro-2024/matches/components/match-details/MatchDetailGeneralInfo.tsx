import CountryFlag from "@/shared/components/CountryFlag";
import {
  formatIsoToHourMinutes,
  getRelativeDate,
} from "@/shared/utils/common.utils";
import Link from "next/link";

export default function MatchGeneralInfo({ matchDetails }: any) {
  return (
    <Link href={`/matches/${matchDetails?.id}`} className="relative">
      <div
        className="h-[30rem] blur-sm bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/images/euro-background.png')" }}
      ></div>
      <div className="w-full p-4 absolute z-10 top-0 left-0">
        <div className="flex items-center justify-between">
          <div>
            <span className="capitalize">{matchDetails?.description}</span> -{" "}
            <span>
              {getRelativeDate(matchDetails?.date)}
              {!matchDetails?.isFinished &&
                ", " + formatIsoToHourMinutes(matchDetails?.date)}
            </span>
          </div>
          <div>{matchDetails?.isFinished && "Fulltime"}</div>
        </div>
        <div className="h-[20rem] w-full flex items-center justify-around">
          <TeamInfo teamInfo={matchDetails?.teamA} />
          <div className="w-1/3 flex items-center justify-around">
            <span className="text-9xl">{matchDetails?.teamA?.score}</span>
            <span className="text-5xl">vs</span>
            <span className="text-9xl">{matchDetails?.teamB?.score}</span>
          </div>
          <TeamInfo teamInfo={matchDetails?.teamB} />
        </div>
        <div className="text-center">
          <span className="capitalize">{matchDetails?.stage}</span>
          <span className="capitalize"> - {matchDetails?.stadium} Stadium</span>
          <span className="capitalize"> - {matchDetails?.city}</span>
        </div>
      </div>
    </Link>
  );
}

function TeamInfo({ teamInfo }: any) {
  const teamName = teamInfo?.details?.name ?? teamInfo?.team?.name;
  return (
    <div className="w-1/3 flex flex-col justify-center items-center">
      <CountryFlag country={teamName} width={200} height={40} />
      <p className="text-3xl capitalize  pt-2">{teamName}</p>
    </div>
  );
}
