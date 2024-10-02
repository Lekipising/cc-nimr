import Image from "next/image";
import React from "react";

export default function ScanPackage() {
  return (
    <div className="w-full max-w-3xl flex flex-col gap-16">
      <p className="text-center text-lg text-[#18131A]">
        Scan a package to assign it to{" "}
        <span className="font-bold">Oluwaseun Aregbesola</span>
      </p>

      <div className="w-full grid grid-cols-2 relative h-[300px]">
        <div className="flex flex-col gap-8 items-center">
          <Image src="/scan.png" width={300} height={300} alt="Scan" />
          <button className="h-[60px] mt-auto w-[245px] text-white bg-[#1F5AF4] text-sm flex justify-center items-center gap-2 font-semibold">
            Scan Package
          </button>
        </div>
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#2A2A2A] text-sm">
          OR
        </span>
        <div className="flex flex-col gap-4 pl-16">
          <p className="text-[#2A2A2A]">
            Trouble scanning QR Code? <br /> Enter manually
          </p>
          <input
            type="text"
            placeholder="Enter Code"
            className="border-[1px] border-[#E0E0E0] h-[60px] p-4 w-[245px] focus:border-[#1F5AF4] focus-within:border-[#1F5AF4]"
          />

          <button className="h-[60px] mt-auto w-[245px] border-[#1F5AF4] text-[#276DF7] border-[1px] text-sm flex justify-center items-center gap-2 font-semibold">
            Submit Code
          </button>
        </div>
      </div>
    </div>
  );
}
