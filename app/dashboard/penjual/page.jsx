"use client";
import { useEffect, useState } from "react";

import PageHeading from "@/components/dashboard/PageHeading";
import BarChart from "@/components/dashboard/BarChart";
import TopProdukList from "@/components/dashboard/TopProdukList";

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
        [userName]:
          dataOverview?.januari?.pendapatan !== undefined
            ? dataOverview?.januari?.pendapatan
            : 0,
      },
      {
        Year: "February",
        [userName]:
          dataOverview?.februari?.pendapatan !== undefined
            ? dataOverview?.februari?.pendapatan
            : 0,
      },
      {
        Year: "Maret",
        [userName]:
          dataOverview?.maret?.pendapatan !== undefined
            ? dataOverview?.maret?.pendapatan
            : 0,
      },
      {
        Year: "April",
        [userName]:
          dataOverview?.april?.pendapatan !== undefined
            ? dataOverview?.april?.pendapatan
            : 0,
      },
      {
        Year: "Mei",
        [userName]:
          dataOverview?.mei?.pendapatan !== undefined
            ? dataOverview?.mei?.pendapatan
            : 0,
      },
      {
        Year: "Juni",
        [userName]:
          dataOverview?.juni?.pendapatan !== undefined
            ? dataOverview?.juni?.pendapatan
            : 0,
      },
      {
        Year: "Juli",
        [userName]:
          dataOverview?.juli?.pendapatan !== undefined
            ? dataOverview?.juli?.pendapatan
            : 0,
      },
      {
        Year: "Agustus",
        [userName]:
          dataOverview?.agustus?.pendapatan !== undefined
            ? dataOverview?.agustus?.pendapatan
            : 0,
      },
      {
        Year: "September",
        [userName]:
          dataOverview?.september?.pendapatan !== undefined
            ? dataOverview?.september?.pendapatan
            : 0,
      },
      {
        Year: "Oktober",
        [userName]:
          dataOverview?.oktober?.pendapatan !== undefined
            ? dataOverview?.oktober?.pendapatan
            : 0,
      },
      {
        Year: "November",
        [userName]:
          dataOverview?.november?.pendapatan !== undefined
            ? dataOverview?.november?.pendapatan
            : 0,
      },
      {
        Year: "Desember",
        [userName]:
          dataOverview?.desember?.pendapatan !== undefined
            ? dataOverview?.desember?.pendapatan
            : 0,
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
            <p>
              {rupiah(
                dataOverview?.total !== undefined ? dataOverview?.total : 0
              )}
            </p>
          </div>
        </div>
        <BarChart data={barData} />
      </div>
      <div className="shadow-lg m-5 bg-white rounded-xl p-10 gap-10">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-bold">Produk Teratas</h1>
          <TopProdukList topProdukData={dataPopulerProduk} />
        </div>
      </div>
    </>
  );
};

export default Overview;
