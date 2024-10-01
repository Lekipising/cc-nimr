"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function PatientTopbar() {
  const pathname = usePathname();

  const topbarItems = [
    {
      text: "Patient Information",
      to: "/dashboard/patients/1/rider/patient-info",
    },
    {
      text: "Delivery Information",
      to: "/dashboard/patients/1/rider/delivery-info",
    },
  ];

  return (
    <div className="w-full flex justify-between px-8">
      <div className="flex items-center gap-2">
        <span className="font-medium text-[#2A2A2A]">Payment Status</span>
        <span className="w-[80px] h-[36px] justify-center items-center flex bg-[#01A85A33] font-bold text-[#01A85A]">
          Paid
        </span>
      </div>
      <div className="flex items-center justify-end flex-1 pr-8 gap-4">
        {topbarItems.map((item) => (
          <OneTopItem
            key={item.text}
            text={item.text}
            to={item.to}
            isActive={pathname === item.to}
          />
        ))}
      </div>
    </div>
  );
}

function OneTopItem({
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
      className={`w-max flex flex-col h-[60px] items-center ${
        isActive
          ? "font-bold text-[#276DF7] text-base"
          : "font-medium text-base text-[#827F98]"
      } hover:bg-[#276DF71A] hover:text-[#276DF7] transition-all ease-in duration-150`}
    >
      {text}

      {isActive && <div className="w-full h-[2px] bg-[#276DF7] mt-2"></div>}
    </Link>
  );
}
