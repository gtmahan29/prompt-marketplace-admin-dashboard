import React from "react";

import { GoHome, GoArrowSwitch } from "react-icons/go";
import { BsWallet2 } from "react-icons/bs";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { TbMoneybag } from "react-icons/tb";
import { BiMoneyWithdraw } from "react-icons/bi";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import Link from "next/link";
import { styles } from "@/utils/styles";
import { useClerk } from "@clerk/nextjs";

type Props = {
  selected: number;
  setSelected: any;
};

const sidebarItems = [
  {
    icon: <GoHome />,
    title: "Dashboard",
    href: "/",
  },
  {
    icon: <MdOutlineCreateNewFolder />,
    title: "Upload Prompt",
    href: "/shop/create-prompt",
  },
  {
    icon: <BsWallet2 />,
    title: "Prompts",
    href: "/prompts",
  },
  {
    icon: <TbMoneybag />,
    title: "Orders",
    href: "/orders",
  },
  {
    icon: <LiaFileInvoiceDollarSolid />,
    title: "Invoices",
    href: "/invoices",
  },
  {
    icon: <BiMoneyWithdraw />,
    title: "Withdraw Earnings",
    href: "/withdraw",
  },
  {
    icon: <GoArrowSwitch />,
    title: "Switch to user",
    href: "/",
  },
];

const AdminSidebar = ({ selected, setSelected }: Props) => {
  const { signOut } = useClerk();

  const handleLogout = async () => {
    await signOut();
  };
  return (
    <div>
      {sidebarItems.map((item, index) => (
        <div className="w-full mx-5 my-10" key={index}>
          <Link href={item.href}>
            <div className="flex items-center">
              <div
                className={`text-3xl ${
                  selected !== index ? "!text-white" : "!text-[#64ff4b]"
                }`}
              >
                {item.icon}
              </div>
              <span
                className={`${styles.label} ${
                  selected !== index ? "!text-white" : "!text-[#64ff4b]"
                } pl-4`}
              >
                {item.title}
              </span>
            </div>
          </Link>
        </div>
      ))}
      <div className="w-full mx-5 my-10">
        <Link href="/" onClick={handleLogout}>
          <div className="flex items-center">
            <div className="text-3xl">
              <IoLogOutOutline />
            </div>
            <span className={`${styles.label} !text-white pl-4`}>Log Out</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;
