import React from "react";
import DeliveriesTable from "./components/deliveries.table";
import Link from "next/link";

export default function Deliveries({
  searchParams,
}: {
  searchParams?: {
    filter: "Paid" | "Unpaid" | "Pending" | "Successful" | "Failed" | undefined;
  };
}) {
  const deliveriesFilters = {
    unassigned: [
      {
        title: "Paid",
        count: 12,
        query: "Paid",
      },
      {
        title: "Unpaid",
        count: 8,
        query: "Unpaid",
      },
    ],
    assigned: [
      {
        title: "Pending",
        count: 1,
        query: "Pending",
      },
      {
        title: "Successful",
        count: 1,
        query: "Successful",
      },
      {
        title: "Failed",
        count: 2,
        query: "Failed",
      },
    ],
  };
  return (
    <section className="p-8 flex gap-32 items-start">
      <div className="w-[300px] sticky top-0 flex flex-col gap-16">
        <div className="flex flex-col gap-4 bg-white">
          <span className="font-bold text-[#2A2A2AB2] pt-4 px-4">
            Unassigned Deliveries
          </span>
          <div className="bg-[#F9F9F9] h-[1px] w-full" />
          {deliveriesFilters.unassigned.map((filter) => (
            <OneSideItem
              key={filter.title}
              text={filter.title}
              to={`/dashboard/deliveries?filter=${filter.query}`}
              isActive={
                searchParams?.filter === filter.query ||
                (!searchParams?.filter && filter.title === "Paid")
              }
              count={filter.count}
            />
          ))}
        </div>
        <div className="flex flex-col gap-4 bg-white">
          <span className="font-bold text-[#2A2A2AB2] pt-4 px-4">
            Assigned Deliveries
          </span>
          <div className="bg-[#F9F9F9] h-[1px] w-full" />

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
      <DeliveriesTable activeFilter={searchParams?.filter ?? "Paid"} />
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
