"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type PromptsDataTypes = {
  id: string
  name: string
  price: string
  rating: number
  purchased?: number
  orders?: any[]
  status: string
}

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
    accessorKey: "status",
    header: "Status",
  },
]
