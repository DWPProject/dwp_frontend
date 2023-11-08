import {
  BsFillCartFill,
  BsStack,
  BsFillPeopleFill,
  BsFillCreditCardFill,
  BsBoxFill,
  BsFilterSquareFill,
} from "react-icons/bs";

export const MENU_ITEMS = [
  {
    id: 1,
    name: "Dashboard",
    link: "/dashboard/admin",
    icon: <BsStack />,
  },
  {
    id: 2,
    name: "Data Penjual dan Anggota",
    link: "/dashboard/admin/data",
    icon: <BsFillPeopleFill />,
  },
  {
    id: 3,
    name: "Kelola Produk",
    link: "/dashboard/admin/produk",
    icon: <BsBoxFill />,
  },
  {
    id: 4,
    name: "Kelola Pesanan",
    link: "/dashboard/admin/pesanan",
    icon: <BsFillCartFill />,
  },
  {
    id: 5,
    name: "Kelola Konten",
    link: "/dashboard/admin/konten",
    icon: <BsFilterSquareFill />,
  },
  {
    id: 6,
    name: "Laporan Penjualan",
    link: "/dashboard/admin/laporan",
    icon: <BsFillCreditCardFill />,
  },
];
