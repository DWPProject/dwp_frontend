"use client";
import { useState } from "react";

import PageHeading from "@/app/common/components/PageHeading";
import ProdukBarang from "./ProdukBarang";
import ProdukMakanan from "./ProdukMakanan";

const KelolaProduk = () => {
  const [categories, setCategories] = useState("DEFAULT");

  return (
    <>
      <PageHeading title="Kelola Produk" />
      <select
        className="select select-bordered w-full max-w-xs ml-5"
        value={categories}
        onChange={(e) => setCategories(e.target.value)}
      >
        <option value={"DEFAULT"} disabled>
          Pilih Kategori
        </option>
        <option value={"makanan"}>Produk Makanan</option>
        <option value={"barang"}>Produk Barang</option>
      </select>
      {categories === "barang" ? <ProdukBarang /> : <ProdukMakanan />}
    </>
  );
};

export default KelolaProduk;
