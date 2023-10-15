import { AiOutlineShoppingCart } from "react-icons/ai";
import Style from "./layanan.module.css";
import Produk from "../../public/Images/makan.png";
import Image from "next/image";
import Footer from "../components/Footer";
const Layanan = () => {
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
          <AiOutlineShoppingCart className={Style.cart} />
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
                <button className="btn outline w-full">Tambah</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>

  );
};

export default Layanan;
