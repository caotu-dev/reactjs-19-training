export default function Lineups({ matchDetails }: any) {
  const teamA = matchDetails?.teamA;
  const teamB = matchDetails?.teamB;
  return (
    <div className="flex gap-5 w-full">
      {teamA?.lineup?.players?.length === 0 ? (
        <div className="text-center w-full text-gray-50">The line-up will be posted before the match</div>
      ) : (
        <>
          <TeamStateItem team={teamA} />
          <TeamStateItem team={teamB} />
        </>
      )}
    </div>
  );
}

function TeamStateItem({ team }: any) {
  const startingPlayers = team?.lineup?.players
    ?.filter((_: any) => _?.status === "starting")
    ?.map((_: any) => _?.player);
  const benchedPlayers = team?.lineup?.players
    ?.filter((_: any) => _?.status === "bench")
    ?.map((_: any) => _?.player);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-1/2 border">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
              <span className="capitalize text-lg">{team?.details?.name}</span>
            </th>
            <th
              scope="col"
              className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
            ></th>
          </tr>
        </thead>
        <tbody>
          <TableRow title={`Formation`} value={team?.lineup?.formation} />
          <TableRow title={`Starting`} value={startingPlayers?.join(", ")} />
          <TableRow title={`Substitutes`} value={benchedPlayers?.join(", ")} />
        </tbody>
      </table>
    </div>
  );
}

function TableRow({ title, value }: any) {
  return (
    <tr className="border-b border-gray-200 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white "
      >
        {title}
      </th>
      <td className="px-6 py-4">
        <span className="capitalize">{value}</span>
      </td>
    </tr>
  );
}
