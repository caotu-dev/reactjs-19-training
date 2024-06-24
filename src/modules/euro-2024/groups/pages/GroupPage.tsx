import { EuroGroupApi } from "@/shared/services/api/euro-group.api";
import { TEuroGroupDTO } from "../types/group.types";
import GroupTable from "../components/GroupTable";
import ErrorPage from "@/modules/static/ErrorPage";

export default async function GroupPage() {
  const response: TEuroGroupDTO = await EuroGroupApi.listGroups();
  if(!response) return <ErrorPage />;

  return (
    <div className="flex flex-wrap md:px-32">
      {response?.data?.map((group) => (
        <div key={group?._id} className="w-full p-4">
          <GroupTable group={group} />
        </div>
      ))}
    </div>
  );
}
