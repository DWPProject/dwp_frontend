"use client";

import Image from "next/image";
import React, { useState } from "react";
import Pengurus from "../../public/Images/pengurus.png";
const AkunUser = () => {
  const [formData, setFormData] = useState({
    nama: "",
    password: "",
    konfirmasiPassword: "",
    nomorHp: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
      <div className="formUpdate lg:mr-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nama" className="block font-semibold mb-2">
              Nama Baru
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-semibold mb-2">
              Password Baru
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="konfirmasiPassword"
              className="block font-semibold mb-2"
            >
              Konfirmasi Password
            </label>
            <input
              type="password"
              id="konfirmasiPassword"
              name="konfirmasiPassword"
              value={formData.konfirmasiPassword}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="nomorHp" className="block font-semibold mb-2">
              Nomor HP Baru
            </label>
            <input
              type="text"
              id="nomorHp"
              name="nomorHp"
              value={formData.nomorHp}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>
          <button type="submit" className="btn btn-neutral text-white w-full">
            Simpan Perubahan
          </button>
        </form>
      </div>
      <div className="text-center">
        <h2 className="mb-4">Ganti Foto Profil</h2>
        <Image
          src={Pengurus}
          alt="Foto Profil"
          className="rounded-full mx-auto h-24 w-24 mb-4"
        />
        <button className="btn btn-neutral text-white w-full">
          Unggah Foto
        </button>
      </div>
    </div>
  );
};

export default AkunUser;
