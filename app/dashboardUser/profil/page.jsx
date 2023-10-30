"use client";
import React, { useState } from "react";
import { AiTwotoneEdit, AiTwotoneSave } from "react-icons/ai";
import Image from "next/image";
import Pengurus from "../../../public/Images/pengurus.png";

const Profil = () => {
  const [editMode, setEditMode] = useState(false);
  const [nama, setNama] = useState("Basrunki Siburian");
  const [email, setEmail] = useState("basrunkisiburian@gmail.com");
  const [telepon, setTelepon] = useState("6709709707070");

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    setEditMode(false);
    // Simpan perubahan ke server atau database jika diperlukan
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "nama") {
      setNama(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "telepon") {
      setTelepon(value);
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <div className="bg-white  rounded-lg p-4">
        <h1 className="text-3xl font-bold mb-4">Profil Pembeli</h1>
        <div className="flex flex-col-reverse lg:flex-row lg:justify-around items-center mb-4">
          <div className="flex-1">
            <div className="mb-4">
              <label className="text-lg font-semibold">Nama</label>
              {editMode ? (
                <input
                  type="text"
                  name="nama"
                  value={nama}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded w-full"
                />
              ) : (
                <p className="text-lg ">{nama}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="text-lg font-semibold">Email</label>
              {editMode ? (
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded w-full"
                />
              ) : (
                <p className="text-lg">{email}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="text-lg font-semibold">Nomor Telepon</label>
              {editMode ? (
                <input
                  type="text"
                  name="telepon"
                  value={telepon}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded w-full"
                />
              ) : (
                <p className="text-lg " >{telepon}</p>
              )}
            </div>
            <div>
              {editMode ? (
                <button
                  onClick={handleSaveClick}
                  className="text-white bg-blue-500 hover:bg-blue-600 p-2 rounded"
                >
                  <AiTwotoneSave />
                </button>
              ) : (
                <button
                  onClick={handleEditClick}
                  className="text-blue-500 hover:underline p-2"
                >
                  <AiTwotoneEdit />
                </button>
              )}
            </div>
          </div>
          <div className="mr-4">
            <Image src={Pengurus} alt="Foto Profil" className="rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
