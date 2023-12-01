"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

import { AiTwotoneEdit, AiTwotoneSave } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

import pengurus from "@/public/images/example_pengurus.png";

import Navbar from "@/components/Navbar";

import { getUserFromLocalStorage } from "@/utils/localStorage";
import { getProfileUser } from "@/services/auth";

const Profil = () => {
  const [editMode, setEditMode] = useState(false);
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [telepon, setTelepon] = useState("");
  const fileInputRef = useRef(null);
  const [userId, setUserId] = useState("");

  const fetchData = async (userId) => {
    const data_user = await getProfileUser(userId);
    if (data_user.data !== null) {
      setNama(data_user.data.username);
      setEmail(data_user.data.email);
      setTelepon(data_user.data.telepon);
    }
  };

  useEffect(() => {
    const user = getUserFromLocalStorage();
    if (user.length > 0) {
      setUserId(user[0].id);
    } else {
      setUserId("");
    }
    fetchData(userId);
  }, [userId]);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    setEditMode(false);
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

  const handleEditPhotoClick = () => {
    // Trigger the file input click when edit photo icon is clicked
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    // Handle file change logic here (e.g., upload the file)
    console.log("File changed:", e.target.files[0]);
  };

  return (
    <>
      <Navbar />
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
                  <p className="text-lg ">{telepon}</p>
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
            <div className="mr-4 relative">
              <Image
                src={pengurus}
                alt="Foto Profil"
                className="rounded-full"
              />
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <FiEdit
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-3xl bg-gray-500 text-white cursor-pointer"
                onClick={handleEditPhotoClick}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profil;
