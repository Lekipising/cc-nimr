import React from "react";
import PatientTable from "./components/patients.table";

export default function DashboardOverview() {
  return (
    <section>
      <PatientTable />
      <button className="h-[45px] w-[160px] absolute right-16 top-20 text-white bg-[#1F5AF4] text-sm flex justify-center items-center gap-2 font-semibold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-plus"
        >
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
        Add Patient
      </button>
    </section>
  );
}
