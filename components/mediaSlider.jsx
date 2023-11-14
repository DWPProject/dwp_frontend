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
        slidesPerView={6}
        navigation
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`w-48 h-48 border border-gray-200 rounded cursor-pointer ${
                selectedCard === index ? "border-blue-500" : ""
              }`}
              onClick={() => handleCardClick(index)}
            >
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-32 object-cover rounded"
              />
              <h3 className="text-base font-semibold mt-2">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedCard !== null && (
        <div className="mt-4">
          <h3 className="text-2xl font-semibold">{data[selectedCard].title}</h3>
          <Image
            src={data[selectedCard].image}
            alt={data[selectedCard].title}
            className="w-1/2 h-1/2 object-cover rounded mt-2"
          />
          <p className="text-gray-500">{data[selectedCard].description}</p>
        </div>
      )}
    </div>
  );
}
