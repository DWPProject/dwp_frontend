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
import pengurus from "@/public/images/example_pengurus.png";
import { PROFILE_DATA } from "@/constant/profile";

export default function Profil() {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-white to-[#FFCEA0]">
        <div className={`container mx-auto ${Style.containerProfile}`}>
          <div className={Style.sejarah}>
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
          <div className={Style.pengurus}>
            <h1 className="text-3xl">Pengurus DWP ITERA</h1>
            <Swiper
              slidesPerView={slidesPerView}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Pagination]}
              className={Style.swiper}
            >
              {PROFILE_DATA.map((data, index) => (
                <SwiperSlide className="flex p-4" key={index}>
                  <div className="card rounded p-4">
                    <figure>
                      <Image
                        src={pengurus}
                        alt={`${data.name}${data.jabatan}`}
                        className="rounded-full"
                      />
                    </figure>
                    <div className="card-body items-center">
                      <h2 className="card-title">{data.name}</h2>
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
