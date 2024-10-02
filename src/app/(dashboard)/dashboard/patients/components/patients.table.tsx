"use client";
import React from "react";
import { patientsData } from "./data";
import Link from "next/link";

function PatientsTable() {
  return (
    <div className="w-full mt-8 relative">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="mr-2 text-[#262626CC] text-sm">
            Sort by
          </label>
          <button className="flex items-center gap-2 cursor-pointer">
            <span className="text-[#262626] font-semibold">Hospital ID</span>
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
              className="lucide lucide-chevron-down text-[#262626]"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>

        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-search absolute left-4 text-[#CFCFCF] top-1/2 -translate-y-1/2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="text"
            placeholder="Search by patient name, id"
            className="border border-[#CFCFCF] p-2 pl-12 focus:outline-none focus:border-[#276DF7] text-sm"
          />
        </div>
      </div>

      <div className="w-auto mx-8 flex flex-col">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full border-b text-left text-sm font-semibold text-[#2A2A2AB2] tracking-wider">
              <th className="p-2 py-6">Hospital ID</th>
              <th className="p-2 py-6">Patient&apos;s Name</th>
              <th className="p-2 py-6">Phone Number</th>
              <th className="p-2 py-6">Next Delivery Date</th>
              <th className="p-2 py-6">Location</th>
              <th className="p-2 py-6">Status</th>
              <th className="p-2 py-6">Action</th>
            </tr>
          </thead>
          <tbody>
            {patientsData.map((patient, idx) => (
              <PatientRow key={idx} patient={patient} />
            ))}
          </tbody>
        </table>

        <div className="w-full mt-8 flex justify-between">
          <span className="text-[#26262699] text-sm">
            You’re viewing 10 out of 87 deliveries
          </span>

          <div className="flex items-center gap-4">
            <button className="border-[1px] border-[#26262633] h-[30px] w-[63px] text-sm text-[#26262699] rounded-2xl hover:bg-[#26262699] hover:text-white transition-all ease-in duration-150">
              Prev
            </button>
            <button className="border-[1px] border-transparent h-[30px] w-[30px] text-sm text-[#26262699] rounded-2xl hover:bg-[#26262699] hover:text-white transition-all ease-in duration-150">
              1
            </button>
            <button className="border-[1px] border-[#26262633] h-[30px] w-[30px] text-sm text-[#26262699] rounded-2xl hover:bg-[#26262699] hover:text-white transition-all ease-in duration-150">
              2
            </button>
            <button className="border-[1px] border-transparent h-[30px] w-[30px] text-sm text-[#26262699] rounded-2xl hover:bg-[#26262699] hover:text-white transition-all ease-in duration-150">
              3
            </button>
            <button className="border-[1px] border-transparent h-[30px] w-[30px] text-sm text-[#26262699] rounded-2xl hover:bg-[#26262699] hover:text-white transition-all ease-in duration-150">
              4
            </button>
            <span>...</span>
            <button className="border-[1px] border-transparent h-[30px] w-[30px] text-sm text-[#26262699] rounded-2xl hover:bg-[#26262699] hover:text-white transition-all ease-in duration-150">
              8
            </button>
            <button className="border-[1px] border-[#26262633] h-[30px] w-[63px] text-sm text-[#26262699] rounded-2xl  hover:bg-[#26262699] hover:text-white transition-all ease-in duration-150">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientsTable;

function PatientRow({
  patient,
}: {
  patient: {
    hospitalID: string;
    name: string;
    phone: string;
    nextDeliveryDate: string;
    location: string;
    status: string;
    id: string;
  };
}) {
  const statusColor = () => {
    switch (patient.status) {
      case "Completed":
        return "bg-[#01A85A33] text-[#01A85A]";
      case "Due & Paid":
        return "bg-[#FF7A0033] text-[#FF7A00]";
      case "Due & Unpaid":
        return "bg-[#F42C1F33] text-[#F42C1F]";
      default:
        return "bg-[#006AE733] text-[#006AE7]";
    }
  };

  return (
    <tr className="border-b text-sm text-[#2A2A2A]">
      <td className="p-2 py-6">{patient.hospitalID}</td>
      <td className="p-2 py-6">{patient.name}</td>
      <td className="p-2 py-6">{patient.phone}</td>
      <td className="p-2 py-6">{patient.nextDeliveryDate}</td>
      <td className="p-2 py-6">{patient.location}</td>
      <td className="p-2 py-6">
        <span className={`inline-block px-5 py-2 font-bold ${statusColor()}`}>
          {patient.status}
        </span>
      </td>
      <td className="p-2 py-6">
        <Link
          href={`/dashboard/patients/${patient.id}/view`}
          className="text-[#276DF7] px-6 hover:bg-[#276DF7] hover:text-white transition-all ease-in duration-150 py-2 font-bold hover:underline border-[1px] border-[#276DF799]"
        >
          View
        </Link>
      </td>
    </tr>
  );
}
