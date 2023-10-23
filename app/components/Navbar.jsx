"use client"
import React, { useState } from "react";
import Link from "next/link";
import Logo1 from "../../public/Images/logo.svg";
import Image from "next/image";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Beranda");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const navItems = [
    { text: "Beranda", route: "/" },
    { text: "Profil", route: "/Profil" },
    { text: "Layanan", route: "/layanan" },
    { text: "Media", route: "/Media" },
    { text: "Kontak", route: "/Kontak" },
    { text: "Login/Daftar", route: "/LoginDaftar" },
  ];

  return (
    <>
      <div className="navbar bg-base-100 bg-[#D9D9D9]">
        <div className="navbar-start">
          <Link href="/">
            <Image height={50} width={50} src={Logo1} alt="Logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex bg-[#D9D9D9] rounded">
          <ul className="menu menu-horizontal px-1 pr-4 pl-4 text-black">
            {navItems.map((item) => (
              <li
                key={item.text}
                className={`mr-8 ml-8 ${activeItem === item.text ? "bg-gray-500 " : ""}`}
              >
                <Link href={item.route} onClick={() => handleItemClick(item.text)}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle bg-[#D9D9D9]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[999] pr-8 shadow bg-base-100 rounded-box w-52 ml-[-50px]"
            >
              {navItems.map((item) => (
                <li key={item.text}>
                  <Link href={item.route} onClick={() => handleItemClick(item.text)}>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
