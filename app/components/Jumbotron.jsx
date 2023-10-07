"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import frame from "../../public/Images/frame.png"
import frame2 from "../../public/Images/frame2.png"
import Style from "./component.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
const Jumbotron = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={Style.mySwiper}
      >
        <SwiperSlide className={Style.swiperSlide}>
            <Image src={frame} alt="#"  />
        </SwiperSlide>
        <SwiperSlide className={Style.swiperSlide}>
            <Image src={frame2}/>
        </SwiperSlide>
        <SwiperSlide className={Style.swiperSlide}>
            <Image src={frame}/>
        </SwiperSlide>
        <SwiperSlide className={Style.swiperSlide}>
            <Image src={frame2}/>
        </SwiperSlide>
        <SwiperSlide className={Style.swiperSlide}>
            <Image src={frame}/>
        </SwiperSlide>
        <SwiperSlide className={Style.swiperSlide}>
            <Image src={frame2}/>
        </SwiperSlide>
        <SwiperSlide className={Style.swiperSlide}>
            <Image src={frame}/>
        </SwiperSlide>
        <SwiperSlide className={Style.swiperSlide}>
            <Image src={frame2}/>
        </SwiperSlide>
        <SwiperSlide className={Style.swiperSlide}>
            <Image src={frame}/>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Jumbotron;
