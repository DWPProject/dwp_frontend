import Link from "next/link";
import Logo from "../../public/Images/logo.png"
import Logo1 from "../../public/Images/logo.svg"
import Image from "next/image";
const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 bg-[#D9D9D9]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="#">Beranda</Link>
              </li>
              <li>
                <Link href="#">Profil </Link>
              </li>
              <li>
                <Link href="#">Layanan</Link>
              </li>
              <li>
                <Link href="#">Media</Link>
              </li>
              <li>
                <Link href="#">Kontak</Link>
              </li>
              <li>
                <Link href="#">Login/Daftar</Link>
              </li>
            </ul>
          </div>
          
          <Image
          height={50}
          width={50}
            src={Logo1} 
            alt="Logo"
          />
        </div>
        <div className="navbar-center hidden lg:flex bg-[#D9D9D9] rounded ">
          <ul className="menu menu-horizontal px-1 pr-4 pl-4 text-black">
            <li className="mr-8 ml-8">
              <Link href="#">Beranda</Link>
            </li>
            <li className="mr-8 ml-8">
              <Link href="#">Profil </Link>
            </li>
            <li className="mr-8 ml-8">
              <Link href="#">Layanan</Link>
            </li>
            <li className="mr-8 ml-8">
              <Link href="#">Media</Link>
            </li>
            <li className="mr-8 ml-8">
              <Link href="#">Kontak</Link>
            </li>
            <li className="mr-8 ml-8">
              <Link href="#">Login/Daftar</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle bg-[#D9D9D9]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
