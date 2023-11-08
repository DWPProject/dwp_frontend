import "./globals.css";
import { Kumbh_Sans } from "next/font/google";

const kumbh_sans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "DWP",
  description: "Dharma Wanita Persatuan",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="overflow-hidden">
      <body className={kumbh_sans.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
