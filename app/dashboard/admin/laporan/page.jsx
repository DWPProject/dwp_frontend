"use client";
import { useState, useEffect } from "react";

import PageHeading from "@/components/dashboard/PageHeading";
import Report from "@/components/dashboard/Report";

import { BsDownload } from "react-icons/bs";
import { PDFDownloadLink } from "@react-pdf/renderer";

import { getDataPenjual } from "@/services/admin/penjual";
import { getLaporanAdmin } from "@/services/admin/laporan";
import { rupiah } from "@/utils/rupiah";

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
  const [isClient, setIsClient] = useState(false);
  const [filterToko, setFilterToko] = useState("DEFAULT");
  const [tanggalAwal, setTanggalAwal] = useState("");
  const [tanggalAkhir, setTanggalAkhir] = useState("");
  const [dataAllLaporan, setDataAllLaporan] = useState({});
  const [dataLaporan, setDataLaporan] = useState([]);
  const [dataPenjual, setDataPenjual] = useState([]);
  const [totalPendapatan, setTotalPendapatan] = useState(0);
  const [pendapatanDWP, setPendapatanDWP] = useState(0);
  const [pendapatanPenjual, setPendapatanPenjual] = useState(0);

  const fetchData = async (id, start, end) => {
    const data_penjual = await getDataPenjual();
    const data_laporan = await getLaporanAdmin(id, start, end);
    console.log(data_penjual);
    console.log(data_laporan);
    setDataAllLaporan({ ...data_laporan.data });
    setDataPenjual([...data_penjual.payload]);
    setTotalPendapatan(data_laporan.data.pendapatan);
    setPendapatanDWP(data_laporan.data.cash_dwp_total);
    setPendapatanPenjual(data_laporan.data.cash_seller_total);
    setDataLaporan([...data_laporan.data.payload]);
  };

  const onHandleFilterToko = (toko) => {
    setFilterToko(toko);
    fetchData(toko, "", "");
  };

  const onHandleFilterTanggal = (e) => {
    e.preventDefault();
    fetchData("", tanggalAwal, tanggalAkhir);
  };

  useEffect(() => {
    setIsClient(true);
    fetchData();
  }, []);

  return (
    <>
      <PageHeading title="Kelola Laporan" />
      <div className="bg-white m-5 rounded-lg">
        <div className="flex justify-between p-8 ">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <form action="" onSubmit={onHandleFilterTanggal}>
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
                        onChange={(e) => setTanggalAwal(e.target.value)}
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
                        onChange={(e) => setTanggalAkhir(e.target.value)}
                      />
                    </div>
                    <button
                      className="py-2 px-3 bg-[#E0924A] text-white rounded-lg"
                      type="submit"
                    >
                      <p className="font-bold text-center">Filter</p>
                    </button>
                  </div>
                </form>
                <select
                  className="select select-bordered max-w-xs"
                  value={filterToko}
                  onChange={(e) => onHandleFilterToko(e.target.value)}
                >
                  <option value={"DEFAULT"} disabled>
                    Toko
                  </option>
                  {dataPenjual.map((item) => {
                    return (
                      <option key={item.id} value={item.id}>
                        {item.nama_toko}
                      </option>
                    );
                  })}
                </select>
              </div>
              <h1 className="text-2xl font-bold pt-5">
                Total Penjualan: {rupiah(totalPendapatan)}
              </h1>
              <p className="text-md">
                Total Pendapatan DWP: {rupiah(pendapatanDWP)}
              </p>
              <p className="text-md">
                Total Pendapatan Penjual: {rupiah(pendapatanPenjual)}
              </p>
            </div>
          </div>
          <button
            className="btn text-gray-500 bg-[#FDE9CC] hover:bg-[#E0924A] hover:text-white"
            type="button"
          >
            <BsDownload size={20} />
            {isClient && (
              <PDFDownloadLink
                document={<Report report={dataAllLaporan} />}
                fileName="laporan.pdf"
              >
                {({ blob, url, loading, error }) =>
                  loading ? "Load Data..." : "Unduh Laporan"
                }
              </PDFDownloadLink>
            )}
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
                  <td>{rupiah(data.harga)}</td>
                  <td>{rupiah(data.total_harga)}</td>
                  <td>{rupiah(data.dwp_cash)}</td>
                  <td>{rupiah(data.seller_cash)}</td>
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
