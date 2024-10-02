"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import QrScanner from "qr-scanner";

export default function ScanPackage() {
  const [chosenOption, setChosenOption] = useState("");

  const qrScanner = useRef<QrScanner>();

  const [scanned, setScanned] = useState(false);

  const [code, setCode] = useState("");

  const [scanStepCompleted, setScanStepCompleted] = useState(false);

  useEffect(() => {
    const videoElem = document.getElementById("scan-video") as HTMLVideoElement;

    if (videoElem) {
      qrScanner.current = new QrScanner(
        videoElem,
        (result) => console.log("decoded qr code:", result),
        {
          onDecodeError: (error) => console.error(error),
        }
      );

      qrScanner.current.start();

      // close after 5 seconds
      setTimeout(() => {
        qrScanner?.current?.stop();
        setScanned(true);
        setTimeout(() => {
          setCode("1234567890");
          setScanStepCompleted(true);
        }, 2500);
      }, 5000);
    }
  }, [chosenOption]);

  return (
    <div className="w-full max-w-3xl flex flex-col gap-8">
      <p className="text-center text-lg text-[#18131A]">
        Scan a package to assign it to{" "}
        <span className="font-bold">Oluwaseun Aregbesola</span>
      </p>

      {chosenOption?.length === 0 ? (
        <div className="w-full grid grid-cols-2 relative h-[30vh]">
          <div className="flex flex-col gap-8 items-center">
            <Image src="/scan.png" width={200} height={200} alt="Scan" />
            <button
              onClick={() => {
                QrScanner.hasCamera()
                  .then((result) => {
                    if (result) {
                      setChosenOption("scan");
                    } else {
                      alert("No camera found. Please enter code manually");
                    }
                  })
                  .catch((error) => {
                    console.error(error);
                  });
              }}
              className="h-[60px] mt-auto w-[245px] text-white bg-[#1F5AF4] text-sm flex justify-center items-center gap-2 font-semibold"
            >
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
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="border-[1px] border-[#E0E0E0] h-[60px] p-4 w-[245px] focus:border-[#1F5AF4] focus-within:border-[#1F5AF4]"
            />

            <button
              onClick={() => {
                if (code.length === 0) {
                  alert("Please enter a code");
                  return;
                }
                setChosenOption("manual");
                setScanStepCompleted(true);
              }}
              className="h-[60px] mt-auto w-[245px] border-[#1F5AF4] text-[#276DF7] border-[1px] text-sm flex justify-center items-center gap-2 font-semibold"
            >
              Submit Code
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-8 items-center mx-auto">
          {!scanStepCompleted && chosenOption === "scan" && (
            <div className="w-full">
              {scanned ? (
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
                  className="lucide lucide-circle-check mx-auto h-32 w-32 text-[#01A85A]"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              ) : (
                <video className="h-[300px] w-[300px]" id="scan-video"></video>
              )}

              {!scanned ? (
                <p className="text-[#0D0E1E] font-semibold mt-8 text-center w-full">
                  Scanning Package...
                </p>
              ) : (
                <p className="text-[#0D0E1E] font-semibold mt-8 text-center w-full">
                  Package successfully scanned
                </p>
              )}
            </div>
          )}

          {scanStepCompleted && (
            <div className="w-full flex flex-col justify-center">
              <span className="text-[#2A2A2A]">Package Code</span>
              {/* rectangle with code inside */}
              <div className="border-[1px] border-[#E0E0E0] relative text-[#5E6C84] font-bold h-[60px] mt-2 p-4 w-[245px] flex justify-center items-center bg-[#E0E0E0]">
                <span className="text-[#2A2A2A]">{code}</span>
                <button
                  className="text-[#F42C1F] flex items-center absolute -bottom-8 right-0 text-sm font-semibold"
                  onClick={() => {
                    setCode("");
                    setScanStepCompleted(false);
                    setChosenOption("");
                  }}
                >
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
                    className="lucide lucide-x mr-1 w-4 h-4"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                  Remove
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
