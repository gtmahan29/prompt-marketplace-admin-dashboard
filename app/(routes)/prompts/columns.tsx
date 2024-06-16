"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { FaCheck } from "react-icons/fa6";

import { updatePromptStatus } from "@/actions/prompt/updatePromptStatus";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useState } from "react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type PromptsDataTypes = {
  id: string;
  name: string;
  price: string;
  rating: number;
  purchased?: number;
  orders?: any[];
  status: string;
};

export const columns: ColumnDef<PromptsDataTypes>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Prompt Title",
  },
  {
    accessorKey: "price",
    header: "Prompt Price",
  },
  {
    accessorKey: "rating",
    header: "Rating",
  },
  {
    accessorKey: "purchased",
    header: "Purchased",
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      // const [status, setStatus] = useState(
      //   "Pending" as "Pending" | "Live" | "Declined"
      // );
      const [status, setStatus] = useState(
        row.original.status as "Pending" | "Live" | "Declined"
      );
      // const [selectedStatus, setSelectedStatus] = useState(
      //   "Pending" as "Pending" | "Live" | "Declined"
      // );
      const promptId = row.original.id;

      const updatePromptStatusHandler = async () => {
        await updatePromptStatus({ promptId, status });
        console.log(promptId, status);
        window.location.reload();
      };

      return (
        <div className="flex items-center">
          <Select
            name={status}
            onValueChange={(value) => {
              setStatus(value as "Pending" | "Live" | "Declined");
            }}
          >
            <SelectTrigger className="h-8 py-4 px-6 border border-[#ffffff30] bg-transparent">
              <SelectValue placeholder={status} />
            </SelectTrigger>
            <SelectContent className="bg-[#ffffff5] backdrop-blur-xl text-white">
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Live">Live</SelectItem>
              <SelectItem value="Declined">Declined</SelectItem>
            </SelectContent>
          </Select>
          {/* <select
            name=""
            id=""
            className="h-8 py-4 px-6 border border-[#ffffff30] bg-transparent text-white"
            onChange={(e) =>
              setStatus(e.target.value as "Pending" | "Live" | "Declined")
            }
          >
            <option value="Pending" selected={status === "Pending"}>
              Pending
            </option>
            <option value="Live" selected={status === "Live"}>
              Live
            </option>
            <option value="Declined" selected={status === "Declined"}>
              Declined
            </option>
          </select> */}
          <div className="pl-2">
            <Button
              className="text-white bg-transparent"
              size="sm"
              onClick={updatePromptStatusHandler}
            >
              <FaCheck size="20" />
            </Button>
          </div>
        </div>
      );
    },
  },
];
