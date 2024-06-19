import Image from "next/image";
import { TEuroMatch } from "../types/match.types";

export default function MatchItem({ match }: { match: TEuroMatch }) {
  return (
    <div
      className="flex items-center justify-between p-4
        rounded-lg bg-gray-50 dark:bg-gray-800 text-sm text-gray-500
        dark:text-gray-400 w-[450px] gap-2 relative"
    >
      <div className="w-3/4 border-r-2 pr-4">
        <MatchTeamItem
          imageUrl={match?.teamA?.team?.imageUrl}
          name={match?.teamA?.team?.name ?? "TBD"}
          score={match?.teamA?.score}
        />
        <p className="pt-2"></p>
        <MatchTeamItem
          imageUrl={match?.teamB?.team?.imageUrl}
          name={match?.teamB?.team?.name ?? "TBD"}
          score={match?.teamB?.score}
        />
      </div>
      <MatchDateItem match={match} />
      <p className="text-green-500 absolute right-2 top-2">live {match?.minutesCompleted}"</p>
    </div>
  );
}

function MatchTeamItem({
  name,
  score,
  imageUrl,
}: {
  name: string;
  score: number;
  imageUrl: string;
}) {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center justify-start gap-2">
        {imageUrl && <Image src={imageUrl} alt={name} width={30} height={20} />}
        <span className="capitalize">{name}</span>
      </div>
      <span className="text-lg">{score}</span>
    </div>
  );
}

function MatchDateItem({ match }: { match: TEuroMatch }) {
  return (
    <div className="flex flex-col gap-1 items-center w-1/4">
      
      {match?.relativeDate === "Today" && <p className="today-match"></p>}
      {match?.isFinished ? (
        <>
          <p>Fulltime</p>
          <p>{match?.relativeDate}</p>
        </>
      ) : (
        <>
          <p>{match?.relativeDate}</p>
          <p>{match?.time}</p>
        </>
      )}
    </div>
  );
}
