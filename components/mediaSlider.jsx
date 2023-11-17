"use client";
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
            slidesPerView: 2,
          },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`w-80 sm:w-80 md:w-80 lg:w-80 h-48 md:h-64 lg:h-80 rounded cursor-pointer mr-4 md:container lg:container ${
                selectedCard === index ? "border-blue-500" : ""
              }`}
              onClick={() => handleCardClick(index)}
            >
              <Image
                src={item.image}
                alt={item.title}
                className="w-64 h-40 md:h-40 lg:h-40 object-cover rounded"
                height={160}
                width={256}
              />
              <h3 className="text-base font-semibold mt-2">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedCard !== null && (
        <div className=" md:container lg:container">
          <h3 className="text-2xl font-semibold">{data[selectedCard].title}</h3>
          <div className="flex flex-wrap">
            <Image
              src={data[selectedCard].image}
              alt={data[selectedCard].title}
              className="md:h-96 lg:h-96 object-cover rounded mt-2"
              height={384}
              width={384}
            />
            <p className="text-gray-500">{data[selectedCard].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
