export default function TeamStat({ matchDetails }: any) {
  const teamA = matchDetails?.teamA?.details;
  const teamB = matchDetails?.teamB?.details;
  return (
    <div className="flex gap-5 w-full">
      <TeamStateItem team={teamA} />
      <TeamStateItem team={teamB} />
    </div>
  );
}

function TeamStateItem({ team }: any) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-1/2 border">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
              <span className="capitalize text-lg">{team?.name}</span>
            </th>
            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800"></th>
          </tr>
        </thead>
        <tbody>
          <TableRow title={`Group`} value={team?.group?.name} />
          <TableRow title={`Coach`} value={team?.coach} />
          <TableRow title={`Captain`} value={team?.captain} />
          <TableRow title={`Total of Championships`} value={team?.championships} />
          <TableRow title={`Total of Runners up`} value={team?.runnersUp} />
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
