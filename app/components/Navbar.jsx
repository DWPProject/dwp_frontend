"use client";
import React, { useState } from "react";
import Link from "next/link";
import Logo1 from "../../public/Images/logo.svg";
import iconProfil from "../../public/Images/R.png";
import Pesanan from "../dashboardUser/pesanan/page";
import Image from "next/image";
const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Beranda");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  const pagePesanan = () => {
    return <Pesanan />;
  };

  const navItems = [
    { text: "Beranda", route: "/" },
    { text: "Profil", route: "/Profil" },
    { text: "Layanan", route: "/layanan" },
    { text: "Media", route: "/Media" },
    { text: "Kontak", route: "/Kontak" },
    // { text: "Profil", route: "/ashboard" },
  ];

  return (
    <>
      <div className="md:container sm:container">
        <div className="navbar bg-base-100 bg-[#D9D9D9]">
          <div className="navbar-start">
            <Link href="/">
              <Image height={50} width={50} src={Logo1} alt="Logo" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex bg-[#FFCEA0] rounded">
            <ul className="menu menu-horizontal px-1 pr-4 pl-4 text-black">
              {navItems.map((item) => (
                <li
                  key={item.text}
                  className={`mr-8 ml-8 ${
                    activeItem === item.text ? "bg-gray-500 " : ""
                  }`}
                >
                  <Link
                    href={item.route}
                    onClick={() => handleItemClick(item.text)}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar bg-[#FFCEA0]"
              >
                <div className="w-10 rounded-full">
                  <Image src={iconProfil} alt="fotoprofil" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href="/LoginDaftar">Login/Register</Link>
                  <Link href="/dashboardUser/profil">Profil</Link>
                  <Link href="/dashboardUser/pesanan">Riwayat Pesanan</Link>
                  <Link href="/dashboardUser/pesanan">Logout</Link>
                </li>
              </ul>
            </div>
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
                    <Link
                      href={item.route}
                      onClick={() => handleItemClick(item.text)}
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
