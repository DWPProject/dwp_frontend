// components/Card.js
import React from "react";
import produkImg from "../../public/Images/makan.png";
import Image from "next/image";

const Card = () => {
  return (
    <div className="max-w-sm mx-auto bg-white w-48 rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <Image src={produkImg} alt="oke" className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="px-2 py-2">
        <div className="font-bold text-xl mb-2 text-black">Kontol Bakar</div>
        <p className="text-gray-700 text-base">terbuat dari tepung</p>
      </div>
      <div className="">
        <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          1000000
        </span>
      </div>
      {/* ss */}
    </div>
  );
};

export default Card;
