"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function ConfirmAssignment({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const router = useRouter();
  return (
    <div className="fixed inset-0 z-[300] flex h-screen w-full items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white w-[456px] h-[320px] p-6 flex flex-col justify-between px-12">
        <h3 className="text-xl font-bold text-[#424242]">
          Assign Package 5673AD{" "}
        </h3>
        <p className="font-medium">
          Are you sure you want to assign package{" "}
          <span className="font-bold">5673AD</span> to{" "}
          <span className="font-bold">Oluwaseun Aregbesola</span>?{" "}
        </p>

        <div className="flex gap-8">
          <button
            onClick={() => closeModal()}
            className="w-[143px] h-[60px] bg-[#F5F6FA] text-[#1F5AF4] border-[1px] border-[#1F5AF4] font-bold"
          >
            No, Go Back
          </button>

          <button
            onClick={() => router.push("/dashboard/deliveries")}
            className="w-[191px] h-[60px] bg-[#1F5AF4] text-white font-bold"
          >
            Yes, Assign Packages
          </button>
        </div>
      </div>
    </div>
  );
}
