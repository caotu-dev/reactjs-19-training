import { EuroTeamApi } from "@/shared/services/api/euro-team.api";
import { TEuroTeam } from "../types/team.model";
import CountryFlag from "@/shared/components/CountryFlag";
import ErrorPage from "@/modules/static/ErrorPage";

export default async function TeamPage() {
  const teams = await EuroTeamApi.getTeams();
  if(!teams) return <ErrorPage />;

  return (
    <div className="flex flex-wrap items-center justify-center">
      {teams?.data?.map((team: TEuroTeam) => (
        <div key={team?._id} className="text-center px-4">
          <CountryFlag country={team?.name} width={200} height={100} />
          <span className="capitalize text-2xl">{team?.name}</span>
        </div>
      ))}
    </div>
  );
}
