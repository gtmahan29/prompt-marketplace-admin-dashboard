import React, { useEffect } from 'react'
import { DataTable } from './data-table'
import { PromptsDataTypes, columns } from "./columns"

async function getData(): Promise<PromptsDataTypes[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      name: "item.name",
      price: "$US" + 40,
      rating: 5,
      purchased: 10,
      status: "Pending",
    },
    // {
    //   id: item.id,
    //   name: item.name,
    //   price: "$US" + item.price,
    //   rating: item.rating,
    //   purchased: item.orders?.length,
    //   status: item.status,
    // },
    // ...
  ]
}


type Props = {}

const AllPrompts = async (props: Props) => {
  const data = await getData()

  return (
    <div className='m-[20px]'>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default AllPrompts