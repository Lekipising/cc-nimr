"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function PatientSidebar() {
  const pathname = usePathname();

  const sidebarItems = [
    {
      text: "Patient",
      to: "/dashboard/patients/1/view",
    },
    {
      text: "Rider’s Profile",
      to: "/dashboard/patients/1/view/rider-info",
    },
    {
      text: "Delivery History",
      to: "/dashboard/patients/1/view/delivery-history",
    },
  ];

  return (
    <div className="w-[300px] h-full flex flex-col">
      {sidebarItems.map((item) => (
        <OneSideItem
          key={item.text}
          text={item.text}
          to={item.to}
          isActive={pathname === item.to}
        />
      ))}
    </div>
  );
}

function OneSideItem({
  text,
  to,
  isActive,
}: {
  text: string;
  to: string;
  isActive: boolean;
}) {
  return (
    <Link
      href={to}
      className={`w-full flex justify-start pl-8 h-[60px] items-center ${
        isActive
          ? "font-bold text-[#276DF7] bg-[#276DF71A] text-base"
          : "font-medium text-sm text-[#2A2A2A80] bg-transparent"
      } hover:bg-[#276DF71A] hover:text-[#276DF7] transition-all ease-in duration-150`}
    >
      {text}
    </Link>
  );
}
