import { EuroGroupApi } from "@/shared/services/api/euro-group.api";
import { TEuroGroupDTO } from "../types/group.types";
import GroupTable from "../components/GroupTable";
import { getAIResponse } from "@/shared/services/open-ai/open-ai.service";

export default async function GroupPage() {
  const response: TEuroGroupDTO = await EuroGroupApi.listGroups();
  // await getAIResponse("You are a helpful assistant.");
  return (
    <div className="flex flex-wrap">
      {response?.data?.map((group) => (
        <div key={group?._id} className="w-full p-4">
          <GroupTable group={group} />
        </div>
      ))}
    </div>
  );
}
