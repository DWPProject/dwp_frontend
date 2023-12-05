import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import {
  getUserFromLocalStorage,
  clearLocalStorage,
} from "@/utils/localStorage";

import { BsPersonFill } from "react-icons/bs";
import { MENU_ITEMS_USER } from "@/constant/menu";
import profile from "@/public/images/empty_profile.png";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const user = getUserFromLocalStorage();
  const role = user?.length > 0 ? user[0].level : "";
  const isLogin = user?.length > 0 ? true : false;

  const onHandleLogout = () => {
    clearLocalStorage();
    router.push("/auth/login");
  };

  return (
    <>
      <div className="md:container sm:container p-3">
        <div className="navbar">
          <div className="navbar-start pl-5">
            <Link href="/">
              <Image height={65} width={65} src="/logo.svg" alt="Logo" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex bg-[#FFCEA0] rounded-lg px-8">
            <ul className="menu menu-horizontal text-black">
              {MENU_ITEMS_USER.map((item) => (
                <li
                  key={item.name}
                  className={`px-8 ${
                    pathname === item.link ? "bg-orange-300 rounded-lg" : ""
                  }`}
                >
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar-end flex items-center gap-5">
            {!isLogin ? (
              <div className="bg-[#FBBA74] py-2 px-5 rounded-lg">
                <Link
                  href={"/auth/login"}
                  className="flex gap-3 justify-center items-center"
                >
                  <BsPersonFill size={20} />
                  <span>Login</span>
                </Link>
              </div>
            ) : (
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar bg-[#FFCEA0]"
                  suppressHydrationWarning={true}
                >
                  <Image
                    src={profile}
                    alt="profile"
                    className="w-10 rounded-full"
                  />
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[10] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  {role === "user" && (
                    <li>
                      <Link href="/dashboard/user/profile">Profil</Link>
                      <Link href="/dashboard/user/pesanan">
                        Riwayat Pesanan
                      </Link>
                      <button onClick={onHandleLogout}>Logout</button>
                    </li>
                  )}
                  {role === "admin" && (
                    <li>
                      <Link href="/dashboard/admin">Dashboard</Link>
                      <button onClick={onHandleLogout}>Logout</button>
                    </li>
                  )}
                  {role === "penjual" && (
                    <li>
                      <Link href="/dashboard/penjual">Dashboard</Link>
                      <button onClick={onHandleLogout}>Logout</button>
                    </li>
                  )}
                </ul>
              </div>
            )}
            <section className="MOBILE-MENU flex lg:hidden">
              <div
                className="HAMBURGER-ICON space-y-2"
                onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
              >
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              </div>

              <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                {" "}
                <div
                  className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                  onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                >
                  <svg
                    className="h-8 w-8 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                  {MENU_ITEMS_USER.map((item) => (
                    <li
                      key={item.name}
                      className="border-b border-gray-400 my-8 uppercase"
                    >
                      <Link href={item.link}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </>
  );
}
