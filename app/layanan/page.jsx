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
  const [nomorRekening, setNomorRekening] = useState("");
  const [buktiPembayaran, setBuktiPembayaran] = useState(null);

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
  const handleBuktiPembayaranChange = (e) => {
    const file = e.target.files[0];
    setBuktiPembayaran(file);
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
    <div className="bg-gradient-to-r from-white to-[#FFCEA0]">
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
        <div className="cart relative">
          <AiOutlineShoppingCart
            className={`cursor-pointer ${Style.cart}`}
            onClick={openCartModal}
          />
          {jumlahPesananKeranjang > 0 && (
            <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs absolute -top-1 -right-1">
              {jumlahPesananKeranjang}
            </span>
          )}
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
                <button className="btn outline w-full bg-[#FFCEA0] hover:bg-[#FFCEA0]" onClick={openModal}>
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
          <div className="modal-box bg-gradient-to-r from-white to-[#FFCEA0]">
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
              <button className="btn w-full bg-[#FFCEA0] hover:bg-[#FFCEA0]" onClick={tambahKeKeranjang}>
                Pesan
              </button>
            </div>
          </div>
        </dialog>
      )}
      {isCartModalOpen && (
        <dialog id="cart_modal" className="modal " open>
          <div className="modal-box max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto p-4 bg-gradient-to-r from-white to-[#FFCEA0]">
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
                    <button
                      className="btn btn-sm mt-2 sm:mt-0"
                      onClick={() => hapusPesanan(index)}
                    >
                      Hapus
                    </button>
                    <button
                      className="btn btn-sm mt-2 sm:mt-0 ml-2"
                      onClick={() => simpanPesanan(index, item)}
                    >
                      Simpan
                    </button>
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
                <small className="font-bold">Metode Pembayaran:</small>
                <select id="metodePembayaran" onChange={handleChangePembayaran}>
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
            <button className="btn btn w-full mt-4 bg-[#FFCEA0] hover:bg-[#FFCEA0]">
              Beli dan Siap Diantar
            </button>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Layanan;
