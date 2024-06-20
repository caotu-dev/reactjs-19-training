export default function MatchEvents({ matchEvents }: any) {
  return (
    <>
      {matchEvents?.length > 0 ? (
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {matchEvents?.map((event: any, index: number) => (
            <li key={index} className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {event?.minute}"
              </time>
              <MatchEventItem event={event} />
            </li>
          ))}
        </ol>
      ) : (
        <div className="text-center w-full text-gray-50">
          The Match Event will be updated during the match.
        </div>
      )}
    </>
  );
}

function getCardColorCss(cardColor: "yellow" | "red") {
  return cardColor === "yellow" ? "text-yellow-500" : "text-red-500";
}

function MatchEventItem({ event }: any) {
  switch (event?.type) {
    case "goal":
      return (
        <>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            GOAL for {event?.team} team
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            From{" "}
            <span className="capitalize font-bold">
              {event?.assistingPlayer}
            </span>{" "}
            passing,{" "}
            <span className="capitalize font-bold">{event?.scoringPlayer}</span>{" "}
            has score for{" "}
            <span className="capitalize font-bold">{event?.team}</span>.
          </p>
        </>
      );
    case "card":
      return (
        <>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            <span
              className={`capitalize font-bold ${getCardColorCss(
                event?.cardColor
              )} `}
            >
              {event?.cardColor}
            </span>{" "}
            card for <span className="capitalize font-bold">{event?.team}</span>{" "}
            team
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            At <span className="capitalize font-bold">{event?.minute}"</span>,
            player{" "}
            <span className="capitalize font-bold">{event?.bookedPlayer}"</span>{" "}
            is received a{" "}
            <span
              className={`capitalize font-bold ${getCardColorCss(
                event?.cardColor
              )} `}
            >
              {event?.cardColor}
            </span>{" "}
            card from referee from his fault to the oponent player.
          </p>
        </>
      );

    case "substitution":
      return (
        <>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Substitution from{" "}
            <span className="capitalize font-bold">{event?.team}</span> team.
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            In :{" "}
            <span className="capitalize font-bold text-green-600">
              {event?.joiningPlayer}
            </span>{" "}
            / Out :{" "}
            <span className="capitalize font-bold text-red-600">
              {event?.leavingPlayer}
            </span>
          </p>
        </>
      );
  }
}
