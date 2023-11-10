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
      <div className="bg-gradient-to-r from-white to-[#FFCEA0] text-black">
        <div className="p-8 lg:w-1/2">
          <h3 className="">Apa Itu DWP</h3>
          <h1 className="text-3xl mt-4">
            {" "}
            Dharma Wanita Persatuan <br />
            Institut Teknologi Sumatera
          </h1>
          <p className="mt-4">
            {" "}
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
      <div className="text-black bg-gradient-to-r from-[#FFCEA0] to-white">
        <div className="p-8">
          <h3 className="">Berita dan Artikel</h3>
          <h2 className="text-3xl mt-4 font-bold">Lihat yang Terbaru</h2>
          <Swiper
            slidesPerView={2}
            spaceBetween={67}
            pagination={{
              clickable: true,
            }}
            navigation={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="slide mt-4"
          >
            <SwiperSlide className="slideSwiper">
              <Image src={frame} alt="#" className="w-full" />
            </SwiperSlide>
            <SwiperSlide className="slideSwiper">
              <Image src={frame2} alt="#" className="w-full" />
            </SwiperSlide>
            <SwiperSlide className="slideSwiper">
              <Image src={frame3} alt="#" className="w-full" />
            </SwiperSlide>
            <SwiperSlide className="slideSwiper">
              <Image src={frame} alt="#" className="w-full" />
            </SwiperSlide>
            <SwiperSlide className="slideSwiper">
              <Image src={frame2} alt="#" className="w-full" />
            </SwiperSlide>
            <SwiperSlide className="slideSwiper">
              <Image src={frame3} alt="#" className="w-full" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <Footer />
    </>
  );
}
