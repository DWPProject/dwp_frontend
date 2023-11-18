"use client";
import { useEffect, useState } from "react";

import PageHeading from "@/components/dashboard/PageHeading";

import { BsDownload } from "react-icons/bs";

import { getUserFromLocalStorage } from "@/utils/localStorage";
import { getLaporanPenjual } from "@/services/penjual/laporan";

const TABLE_HEAD = [
  "ID Transaksi",
  "Tanggal",
  "Nama Produk",
  "Nama Toko",
  "Tipe Penjual",
  "Jumlah Pesanan",
  "Harga",
  "Total",
  "Pendapatan (DWP)",
  "Pendapatan (Penjual)",
];

const KelolaLaporan = () => {
  const [userId, setUserId] = useState("");
  const [dataLaporan, setDataLaporan] = useState([]);
  const [totalPendapatan, setTotalPendapatan] = useState(0);

  const fetchData = async (id_penjual, start = "", end = "") => {
    const data_laporan = await getLaporanPenjual(id_penjual, start, end);
    setTotalPendapatan(data_laporan.data.pendapatan);
    setDataLaporan([...data_laporan.data.payload]);
  };

  useEffect(() => {
    const user = getUserFromLocalStorage();
    if (user.length > 0) {
      setUserId(user[0].id);
    } else {
      setUserId("");
    }
    fetchData(userId);
  }, [userId]);
  return (
    <>
      <PageHeading title="Kelola Laporan" />
      <div className="bg-white m-5 rounded-lg">
        <div className="flex justify-between p-8 ">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 items-center">
                <div>
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="tanggal-awal-laporan"
                  >
                    Tanggal Awal
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="tanggal-awal-laporan"
                    type="date"
                    placeholder="Tanggal Awal..."
                  />
                </div>
                <div>
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="tanggal-akhir-laporan"
                  >
                    Tanggal Akhir
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="tanggal-akhir-laporan"
                    type="date"
                    placeholder="Tanggal Akhir..."
                  />
                </div>
                <button
                  className="py-2 px-3 bg-[#E0924A] text-white rounded-lg"
                  type="button"
                >
                  <p className="font-bold text-center">Filter</p>
                </button>
              </div>
              <h1 className="text-2xl font-bold">
                Total Penjualan: Rp. {totalPendapatan}
              </h1>
            </div>
          </div>
          <button
            className="btn text-gray-500 bg-[#FDE9CC] hover:bg-[#E0924A] hover:text-white"
            type="button"
          >
            <BsDownload size={20} />
            <span>Unduh Laporan</span>
          </button>
        </div>
        <div className="overflow-x-auto h-fit pb-5 scrollbar-hide">
          <table className="table table-pin-rows">
            {/* head */}
            <thead className="font-bold text-black">
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head}>{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dataLaporan.map((data, index) => (
                <tr key={index}>
                  <td>{data.id_order}</td>
                  <td>{data.order_date}</td>
                  <td>{data.nama}</td>
                  <td>{data.nama_toko}</td>
                  <td>{data.type_seller === 0 ? "Dalam DWP" : "Luar DWP"}</td>
                  <td>{data.quantity}</td>
                  <td>Rp. {data.harga}</td>
                  <td>Rp. {data.total_harga}</td>
                  <td>Rp. {data.dwp_cash}</td>
                  <td>Rp. {data.seller_cash}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default KelolaLaporan;
