"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import Navbar from "@/components/Navbar";

import { userId } from "@/utils/auth";
import { rupiah } from "@/utils/rupiah";
import {
  getPesananDiproses,
  getPesananSelesai,
  getPesananDitolak,
} from "@/services/user/history";

const Pesanan = () => {
  const user_id = userId();
  const [activeTab, setActiveTab] = useState("Riwayat");
  const [dataPesananProses, setDataPesananProses] = useState([]);
  const [dataPesananSelesai, setDataPesananSelesai] = useState([]);
  const [dataPesananDitolak, setDataPesananDitolak] = useState([]);

  const fetchData = async (userId) => {
    const data_proses = await getPesananDiproses(userId);
    const data_selesai = await getPesananSelesai(userId);
    const data_ditolak = await getPesananDitolak(userId);
    setDataPesananProses([...data_proses.data]);
    setDataPesananSelesai([...data_selesai.data]);
    setDataPesananDitolak([...data_ditolak.data]);
  };

  useEffect(() => {
    fetchData(user_id === null ? "" : user_id);
  }, [user_id]);

  const changeTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center p-4">
        <div className="max-w-screen-lg w-full p-4">
          <h1 className="font-bold text-3xl">Pesanan</h1>
          <div className="flex mt-4">
            <a
              href="#"
              className={`mr-4 ${
                activeTab === "Riwayat" ? "text-blue-500" : ""
              }`}
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
            <a
              href="#"
              className={`mr-4 ${
                activeTab === "Pesanan Ditolak" ? "text-blue-500" : ""
              }`}
              onClick={() => changeTab("Pesanan Ditolak")}
            >
              Pesanan Ditolak
            </a>
          </div>
          {activeTab === "Riwayat" &&
            dataPesananSelesai.map((data, index) => (
              <div
                className="flex justify-between items-center mt-4"
                key={index}
              >
                <div className="left flex items-center">
                  <div className="mr-4">
                    <Image
                      src={data.produk_foto}
                      alt="gambar"
                      className="rounded-lg"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <p>{data.produk_nama}</p>
                    <small className="block">
                      Jumlah Pesanan: {data.order_product_quantity}
                    </small>
                    <small className="font-semibold pt-5">
                      {data.buyer_history_status}
                    </small>
                  </div>
                </div>
                <div className="right">
                  <p>{rupiah(data.price)}</p>
                </div>
              </div>
            ))}

          {activeTab === "Dalam Proses" &&
            dataPesananProses.map((data, index) => (
              <div
                className="flex justify-between items-center mt-4"
                key={index}
              >
                <div className="left flex items-center">
                  <div className="mr-4">
                    <Image
                      src={data.produk_foto}
                      alt="gambar"
                      className="rounded-lg"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <p>{data.produk_nama}</p>
                    <small className="block">
                      Jumlah Pesanan: {data.order_product_quantity}
                    </small>
                    <small className="font-semibold pt-5">
                      {data.buyer_history_status}
                    </small>
                  </div>
                </div>
                <div className="right">
                  <p>{rupiah(data.price)}</p>
                </div>
              </div>
            ))}

          {activeTab === "Pesanan Ditolak" &&
            dataPesananDitolak.map((data, index) => (
              <div
                className="flex justify-between items-center mt-4"
                key={index}
              >
                <div className="left flex items-center">
                  <div className="mr-4">
                    <Image
                      src={data.produk_foto}
                      alt="gambar"
                      className="rounded-lg"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <p>{data.produk_nama}</p>
                    <small className="block">
                      Jumlah Pesanan: {data.order_product_quantity}
                    </small>
                    <small className="font-semibold pt-5">
                      {data.buyer_history_status}
                    </small>
                  </div>
                </div>
                <div className="right">
                  <p>{rupiah(data.price)}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Pesanan;
