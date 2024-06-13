"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="h-8 py-4 px-6 border border-[#ffffff30]">
              <span className="">Pending</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-[#ffffff10] backdrop-blur-md">
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View payment details</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
