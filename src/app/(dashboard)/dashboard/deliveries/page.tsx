import React from "react";
import DeliveriesTable from "./components/deliveries.table";
import Link from "next/link";

export default function Deliveries({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const deliveriesFilters = {
    unassigned: [
      {
        title: "Paid",
        count: 10,
        query: "paid",
      },
      {
        title: "Unpaid",
        count: 12,
        query: "unpaid",
      },
    ],
    assigned: [
      {
        title: "Pending",
        count: 10,
        query: "pending",
      },
      {
        title: "Successful",
        count: 5,
        query: "successful",
      },
      {
        title: "Failed",
        count: 3,
        query: "failed",
      },
    ],
  };
  return (
    <section className="p-8 flex gap-32">
      <div className="w-[300px] flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <span className="font-bold text-[#2A2A2AB2]">
            Unassigned Deliveries
          </span>
          {deliveriesFilters.unassigned.map((filter) => (
            <OneSideItem
              key={filter.title}
              text={filter.title}
              to={`/dashboard/deliveries?filter=${filter.query}`}
              isActive={searchParams?.filter === filter.query}
              count={filter.count}
            />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-bold text-[#2A2A2AB2]">
            Assigned Deliveries
          </span>
          {deliveriesFilters.assigned.map((filter) => (
            <OneSideItem
              key={filter.title}
              text={filter.title}
              to={`/dashboard/deliveries?filter=${filter.query}`}
              isActive={searchParams?.filter === filter.query}
              count={filter.count}
            />
          ))}
        </div>
      </div>
      <DeliveriesTable />
    </section>
  );
}

function OneSideItem({
  text,
  to,
  isActive,
  count,
}: {
  text: string;
  to: string;
  isActive: boolean;
  count: number;
}) {
  return (
    <Link
      href={to}
      className={`w-full flex justify-start pl-8 relative h-[60px] items-center border-r-[3px] ${
        isActive
          ? "font-bold text-[#276DF7] bg-[#276DF71A] text-base border-[#276DF7]"
          : "font-medium text-sm text-[#2A2A2A80] bg-transparent border-transparent"
      } hover:bg-[#276DF71A] hover:text-[#276DF7] transition-all ease-in duration-150`}
    >
      {text}
      <span className="absolute right-8 flex justify-center items-center text-white font-medium text-sm bg-[#F42C1F] h-[25px] w-[25px] rounded-full">
        {count}
      </span>
    </Link>
  );
}
