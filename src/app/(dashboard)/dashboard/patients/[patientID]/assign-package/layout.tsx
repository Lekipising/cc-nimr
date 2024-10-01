import React from "react";
import AssignPackageWrapper from "./components/assign.layout";

export default function AssignPackageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full flex flex-col mt-8">
      <AssignPackageWrapper />
      <div className="w-full flex mt-16">
        <div className="w-[400px] flex flex-col gap-8">
          <PatientInfoPair label="Hospital ID" value="1AFHFH093" />
          <PatientInfoPair label="Name" value="Oluwaseun Aregbesola" />
          <PatientInfoPair label="Phone Number" value="+2347068642920" />
          <PatientInfoPair
            label="Next Delivery Date"
            value="12th September 2020"
          />
          <PatientInfoPair label="Location" value="Yaba, Lagos" />
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </section>
  );
}

function PatientInfoPair({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-sm text-[#2A2A2AB2]">{label}</span>
      <span className="text-sm font-semibold text-[#2A2A2A]">{value}</span>
    </div>
  );
}
