import { useState } from "react";
import { useRouter } from "next/navigation";

import { login } from "@/services/auth";
import { parseJwt } from "@/utils/parseJwt";
import {
  setUserToLocasStorage,
  setTokenToLocalStorage,
} from "@/utils/localStorage";

import { toast } from "react-toastify";

export default function Login({ onClick }) {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onSubmitHandle = async (e) => {
    e.preventDefault();
    const data = await login(formData);

    if (data.accessToken) {
      const user_data = parseJwt(data.accessToken);
      const user_role = user_data.level;
      const notify = () => {
        toast("Login Berhasil", { type: "success", autoClose: 2000 });
      };
      notify();
      setTokenToLocalStorage(data.accessToken);
      setUserToLocasStorage(user_data);
      setFormData({
        email: "",
        password: "",
      });
      if (user_role === "admin") {
        router.push("/dashboard/admin");
      } else if (user_role === "penjual") {
        router.push("/dashboard/penjual");
      } else {
        router.push("/dashboard/user/profile");
      }
    } else {
      setErrorMessage(data.message);
    }
  };

  return (
    <div>
      <h1 className="font-bold text-2xl">Masuk</h1>
      <p className={`${errorMessage ? "py-3" : ""} text-red-500 font-semibold`}>
        {errorMessage}
      </p>
      <form
        onSubmit={onSubmitHandle}
        encType="application/x-www-form-urlencoded"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-2"
            htmlFor="usernameOrEmail"
          >
            Alamat Email *
          </label>
          <input
            className="border rounded-lg px-3 py-2 w-full focus:outline-none "
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
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
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
            required
          />
        </div>
        <div>
          <small>
            Belum punya akun?{" "}
            <a
              onClick={onClick}
              className="hover:text-red-500 hover:underline-offset-1 uppercase"
            >
              Daftar sekarang
            </a>
          </small>
        </div>
        <button
          className="bg-[#FFCEA0] text-black font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue "
          type="submit"
        >
          Masuk
        </button>
      </form>
    </div>
  );
}