"use client";
import PageHeading from "@/components/dashboard/PageHeading";
import BarChart from "@/components/dashboard/BarChart";
import TopProdukList from "@/components/dashboard/TopProdukList";
import CardSale from "@/components/dashboard/CardSale";

import { topProdukData, mockBarDataAdmin } from "@/constant/dashboard/overview";

const Overview = () => {
  return (
    <>
      <PageHeading title="Overview" />
      <div className="h-[600px] bg-white m-5 mb-0 p-10 rounded-xl">
        <BarChart data={mockBarDataAdmin} totalPendapatan={"980,273.00"} />
      </div>
      <div className="flex flex-col shadow-lg m-5 bg-white rounded-xl p-10 gap-10">
        <div className="flex gap-5 mt-5">
          <CardSale orderComplete={"98,771"} totalSales={"100,345"} />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-bold">Produk Teratas</h1>
          <TopProdukList topProdukData={topProdukData} />
        </div>
      </div>
    </>
  );
};

export default Overview;
