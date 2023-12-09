"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Style from "./profile.module.css";

import { getDataAnggota } from "@/services/admin/anggota";

export default function Profil() {
  const [dataAnggota, setDataAnggota] = useState([]);

  const fetchData = async () => {
    const data_anggota = await getDataAnggota();
    console.log(data_anggota);
    setDataAnggota([...data_anggota.data]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-white to-[#FFCEA0] ">
        <div className={`container mx-auto ${Style.containerProfile}`}>
          <div className={`md:container mx-auto ${Style.sejarah}`}>
            <h1 className="text-3xl ">Sejarah DWP ITERA</h1>
            <div className="pt-4">
              <p className="mt-4">
                Sejarah Dharma Wanita Persatuan berawal pada 5 Agustus 1974 saat
                organisasi para Isteri Pegawai Republik Indonesia pada masa
                Pemrintahan Orde Baru itu dibentuk dengan nama Dharma Wanita.
                Organisasi ini didirikan oleh Ketua Dewan Pembina KORPRI saat
                itu, Amir Machmud, atas prakarsa Ibu Tien Soeharto sebagai Ibu
                Negara, pada waktu itu Dharma Wanita beranggotakan para Istri
                Pegawai Republik Indonesia, Anggota ABRI yang dikaryakan dan
                Pegawai BUMN.
              </p>
              <p className="mt-4">
                Pada era Reformasi tahun 1998, organisasi wanita ini melakukan
                perubahan mendasar, tidak ada lagi muatan politik dari
                Pemerintah. Dharma Wanita menjadi organisasi sosial
                kemasyarakatan yang netral dari politik, Independen dan
                Demokrasi
              </p>
              <p className="mt-4">
                Nama Dharma Wanita kemudian berubah menjadi Dharma Wanita
                Persatuan, penambahan kata “Persatuan” disesuaikan dengan nama
                Kabinet Persatuan Nasional dibawah kepemimpinan Presiden
                Abdurrahman Wahid. Perubahan organisasi ini tidak terbatas pada
                penambahan kata Persatuan namun juga berubah menjadi organisasi
                yang mandiri dan Demokrasi.
              </p>
            </div>
          </div>
          <div className={`md:container mx-auto ${Style.pengurus}`}>
            <h1 className="text-3xl">Pengurus DWP ITERA</h1>
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 12,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 8,
                },
                640: {
                  slidesPerView: 1, // Adjust the number of slides per view for mobile
                  spaceBetween: 4,
                },
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              className={Style.swiper}
            >
              {dataAnggota.map((data) => (
                <SwiperSlide className="flex p-4" key={data.id}>
                  <div className="card rounded p-4">
                    <figure className="flex items-center justify-center">
                      <div className="rounded-full overflow-hidden w-40 h-40">
                        <Image
                          src={data.foto}
                          alt={`${data.nama}${data.jabatan}`}
                          width={200}
                          height={200}
                        />
                      </div>
                    </figure>
                    <div className="card-body items-center">
                      <h2 className="card-title">{data.nama}</h2>
                      <p>{data.jabatan}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
