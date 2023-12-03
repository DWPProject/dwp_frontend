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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nostrum odit doloribus exercitationem sequi optio. Iusto rem,
                eius temporibus eligendi quia maiores neque ipsum in. Et optio
                quis saepe soluta impedit. Ad accusamus cupiditate rem provident
                quae, ea sit. Porro itaque perspiciatis quidem explicabo
                incidunt fugit, accusamus doloremque qui aliquam ipsam soluta!
                Mollitia, sint amet cum quidem excepturi at iure unde.
              </p>
              <p className="mt-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestias, voluptates maiores sit nulla natus iusto quos numquam
                sint repudiandae exercitationem quaerat neque ratione.
                Dignissimos, error hic voluptatem ullam labore maiores maxime
                tenetur molestias accusamus magnam, numquam est et
                necessitatibus dolorem.
              </p>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
                rerum aliquam molestias animi illo nisi, vero vitae sint
                delectus sequi odit, possimus quasi dolor harum sed excepturi
                impedit magni mollitia, quidem accusamus ducimus suscipit quia
                ea. Quo aperiam iure cupiditate!
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
