import CountryFlag from "@/shared/components/CountryFlag";
import { TEuroPlayerRanking } from "../types/player.model";

interface Props {
  labels: {
    id: number;
    title: string;
  }[];
  list: TEuroPlayerRanking[];
}
export default function PlayerTable({ labels, list }: Props) {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          {labels?.map((label) => (
            <th key={label?.id} scope="col" className="px-6 py-3">
              {label?.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {list?.map((data, index) => (
          <tr
            key={data?._id}
            className={`bg-white border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600
            ${
              index === 0
                ? "dark:bg-yellow-500 dark:text-black text-xl font-bold"
                : "dark:bg-gray-800"
            }
            `}
          >
            <td className="px-6 py-4">{data?.rank}</td>
            <td className="px-6 py-4 capitalize">{data?.name}</td>
            <td className="px-6 py-4">
              <div className="flex items-center justify-start">
                <CountryFlag
                  country={data?.team ?? ""}
                  width={40}
                  height={30}
                />
                <span className="pl-2 capitalize">{data?.team}</span>
              </div>
            </td>
            <td className="px-6 py-4">{data?.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
