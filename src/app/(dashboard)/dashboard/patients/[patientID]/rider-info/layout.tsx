import React from "react";
import PatientTopbar from "../components/patient.topbar";

export default function RiderInfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1 flex flex-col">
      <PatientTopbar />
      {children}
    </div>
  );
}
