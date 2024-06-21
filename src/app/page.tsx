import QueryProviders from "./providers";
import MatchPage from "@/modules/euro-2024/matches/pages/MatchPage";

export default function Home() {
  return (
    <QueryProviders>
      <MatchPage />
    </QueryProviders>
  );
}
