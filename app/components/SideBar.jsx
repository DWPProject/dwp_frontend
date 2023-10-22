"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { MdLogout } from "react-icons/md";

const SideBar = ({ menuItems }) => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col p-5 bg-gradient-sidebar min-h-screen w-full">
      <div className="flex flex-col justify-center items-center">
        <Image src="/logo.svg" alt="Logo DWP" width={50} height={50} />
        <h1 className="font-bold text-xl text-[#535353] pt-4">DWP ITERA</h1>
      </div>
      <nav>
        <ul className="py-10">
          {menuItems.map((item) => (
            <li key={item.id} className="py-3">
              <Link
                href={item.link}
                className={`flex flex-row justify-start items-center gap-3 ${
                  pathname === item.link ? "text-[#FFC42A]" : "text-black"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="pt-[10rem]">
          <Link
            href={"#"}
            className="flex flex-row justify-start items-center gap-3"
          >
            <MdLogout />
            <span>Logout</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
