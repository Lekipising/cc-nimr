"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function DashboardNav() {
  const pathname = usePathname();

  const navItems = [
    {
      title: "Overview",
      svg: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 3.55556C0 1.59188 1.59188 0 3.55556 0C5.51924 0 7.11111 1.59188 7.11111 3.55556C7.11111 5.51924 5.51924 7.11111 3.55556 7.11111C1.59188 7.11111 0 5.51924 0 3.55556ZM0 12.4444C0 10.4808 1.59188 8.88889 3.55556 8.88889C5.51924 8.88889 7.11111 10.4808 7.11111 12.4444C7.11111 14.4081 5.51924 16 3.55556 16C1.59188 16 0 14.4081 0 12.4444ZM8.88889 3.55556C8.88889 1.59188 10.4808 0 12.4444 0C14.4081 0 16 1.59188 16 3.55556C16 5.51924 14.4081 7.11111 12.4444 7.11111C10.4808 7.11111 8.88889 5.51924 8.88889 3.55556ZM8.88889 12.4444C8.88889 10.4808 10.4808 8.88889 12.4444 8.88889C14.4081 8.88889 16 10.4808 16 12.4444C16 14.4081 14.4081 16 12.4444 16C10.4808 16 8.88889 14.4081 8.88889 12.4444Z"
            fill="currentColor"
          />
        </svg>
      ),
      to: "/dashboard",
    },
    {
      title: "Deliveries",
      svg: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.793 6.0956L15.8994 11.8445C16.0986 12.598 15.9997 13.3986 15.6232 14.0819C15.2467 14.7653 14.621 15.2794 13.8747 15.5189C13.1284 15.7583 12.3182 15.7048 11.6104 15.3693C10.9025 15.0339 10.3509 14.4419 10.0688 13.7151H6.80712C6.63278 14.3838 6.23501 14.974 5.67896 15.3888C5.1229 15.8037 4.44151 16.0187 3.74636 15.9987C3.05121 15.9787 2.3835 15.7248 1.85256 15.2787C1.32162 14.8325 0.958918 14.2205 0.82385 13.5429C0.575261 13.4139 0.367024 13.2197 0.221774 12.9814C0.0765242 12.7431 -0.000179632 12.4698 3.15891e-07 12.1912V4.5717C3.15891e-07 4.36962 0.080818 4.17582 0.224674 4.03292C0.368531 3.89003 0.563642 3.80975 0.767086 3.80975H6.13669C6.34013 3.80975 6.53524 3.89003 6.6791 4.03292C6.82295 4.17582 6.90377 4.36962 6.90377 4.5717V8.38146C6.90377 8.58354 6.98459 8.77734 7.12845 8.92024C7.2723 9.06313 7.46741 9.14341 7.67086 9.14341H9.20503C9.40847 9.14341 9.60358 9.06313 9.74744 8.92024C9.8913 8.77734 9.97211 8.58354 9.97211 8.38146V1.5239H7.67086V0H10.7392C10.9426 0 11.1378 0.0802767 11.2816 0.22317C11.4255 0.366064 11.5063 0.559869 11.5063 0.761951V1.5239H15.3417V6.0956H13.793ZM14.4703 12.3985C14.3273 12.0217 14.0401 11.7165 13.6713 11.5494C13.3025 11.3824 12.8821 11.3671 12.502 11.5069C12.1219 11.6467 11.8129 11.9302 11.6426 12.2956C11.4723 12.6609 11.4544 13.0784 11.5929 13.4568C11.7315 13.8351 12.0151 14.1437 12.3819 14.315C12.7487 14.4863 13.1688 14.5065 13.5506 14.3711C13.9323 14.2358 14.2446 13.9558 14.4192 13.5925C14.5939 13.2292 14.6166 12.8119 14.4826 12.432L14.4703 12.3985ZM1.53417 6.85755H5.3696V5.33365H1.53417V6.85755ZM11.5063 4.5717H13.8075V3.0478H11.5063V4.5717ZM3.83543 14.4771C4.24232 14.4771 4.63254 14.3165 4.92025 14.0307C5.20796 13.7449 5.3696 13.3573 5.3696 12.9532C5.3696 12.549 5.20796 12.1614 4.92025 11.8756C4.63254 11.5898 4.24232 11.4293 3.83543 11.4293C3.42854 11.4293 3.03832 11.5898 2.75061 11.8756C2.46289 12.1614 2.30126 12.549 2.30126 12.9532C2.30126 13.3573 2.46289 13.7449 2.75061 14.0307C3.03832 14.3165 3.42854 14.4771 3.83543 14.4771Z"
            fill="currentColor"
          />
        </svg>
      ),
      to: "/dashboard/deliveries",
    },
    {
      title: "Patients",
      svg: (
        <svg
          width="16"
          height="12"
          viewBox="0 0 16 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.4 5.19999C3.2825 5.19999 4 4.48249 4 3.59999C4 2.71749 3.2825 1.99999 2.4 1.99999C1.5175 1.99999 0.8 2.71749 0.8 3.59999C0.8 4.48249 1.5175 5.19999 2.4 5.19999ZM13.6 5.19999C14.4825 5.19999 15.2 4.48249 15.2 3.59999C15.2 2.71749 14.4825 1.99999 13.6 1.99999C12.7175 1.99999 12 2.71749 12 3.59999C12 4.48249 12.7175 5.19999 13.6 5.19999ZM14.4 5.99999H12.8C12.36 5.99999 11.9625 6.17749 11.6725 6.46499C12.68 7.01749 13.395 8.01499 13.55 9.2H15.2C15.6425 9.2 16 8.84249 16 8.39999V7.59999C16 6.71749 15.2825 5.99999 14.4 5.99999ZM8 5.99999C9.5475 5.99999 10.8 4.74749 10.8 3.19999C10.8 1.65249 9.5475 0.399994 8 0.399994C6.4525 0.399994 5.2 1.65249 5.2 3.19999C5.2 4.74749 6.4525 5.99999 8 5.99999ZM9.92 6.79999H9.7125C9.1925 7.04999 8.615 7.19999 8 7.19999C7.385 7.19999 6.81 7.04999 6.2875 6.79999H6.08C4.49 6.79999 3.2 8.08999 3.2 9.67999V10.4C3.2 11.0625 3.7375 11.6 4.4 11.6H11.6C12.2625 11.6 12.8 11.0625 12.8 10.4V9.67999C12.8 8.08999 11.51 6.79999 9.92 6.79999ZM4.3275 6.46499C4.0375 6.17749 3.64 5.99999 3.2 5.99999H1.6C0.7175 5.99999 0 6.71749 0 7.59999V8.39999C0 8.84249 0.3575 9.2 0.8 9.2H2.4475C2.605 8.01499 3.32 7.01749 4.3275 6.46499Z"
            fill="currentColor"
          />
        </svg>
      ),
      to: "/dashboard/patients",
    },
    {
      title: "Dispatch Riders",
      svg: (
        <svg
          width="11"
          height="16"
          viewBox="0 0 11 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.63623 4.31625C8.41037 4.76294 9.0532 5.40565 9.50004 6.1797C9.94688 6.95376 10.182 7.83185 10.1816 8.72562V14.5437H7.14896C6.99871 14.9695 6.72007 15.3383 6.35145 15.5991C5.98283 15.8599 5.54238 16 5.09082 16C4.63925 16 4.1988 15.8599 3.83019 15.5991C3.46157 15.3383 3.18293 14.9695 3.03267 14.5437H3.39144e-07V8.72562C-0.000325925 7.83185 0.234759 6.95376 0.681599 6.1797C1.12844 5.40565 1.77127 4.76294 2.54541 4.31625C2.42591 4.10161 2.33426 3.87262 2.27269 3.6348H3.39144e-07V2.18028H2.27341C2.43518 1.55612 2.79964 1.00334 3.30957 0.608729C3.8195 0.214113 4.44603 0 5.09082 0C5.7356 0 6.36214 0.214113 6.87207 0.608729C7.382 1.00334 7.74645 1.55612 7.90822 2.18028H10.1816V3.6348H7.90822C7.8464 3.8748 7.75404 4.10389 7.63695 4.31625H7.63623ZM5.09082 9.45288C4.89794 9.45288 4.71296 9.5295 4.57657 9.66589C4.44018 9.80228 4.36356 9.98726 4.36356 10.1801V13.8164C4.36356 14.0093 4.44018 14.1943 4.57657 14.3307C4.71296 14.4671 4.89794 14.5437 5.09082 14.5437C5.2837 14.5437 5.46868 14.4671 5.60507 14.3307C5.74146 14.1943 5.81808 14.0093 5.81808 13.8164V10.1801C5.81808 9.98726 5.74146 9.80228 5.60507 9.66589C5.46868 9.5295 5.2837 9.45288 5.09082 9.45288ZM5.09082 4.36206C5.47658 4.36206 5.84654 4.20882 6.11932 3.93604C6.39209 3.66327 6.54534 3.29331 6.54534 2.90754C6.54534 2.52178 6.39209 2.15182 6.11932 1.87904C5.84654 1.60627 5.47658 1.45302 5.09082 1.45302C4.70506 1.45302 4.33509 1.60627 4.06232 1.87904C3.78954 2.15182 3.6363 2.52178 3.6363 2.90754C3.6363 3.29331 3.78954 3.66327 4.06232 3.93604C4.33509 4.20882 4.70506 4.36206 5.09082 4.36206Z"
            fill="currentColor"
          />
        </svg>
      ),
      to: "/dashboard/riders",
    },
    {
      title: "Admin",
      svg: (
        <svg
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M7 8C9.20938 8 11 6.20937 11 4C11 1.79063 9.20938 0 7 0C4.79063 0 3 1.79063 3 4C3 6.20937 4.79063 8 7 8ZM9.99375 9.01875L8.5 15L7.5 10.75L8.5 9H5.5L6.5 10.75L5.5 15L4.00625 9.01875C1.77812 9.125 0 10.9469 0 13.2V14.5C0 15.3281 0.671875 16 1.5 16H12.5C13.3281 16 14 15.3281 14 14.5V13.2C14 10.9469 12.2219 9.125 9.99375 9.01875Z"
            fill="currentColor"
          />
        </svg>
      ),
      to: "/dashboard/admin",
    },
  ];

  return (
    <header className="w-full border-b-[1px] border-[#827F9833] justify-between flex items-end">
      <Link href="/dashboard" className="my-auto">
        <Image
          src="/nimr.svg"
          alt="Nimcure Logo"
          height={35}
          width={35}
          className="object-contain"
        />
      </Link>

      <div className="flex gap-16 h-full items-center">
        {navItems.map((item) => (
          <OneNavItem
            key={item.title}
            title={item.title}
            svg={item.svg}
            to={item.to}
            isActive={pathname === item.to}
          />
        ))}
      </div>

      <div className="flex items-center gap-2 h-max my-auto">
        <Image src="/avatar.png" alt="User Avatar" height={35} width={35} />
        <p className="text-[#18131A] font-semibold">Emmanuel Adigwe</p>
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
          className="lucide lucide-chevron-down text-black"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </header>
  );
}

function OneNavItem({
  svg,
  title,
  to,
  isActive,
}: {
  svg: React.ReactNode;
  title: string;
  to: string;
  isActive: boolean;
}) {
  return (
    <Link
      href={to}
      className={`${
        isActive
          ? "text-nim-300 font-semibold border-nim-300"
          : "text-[#827F98] font-normal border-white"
      } border-b-[3px] flex justify-start items-center h-[60px] gap-2`}
    >
      {svg}
      <p className="">{title}</p>
    </Link>
  );
}
