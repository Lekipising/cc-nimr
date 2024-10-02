import React from "react";
import { PatientInfo } from "./components/patient.info";

export default function RiderInfo() {
  return (
    <section className="w-auto flex ml-8 gap-20 mr-0">
      <div className="w-[300px] flex flex-col gap-1 mt-16">
        <h2 className="text-lg font-bold text-[#2A2A2A]">
          Patient’s Information
        </h2>
        <p className="text-[#2A2A2A]">Personal information about Patient.</p>

        <button className="font-semibold mt-8 flex justify-center items-center gap-2 py-2.5 hover:bg-[#1F5AF4] hover:text-white transition-all ease-in duration-150 px-4 text-[#1F5AF4] border-[1px] border-[#1F5AF4]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-pencil-line"
          >
            <path d="M12 20h9" />
            <path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" />
            <path d="m15 5 3 3" />
          </svg>
          Edit Patient’s Information
        </button>
      </div>

      <form className="flex-1 mt-16 max-w-2xl">
        <div className="w-full grid grid-cols-2 gap-4">
          <PatientInfo
            title="Hospital ID"
            value="23AB456789"
            customCss="col-span-2"
          />
          <PatientInfo title="First Name" value="Oluwaseun" />
          <PatientInfo title="Last Name" value="Aregbesola" />
          <PatientInfo
            title="Gender"
            value="Male"
            type="select"
            selectOptions={["Male", "Female"]}
          />
          <PatientInfo title="Phone Number" value="+2348123456789" type="tel" />
          <PatientInfo
            title="Email Address"
            value="seunregbesola@gmail.com"
            customCss="col-span-2"
            type="email"
          />
        </div>
        <button
          disabled
          className="h-[45px] mt-16 mb-4 w-max px-6 ml-auto text-white bg-[#1F5AF4] text-sm flex justify-center items-center gap-2 font-semibold"
        >
          Save Changes
        </button>
      </form>
    </section>
  );
}


