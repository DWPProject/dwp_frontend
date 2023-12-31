"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";

import PageHeading from "@/components/dashboard/PageHeading";

import { IoArrowBackOutline } from "react-icons/io5";
import { ImCross } from "react-icons/im";

import { userId } from "@/utils/auth";
import { getPesanan, finishPesanan } from "@/services/penjual/pesanan";
import { rupiah } from "@/utils/rupiah";

const TABLE_HEAD = [
  "ID Pesanan",
  "Customer",
  "Tanggal Pesan",
  "Total Harga",
  "Status Pesanan",
  "Bukti Transfer",
  "Detail Pesanan",
  "Action",
];

const KelolaPesanan = () => {
  const user_id = userId();
  const [showModalDetail, setShowModalDetail] = useState(false);
  const [showModalPayment, setShowModalPayment] = useState(false);
  const [dataOrder, setDataOrder] = useState([]);
  const [dataDetailOrder, setDataDetailOrder] = useState({});

  const fetchData = async (id) => {
    const data_order = await getPesanan(id);
    setDataOrder([...data_order.data]);
  };

  useEffect(() => {
    fetchData(user_id === null ? "" : user_id);
  }, [user_id]);

  const onHandleDetailPesanan = (id) => {
    const data_order = dataOrder.find((order) => order.id === id);
    setDataDetailOrder(data_order);
    setShowModalDetail(true);
  };

  const onHandleDetailPayment = (id) => {
    const data_order = dataOrder.find((order) => order.id === id);
    setDataDetailOrder(data_order);
    setShowModalPayment(true);
  };

  const onHandleFinish = (id_order) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Finish it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const data = await finishPesanan(
            id_order,
            user_id === null ? "" : user_id
          );
          console.log(data);

          fetchData(user_id === null ? "" : user_id);
          Swal.fire("Finished!", "Order has been Finished.", "success");
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <>
      <PageHeading title="Kelola Pesanan" />
      <div className="bg-white m-5 rounded-lg">
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
              {dataOrder.map((pesanan) => (
                <tr key={pesanan.id}>
                  <td>{pesanan.id}</td>
                  <td>
                    <div className="flex gap-2 items-center">
                      <Image
                        src="/logo.svg"
                        alt="Customer1"
                        width={50}
                        height={50}
                      />
                      {pesanan.user.username}
                    </div>
                  </td>
                  <td>{pesanan.order_date}</td>
                  <td>{rupiah(pesanan.price)}</td>
                  <td>
                    <div
                      className={`text-center p-2 rounded-3xl ${
                        pesanan.status === "DiProses" && "bg-[#F4FFB0]"
                      } ${
                        pesanan.status === "Pesanan Selesai" && "bg-[#06FF1F]"
                      }`}
                    >
                      {pesanan.status}
                    </div>
                  </td>
                  <td>
                    <button
                      className="p-3 bg-[#FFD977] text-black rounded-3xl"
                      onClick={() => onHandleDetailPayment(pesanan.id)}
                    >
                      <p className=" text-center">Lihat Bukti</p>
                    </button>
                  </td>
                  <td>
                    <button
                      className="p-3 bg-[#58CBE4] text-black rounded-3xl"
                      onClick={() => onHandleDetailPesanan(pesanan.id)}
                    >
                      <p className=" text-center">Detail Pesanan</p>
                    </button>
                  </td>
                  <td>
                    <button
                      className={`py-2 px-3 text-white rounded-lg ${
                        pesanan?.orderProduct[0].status === "Pesanan Selesai"
                          ? "bg-slate-500"
                          : "bg-green-500"
                      }`}
                      onClick={() => onHandleFinish(pesanan.id)}
                      disabled={pesanan.status !== "DiProses"}
                    >
                      <p className="font-bold text-center">Finish</p>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
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
                        <p>{dataDetailOrder.user.username}</p>
                        <p>{dataDetailOrder.user.telepon}</p>
                      </div>
                      <div className="flex flex-col gap-5">
                        <h2 className="font-bold">Alamat Pengantaran</h2>
                        <p>{dataDetailOrder.address}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 pt-5">
                    <h1 className="font-semibold">Detail Pesanan Pembeli</h1>
                    <div className="grid grid-cols-3 gap-3">
                      {dataDetailOrder.orderProduct.map((item, index) => (
                        <div key={index}>
                          <Image
                            src={item.product.foto}
                            alt="Produk1"
                            width={50}
                            height={50}
                          />
                          <h2>{item.product.nama}</h2>
                          <p>{rupiah(item.product.harga)}</p>
                          <p>Jumlah Pesanan: {item.quantity}</p>
                        </div>
                      ))}
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
                  <h3 className="text-3xl font-semibold">Bukti Pembayaran</h3>
                  <button
                    type="button"
                    onClick={() => setShowModalPayment(false)}
                    className="text-black"
                  >
                    <ImCross />
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6">
                  <Image
                    src={dataDetailOrder.payment}
                    width={400}
                    height={400}
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
