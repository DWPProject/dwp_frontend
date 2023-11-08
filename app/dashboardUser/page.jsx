"use client";
import React, { useState } from "react";
import Pesanan from "./pesanan/page";
import AkunUser from "./Akun";
import {AiTwotoneEdit,AiTwotoneSave} from "react-icons/ai"
const DashboardUser = () => {
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const renderContent = () => {
    switch (selectedItem) {
      case "Dashboard":
        return (
          <div>
            <h1>Dashboard</h1>
            <p>Halo user</p>
            <p>
              Dari dashboard akun anda, anda dapat melihat pesanan terbaru,
              mengedit alamat pengiriman, serta mengelola akun anda
            </p>
          </div>
        );
      case "Pesanan":
        return <Pesanan />;
      case "Akun":
        return <AkunUser />;
      case "Alamat":
        return <Alamat />;
      case "Keluar":
        return (
          <div>
            <h1>Keluar</h1>
            <p>Anda telah keluar dari akun Anda.</p>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div className="flex">
      <div className="w-1/4  p-4">
        <h1 className="text-2xl font-bold mb-4">Profil Pengguna</h1>
        <ul>
          <li className="mb-2">
            <a
              href="#"
              onClick={() => handleItemClick("Dashboard")}
              className={`cursor-pointer ${
                selectedItem === "Dashboard" ? "underline" : ""
              }`}
            >
              Dashboard
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              onClick={() => handleItemClick("Pesanan")}
              className={`cursor-pointer ${
                selectedItem === "Pesanan" ? "underline" : ""
              }`}
            >
              Pesanan
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              onClick={() => handleItemClick("Akun")}
              className={`cursor-pointer ${
                selectedItem === "Akun" ? "underline" : ""
              }`}
            >
              Akun
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              onClick={() => handleItemClick("Alamat")}
              className={`cursor-pointer ${
                selectedItem === "Alamat" ? "underline" : ""
              }`}
            >
              Alamat
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              onClick={() => handleItemClick("Keluar")}
              className={`cursor-pointer ${
                selectedItem === "Keluar" ? "underline" : ""
              }`}
            >
              Keluar
            </a>
          </li>
        </ul>
      </div>
      <div className="w-3/4 p-4">
        <div className="content">{renderContent()}</div>
      </div>
    </div>
  );
};

export default DashboardUser;
