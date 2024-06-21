import QueryProviders from "../providers";
import PlayerPage from "@/modules/euro-2024/players/pages/PlayerPage";

export default function Page() {
  return (
    <QueryProviders>
      <PlayerPage />
    </QueryProviders>
  );
}
