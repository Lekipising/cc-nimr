import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local";

const gilroy = localFont({
  src: [
    {
      path: "./fonts/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
});

export const metadata: Metadata = {
  title: "Nimcure - Serving Patients During a Pandemic",
  description:
    "Delivering essential medication to NIMR patients with adherence to quality of service, care and confidentiality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gilroy.className} antialiased`}>{children}</body>
    </html>
  );
}
