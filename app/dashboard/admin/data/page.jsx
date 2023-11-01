"use client";
import { useState } from "react";

import PageHeading from "@/app/components/PageHeading";
import DataPenjual from "./DataPenjual";
import DataAnggota from "./DataAnggota";

const KelolaData = () => {
  const [categories, setCategories] = useState("DEFAULT");

  return (
    <>
      <PageHeading title="Kelola Data" />
      <select
        className="select select-bordered w-full max-w-xs ml-5"
        value={categories}
        onChange={(e) => setCategories(e.target.value)}
      >
        <option value={"DEFAULT"} disabled>
          Pilih Kategori
        </option>
        <option value={"penjual"}>Data Penjual</option>
        <option value={"anggota"}>Data Anggota</option>
      </select>
      {categories === "penjual" ? <DataPenjual /> : <DataAnggota />}
    </>
  );
};

export default KelolaData;
