import React from "react";
import DashboardNav from "./components/navbar";
import BreadCrumbs from "./components/breadcrumbs";

export default function MainDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full flex flex-col px-16">
      <DashboardNav />
      <div className="w-full h-[100px] border-b-[1px] border-[#827F9833] flex justify-between items-center">
        <BreadCrumbs />
      </div>
      <section className="w-full">{children}</section>
    </main>
  );
}
