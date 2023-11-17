import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Style from "./component.module.css";
import frame from "@/public/images/frame.png";
import frame2 from "@/public/images/frame2.png";
import frame3 from "@/public/images/frame3.png";

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
          <Image src={frame} alt="#" className="h-64" />
        </SwiperSlide>
        <SwiperSlide className={Style.swiperSlide}>
          <Image src={frame2} alt="#" className="h-64" />
        </SwiperSlide>
        <SwiperSlide className={Style.swiperSlide}>
          <Image src={frame3} alt="#" className="h-64" />
        </SwiperSlide>
        <SwiperSlide className={Style.swiperSlide}>
          <Image src={frame2} alt="#" className="h-64" />
        </SwiperSlide>
        <SwiperSlide className={Style.swiperSlide}>
          <Image src={frame} alt="#" className="h-64" />
        </SwiperSlide>
        <SwiperSlide className={Style.swiperSlide}>
          <Image src={frame2} alt="#" className="h-64" />
        </SwiperSlide>
        <SwiperSlide className={Style.swiperSlide}>
          <Image src={frame} alt="#" className="h-64" />
        </SwiperSlide>
        <SwiperSlide className={Style.swiperSlide}>
          <Image src={frame2} alt="#" className="h-64" />
        </SwiperSlide>
        <SwiperSlide className={Style.swiperSlide}>
          <Image src={frame} alt="#" className="h-64" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
