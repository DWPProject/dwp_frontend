import React, { useState } from "react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

export default function MediaSlider({ data }) {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  return (
    <div>
      <Swiper
        spaceBetween={10}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 4,
          },
          640: {
            slidesPerView: 3,
          },
          320: {
            slidesPerView: 1,
          },
        }}
      >
        {data.length > 0 &&
          data.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div
                className={`w-80 sm:w-80 md:w-80 lg:w-80 h-48 md:h-64 lg:h-80 rounded cursor-pointer mr-4 ${
                  selectedCard === index ? "border-blue-500" : ""
                }`}
                onClick={() => handleCardClick(index)}
              >
                <div className="relative w-full h-64 md:h-48 lg:h-64 mx-auto rounded-lg overflow-hidden">
                  <Image
                    src={item.gambar}
                    alt={item.judul}
                    className="object-cover w-full h-full"
                    layout="fill"
                  />
                </div>
                <h3 className="text-base font-semibold mt-2">{item.judul}</h3>
                <p className="text-sm text-gray-500 mt-1">{item.deskripsi}</p>
              </div>
            </SwiperSlide>
          ))}
        {data.length <= 0 && (
          <h1 className="text-center">Belum Ada Konten DWP</h1>
        )}
      </Swiper>

      {selectedCard !== null && (
        <div className="mt-4">
          <h3 className="text-2xl font-semibold">{data[selectedCard].judul}</h3>
          <Image
            src={data[selectedCard].gambar}
            alt={data[selectedCard].judul}
            className="w-1/2 h-1/2 object-cover rounded mt-2"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
          <p className="text-black mt-5">{data[selectedCard].deskripsi}</p>
        </div>
      )}
    </div>
  );
}
