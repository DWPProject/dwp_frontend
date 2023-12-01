"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";
import {
  AiOutlineShoppingCart,
  AiOutlinePlus,
  AiOutlineMinus,
  AiTwotoneDelete,
} from "react-icons/ai";
import { toast } from "react-toastify";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Style from "./layanan.module.css";
import iconShop from "@/public/logo.svg";

import {
  getSellProduct,
  addProductToCart,
  getCartItem,
  orderProduk,
  deleteCartItem,
} from "@/services/user/shop";
import { getUserFromLocalStorage } from "@/utils/localStorage";
import { rupiah } from "@/utils/rupiah";

export default function Layanan() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [jumlahPesanan, setJumlahPesanan] = useState(0);
  const [catatan, setCatatan] = useState("");
  const [selectedAlamat, setSelectedAlamat] = useState(
    "Gedung GKU 1, Lt Dasar"
  );
  const [metodePembayaran, setMetodePembayaran] = useState("DEFAULT");
  const [nomorRekening, setNomorRekening] = useState("");
  const [buktiPembayaran, setBuktiPembayaran] = useState(null);
  const [userId, setUserId] = useState("");
  const [dataProduk, setDataProduk] = useState([]);
  const [selectedProduk, setSelectedProduk] = useState({});
  const [dataCart, setDataCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState("");

  const fetchData = async (userId) => {
    const data_produk = await getSellProduct();
    const data_cart = await getCartItem(userId);
    console.log(data_produk);
    console.log(data_cart);
    setDataCart([...data_cart.data.payload]);
    setTotalPrice(data_cart.data.price);
    setDataProduk([...data_produk.data]);
  };

  useEffect(() => {
    const user = getUserFromLocalStorage();
    if (user.length > 0) {
      setUserId(user[0].id);
    } else {
      setUserId("");
    }
    fetchData(userId);
  }, [userId]);

  const onHandleChangePembayaran = (e) => {
    const selectedValue = e.target.value;
    setMetodePembayaran(selectedValue);
    switch (selectedValue) {
      case "1":
        setNomorRekening("Nomor Rekening Gopay: 0822222222");
        break;
      case "2":
        setNomorRekening("Nomor Rekening BRI: 1234-5678-9012-3456");
        break;
      case "3":
        setNomorRekening("Nomor Rekening Dana: 9876543210");
        break;
      default:
        setNomorRekening("");
        break;
    }
  };

  const onHandleTambahPesanan = (id) => {
    const data_produk = dataProduk.find((item) => item.id === id);
    setSelectedProduk({ ...data_produk });
    setIsModalOpen(true);
  };

  const increaseQuantity = () => {
    setJumlahPesanan(jumlahPesanan + 1);
  };

  const decreaseQuantity = () => {
    if (jumlahPesanan > 0) {
      setJumlahPesanan(jumlahPesanan - 1);
    }
  };

  const tambahKeKeranjang = async () => {
    if (userId !== "") {
      if (jumlahPesanan > 0) {
        try {
          const data = await addProductToCart(
            userId,
            selectedProduk.id,
            catatan,
            jumlahPesanan
          );
          console.log(data);

          fetchData(userId);
          setCatatan("");
          setJumlahPesanan(0);
          setIsModalOpen(false);
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      const notify = () => {
        setIsModalOpen(false);
        toast("Harap Login Terlebih Dahulu!", {
          type: "error",
          autoClose: 5000,
        });
      };
      notify();
      router.push("/auth/login");
    }
  };

  const onHandleOrder = async () => {
    setIsLoading(true);
    const idd = toast.loading("Order Pesanan...");

    try {
      const data = await orderProduk(
        userId,
        metodePembayaran,
        selectedAlamat,
        buktiPembayaran
      );
      console.log(data);

      if (
        data.statusCode === 200 ||
        data.statusCode === 201 ||
        data.statusCode === 202
      ) {
        setIsLoading(false);
        toast.update(idd, {
          render: "Sukses Membuat Pesanan",
          type: "success",
          isLoading: isLoading,
          autoClose: 2000,
        });

        fetchData(userId);
        setSelectedAlamat("Gedung GKU 1, Lt Dasar");
        setBuktiPembayaran(null);
        setMetodePembayaran("DEFAULT");
        setIsCartModalOpen(false);
      } else {
        setIsLoading(false);
        if (data.error !== undefined) {
          toast.update(idd, {
            render: `${data.error}`,
            type: "error",
            isLoading: isLoading,
            autoClose: 2000,
          });
        } else {
          toast.update(idd, {
            render: `${data.message}`,
            type: "error",
            isLoading: isLoading,
            autoClose: 2000,
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const data = await deleteCartItem(id);
          console.log(data);

          fetchData(userId);
          Swal.fire(`Deleted`, "Success Deleted Cart Item", "success");
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  const jumlahPesananKeranjang = dataCart.reduce(
    (total, item) => total + item.cart_item_quantity,
    0
  );

  const handleBuktiPembayaranChange = (e) => {
    const file = e.target.files[0];
    setBuktiPembayaran(file);
  };

  return (
    <>
      <Navbar />
      <div className="md:container md:mx-auto sm:container sm:mx-auto">
        <h1 className="text-3xl font-bold lg:mt-8 pl-2 ">Layanan DWP</h1>
        <div className="flex justify-between list-none mt-4 p-2">
          <div className="category flex ">
            <li className="mr-4">
              <Link href="#">Semua Produk</Link>
            </li>
            <li className="mr-4">
              <Link href="#">Makanan</Link>
            </li>
            <li className="mr-4">
              <Link href="#">Barang Pakai</Link>
            </li>
          </div>
          <div className="cart relative ">
            <button
              className={`cursor-pointer  ${Style.cart}`}
              onClick={() => setIsCartModalOpen(true)}
              disabled={userId === "" ? true : false}
            >
              <AiOutlineShoppingCart />
              {jumlahPesananKeranjang > 0 && (
                <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs absolute -top-1 -right-1">
                  {jumlahPesananKeranjang}
                </span>
              )}
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 m-4">
          {dataProduk.map((product) => (
            <div
              key={product.id}
              className="card card-compact bg-gray-100 shadow-lg sm:max-w-xs md:max-w-md lg:max-w-md xl:max-w-md relative"
            >
              <figure className="rounded-lg ">
                <Image
                  src={product.foto}
                  alt={product.nama}
                  className="rounded-lg w-full"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </figure>
              <div className="icon absolute top-0 left-0">
                <Image
                  src={iconShop}
                  alt={product.nama}
                  height={50}
                  width={50}
                  className="rounded-full"
                />
              </div>
              <div className="card-body">
                <h2 className="card-title ">{product.nama}</h2>
                <p>{rupiah(product.harga)}</p>
                <p className="font-semibold">Sisa Stok: {product.stok}</p>
                <div className="card-actions justify-center">
                  <button
                    className="btn outline w-full bg-[#FFCEA0] hover:bg-[#FFCEA0]"
                    onClick={() => onHandleTambahPesanan(product.id)}
                  >
                    Tambah
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      {isModalOpen && (
        <dialog id="my_modal_3" className="modal" open>
          <div className="modal-box bg-white rounded-lg overflow-hidden">
            <form method="dialog">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-gray-500"
                onClick={() => setIsModalOpen(false)}
              >
                ✕
              </button>
            </form>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Custom Pesanan</h3>
              <div className="flex justify-between mb-4">
                <p className="text-base">{selectedProduk.nama}</p>
                <p className="text-base font-semibold">
                  {rupiah(selectedProduk.harga)}
                </p>
              </div>
              <div className="flex justify-between mb-4">
                <p className="text-base font-semibold">Jumlah Pesanan</p>
                <div className="flex items-center space-x-4">
                  <AiOutlineMinus
                    className="cursor-pointer text-gray-500"
                    onClick={decreaseQuantity}
                  />
                  <span className="text-base font-semibold">
                    {jumlahPesanan}
                  </span>
                  <AiOutlinePlus
                    className="cursor-pointer text-gray-500"
                    onClick={increaseQuantity}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="catatan"
                  className="text-base font-semibold block"
                >
                  Catatan
                </label>
                <textarea
                  name="catatan"
                  id="catatan"
                  className="w-full h-24 border p-2 rounded"
                  value={catatan}
                  onChange={(event) => setCatatan(event.target.value)}
                  maxLength="200"
                />
                <p className="text-sm text-gray-500 mt-2">
                  {catatan.length}/200
                </p>
              </div>
              <button
                className="btn w-full bg-[#FFCEA0] hover:bg-[#FFCEA0] text-white"
                onClick={tambahKeKeranjang}
              >
                Pesan
              </button>
            </div>
          </div>
        </dialog>
      )}
      {isCartModalOpen && (
        <dialog id="cart_modal" className="modal" open>
          <div className="modal-box max-w-full sm:max-w-2xl mx-auto p-4 bg-white shadow-lg rounded-lg">
            <form method="dialog">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => setIsCartModalOpen(false)}
              >
                ✕
              </button>
            </form>
            <h3 className="text-lg font-bold mt-4">Pesan Sekarang</h3>
            <div className="address mt-4">
              <small>Alamat Pengiriman</small>
              <div className="font-bold flex justify-between items-center mt-2">
                <select
                  id="alamatPengiriman"
                  value={selectedAlamat}
                  onChange={(event) => setSelectedAlamat(event.target.value)}
                  className="border rounded p-2"
                >
                  <option value="Gedung GKU 1, Lt Dasar">
                    Gedung GKU 1, Lt Dasar
                  </option>
                  <option value="Gedung GKU 2, Lt Dasar">
                    Gedung GKU 2, Lt Dasar
                  </option>
                  <option value="Gedung E,lt Dasar">Gedung E,lt Dasar </option>
                  <option value="Gedung F,lt Dasar">Gedung F,lt Dasar </option>
                </select>
              </div>
            </div>
            {dataCart.map((item, index) => (
              <div
                key={index}
                className="mt-4 bg-white shadow-lg rounded-lg p-4"
              >
                <div className="flex items-center">
                  <Image
                    src={item.produk_foto}
                    alt={item.produk_nama}
                    width={100}
                    height={100}
                    className="rounded-lg"
                  />
                  <div className="ml-4">
                    <p className="text-lg font-bold">{item.produk_nama}</p>
                    <p className="text-sm text-gray-600">
                      {rupiah(item.total)}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div>
                    <h3 className="text-md font-bold">Catatan Pembeli</h3>
                    <p className="text-sm text-gray-600">
                      {item.cart_item_note}
                    </p>
                  </div>
                  <div>
                    <button
                      className="btn btn-sm btn-error text-white"
                      onClick={() => onHandleDelete(item.cart_item_id)}
                    >
                      <AiTwotoneDelete />
                      Hapus Item
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-4">
              <p className="font-bold">Ringkasan Pembayaran</p>
              <div className="flex justify-between items-center mt-4 space-x-4">
                <p>Total Pembayaran</p>
                <p>{rupiah(totalPrice)}</p>
              </div>
              <div className="flex justify-between items-center mt-4 space-x-4">
                <small className="font-bold">Metode Pembayaran:</small>
                <select
                  id="metodePembayaran"
                  onChange={onHandleChangePembayaran}
                  className="border rounded p-2"
                >
                  <option value="DEFAULT">Pilih Metode Pembayaran</option>
                  <option value="1">Gopay</option>
                  <option value="2">BRI</option>
                  <option value="3">Dana</option>
                </select>
              </div>
              <div className="mt-2">
                {nomorRekening && <p>{nomorRekening}</p>}
              </div>
              <div className="mt-4">
                <small className="font-bold">Unggah Bukti Pembayaran:</small>
                <input
                  type="file"
                  name="buktiPembayaran"
                  id="buktiPembayaran"
                  onChange={handleBuktiPembayaranChange}
                />
              </div>
            </div>
            <button
              className="btn w-full mt-4 bg-[#FFCEA0] hover:bg-[#FFCEA0]"
              onClick={onHandleOrder}
              disabled={isLoading}
            >
              Beli dan Siap Diantar
            </button>
          </div>
        </dialog>
      )}
    </>
  );
}
