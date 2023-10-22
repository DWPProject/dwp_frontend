import PageHeading from "@/app/components/PageHeading";
import BarChart from "@/app/components/BarChart";

import { BsFillCartFill, BsFillPrinterFill } from "react-icons/bs";

const AdminDashboard = () => {
  return (
    <>
      <PageHeading title="Overview" />
      <div className="h-[300px]">
        <h3>Members Favorite Food</h3>
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
          <div>
            <table className="table table-compact w-full">
              <thead>
                <tr>
                  <th>Produk</th>
                  <th>Penjual</th>
                  <th>Harga</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Produk</td>
                  <td>Penjual</td>
                  <td>Harga</td>
                </tr>
                <tr>
                  <td>Produk</td>
                  <td>Penjual</td>
                  <td>Harga</td>
                </tr>
                <tr>
                  <td>Produk</td>
                  <td>Penjual</td>
                  <td>Harga</td>
                </tr>
                <tr>
                  <td>Produk</td>
                  <td>Penjual</td>
                  <td>Harga</td>
                </tr>
                <tr>
                  <td>Produk</td>
                  <td>Penjual</td>
                  <td>Harga</td>
                </tr>
                <tr>
                  <td>Produk</td>
                  <td>Penjual</td>
                  <td>Harga</td>
                </tr>
                <tr>
                  <td>Produk</td>
                  <td>Penjual</td>
                  <td>Harga</td>
                </tr>
                <tr>
                  <td>Produk</td>
                  <td>Penjual</td>
                  <td>Harga</td>
                </tr>
                <tr>
                  <td>Produk</td>
                  <td>Penjual</td>
                  <td>Harga</td>
                </tr>
                <tr>
                  <td>Produk</td>
                  <td>Penjual</td>
                  <td>Harga</td>
                </tr>
                <tr>
                  <td>Produk</td>
                  <td>Penjual</td>
                  <td>Harga</td>
                </tr>
                <tr>
                  <td>Produk</td>
                  <td>Penjual</td>
                  <td>Harga</td>
                </tr>
                <tr>
                  <td>Produk</td>
                  <td>Penjual</td>
                  <td>Harga</td>
                </tr>
                <tr>
                  <td>Produk</td>
                  <td>Penjual</td>
                  <td>Harga</td>
                </tr>
                <tr>
                  <td>Produk</td>
                  <td>Penjual</td>
                  <td>Harga</td>
                </tr>
                <tr>
                  <td>Produk</td>
                  <td>Penjual</td>
                  <td>Harga</td>
                </tr>
                <tr>
                  <td>Produk</td>
                  <td>Penjual</td>
                  <td>Harga</td>
                </tr>
                <tr>
                  <td>Produk</td>
                  <td>Penjual</td>
                  <td>Harga</td>
                </tr>
                <tr>
                  <td>Produk</td>
                  <td>Penjual</td>
                  <td>Harga</td>
                </tr>
                <tr>
                  <td>Produk</td>
                  <td>Penjual</td>
                  <td>Harga</td>
                </tr>
                <tr>
                  <td>Produk</td>
                  <td>Penjual</td>
                  <td>Harga</td>
                </tr>
                <tr>
                  <td>Produk</td>
                  <td>Penjual</td>
                  <td>Harga</td>
                </tr>
                <tr>
                  <td>Produk</td>
                  <td>Penjual</td>
                  <td>Harga</td>
                </tr>
                <tr>
                  <td>Produk</td>
                  <td>Penjual</td>
                  <td>Harga</td>
                </tr>
                <tr>
                  <td>Produk</td>
                  <td>Penjual</td>
                  <td>Harga</td>
                </tr>
                <tr>
                  <td>Produk</td>
                  <td>Penjual</td>
                  <td>Harga</td>
                </tr>
                <tr>
                  <td>Produk</td>
                  <td>Penjual</td>
                  <td>Harga</td>
                </tr>
                <tr>
                  <td>Produk</td>
                  <td>Penjual</td>
                  <td>Harga</td>
                </tr>
                <tr>
                  <td>Produk</td>
                  <td>Penjual</td>
                  <td>Harga</td>
                </tr>
                <tr>
                  <td>Produk</td>
                  <td>Penjual</td>
                  <td>Harga</td>
                </tr>
                <tr>
                  <td>Produk</td>
                  <td>Penjual</td>
                  <td>Harga</td>
                </tr>
                <tr>
                  <td>Produk</td>
                  <td>Penjual</td>
                  <td>Harga</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
