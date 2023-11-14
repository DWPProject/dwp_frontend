import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MediaSlider from "@/components/mediaSlider";

import { MEDIA_DATA } from "@/constant/media";

export default function Media() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">
          Berita Dharma Wanita Persatuan ITERA
        </h1>
        <MediaSlider data={MEDIA_DATA} />
      </div>
      <Footer />
    </>
  );
}
