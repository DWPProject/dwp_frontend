"use client";
import { useEffect, useState } from "react";

import PageHeading from "@/components/dashboard/PageHeading";
import BarChart from "@/components/dashboard/BarChart";
import TopProdukList from "@/components/dashboard/TopProdukList";

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
        Admin:
          dataOverview?.januari?.pendapatan !== undefined
            ? dataOverview?.januari?.pendapatan
            : 0,
      },
      {
        Year: "February",
        Admin:
          dataOverview?.februari?.pendapatan !== undefined
            ? dataOverview?.februari?.pendapatan
            : 0,
      },
      {
        Year: "Maret",
        Admin:
          dataOverview?.maret?.pendapatan !== undefined
            ? dataOverview?.maret?.pendapatan
            : 0,
      },
      {
        Year: "April",
        Admin:
          dataOverview?.april?.pendapatan !== undefined
            ? dataOverview?.april?.pendapatan
            : 0,
      },
      {
        Year: "Mei",
        Admin:
          dataOverview?.mei?.pendapatan !== undefined
            ? dataOverview?.mei?.pendapatan
            : 0,
      },
      {
        Year: "Juni",
        Admin:
          dataOverview?.juni?.pendapatan !== undefined
            ? dataOverview?.juni?.pendapatan
            : 0,
      },
      {
        Year: "Juli",
        Admin:
          dataOverview?.juli?.pendapatan !== undefined
            ? dataOverview?.juli?.pendapatan
            : 0,
      },
      {
        Year: "Agustus",
        Admin:
          dataOverview?.agustus?.pendapatan !== undefined
            ? dataOverview?.agustus?.pendapatan
            : 0,
      },
      {
        Year: "September",
        Admin:
          dataOverview?.september?.pendapatan !== undefined
            ? dataOverview?.september?.pendapatan
            : 0,
      },
      {
        Year: "Oktober",
        Admin:
          dataOverview?.oktober?.pendapatan !== undefined
            ? dataOverview?.oktober?.pendapatan
            : 0,
      },
      {
        Year: "November",
        Admin:
          dataOverview?.november?.pendapatan !== undefined
            ? dataOverview?.november?.pendapatan
            : 0,
      },
      {
        Year: "Desember",
        Admin:
          dataOverview?.desember?.pendapatan !== undefined
            ? dataOverview?.desember?.pendapatan
            : 0,
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
            <p>
              {rupiah(
                dataOverview?.total !== undefined ? dataOverview?.total : 0
              )}
            </p>
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
