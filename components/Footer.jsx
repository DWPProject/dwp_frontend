import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="footer p-10 bg-gradient-to-r from-gray-500 to-[#FFCEA0] text-white">
        <div>
          <Image height={70} width={70} src="/logo.svg" alt="Logo" />
        </div>
        <div className="w-1/2 ">
          <p>
            Jalan Terusan Ryacudu, Desa Way Hui, Kecamatan Jatiagung, Lampung
            Selatan 35365
          </p>
          <p>Hubungi kami: +62 8XXXXXXX</p>
          <p>Email: iteradwp@contohemail.com</p>
          <Link
            href="https://instagram.com/dharmawanitapersatuan.id?igshid=OGQ5ZDc2ODk2ZA=="
            target="_blank"
          >
            <FaInstagram size={30} />
          </Link>
        </div>
        <div>
          <h2>Kebijakan Perusahaan</h2>
          <Link
            href="https://dharmawanitapersatuan.id/kebijakan-privasi/"
            target="_blank"
          >
            Kebijakan Privasi{" "}
          </Link>
          <Link
            href="https://dharmawanitapersatuan.id/syarat-dan-ketentuan/"
            target="_blank"
          >
            Syarat dan Ketentuan{" "}
          </Link>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-gradient-to-r from-gray-500 to-gray-900 text-white border-base-300">
        <aside className="items-center grid-flow-col">
          &copy; 2023 Dharma Wanita Persatuan ITERA
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <small>Website by Lulus Tepat Waktu</small>
        </nav>
      </footer>
    </>
  );
}
