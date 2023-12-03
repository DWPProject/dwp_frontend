import {
  BsFillCartFill,
  BsStack,
  BsFillPeopleFill,
  BsFillCreditCardFill,
  BsBoxFill,
  BsFilterSquareFill,
} from "react-icons/bs";

export const MENU_ITEMS_ADMIN = [
  {
    name: "Dashboard",
    link: "/dashboard/admin",
    icon: <BsStack />,
  },
  {
    name: "Data Penjual dan Anggota",
    link: "/dashboard/admin/data",
    icon: <BsFillPeopleFill />,
  },
  {
    name: "Kelola Produk",
    link: "/dashboard/admin/produk",
    icon: <BsBoxFill />,
  },
  {
    name: "Kelola Pesanan",
    link: "/dashboard/admin/pesanan",
    icon: <BsFillCartFill />,
  },
  {
    name: "Kelola Konten",
    link: "/dashboard/admin/konten",
    icon: <BsFilterSquareFill />,
  },
  {
    name: "Laporan Penjualan",
    link: "/dashboard/admin/laporan",
    icon: <BsFillCreditCardFill />,
  },
];

export const MENU_ITEMS_PENJUAL = [
  {
    name: "Dashboard",
    link: "/dashboard/penjual",
    icon: <BsStack />,
  },
  {
    name: "Kelola Pesanan",
    link: "/dashboard/penjual/pesanan",
    icon: <BsFillCartFill />,
  },
  {
    name: "Laporan Penjualan",
    link: "/dashboard/penjual/laporan",
    icon: <BsFillCreditCardFill />,
  },
];

export const MENU_ITEMS_USER = [
  { name: "Beranda", link: "/" },
  { name: "Profil", link: "/profil" },
  { name: "Layanan", link: "/layanan" },
  { name: "Media", link: "/media" },
];
