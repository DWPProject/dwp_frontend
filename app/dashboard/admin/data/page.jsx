"use client";
import { useState } from "react";

import PageHeading from "@/app/components/PageHeading";
import DataPenjual from "./DataPenjual";
import DataAnggota from "./DataAnggota";

export default function KelolaData() {
  const [categories, setCategories] = useState("DEFAULT");

  return (
    <div className="w-full flex flex-col gap-5">
      <PageHeading title="Kelola Data" />
      <div className="flex flex-col gap-5">
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
      </div>
    </div>
  );
}
