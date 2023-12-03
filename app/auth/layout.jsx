"use client";

import Navbar from "@/components/Navbar";

export default function AuthLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row justify-around p-8 ">
        <div className="w-full lg:w-2/5 mb-4 lg:mb-0">{children}</div>
      </div>
    </>
  );
}
