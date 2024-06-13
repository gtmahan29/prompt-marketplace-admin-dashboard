import { GetPrompts } from "@/actions/prompt/getPrompts";
import React from "react";
import { DataTable } from "./data-table";
import { PromptsDataTypes, columns } from "./columns";
import Sidebar from "@/components/Sidebar";
import { styles } from "@/utils/styles";

type Props = {};

async function getData(): Promise<PromptsDataTypes[]> {
  const fetchedData = await GetPrompts();
  console.log(fetchedData);
  if (!fetchedData || fetchedData.length === 0) {
    return [];
  }

  return fetchedData.map((item) => ({
    id: item.id,
    name: item.name,
    price: item.price,
    rating: item.rating,
    purchased: item?.orders?.purchased,
    status: item.status,
  }));
}

const Page = async (props: Props) => {
  const data = await getData();
  return (
    <div className="flex min-h-screen">
      <div className="2xl:w-[16%] w-1/5">
        <Sidebar active={2} />
      </div>
      <div className="2xl:w-[84%] w-[80%] m-20 flex flex-col">
        <h1 className={`${styles.heading} mb-5 leading-[50px]`}>All Prompts</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Page;
