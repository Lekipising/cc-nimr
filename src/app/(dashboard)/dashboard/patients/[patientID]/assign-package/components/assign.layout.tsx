"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AssignPackageWrapper() {
  const pathname = usePathname();
  const assignSteps = [
    {
      text: "Set Drug Cycle/Length",
      to: "/dashboard/patients/1/assign-package",
    },
    {
      text: "Assign Dispatch Rider",
      to: "/dashboard/patients/1/assign-package/assign-rider",
    },
    {
      text: "Scan Package",
      to: "/dashboard/patients/1/assign-package/scan-package",
    },
  ];

  return (
    <div className="w-full flex items-center gap-32 h-[60px] border-b-[1px] border-[#EFEFEF]">
      <h2 className="font-medium text-[#2A2A2A] w-[400px]">
        Patient Information
      </h2>
      <div className="flex items-center gap-16 h-full">
        {assignSteps.map((step) => (
          <OneStepAssign
            key={step.text}
            text={step.text}
            to={step.to}
            isActive={pathname === step.to}
            doneStep={
              assignSteps.findIndex((step) => step.to === pathname) >
              assignSteps.findIndex((x) => x.to === step.to)
            }
          />
        ))}
      </div>

      <Link
        href={
          // select next step, find current index, add 1, get next step
          assignSteps.findIndex((step) => step.to === pathname) + 1 ===
          assignSteps.length
            ? "/dashboard/deliveries"
            : assignSteps[
                (assignSteps.findIndex((step) => step.to === pathname) + 1) %
                  assignSteps.length
              ].to
        }
        className="h-[45px] w-[128px] absolute bottom-16 right-0 text-white bg-[#1F5AF4] text-sm flex justify-center items-center gap-2 font-semibold"
      >
        Next
      </Link>
    </div>
  );
}

function OneStepAssign({
  text,
  to,
  isActive,
  doneStep,
}: {
  text: string;
  to: string;
  isActive: boolean;
  doneStep: boolean;
}) {
  return (
    <Link
      href={to}
      className={`flex flex-col h-full px-4 hover:bg-[#276DF7]/20 transition-all ease-in duration-150 pt-2 justify-between ${
        isActive
          ? "text-[#276DF7] font-bold"
          : `${doneStep ? "text-[#01A85A]" : "text-[#827F98]"} font-medium`
      }`}
    >
      <div className="flex items-center gap-2">
        {doneStep ? (
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
            className="lucide lucide-circle-check w-5 h-5"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        ) : (
          <input
            type="radio"
            name={text}
            className="h-5 w-5"
            id={text}
            checked={isActive}
          />
        )}
        <h3 className="font-bold">{text}</h3>
      </div>
      {isActive && (
        <div className="w-full h-[4px] rounded-t-2xl shrink-0 bg-[#276DF7]"></div>
      )}
    </Link>
  );
}
