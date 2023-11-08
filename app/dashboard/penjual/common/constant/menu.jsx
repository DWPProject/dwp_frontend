import { BsFillCartFill, BsStack, BsFillCreditCardFill } from "react-icons/bs";

export const MENU_ITEMS = [
  {
    id: 1,
    name: "Dashboard",
    link: "/dashboard/penjual",
    icon: <BsStack />,
  },
  {
    id: 2,
    name: "Kelola Pesanan",
    link: "/dashboard/penjual/pesanan",
    icon: <BsFillCartFill />,
  },
  {
    id: 3,
    name: "Laporan Penjualan",
    link: "/dashboard/penjual/laporan",
    icon: <BsFillCreditCardFill />,
  },
];
