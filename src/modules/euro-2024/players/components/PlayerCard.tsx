import Image from "next/image";
import Link from "next/link";
import { TEuroPlayerStats } from "../types/player.model";
import CountryFlag from "@/shared/components/CountryFlag";

export default function PlayerCard({
  player,
}: Readonly<{ player: TEuroPlayerStats }>) {
  return (
    <Link
      href="/"
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <div className="w-full md:w-1/3 relative bg-slate-200">
        <Image
          width={60}
          height={60}
          src="/images/player.png"
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          alt=""
        />
        <div className="absolute top-0 right-2">
          <CountryFlag
            country={player?.team?.name ?? ""}
            width={30}
            height={20}
          />
        </div>
      </div>
      <div className="w-full md:w-2/3 flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-1 capitalize text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {player?.name}
        </h5>
        <p className="capitalize font-normal text-gray-700 dark:text-gray-400">
          Position: {player?.position}
        </p>
        <p className="capitalize font-normal text-gray-700 dark:text-gray-400">
          Club: {player?.club}
        </p>
      </div>
    </Link>
  );
}
