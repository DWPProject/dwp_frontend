"use client";
import React, { useState } from "react";
import Image from "next/image";

import produk2 from "@/public/images/example_product2.png";

const Pesanan = () => {
  const [activeTab, setActiveTab] = useState("Riwayat");

  const changeTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="flex justify-center p-4">
      <div className="max-w-screen-lg w-full p-4">
        <h1 className="font-bold text-3xl">Pesanan</h1>
        <div className="flex mt-4">
          <a
            href="#"
            className={`mr-4 ${activeTab === "Riwayat" ? "text-blue-500" : ""}`}
            onClick={() => changeTab("Riwayat")}
          >
            Riwayat
          </a>
          <a
            href="#"
            className={`mr-4 ${
              activeTab === "Dalam Proses" ? "text-blue-500" : ""
            }`}
            onClick={() => changeTab("Dalam Proses")}
          >
            Dalam Proses
          </a>
        </div>

        {activeTab === "Riwayat" && (
          <div className="flex justify-between items-center mt-4">
            <div className="left flex items-center">
              <div className="mr-4">
                <Image src={produk2} alt="gambar" className="rounded-lg" />
              </div>
              <div>
                <p>Ayam Geprek Extra Tulang</p>
                <small>Status Pesanan</small>
              </div>
            </div>
            <div className="right">
              <p>Rp 20.000</p>
            </div>
          </div>
        )}
        {activeTab === "Dalam Proses" && (
          <div className="flex justify-between items-center mt-4">
            <div className="left flex items-center">
              <div className="mr-4">
                <Image src={produk2} alt="gambar" className="rounded-lg" />
              </div>
              <div>
                <p>Ayam Geprek Extra Tulang</p>
                <small>Dalam Proses</small>
              </div>
            </div>
            <div className="right">
              <p>Rp 20.000</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pesanan;
