import Image from "next/image";
import { TEuroGroup } from "../types/group.types";

interface Props {
  group: TEuroGroup;
}
export default function GroupTable({ group }: Props) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-gray-100">
        <thead className="text-xs text-white uppercase bg-gray-600 dark:text-white">
          <tr>
            <th scope="col" className="px-6 py-3">
              <span className="uppercase">Group {group?.name}</span>
            </th>
            <th scope="col" className="px-6 py-3">
              Matches Played
            </th>
            <th scope="col" className="px-6 py-3">
              Wins
            </th>
            <th scope="col" className="px-6 py-3">
              Draws
            </th>
            <th scope="col" className="px-6 py-3">
              Loses
            </th>

            <th scope="col" className="px-6 py-3">
              Goal Scores
            </th>
            <th scope="col" className="px-6 py-3">
              Goal Conceded
            </th>
            <th scope="col" className="px-6 py-3">
              Goal Difference
            </th>
            <th scope="col" className="px-6 py-3">
              Points
            </th>
          </tr>
        </thead>
        <tbody>
          {group?.teams.map((team) => (
            <tr className="bg-gray-500 border-b border-gray-400">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-50 whitespace-nowrap dark:text-gray-100"
              >
                <div className="flex items-center justify-start gap-4">
                  <Image
                    src={team?.team?.imageUrl}
                    alt={team?.team?.name}
                    width={30}
                    height={20}
                  />
                  <span className="capitalize">{team?.team?.name}</span>
                </div>
              </th>
              <td className="px-6 py-4">{team?.matchesPlayed}</td>
              <td className="px-6 py-4">{team?.wins}</td>
              <td className="px-6 py-4">{team?.draws}</td>
              <td className="px-6 py-4">{team?.losses}</td>
              <td className="px-6 py-4">{team?.goalsScored}</td>
              <td className="px-6 py-4">{team?.goalsConceded}</td>
              <td className="px-6 py-4">{team?.goalDifference}</td>
              <td className="px-6 py-4">{team?.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
