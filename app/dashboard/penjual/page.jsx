import Image from "next/image";

import PageHeading from "@/app/common/components/PageHeading";
import BarChart from "@/app/common/components/BarChart";

import { BsFillCartFill, BsFillPrinterFill } from "react-icons/bs";

const AdminDashboard = () => {
  return (
    <>
      <PageHeading title="Overview" />
      <div className="h-[600px] bg-white m-5 mb-0 p-10 rounded-xl">
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl font-semibold">Total Pendapatan</h1>
            <p>Rp. 980,273.00</p>
          </div>
          <div>
            <select className="select select-bordered w-full max-w-xs bg-[#FFF8E5] text-[#FFC029]">
              <option disabled selected>
                This Year
              </option>
              <option>2020</option>
              <option>2021</option>
            </select>
          </div>
        </div>
        <BarChart />
      </div>
      <div className="flex flex-col shadow-lg m-5 bg-white rounded-xl p-10 gap-10">
        <div className="flex gap-5 mt-5">
          <div className="flex gap-3 bg-[#EEEEEE] p-5 rounded-lg">
            <BsFillPrinterFill size={40} color="#FF6B6B" />
            <div>
              <h1>Orders Complete</h1>
              <p>98,771</p>
            </div>
          </div>
          <div className="flex gap-3 bg-[#EEEEEE] p-5 rounded-lg">
            <BsFillCartFill size={40} color="#5F27CD" />
            <div>
              <h1>Total Sales</h1>
              <p>100,345</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl">Produk Teratas</h1>
          <div className="flex justify-between items-center text-center">
            <div className="flex gap-2">
              <Image src="/produk1.png" alt="Produk1" width={50} height={50} />
              <div className="flex flex-col">
                <h1 className="font-semibold">Nasi Ayam Geprek </h1>
                <p>Pedas - 10 orders</p>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="font-semibold">Inventory</h1>
              <p>20</p>
            </div>
            <div className="flex flex-col">
              <h1 className="font-semibold">Terjual</h1>
              <p>10</p>
            </div>
            <div className="flex flex-col">
              <h1 className="font-semibold">Price</h1>
              <p>Rp. 15.000</p>
            </div>
            <div className="flex flex-col">
              <h1 className="font-semibold">Today</h1>
              <p>Rp. 150.000</p>
            </div>
          </div>
          <div className="flex justify-between items-center text-center mt-5">
            <div className="flex gap-2">
              <Image src="/produk2.png" alt="Produk1" width={50} height={50} />
              <div className="flex flex-col">
                <h1 className="font-semibold">Es Teh</h1>
                <p>Biasa - 10 orders</p>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="font-semibold">Inventory</h1>
              <p>15</p>
            </div>
            <div className="flex flex-col">
              <h1 className="font-semibold">Terjual</h1>
              <p>10</p>
            </div>
            <div className="flex flex-col">
              <h1 className="font-semibold">Price</h1>
              <p>Rp. 5.000</p>
            </div>
            <div className="flex flex-col">
              <h1 className="font-semibold">Today</h1>
              <p>Rp. 50.000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
