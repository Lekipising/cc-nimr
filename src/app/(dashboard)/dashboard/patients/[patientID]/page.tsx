import React from "react";
import PatientSidebar from "./components/patient.sidebar";

export default function ViewPatient() {
  return (
    <section className="w-full">
      <div className="absolute right-16 top-20 flex items-center gap-4">
        <div className="flex flex-col">
          <p className="text-sm font-medium text-[#2A2A2A]">
            Patient’s next delivery date is <br />{" "}
            <span className="font-extrabold">
              14th November 2020, in 2 days
            </span>
          </p>
        </div>
        <button className="h-[45px] w-[220px] text-white bg-[#1F5AF4] text-sm flex justify-center items-center gap-2 font-semibold">
          Assign Package to Patient
        </button>
      </div>

      <div className="w-full flex">
        <PatientSidebar />
        <div className="flex-1 outline">2</div>
      </div>
    </section>
  );
}
