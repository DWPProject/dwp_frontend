"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineShoppingCart,
  AiOutlinePlus,
  AiOutlineMinus,
  AiTwotoneDelete,
} from "react-icons/ai";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CardProduk from "@/components/CardProduk";

import Style from "./layanan.module.css";
import produk1 from "@/public/images/example_product.png";
import iconShop from "@/public/logo.svg"
import { DATA_PRODUK_USER } from "@/constant/layanan";

export default function Layanan() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [catatan, setCatatan] = useState("");
  const [jumlahPesanan, setJumlahPesanan] = useState(0);
  const [keranjangBelanja, setKeranjangBelanja] = useState([]);
  const [nomorRekening, setNomorRekening] = useState("");
  const [buktiPembayaran, setBuktiPembayaran] = useState(null);
  const [selectedAlamat, setSelectedAlamat] = useState("gedung-gku");

  const handleChangePembayaran = (e) => {
    const selectedValue = e.target.value;
    switch (selectedValue) {
      case "gopay":
        setNomorRekening("Nomor Rekening Gopay: 0822222222");
        break;
      case "bri":
        setNomorRekening("Nomor Rekening BRI: 1234-5678-9012-3456");
        break;
      case "dana":
        setNomorRekening("Nomor Rekening Dana: 9876543210");
        break;
      default:
        setNomorRekening("");
        break;
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const increaseQuantity = () => {
    setJumlahPesanan(jumlahPesanan + 1);
  };

  const decreaseQuantity = () => {
    if (jumlahPesanan > 0) {
      setJumlahPesanan(jumlahPesanan - 1);
    }
  };

  const handleCatatanChange = (event) => {
    setCatatan(event.target.value);
  };

  const tambahKeKeranjang = () => {
    if (jumlahPesanan > 0) {
      const pesananBaru = {
        nama: "Nasi Lemak",
        harga: 20000,
        jumlah: jumlahPesanan,
        gambar: produk1,
        catatan: catatan,
        icon : iconShop,
      };
      setKeranjangBelanja([...keranjangBelanja, pesananBaru]);
      setCatatan("");
      setJumlahPesanan(0);
      setIsModalOpen(false);
    }
  };

  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  const handleBuktiPembayaranChange = (e) => {
    const file = e.target.files[0];
    setBuktiPembayaran(file);
  };
  const handleAlamatChange = (event) => {
    setSelectedAlamat(event.target.value);
  };
  const jumlahPesananKeranjang = keranjangBelanja.reduce(
    (total, item) => total + item.jumlah,
    0
  );

  const hapusPesanan = (index) => {
    const newKeranjangBelanja = [...keranjangBelanja];
    newKeranjangBelanja.splice(index, 1);
    setKeranjangBelanja(newKeranjangBelanja);
  };

  const simpanPesanan = (index, itemData) => {
    const newKeranjangBelanja = [...keranjangBelanja];
    newKeranjangBelanja[index] = itemData;
    setKeranjangBelanja(newKeranjangBelanja);
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
            <AiOutlineShoppingCart
              className={`cursor-pointer  ${Style.cart}`}
              onClick={openCartModal}
            />
            {jumlahPesananKeranjang > 0 && (
              <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs absolute -top-1 -right-1">
                {jumlahPesananKeranjang}
              </span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 m-4">
          {DATA_PRODUK_USER.map((product, index) => (
            <div
              key={index}
              className="card card-compact bg-gray-100 shadow-lg sm:max-w-xs md:max-w-md lg:max-w-md xl:max-w-md relative"
            >
              <figure className="rounded-lg ">
                <Image
                  src={produk1}
                  alt={product.title}
                  className="rounded-lg w-full"
                />
              </figure>
              <div className="icon absolute top-0 left-0">
                    <Image
                      src={iconShop}
                      alt={product.title}
                      height={50}
                      width={50}
                      className="rounded-full"
                    />
                  </div>
              <div className="card-body">
                <h2 className="card-title ">{product.title}</h2>
                <p>{product.price}</p>

                <div className="card-actions justify-center">
                  <button
                    className="btn outline w-full bg-[#FFCEA0] hover:bg-[#FFCEA0]"
                    onClick={openModal}
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
                onClick={closeModal}
              >
                ✕
              </button>
            </form>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Custom Pesanan</h3>
              <div className="flex justify-between mb-4">
                <p className="text-base">Nasi Lemak</p>
                <p className="text-base font-semibold">Rp 20.000</p>
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
                  onChange={handleCatatanChange}
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
                onClick={closeCartModal}
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
                  onChange={handleAlamatChange}
                  className="border rounded p-2"
                >
                  <option value="gedung-gku">Gedung GKU 1, Lt Dasar</option>
                  <option value="other-address-1">
                    Gedung GKU 2, Lt Dasar
                  </option>
                  <option value="other-address-2">Gedung E,lt Dasar </option>
                  <option value="other-address-2">Gedung F,lt Dasar </option>
                </select>
              </div>
            </div>
            {keranjangBelanja.map((item, index) => (
              <div
                key={index}
                className="mt-4 bg-white shadow-lg rounded-lg p-4"
              >
                <div className="flex items-center">
                  <Image
                    src={item.gambar}
                    alt={item.nama}
                    width={100}
                    height={100}
                    className="rounded-lg"
                  />
                  <div className="ml-4">
                    <p className="text-lg font-bold">{item.nama}</p>
                    <p className="text-sm text-gray-600">
                      {item.jumlah} x Rp {item.harga}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div>
                    <h3 className="text-md font-bold">Catatan Pembeli</h3>
                    <p className="text-sm text-gray-600">{item.catatan}</p>
                  </div>
                  <div>
                    <button
                      className="btn btn-sm btn-error text-white"
                      onClick={() => hapusPesanan(index)}
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
                <p>
                  Rp{" "}
                  {keranjangBelanja.reduce(
                    (total, item) => total + item.harga * item.jumlah,
                    0
                  )}
                </p>
              </div>
              <div className="flex justify-between items-center mt-4 space-x-4">
                <small className="font-bold">Metode Pembayaran:</small>
                <select
                  id="metodePembayaran"
                  onChange={handleChangePembayaran}
                  className="border rounded p-2"
                >
                  <option value="">Pilih Metode Pembayaran</option>
                  <option value="gopay">Gopay</option>
                  <option value="bri">BRI</option>
                  <option value="dana">Dana</option>
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
            <button className="btn w-full mt-4 bg-[#FFCEA0] hover:bg-[#FFCEA0]">
              Beli dan Siap Diantar
            </button>
          </div>
        </dialog>
      )}
    </>
  );
}
