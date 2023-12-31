"use client";
import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MediaSlider from "@/components/mediaSlider";

import { getDataKonten } from "@/services/admin/konten";

export default function Media() {
  const [dataKonten, setDataKonten] = useState([]);

  const fetchData = async () => {
    const data_konten = await getDataKonten();
    console.log(data_konten);
    setDataKonten([...data_konten.data]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 min-h-screen">
        <h1 className="text-2xl font-semibold mb-4 md:container lg:container">
          Berita Dharma Wanita Persatuan ITERA
        </h1>
        <MediaSlider data={dataKonten} />
      </div>
      <Footer />
    </>
  );
}
