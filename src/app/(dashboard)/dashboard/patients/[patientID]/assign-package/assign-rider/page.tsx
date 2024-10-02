"use client";
import React, { useState } from "react";

const ridersData = [
  {
    name: "Emmanuel Adebayo",
    deliveryArea: "Surulere",
    deliveries: 5,
    id: 1,
  },
  {
    name: "Emmanuel Adebayo",
    deliveryArea: "Yaba",
    deliveries: 20,
    id: 2,
  },
  {
    name: "Emmanuel Adebayo",
    deliveryArea: "VI",
    deliveries: 0,
    id: 3,
  },
  {
    name: "John Doe",
    deliveryArea: "Yaba",
    deliveries: 12,
    id: 4,
  },
  {
    name: "Jane Smith",
    deliveryArea: "Ikoyi",
    deliveries: 8,
    id: 5,
  },
  {
    name: "Peter Jones",
    deliveryArea: "Victoria Island",
    deliveries: 15,
    id: 6,
  },
  {
    name: "Mary Brown",
    deliveryArea: "Lekki",
    deliveries: 0,
    id: 7,
  },
  {
    name: "David Wilson",
    deliveryArea: "Ajah",
    deliveries: 7,
    id: 8,
  },
  {
    name: "Sarah Garcia",
    deliveryArea: "Ikeja",
    deliveries: 10,
    id: 9,
  },
  {
    name: "Michael Rodriguez",
    deliveryArea: "Yaba",
    deliveries: 2,
    id: 10,
  },
  {
    name: "Jennifer Williams",
    deliveryArea: "Surulere",
    deliveries: 0,
    id: 11,
  },
  {
    name: "Christopher Davis",
    deliveryArea: "VI",
    deliveries: 6,
    id: 12,
  },
  {
    name: "Jessica Miller",
    deliveryArea: "Ikoyi",
    deliveries: 18,
    id: 13,
  },
  {
    name: "Matthew Moore",
    deliveryArea: "Lekki",
    deliveries: 9,
    id: 14,
  },
  {
    name: "Amanda Taylor",
    deliveryArea: "Ajah",
    deliveries: 0,
    id: 15,
  },
  {
    name: "Daniel Anderson",
    deliveryArea: "Ikeja",
    deliveries: 11,
    id: 16,
  },
  {
    name: "Ashley Thomas",
    deliveryArea: "Yaba",
    deliveries: 5,
    id: 17,
  },
  {
    name: "Andrew Jackson",
    deliveryArea: "Surulere",
    deliveries: 13,
    id: 18,
  },
];

type Tabs = "All" | "Yaba Riders" | "Unassigned Riders" | "Assigned Riders";

interface Rider {
  name: string;
  deliveryArea: string;
  deliveries: number;
  id: number;
}

const AssignRider = () => {
  const [activeTab, setActiveTab] = useState<Tabs>("All");

  const handleTabClick = (tab: Tabs) => {
    setActiveTab(tab);
  };

  const handleRiderClick = (rider: Rider) => {
    setSelectedRider(rider);
  };

  const filteredRiders = ridersData.filter((rider) => {
    if (activeTab === "All") {
      return true;
    } else if (activeTab === "Yaba Riders") {
      return rider.deliveryArea === "Yaba";
    } else if (activeTab === "Unassigned Riders") {
      return rider.deliveries === 0;
    } else if (activeTab === "Assigned Riders") {
      return rider.deliveries > 0;
    }
    return true;
  });

  const getTabCount = (tab: Tabs) => {
    if (tab === "All") {
      return ridersData.length;
    } else if (tab === "Yaba Riders") {
      return ridersData.filter((rider) => rider.deliveryArea === "Yaba").length;
    } else if (tab === "Unassigned Riders") {
      return ridersData.filter((rider) => rider.deliveries === 0).length;
    } else if (tab === "Assigned Riders") {
      return ridersData.filter((rider) => rider.deliveries > 0).length;
    }
    return ridersData.length;
  };

  const [selectedRider, setSelectedRider] = useState<Rider | null>(
    ridersData[0]
  );

  return (
    <div className="p-6">
      <div className="flex space-x-4 mb-6">
        {["All", "Yaba Riders", "Unassigned Riders", "Assigned Riders"].map(
          (tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab as Tabs)}
              className={`px-4 py-2 ${
                activeTab === tab
                  ? "bg-[#1F5AF41A] text-[#1F5AF4] font-bold border-[1px] border-[#1F5AF4]"
                  : "bg-transparent text-[#827F98] font-medium"
              }`}
            >
              {tab}({getTabCount(tab as Tabs)})
            </button>
          )
        )}
      </div>

      <div className="overflow-y-auto max-h-[30vh] max-w-3xl">
        {filteredRiders.map((rider, index) => (
          <OneRider
            key={index}
            rider={rider}
            isSelected={selectedRider === rider}
            selectRider={handleRiderClick}
          />
        ))}
      </div>
    </div>
  );
};

export default AssignRider;

function OneRider({
  rider,
  isSelected,
  selectRider,
}: {
  rider: Rider;
  isSelected: boolean;
  selectRider: (rider: Rider) => void;
}) {
  return (
    <div
      onClick={() => selectRider(rider)}
      className={`w-full h-[80px] flex p-2 cursor-pointer transition-all ease-in duration-200 border-[1px] items-center gap-6 px-4 ${
        isSelected ? "border-[#1F5AF4]" : "border-[#E0E0E0]"
      }`}
    >
      <input
        type="radio"
        name={rider.id.toString()}
        id={rider.id.toString()}
        checked={isSelected}
        className="h-6 w-6"
      />
      <div className="flex-1 grid grid-cols-3">
        <div className="w-full flex flex-col">
          <span
            className={`${
              isSelected ? "text-[#1F5AF4]" : "text-[#2A2A2A]"
            } transition-all ease-in duration-200`}
          >
            Dispatch Rider’s Name
          </span>
          <span
            className={`${
              isSelected ? "text-[#1F5AF4]" : "text-[#2A2A2A]"
            } transition-all ease-in duration-200 font-semibold`}
          >
            {rider.name}
          </span>
        </div>
        <div className={`w-full flex flex-col`}>
          <span
            className={`${
              isSelected ? "text-[#1F5AF4]" : "text-[#2A2A2A]"
            } transition-all ease-in duration-200`}
          >
            Delivery Area
          </span>
          <span
            className={`${
              isSelected ? "text-[#1F5AF4]" : "text-[#2A2A2A]"
            } transition-all ease-in duration-200 font-semibold`}
          >
            {rider.name}
          </span>
        </div>
        <div className={`w-full flex flex-col`}>
          <span
            className={`${
              isSelected ? "text-[#1F5AF4]" : "text-[#2A2A2A]"
            } transition-all ease-in duration-200`}
          >
            Number of Deliveries
          </span>
          <span
            className={`${
              isSelected ? "text-[#1F5AF4]" : "text-[#2A2A2A]"
            } transition-all ease-in duration-200 font-semibold`}
          >
            {rider.name}
          </span>
        </div>
      </div>
    </div>
  );
}
