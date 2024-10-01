import React from "react";

export default function DeliveryInfo() {
  return (
    <section className="w-auto flex ml-8 gap-20 mr-0">
      <div className="w-[300px] flex flex-col gap-1 mt-16">
        <h2 className="text-lg font-bold text-[#2A2A2A]">
          Delivery Information
        </h2>
        <p className="text-[#2A2A2A]">Delivery information for the Patient.</p>
      </div>

      <form className="flex-1 mt-16 max-w-2xl"></form>
    </section>
  );
}
