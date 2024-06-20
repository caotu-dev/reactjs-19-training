import QueryProviders from "@/app/providers";
import MatchDetailPage from "@/modules/euro-2024/matches/pages/MatchDetailPage";

interface Props {
  params: {
    id: string | number | undefined;
  };
}

export default function Page({ params }: Props) {
  const matchId = params?.id?.toString() ?? "";

  return (
    <QueryProviders>
      <MatchDetailPage id={matchId} />
    </QueryProviders>
  );
}
