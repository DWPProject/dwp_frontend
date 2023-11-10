"use client";
import { useState } from "react";

import Navbar from "@/components/Navbar";

import Login from "./Login";
import Register from "./Register";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row justify-around p-8 ">
        <div className="w-full lg:w-2/5 mb-4 lg:mb-0">
          {isLogin ? (
            <Login onClick={toggleForm} />
          ) : (
            <Register onClick={toggleForm} />
          )}
        </div>
      </div>
    </>
  );
}
