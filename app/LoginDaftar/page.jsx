import React from "react";
import styles from "../LoginDaftar/LoginDaftar.module.css";

const LoginDaftar = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around p-8">
      <div className="w-full lg:w-2/5 mb-4 lg:mb-0">
        <h1 className="font-bold text-2xl">Masuk</h1>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="usernameOrEmail"
            >
              Nama Pengguna/Alamat Email *
            </label>
            <input
              className="border rounded-lg px-3 py-2 w-full focus:outline-none "
              type="text"
              id="usernameOrEmail"
              name="usernameOrEmail"
              placeholder="Nama Pengguna/Alamat Email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="password"
            >
              Kata Sandi *
            </label>
            <input
              className="border rounded-lg px-3 py-2 w-full focus:outline-none "
              type="password"
              id="password"
              name="password"
              placeholder="kata sandi"
              required
            />
          </div>
          <div className="flex justify-between">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                <input
                  className="mr-2 leading-tight"
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                />
                Ingatkan Saya
              </label>
            </div>
            <div className="mb-4">
              <a href="#" className="text-red-300 hover:underline">
                Lupa Kata Sandi?
              </a>
            </div>
          </div>
          <button
            className="bg-[#D9D9D9] text-black font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue "
            type="submit"
          >
            Masuk
          </button>
        </form>
      </div>
      <div className="w-full lg:w-2/5">
        <h1 className="font-bold text-2xl">Daftar</h1>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="registerUsername"
            >
              Nama Pengguna *
            </label>
            <input
              className="border rounded-lg px-3 py-2 w-full focus:outline-none "
              type="text"
              id="registerUsername"
              name="registerUsername"
              placeholder="Nama Pengguna"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="registerEmail"
            >
              Email *
            </label>
            <input
              className="border rounded-lg px-3 py-2 w-full focus:outline-none "
              type="email"
              id="registerEmail"
              name="registerEmail"
              placeholder="Alamat Email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="registerPassword"
            >
              Kata Sandi *
            </label>
            <input
              className="border rounded-lg px-3 py-2 w-full focus:outline-none "
              type="password"
              id="registerPassword"
              name="registerPassword"
              placeholder="Kata Sandi"
              required
            />
          </div>
          <p className="mb-4">
            Data pribadi akan digunakan untuk keperluan Anda di seluruh situs
            web ini, untuk mengelola akses ke akun Anda, dan untuk tujuan lain
            yang dijelaskan dalam kebijakan privasi kami.
          </p>
          <button
            className="bg-[#D9D9D9] text-black font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
            type="submit"
          >
            Daftar
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginDaftar;
