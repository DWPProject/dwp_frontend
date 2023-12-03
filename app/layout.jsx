import "./globals.css";
import { Kumbh_Sans } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const kumbh_sans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "DWP ITERA",
  description: "Website for Organization DWP ITERA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-hidden overflow-y-auto">
      <body className={kumbh_sans.className}>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
