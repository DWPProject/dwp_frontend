"use client";
import PageHeading from "@/components/dashboard/PageHeading";

import { BsDownload } from "react-icons/bs";

const TABLE_HEAD = [
  "ID Transaksi",
  "Tanggal",
  "Nama Produk",
  "Nama Toko",
  "Jumlah Pesanan",
  "Harga",
  "Total",
  "Pendapatan (DWP)",
  "Pendapatan (Penjual)",
];

const TABLE_ROWS = [
  {
    id_transaksi: "#C0001",
    tanggal: "12/07/2023",
    nama_produk: "Ayam Geprek",
    nama_toko: "Toko ABC",
    jumlah_pesanan: 10,
    harga: 10000,
    total: 100000,
    pendapatan_dwp: 5000,
    pendapatan_penjual: 95000,
  },
  {
    id_transaksi: "#C0002",
    tanggal: "12/07/2023",
    nama_produk: "Es Teh",
    nama_toko: "Toko ABC",
    jumlah_pesanan: 10,
    harga: 5000,
    total: 50000,
    pendapatan_dwp: 2500,
    pendapatan_penjual: 47500,
  },
  {
    id_transaksi: "#C0003",
    tanggal: "13/07/2023",
    nama_produk: "Ayam Goreng Kecap",
    nama_toko: "Toko XYZ",
    jumlah_pesanan: 5,
    harga: 15000,
    total: 75000,
    pendapatan_dwp: 3750,
    pendapatan_penjual: 71250,
  },
  {
    id_transaksi: "#C0004",
    tanggal: "13/07/2023",
    nama_produk: "Es Kelapa",
    nama_toko: "Toko XYZ",
    jumlah_pesanan: 5,
    harga: 7500,
    total: 37500,
    pendapatan_dwp: 1875,
    pendapatan_penjual: 35625,
  },
  {
    id_transaksi: "#C0005",
    tanggal: "14/07/2023",
    nama_produk: "Nasi Goreng",
    nama_toko: "Toko Imron",
    jumlah_pesanan: 2,
    harga: 20000,
    total: 40000,
    pendapatan_dwp: 2000,
    pendapatan_penjual: 38000,
  },
];

const KelolaLaporan = () => {
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
                Total Penjualan: Rp. 600000
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
              {TABLE_ROWS.map(
                ({
                  id_transaksi,
                  tanggal,
                  nama_produk,
                  nama_toko,
                  jumlah_pesanan,
                  harga,
                  total,
                  pendapatan_dwp,
                  pendapatan_penjual,
                }) => (
                  <tr key={id_transaksi}>
                    <td>{id_transaksi}</td>
                    <td>{tanggal}</td>
                    <td>{nama_produk}</td>
                    <td>{nama_toko}</td>
                    <td>{jumlah_pesanan}</td>
                    <td>Rp. {harga}</td>
                    <td>Rp. {total}</td>
                    <td>Rp. {pendapatan_dwp}</td>
                    <td>Rp. {pendapatan_penjual}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default KelolaLaporan;
