"use client";
import { useState } from "react";
import Image from "next/image";

import PageHeading from "../../components/PageHeading";

import { IoArrowBackOutline } from "react-icons/io5";
import { ImCross } from "react-icons/im";

const TABLE_HEAD = [
  "ID Pesnan",
  "Customer",
  "Tanggal",
  "Total Harga",
  "Status Pembayaran",
  "Order Status",
  "Bukti Transfer",
  "Detail",
];
const TABLE_FOOT = [
  "ID Pesanan",
  "Customer",
  "Tanggal",
  "Total Harga",
  "Status Pembayaran",
  "Order Status",
  "Bukti Transfer",
  "Detail",
];

const TABLE_ROWS = [
  {
    id_pesanan: "#0001",
    produk: "Ayam Geprek",
    customer: "Krisna",
    tanggal: "04/10/2023 09:00",
    total_harga: 30000,
  },
  {
    id_pesanan: "#0002",
    produk: "Es Teh",
    customer: "Chrisnico",
    tanggal: "04/10/2023 09:00",
    total_harga: 15000,
  },
  {
    id_pesanan: "#0003",
    produk: "Ayam Goreng Sambal",
    customer: "Iqbal",
    tanggal: "04/10/2023 08:00",
    total_harga: 15000,
  },
];

const KelolaPesanan = () => {
  const [showModalDetail, setShowModalDetail] = useState(false);
  const [showModalPayment, setShowModalPayment] = useState(false);
  const [categories, setCategories] = useState("Belum Diproses");
  const [checked, setChecked] = useState(true);

  return (
    <>
      <PageHeading title="Kelola Pesanan" />
      <div className="bg-white m-5 rounded-lg">
        <div className="flex justify-between p-8 ">
          <form>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-500 sr-only"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-3 pl-10 text-sm border border-gray-500 rounded-lg focus:ring-black focus:border-black outline-none"
                placeholder="Search..."
                required
              />
            </div>
          </form>
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
              {TABLE_ROWS.map((pesanan) => (
                <tr key={pesanan.id_pesanan}>
                  <td>{pesanan.id_pesanan}</td>
                  <td>
                    <div className="flex gap-2 items-center">
                      <Image
                        src="/logo.svg"
                        alt="Customer1"
                        width={50}
                        height={50}
                      />
                      {pesanan.customer}
                    </div>
                  </td>
                  <td>{pesanan.tanggal}</td>
                  <td>Rp. {pesanan.total_harga}</td>
                  <td>
                    <div className="form-control flex justify-center items-center">
                      <label className="label cursor-pointer">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-success"
                          defaultChecked={checked}
                          onChange={() => setChecked(!checked)}
                        />
                      </label>
                    </div>
                  </td>
                  <td>
                    <select
                      className={`select select-bordered max-w-xs rounded-2xl 
                      ${categories === "Belum diproses" && "bg-[#D7D7D7]"} 
                      ${categories === "Dalam Perjalanan" && "bg-[#F4FFB0]"}
                      ${categories === "Selesai" && "bg-[#8FA8FF]"}
                      }`}
                      value={categories}
                      onChange={(e) => setCategories(e.target.value)}
                    >
                      <option value={"Belum diproses"}>Belum diproses</option>
                      <option value={"Dalam Perjalanan"}>
                        Dalam Perjalanan
                      </option>
                      <option value={"Selesai"}>Selesai</option>
                    </select>
                  </td>
                  <td>
                    <button
                      className="p-3 bg-[#FFD977] text-black rounded-3xl"
                      onClick={() => setShowModalPayment(true)}
                    >
                      <p className=" text-center">Lihat Bukti</p>
                    </button>
                  </td>
                  <td>
                    <button
                      className="p-3 bg-[#58CBE4] text-black rounded-3xl"
                      onClick={() => setShowModalDetail(true)}
                    >
                      <p className=" text-center">Detail</p>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="font-bold text-black">
              <tr>
                {TABLE_FOOT.map((head) => (
                  <th key={head}>{head}</th>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      {showModalDetail ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex justify-start items-center gap-3 p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <button
                    type="button"
                    onClick={() => setShowModalDetail(false)}
                  >
                    <IoArrowBackOutline size={20} />
                  </button>
                  <h3 className="text-3xl font-semibold">Detail Pesanan</h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto divide-y w-[600px]">
                  <div className="flex flex-col gap-5">
                    <h1 className="font-semibold">Detail Profile Pembeli</h1>
                    <div className="flex justify-between">
                      <div className="flex flex-col gap-2">
                        <Image
                          src="/logo.svg"
                          alt="Customer1"
                          width={50}
                          height={50}
                        />
                        <p>Krisna</p>
                        <p>087775440461</p>
                      </div>
                      <div className="flex flex-col gap-5">
                        <h2 className="font-bold">Alamat Pengantaran</h2>
                        <p>Gedung C, Lt 3, Ruang 302</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 pt-5">
                    <h1 className="font-semibold">Detail Pesanan Pembeli</h1>
                    <div className="flex flex-col gap-3">
                      <Image
                        src="/images/produk1.png"
                        alt="Produk1"
                        width={50}
                        height={50}
                      />
                      <h2>Ayam Geprek</h2>
                      <p>Rp. 100000</p>
                      <p>Jumlah Pesanan: 10</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {showModalPayment ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex justify-between items-center gap-3 p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Detail Pesanan</h3>
                  <button
                    type="button"
                    onClick={() => setShowModalPayment(false)}
                    className="text-black"
                  >
                    <ImCross />
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto ">
                  <Image
                    src="/images/bukti_payment_2.jpg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    alt="Payment"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default KelolaPesanan;
