"use client";
import React, { useState } from "react";
import {
  AiOutlineShoppingCart,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
import Style from "./layanan.module.css";
import Produk from "../../public/Images/makan.png";
import Image from "next/image";
import Footer from "../components/Footer";

const Layanan = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jumlahPesanan, setJumlahPesanan] = useState(0);
  const [catatan, setCatatan] = useState("");
  const [keranjangBelanja, setKeranjangBelanja] = useState([]);
  const Toko = [
    {
      title: "Ayam Geprek",
      price: "Rp 20.000",
      imageSrc: Produk,
    },
    {
      title: "Nasi Goreng",
      price: "Rp 15.000",
      imageSrc: Produk,
    },
    {
      title: "Baju T-shirt",
      price: "Rp 50.000",
      imageSrc: Produk,
    },
    {
      title: "Ayam Geprek",
      price: "Rp 20.000",
      imageSrc: Produk,
    },
    {
      title: "Nasi Goreng",
      price: "Rp 15.000",
      imageSrc: Produk,
    },
    {
      title: "Baju T-shirt",
      price: "Rp 50.000",
      imageSrc: Produk,
    },
  ];

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
        gambar: Produk,
        catatan: catatan,
      };
      setKeranjangBelanja([...keranjangBelanja, pesananBaru]);
      setJumlahPesanan(0);
      setCatatan("");
      setIsModalOpen(false);
    }
  };

  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };
  return (
    <div className="">
      <h1 className="text-3xl font-bold lg:mt-8">Layanan DWP</h1>
      <div className="flex justify-between list-none mt-8">
        <div className="category flex">
          <li className="mr-4">
            <a href="#">Semua Produk</a>
          </li>
          <li className="mr-4">
            <a href="#">Makanan</a>
          </li>
          <li className="mr-4">
            <a href="#">Barang Pakai</a>
          </li>
        </div>
        <div className="cart">
          <AiOutlineShoppingCart
            className={`cursor-pointer ${Style.cart}`}
            onClick={openCartModal}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
        {Toko.map((product, index) => (
          <div key={index} className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <Image src={product.imageSrc} alt={product.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.title}</h2>
              <p>{product.price}</p>
              <div className="card-actions justify-center">
                <button className="btn outline w-full" onClick={openModal}>
                  Tambah
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
      {isModalOpen && (
        <dialog id="my_modal_3" className="modal" open>
          <div className="modal-box">
            <form method="dialog">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={closeModal}
              >
                ✕
              </button>
            </form>
            <h3 className="text-lg font-bold mt-4">Custom Pesanan</h3>
            <div className="flex justify-between mt-4">
              <p>Nasi Lemak </p>
              <p>20.000 </p>
            </div>
            <div className="flex justify-between mt-4">
              <p className="font-bold">Jumlah Pesanan</p>
              <div className="flex justify-around font-bold align-center item-center">
                <AiOutlineMinus
                  className="mr-4 cursor-pointer"
                  onClick={decreaseQuantity}
                />
                {jumlahPesanan}
                <AiOutlinePlus
                  className="ml-4 cursor-pointer"
                  onClick={increaseQuantity}
                />
              </div>
            </div>
            <div className="mt-4">
              <p className="font-bold">Catatan</p>
              <small>opsional</small>
              <br />

              <textarea
                name="catatan"
                id="catatan"
                className="outline rounded"
                style={{ width: "100%", maxWidth: "100%" }}
                value={catatan}
                onChange={handleCatatanChange}
                maxLength="200"
              />

              <p className="mt-2">{catatan.length}/200</p>
            </div>
            <div className="mt-4">
              <button className="btn w-full" onClick={tambahKeKeranjang}>
                Pesan
              </button>
            </div>
          </div>
        </dialog>
      )}
      {isCartModalOpen && (
        <dialog id="cart_modal" className="modal" open>
          <div className="modal-box max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto p-4">
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
                <p>Gedung GKU 1, Lt Dasar</p>
                <button className="btn btn-sm outline outline-green-500">
                  Ganti Alamat
                </button>
              </div>
              <small className="outline outline-green-400 rounded font-bold mt-2">
                isi detail alamat dengan benar !!!
              </small>
            </div>
            <div>
              {keranjangBelanja.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row justify-between items-center mt-4"
                >
                  <div className="w-full sm:w-2/3">
                    <p>{item.nama}</p>
                    <p>Rp {item.harga}</p>
                    {item.catatan && (
                      <p className="mt-1">Catatan: {item.catatan}</p>
                    )}
                    <button className="btn btn-sm mt-2 sm:mt-0">Edit</button>
                  </div>
                  <div className="flex items-center w-full sm:w-1/3 mt-4 sm:mt-0">
                    <Image
                      src={item.gambar}
                      alt={item.nama}
                      width={100}
                      height={100}
                    />
                    <p className="ml-2">{item.jumlah} x</p>
                  </div>
                </div>
              ))}
            </div>
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
                <small className="font-bold">Gopay: 0822222222</small>
                <input type="file" name="" id="" />
              </div>
            </div>
            <button className="btn btn w-full mt-4">
              Beli dan Siap Diantar
            </button>
          </div>
        </dialog>
      )}
    </div>  
  );
};

export default Layanan;
