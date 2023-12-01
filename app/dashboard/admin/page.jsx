"use client";
import { useEffect, useState } from "react";

import PageHeading from "@/components/dashboard/PageHeading";
import BarChart from "@/components/dashboard/BarChart";
import TopProdukList from "@/components/dashboard/TopProdukList";
import CardSale from "@/components/dashboard/CardSale";

import {
  getOverviewAdmin,
  getPopulerProdukAdmin,
} from "@/services/admin/overview";
import { getDataPenjual } from "@/services/admin/penjual";

import { rupiah } from "@/utils/rupiah";

const Overview = () => {
  const [filterToko, setFilterToko] = useState("DEFAULT");
  const [namaToko, setNamaToko] = useState("Admin");
  const [dataPenjual, setDataPenjual] = useState([]);
  const [dataOverview, setDataOverview] = useState({});
  const [dataPopulerProduk, setDataPopulerProduk] = useState([]);
  const barData = {
    data: [
      {
        Year: "January",
        Admin: dataOverview?.januari?.pendapatan,
      },
      {
        Year: "February",
        Admin: dataOverview?.februari?.pendapatan,
      },
      {
        Year: "Maret",
        Admin: dataOverview?.maret?.pendapatan,
      },
      {
        Year: "April",
        Admin: dataOverview?.april?.pendapatan,
      },
      {
        Year: "Mei",
        Admin: dataOverview?.mei?.pendapatan,
      },
      {
        Year: "Juni",
        Admin: dataOverview?.juni?.pendapatan,
      },
      {
        Year: "Juli",
        Admin: dataOverview?.juli?.pendapatan,
      },
      {
        Year: "Agustus",
        Admin: dataOverview?.agustus?.pendapatan,
      },
      {
        Year: "September",
        Admin: dataOverview?.september?.pendapatan,
      },
      {
        Year: "Oktober",
        Admin: dataOverview?.oktober?.pendapatan,
      },
      {
        Year: "November",
        Admin: dataOverview?.november?.pendapatan,
      },
      {
        Year: "Desember",
        Admin: dataOverview?.desember?.pendapatan,
      },
    ],
    keys: ["Admin"],
  };

  const fetchData = async (id) => {
    const data_penjual = await getDataPenjual();
    const data_overview = await getOverviewAdmin(id);
    const data_populer = await getPopulerProdukAdmin(id);
    setDataPenjual([...data_penjual.payload]);
    setDataOverview({ ...data_overview });
    setDataPopulerProduk([...data_populer]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onHandleFilterToko = (toko) => {
    setFilterToko(toko);
    fetchData(toko);
  };

  return (
    <>
      <PageHeading title="Overview" />
      <div className="h-[600px] bg-white m-5 mb-0 p-10 rounded-xl">
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl font-semibold">Total Pendapatan</h1>
            <p>{rupiah(dataOverview?.total)}</p>
          </div>
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
        <BarChart data={barData} />
      </div>
      <div className="flex flex-col shadow-lg m-5 bg-white rounded-xl p-10 gap-10">
        <div className="flex gap-5 mt-5">
          <CardSale orderComplete={"98,771"} totalSales={"100,345"} />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-bold">Produk Teratas</h1>
          <TopProdukList topProdukData={dataPopulerProduk} />
        </div>
      </div>
    </>
  );
};

export default Overview;
