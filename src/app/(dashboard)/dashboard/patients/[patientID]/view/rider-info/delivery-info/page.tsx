import React from "react";
import { PatientInfo } from "../components/patient.info";

export default function DeliveryInfo() {
  return (
    <section className="w-auto flex ml-8 gap-20 mr-0">
      <div className="w-[300px] flex flex-col gap-1 mt-16">
        <h2 className="text-lg font-bold text-[#2A2A2A]">
          Delivery Information
        </h2>
        <p className="text-[#2A2A2A]">Information about delivery status</p>
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
          Edit Delivery Information
        </button>
      </div>

      <form className="flex-1 mt-16 max-w-2xl">
        <div className="w-full grid grid-cols-2 gap-4">
          <PatientInfo
            title="Next Delivery Date"
            value="14th November 2020"
            customCss="col-span-2"
          />
          <PatientInfo
            title="Delivery Area"
            value="Yaba, Lagos"
            customCss="col-span-2"
          />
          <PatientInfo
            title="Delivery Address"
            value="19, Mohammed Abiola street, Akoka, Lagos"
            customCss="col-span-2"
          />
          <PatientInfo title="Payment Status" value="Paid" />
        </div>
        <button
          disabled
          className="h-[45px] mt-16 w-max px-6 ml-auto text-white bg-[#1F5AF4] text-sm flex justify-center items-center gap-2 font-semibold"
        >
          Save Changes
        </button>
      </form>
    </section>
  );
}
