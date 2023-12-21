"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { SyncLoader } from "react-spinners";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Jumbotron from "@/components/Jumbotron";
import Button from "@/components/elements/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { getDataKonten } from "@/services/admin/konten";

export default function Home() {
  const [dataKonten, setDataKonten] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const data_konten = await getDataKonten();
    setLoading(false);
    console.log(data_konten);
    setDataKonten([...data_konten.data]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Jumbotron />
      <div className="  bg-gradient-to-r from-white to-[#FFCEA0] text-black pl-4 pr-4 sm:pl-8 sm:pr-8">
        <div className="md:container lg:container">
          <div className="p-4 lg:w-1/2  ">
            <h3 className="text-lg sm:text-xl md:text-2xl">Apa Itu DWP</h3>
            <h1 className="text-xl sm:text-3xl mt-2 sm:mt-4">
              Dharma Wanita Persatuan <br />
              Institut Teknologi Sumatera
            </h1>
            <p className="mt-4">
              Dharma Wanita Persatuan (DWP) adalah organisasi kemasyarakatan
              yang beranggotakan istri Pegawai Negeri Sipil (PNS). DWP memiliki
              struktur organisasi yang terdiri dari tingkat pusat, provinsi,
              kabupaten/kota, kecamatan, dan kelurahan/desa. Ketua DWP Pusat
              dijabat oleh istri Presiden Republik Indonesia. Sebagai organisasi
              kemasyarakatan, DWP memiliki peran penting dalam pembangunan
              nasional. DWP berperan sebagai mitra pemerintah dalam meningkatkan
              kualitas sumber daya manusia, terutama di bidang pendidikan,
              ekonomi, dan sosial budaya. DWP juga berperan sebagai mitra
              masyarakat dalam berbagai kegiatan sosial dan kemanusiaan.
            </p>
            <a href="#">
              <Button
                name="Visi dan Misi DWP"
                className="btn mt-4 capitalize bg-[#FFCEA0]"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="text-black bg-gradient-to-r from-[#FFCEA0] to-white p-8 mx-auto flex items-center">
        <div className="container mx-auto text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl">
            Berita dan Artikel
          </h3>
          <h2 className="text-2xl sm:text-3xl mt-4 font-bold">
            Lihat yang Terbaru
          </h2>
          <Swiper
            spaceBetween={10}
            pagination={{ clickable: true }}
            modules={[Pagination, Navigation]}
            className="mt-4"
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 8,
              },
              640: {
                slidesPerView: 1, // Adjust the number of slides per view for mobile
                spaceBetween: 4,
              },
            }}
          >
            {dataKonten.length > 0 &&
              dataKonten.map((item, index) => (
                <SwiperSlide className="slideSwiper" key={index}>
                  <div className="relative w-full h-64 md:h-48 lg:h-64 mx-auto rounded-lg overflow-hidden">
                    <Image
                      src={item.gambar}
                      alt="#"
                      className="object-cover w-full h-full"
                      layout="fill"
                    />
                  </div>
                </SwiperSlide>
              ))}
            {loading ? (
              <SyncLoader color="#FDCEA0" />
            ) : dataKonten.length > 0 ? (
              dataKonten.map((item, index) => (
                <SwiperSlide className="slideSwiper" key={index}>
                  <div className="relative w-full h-64 md:h-48 lg:h-64 mx-auto rounded-lg overflow-hidden">
                    <Image
                      src={item.gambar}
                      alt="#"
                      className="object-cover w-full h-full"
                      layout="fill"
                    />
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <p>Belum Ada Konten</p>
            )}
          </Swiper>
        </div>
      </div>
      <Footer />
    </>
  );
}
