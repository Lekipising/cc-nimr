import React from "react";
import DashboardNav from "./components/navbar";

export default function MainDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full flex flex-col">
      <DashboardNav />
      <section className="w-full">{children}</section>
    </main>
  );
}
