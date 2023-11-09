import "./globals.css";
import { Kumbh_Sans } from "next/font/google";

import Navbar from "./common/components/layouts/Navbar";

const kumbh_sans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Beranda | DWP",
  description: "Home Page for Website DWP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kumbh_sans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
