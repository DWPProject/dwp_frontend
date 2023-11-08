import "./globals.css";
import { Kumbh_Sans } from "next/font/google";

import Navbar from "../app/components/Navbar";

const kumbh_sans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "DWP",
  description: "Dharma Wanita Persatuan",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={kumbh_sans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
