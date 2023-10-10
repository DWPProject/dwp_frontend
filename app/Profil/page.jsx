"use client";
const { default: Navbar } = require("../components/Navbar");
import { Swiper, SwiperSlide } from "swiper/react";
import "Swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import Style from "../Profil/page.module.css";
import Footer from "../components/Footer";
const Profil = () => {
  return (
    <>
      <div className={Style.containerProfile}>
        <div className={Style.sejarah}>
          <h1 className="text-3xl">Sejarah DWP ITERA</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            odit doloribus exercitationem sequi optio. Iusto rem, eius
            temporibus eligendi quia maiores neque ipsum in. Et optio quis saepe
            soluta impedit. Ad accusamus cupiditate rem provident quae, ea sit.
            Porro itaque perspiciatis quidem explicabo incidunt fugit, accusamus
            doloremque qui aliquam ipsam soluta! Mollitia, sint amet cum quidem
            excepturi at iure unde.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias,
            voluptates maiores sit nulla natus iusto quos numquam sint
            repudiandae exercitationem quaerat neque ratione. Dignissimos, error
            hic voluptatem ullam labore maiores maxime tenetur molestias
            accusamus magnam, numquam est et necessitatibus dolorem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ea
            impedit libero placeat, laborum aliquid sunt nemo expedita quasi
            voluptates.
          </p>
        </div>
        <div className={Style.pengurus}>
          <h1 className="text-3xl">Pengurus DWP ITERA</h1>
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}  
            modules={[Pagination]}
            className={Style.swiper}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profil;
