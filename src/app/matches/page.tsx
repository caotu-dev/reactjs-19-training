import MatchPage from "@/modules/euro-2024/matches/pages/MatchPage";
// Force refresh page for every render
export const revalidate = 0;
export default function Page() {
  return <MatchPage />;
}
