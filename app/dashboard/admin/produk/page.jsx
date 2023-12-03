"use client";
import { useState } from "react";

import PageHeading from "@/components/dashboard/PageHeading";
import Select from "@/components/elements/Select";

import ProdukBarang from "./ProdukBarang";
import ProdukMakanan from "./ProdukMakanan";

const KelolaProduk = () => {
  const [categories, setCategories] = useState("DEFAULT");
  const valueOption = [
    { value: "DEFAULT", label: "Pilih Kategori", disabled: "disabled" },
    { value: "Produk Barang", label: "Produk Barang", disabled: "" },
    {
      value: "Produk Makanan",
      label: "Produk Makanan",
      disabled: "",
    },
  ];

  return (
    <>
      <PageHeading title="Kelola Produk" />
      <Select
        className="w-full ml-5"
        selectedValue={categories}
        valueOption={valueOption}
        onChange={(e) => setCategories(e.target.value)}
      />
      {categories === "Produk Barang" ? <ProdukBarang /> : <ProdukMakanan />}
    </>
  );
};

export default KelolaProduk;
