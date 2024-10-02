"use client";
import React from "react";
import Link from "next/link";
interface Delivery {
  packageCode: string;
  deliveryDate: string;
  patientName: string;
  phoneNumber: string;
  location: string;
  status: "Paid" | "Unpaid" | "Pending" | "Successful" | "Failed";
}

const dummyData: Delivery[] = [
  {
    packageCode: "1AFHFH093",
    deliveryDate: "12th September 2020",
    patientName: "Oluwaseun Aregbesola",
    phoneNumber: "+2347068642920",
    location: "VI, Lagos",
    status: "Paid",
  },
  {
    packageCode: "2BGHJ104",
    deliveryDate: "1st October 2020",
    patientName: "Adeola Adebayo",
    phoneNumber: "+2348023456789",
    location: "Ikeja, Lagos",
    status: "Paid",
  },
  {
    packageCode: "3CDKL115",
    deliveryDate: "15th November 2020",
    patientName: "Chinedu Okoro",
    phoneNumber: "+2349034567890",
    location: "Surulere, Lagos",
    status: "Paid",
  },
  {
    packageCode: "4DEFG126",
    deliveryDate: "28th December 2020",
    patientName: "Femi Oladele",
    phoneNumber: "+2347012345678",
    location: "Yaba, Lagos",
    status: "Paid",
  },
  {
    packageCode: "5EFGH137",
    deliveryDate: "10th January 2021",
    patientName: "Grace Okoli",
    phoneNumber: "+2348123456789",
    location: "Lekki, Lagos",
    status: "Paid",
  },
  {
    packageCode: "6FGHI148",
    deliveryDate: "22nd February 2021",
    patientName: "Ibrahim Abdullahi",
    phoneNumber: "+2349012345678",
    location: "Ajah, Lagos",
    status: "Paid",
  },
  {
    packageCode: "7GHIJ159",
    deliveryDate: "5th March 2021",
    patientName: "Joy Amadi",
    phoneNumber: "+2347089012345",
    location: "Victoria Island, Lagos",
    status: "Paid",
  },
  {
    packageCode: "8HIJK160",
    deliveryDate: "18th April 2021",
    patientName: "Kemi Adeoye",
    phoneNumber: "+2348089012345",
    location: "Ikoyi, Lagos",
    status: "Paid",
  },
  {
    packageCode: "9IJKL171",
    deliveryDate: "30th May 2021",
    patientName: "Musa Bello",
    phoneNumber: "+2349089012345",
    location: "Apapa, Lagos",
    status: "Paid",
  },
  {
    packageCode: "10JKLM182",
    deliveryDate: "12th June 2021",
    patientName: "Ngozi Eze",
    phoneNumber: "+2347078901234",
    location: "Oshodi, Lagos",
    status: "Paid",
  },
  {
    packageCode: "11KLMN193",
    deliveryDate: "25th July 2021",
    patientName: "Obinna Okafor",
    phoneNumber: "+2348078901234",
    location: "Agege, Lagos",
    status: "Paid",
  },
  {
    packageCode: "12LMNO204",
    deliveryDate: "7th August 2021",
    patientName: "Patience Johnson",
    phoneNumber: "+2349078901234",
    location: "Ikorodu, Lagos",
    status: "Paid",
  },

  {
    packageCode: "13MNOP215",
    deliveryDate: "20th September 2021",
    patientName: "Stella Omotoye",
    phoneNumber: "+2347068642920",
    location: "VI, Lagos",
    status: "Unpaid",
  },
  {
    packageCode: "14NOPQ226",
    deliveryDate: "2nd October 2021",
    patientName: "Tunde Adebola",
    phoneNumber: "+2348023456789",
    location: "Ikeja, Lagos",
    status: "Unpaid",
  },
  {
    packageCode: "15OPQR237",
    deliveryDate: "16th November 2021",
    patientName: "Uchechukwu Nnadi",
    phoneNumber: "+2349034567890",
    location: "Surulere, Lagos",
    status: "Unpaid",
  },
  {
    packageCode: "16PQRS248",
    deliveryDate: "29th December 2021",
    patientName: "Victoria Okonkwo",
    phoneNumber: "+2347012345678",
    location: "Yaba, Lagos",
    status: "Unpaid",
  },
  {
    packageCode: "17QRST259",
    deliveryDate: "11th January 2022",
    patientName: "Wale Olajide",
    phoneNumber: "+2348123456789",
    location: "Lekki, Lagos",
    status: "Unpaid",
  },
  {
    packageCode: "18RSTU260",
    deliveryDate: "23rd February 2022",
    patientName: "Yusuf Ibrahim",
    phoneNumber: "+2349012345678",
    location: "Ajah, Lagos",
    status: "Unpaid",
  },
  {
    packageCode: "19STUV271",
    deliveryDate: "6th March 2022",
    patientName: "Zainab Abubakar",
    phoneNumber: "+2347089012345",
    location: "Victoria Island, Lagos",
    status: "Unpaid",
  },
  {
    packageCode: "20TUVW282",
    deliveryDate: "19th April 2022",
    patientName: "Aisha Mohammed",
    phoneNumber: "+2348089012345",
    location: "Ikoyi, Lagos",
    status: "Unpaid",
  },

  {
    packageCode: "1AFHFH093",
    deliveryDate: "12th September 2020",
    patientName: "Chinyere Okafor",
    phoneNumber: "+2347068642920",
    location: "VI, Lagos",
    status: "Pending",
  },

  {
    packageCode: "1AFHFH093",
    deliveryDate: "12th September 2020",
    patientName: "Mohammed Danladi",
    phoneNumber: "+2347068642920",
    location: "VI, Lagos",
    status: "Successful",
  },

  {
    packageCode: "1AFHFH093",
    deliveryDate: "12th September 2020",
    patientName: "Michael Aribisala",
    phoneNumber: "+2347068642920",
    location: "VI, Lagos",
    status: "Failed",
  },
  {
    packageCode: "1AFHFH093",
    deliveryDate: "12th September 2020",
    patientName: "Donatus Emefiele",
    phoneNumber: "+2347068642920",
    location: "VI, Lagos",
    status: "Failed",
  },
];

function DeliveriesTable({
  activeFilter,
}: {
  activeFilter: Delivery["status"];
}) {
  return (
    <div className="w-full flex-1 mt-8 bg-white p-2 rounded-sm">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="mr-2 text-[#262626CC] text-sm">
            Sort by
          </label>
          <button className="flex items-center gap-2 cursor-pointer">
            <span className="text-[#262626] font-semibold">Most Recent</span>
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
            placeholder="Search by package code"
            className="border border-[#CFCFCF] p-2 pl-12 focus:outline-none focus:border-[#276DF7] text-sm"
          />
        </div>
      </div>

      <div className="w-auto mx-8 flex flex-col">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full border-b text-left text-sm font-semibold text-[#2A2A2AB2] tracking-wider">
              <th className="p-2 py-6">Package Code</th>
              <th className="p-2 py-6">Delivery Date</th>
              <th className="p-2 py-6">Patient’s Name</th>
              <th className="p-2 py-6">Phone Number</th>
              <th className="p-2 py-6">Location</th>
              <th className="p-2 py-6"></th>
            </tr>
          </thead>
          <tbody>
            {dummyData
              .filter((delivery) => delivery.status === activeFilter)
              .map((delivery, idx) => (
                <DeliveryRow key={idx} delivery={delivery} />
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

export default DeliveriesTable;

function DeliveryRow({ delivery }: { delivery: Delivery }) {
  return (
    <tr className="border-b text-sm text-[#2A2A2A]">
      <td className="p-2 py-6">{delivery.packageCode}</td>
      <td className="p-2 py-6">{delivery.deliveryDate}</td>
      <td className="p-2 py-6">{delivery.patientName}</td>
      <td className="p-2 py-6">{delivery.phoneNumber}</td>
      <td className="p-2 py-6">{delivery.location}</td>
      <td className="p-2 py-6">
        <Link
          href={`/dashboard/patients/${delivery.packageCode}/view`}
          className="text-[#276DF7] px-6 hover:bg-[#276DF7] hover:text-white transition-all ease-in duration-150 py-2 font-bold hover:underline border-[1px] border-[#276DF799]"
        >
          View
        </Link>
      </td>
    </tr>
  );
}
