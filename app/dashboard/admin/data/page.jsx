"use client";
import { useState } from "react";

import PageHeading from "@/components/dashboard/PageHeading";
import Select from "@/components/elements/Select";

import DataPenjual from "./DataPenjual";
import DataAnggota from "./DataAnggota";

const KelolaData = () => {
  const [categories, setCategories] = useState("DEFAULT");

  return (
    <>
      <PageHeading title="Kelola Data" />
      <Select
        className="w-full ml-5"
        option={categories}
        valueOption={[
          { value: "DEFAULT", label: "Pilih Kategori", disabled: "disabled" },
          { value: "Data Penjual", label: "Data Penjual", disabled: "" },
          {
            value: "Data Anggota",
            label: "Data Anggota",
            disabled: "",
          },
        ]}
        onChange={(e) => setCategories(e.target.value)}
      />
      {categories === "Data Penjual" ? <DataPenjual /> : <DataAnggota />}
    </>
  );
};

export default KelolaData;
