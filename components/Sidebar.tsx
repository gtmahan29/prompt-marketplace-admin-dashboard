'use client'
import React, { useState } from "react";
import AdminSidebar from "@/components/admin/sidebar/AdminSidebar";

type Props = {
  active: number;
};

export default function Sidebar({ active }: Props) {
const [selected, setSelected] = useState(active)
  return (
    <div>
        <AdminSidebar selected={selected} setSelected={setSelected} />
    </div>
  );
}