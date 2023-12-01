"use client";
import { useEffect, useState } from "react";

import PageHeading from "@/components/dashboard/PageHeading";
import BarChart from "@/components/dashboard/BarChart";
import TopProdukList from "@/components/dashboard/TopProdukList";
import CardSale from "@/components/dashboard/CardSale";

import { getUserFromLocalStorage } from "@/utils/localStorage";
import {
  getOverviewPenjual,
  getPopulerProdukPenjual,
} from "@/services/penjual/overview";

import { rupiah } from "@/utils/rupiah";

const Overview = () => {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [dataOverview, setDataOverview] = useState({});
  const [dataPopulerProduk, setDataPopulerProduk] = useState([]);
  const barData = {
    data: [
      {
        Year: "January",
        [userName]: dataOverview?.januari?.pendapatan,
      },
      {
        Year: "February",
        [userName]: dataOverview?.februari?.pendapatan,
      },
      {
        Year: "Maret",
        [userName]: dataOverview?.maret?.pendapatan,
      },
      {
        Year: "April",
        [userName]: dataOverview?.april?.pendapatan,
      },
      {
        Year: "Mei",
        [userName]: dataOverview?.mei?.pendapatan,
      },
      {
        Year: "Juni",
        [userName]: dataOverview?.juni?.pendapatan,
      },
      {
        Year: "Juli",
        [userName]: dataOverview?.juli?.pendapatan,
      },
      {
        Year: "Agustus",
        [userName]: dataOverview?.agustus?.pendapatan,
      },
      {
        Year: "September",
        [userName]: dataOverview?.september?.pendapatan,
      },
      {
        Year: "Oktober",
        [userName]: dataOverview?.oktober?.pendapatan,
      },
      {
        Year: "November",
        [userName]: dataOverview?.november?.pendapatan,
      },
      {
        Year: "Desember",
        [userName]: dataOverview?.desember?.pendapatan,
      },
    ],
    keys: [userName],
  };

  const fetchData = async (id) => {
    const data_overview = await getOverviewPenjual(id);
    const data_populer = await getPopulerProdukPenjual(id);
    setDataPopulerProduk([...data_populer]);
    setDataOverview({ ...data_overview });
  };

  useEffect(() => {
    const user = getUserFromLocalStorage();
    if (user.length > 0) {
      setUserName(user[0].nama_toko);
      setUserId(user[0].id);
    } else {
      setUserName("");
      setUserId("");
    }
    fetchData(userId);
  }, [userId]);

  return (
    <>
      <PageHeading title="Overview" />
      <div className="h-[600px] bg-white m-5 mb-0 p-10 rounded-xl">
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl font-semibold">Total Pendapatan</h1>
            <p>{rupiah(dataOverview?.total)}</p>
          </div>
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
