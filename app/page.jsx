"use client";
import Image from "next/image";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Jumbotron from "@/components/Jumbotron";
import Button from "@/components/elements/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import frame from "@/public/images/frame.png";
import frame2 from "@/public/images/frame2.png";
import frame3 from "@/public/images/frame3.png";

export default function Home() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <div className="bg-gradient-to-r from-white to-[#FFCEA0] text-black pl-4 pr-4 sm:pl-8 sm:pr-8">
        <div className="p-2 lg:p-4 lg:w-1/2 container ">
          <h3 className="text-lg sm:text-xl md:text-2xl">Apa Itu DWP</h3>
          <h1 className="text-xl sm:text-3xl mt-2 sm:mt-4">
            Dharma Wanita Persatuan <br />
            Institut Teknologi Sumatera
          </h1>
          <p className="mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            perferendis, consectetur deserunt quasi eligendi, tempora velit
            fugiat vel magnam voluptatum aspernatur? Consectetur fugit delectus
            omnis temporibus fuga optio provident dolor dignissimos enim
            nesciunt nemo maiores cupiditate, necessitatibus tenetur sed!
            Possimus delectus consequuntur quasi facere nemo ipsum expedita
            velit recusandae fugit, ex minus mollitia atque odio hic, molestiae
            accusantium rerum animi esse vitae sed. Ex neque eos obcaecati velit
            repudiandae, minima ducimus. Culpa a iste at maxime cupiditate
            voluptatibus asperiores impedit!
          </p>
          <a href="#">
            <Button
              name="Visi dan Misi DWP"
              className="btn mt-4 capitalize bg-[#FFCEA0]"
            />
          </a>
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
                slidesPerView: 3,
                spaceBetween: 8,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 4,
              },
            }}
          >
            <SwiperSlide className="slideSwiper">
              <Image
                src={frame2}
                alt="#"
                className=" w-80 h-64 md:h-48 lg:h-64  mx-auto rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide className="slideSwiper">
              <Image
                src={frame3}
                alt="#"
                className=" w-80 h-64 md:h-48 lg:h-64  mx-auto rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide className="slideSwiper">
              <Image
                src={frame2}
                alt="#"
                className=" w-80 h-64 md:h-48 lg:h-64  mx-auto rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide className="slideSwiper">
              <Image
                src={frame3}
                alt="#"
                className=" w-80 h-64 md:h-48 lg:h-64  mx-auto rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide className="slideSwiper">
              <Image
                src={frame2}
                alt="#"
                className=" w-80 h-64 md:h-48 lg:h-64  mx-auto rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide className="slideSwiper">
              <Image
                src={frame3}
                alt="#"
                className=" w-80 h-64 md:h-48 lg:h-64  mx-auto rounded-lg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <Footer />
    </>
  );
}
