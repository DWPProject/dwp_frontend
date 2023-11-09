"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Style from "../component.module.css";

export default function Jumbotron() {
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
        className={`rounded ${Style.mySwiper}`}
      >
        <SwiperSlide className={Style.swiperSlide}>
          <Image src="/images/frame.png" alt="#" width={100} height={100} />
        </SwiperSlide>
        <SwiperSlide className={Style.swiperSlide}>
          <Image src="/images/frame2.png" alt="#" width={100} height={100} />
        </SwiperSlide>
        <SwiperSlide className={Style.swiperSlide}>
          <Image src="/images/frame.png" alt="#" width={100} height={100} />
        </SwiperSlide>
        <SwiperSlide className={Style.swiperSlide}>
          <Image src="/images/frame2.png" alt="#" width={100} height={100} />
        </SwiperSlide>
        <SwiperSlide className={Style.swiperSlide}>
          <Image src="/images/frame.png" alt="#" width={100} height={100} />
        </SwiperSlide>
        <SwiperSlide className={Style.swiperSlide}>
          <Image src="/images/frame2.png" alt="#" width={100} height={100} />
        </SwiperSlide>
        <SwiperSlide className={Style.swiperSlide}>
          <Image src="/images/frame.png" alt="#" width={100} height={100} />
        </SwiperSlide>
        <SwiperSlide className={Style.swiperSlide}>
          <Image src="/images/frame2.png" alt="#" width={100} height={100} />
        </SwiperSlide>
        <SwiperSlide className={Style.swiperSlide}>
          <Image src="/images/frame.png" alt="#" width={100} height={100} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
