"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <main className="h-svh w-full flex">
      <section className="w-[40%] h-full flex justify-start relative flex-col items-center pt-16 gap-16">
        <Image src="/logo.svg" alt="Nimcure Logo" height={56} width={56} />

        <form className="flex flex-col my-auto gap-8 w-full max-w-sm mx-auto">
          <h1 className="font-medium text-xl text-[#2A2A2A]">
            Sign in to continue
          </h1>
          <div className="flex flex-col gap-6">
            <div className="">
              <input
                type="text"
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-[1px] border-[#808080] outline-none transition-all ease-in duration-300 h-[60px] p-4 color-[#000000] w-full focus:border-nim-500 focus-within:border-nim-500 font-medium"
              />
            </div>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                className="border-[1px] pr-16 border-[#808080] outline-none transition-all ease-in duration-300 h-[60px] p-4 color-[#000000] w-full focus:border-nim-500 focus-within:border-nim-500 font-medium"
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowPassword((prev) => !prev);
                }}
                className="absolute top-1/2 right-4 text-gray-500 font-medium text-sm transform -translate-y-1/2"
              >
                {showPassword ? "HIDE" : "SHOW"}
              </button>
            </div>
            <div className="flex justify-between items-center">
              <label
                htmlFor="rememberme"
                className="text-[#2A2A2A] font-medium flex items-center"
              >
                <input
                  type="checkbox"
                  name="rememberme"
                  id="rememberme"
                  className="mr-2 h-4 accent-nim-500 w-4"
                />
                Remember me
              </label>
              <Link
                className="text-nim-500 font-medium"
                href="/forgot-password"
              >
                Forgot Password?
              </Link>
            </div>

            <Link
              href="/dashboard"
              className="bg-nim-500 mt-8 mb-16 text-white flex justify-center items-center font-semibold h-[60px] transition-all ease-in duration-300 hover:bg-nim-600"
            >
              Login
            </Link>
          </div>
        </form>

        <footer className="absolute bottom-4 left-0 w-full flex justify-center items-center">
          <p className="flex items-center font-medium gap-2 text-sm">
            Powered by{" "}
            <a
              href="https://nimcure.com"
              className="text-nim-500 font-medium"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/cchub.png"
                alt="Nimcure"
                height={8}
                width={150}
                className="object-contain"
              />
            </a>
          </p>
        </footer>
      </section>
      <section className="w-[60%] h-full bg-nim-500 overflow-visible relative">
        <div className="relative w-[100%] h-full">
          <Image
            src="https://res.cloudinary.com/dpnbddror/image/upload/v1727543456/Group_625593_1_yyhppt.png"
            alt="Nimcure"
            fill
            className="object-contain"
          />
        </div>

        <div className="absolute bottom-8 left-0 w-full text-left pl-16 text-white">
          <h2 className="font-extrabold text-2xl">
            Serving Patients During a Pandemic
          </h2>
          <p className="mt-1">
            Delivering essential medication to NIMR patients with adherence{" "}
            <br /> to quality of service, care and confidentiality.
          </p>
        </div>
      </section>
    </main>
  );
}
