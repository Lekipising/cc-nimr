"use client";
import React, { useState } from "react";

export default function DrugCycle() {
  const [activeCycle, setActiveCycle] = useState<{
    id: number;
    interval: number;
    startDate: string;
  }>();

  return (
    <section className="ml-2 w-auto mr-0 flex flex-col gap-8">
      <p className="font-medium text-lg text-[#18131A]">
        Oluwaseun Aregbesola has a drug cycle of two(2) months
      </p>

      <div className="flex flex-col gap-2">
        <div
          onClick={() =>
            setActiveCycle({ id: 1, interval: 2, startDate: "2022-11-14" })
          }
          className={`w-full border-[1px] cursor-pointer pb-4 transition-all ease-in duration-150 justify-between h-[120px] flex flex-col ${
            activeCycle?.id === 1 ? "border-[#276DF7]" : "border-[#E0E0E0]"
          }`}
        >
          <div
            className={`flex items-center gap-2 transition-all ease-in duration-150 p-4 ${
              activeCycle?.id === 1
                ? "text-[#276DF7] font-bold bg-[#1F5AF41A] border-b-[1px] border-[#276DF7]"
                : "font-medium text-[#18131A]"
            }`}
          >
            <input
              type="radio"
              name="same"
              className="h-5 w-5"
              id="same"
              checked={activeCycle?.id === 1}
            />
            <h3 className="">Same as initial drug cycle</h3>
          </div>
          <p className="font-medium px-4 text-[#18131A]">
            Deliver drug on <span className="font-bold">4th February 2020</span>{" "}
            & set next delivery date to{" "}
            <span className="font-bold">4th March 2020</span>
          </p>
        </div>

        <div
          onClick={() =>
            setActiveCycle({ id: 2, interval: 1, startDate: "2022-11-14" })
          }
          className={`w-full border-[1px] cursor-pointer transition-all ease-in duration-150 justify-between border-[#E0E0E0] h-[78px] flex flex-col ${
            activeCycle?.id === 2 ? "border-[1px] border-[#276DF7]" : ""
          }`}
        >
          <div
            className={`flex items-center gap-2 transition-all h-full ease-in duration-150 p-4 ${
              activeCycle?.id === 2
                ? "text-[#276DF7] font-bold bg-[#1F5AF41A]"
                : "font-medium text-[#18131A]"
            }`}
          >
            <input
              type="radio"
              name="same"
              className="h-5 w-5"
              id="same"
              checked={activeCycle?.id === 2}
            />
            <h3 className="">Set new drug cycle</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
