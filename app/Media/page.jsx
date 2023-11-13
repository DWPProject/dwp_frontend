// pages/index.js

import MediaSlider from "./mediaSlider";
import Beritaimg from "../../public/Images/frame.png";
import Beritaimg2 from "../../public/Images/frame2.png";

const data = [
  {
    image: Beritaimg,
    title: "Judul Berita 1",
    description: "Deskripsi Berita 1",
  },
  {
    image: Beritaimg2,
    title: "Judul Berita 2",
    description: "Deskripsi Berita 2",
  },
  {
    image: Beritaimg,
    title: "Judul Berita 3",
    description: "Deskripsi Berita 3",
  },
  {
    image: Beritaimg,
    title: "Judul Berita 1",
    description: "Deskripsi Berita 1",
  },
  {
    image: Beritaimg2,
    title: "Judul Berita 2",
    description: "Deskripsi Berita 2",
  },
  {
    image: Beritaimg,
    title: "Judul Berita 3",
    description: "Deskripsi Berita 3",
  },
  {
    image: Beritaimg,
    title: "Judul Berita 1",
    description: "Deskripsi Berita 1",
  },
  {
    image: Beritaimg2,
    title: "Judul Berita 2",
    description: "Deskripsi Berita 2",
  },
  {
    image: Beritaimg,
    title: "Judul Berita 3",
    description: "Deskripsi Berita 3",
  },
];

const Media = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">
        Berita Dharma Wanita Persatuan ITERA
      </h1>
      <MediaSlider data={data} />
    </div>
  );
};

export default Media;
