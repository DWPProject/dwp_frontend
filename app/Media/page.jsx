import Image from "next/image";
import Berita from "../../public/Images/frame3.png";
import Footer from "../components/Footer";

const Media = () => {
  return (
    <div className="p-4 border">
      <h1 className="font-bold text-3xl">Berita</h1>
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-y-23 gap-x-20 containerContent"
        style={{ gridTemplateColumns: "4.5fr 2fr" }}
      >
        <div className="detailBerita">
          <div className="w-full bg-white p-4 shadow-xl">
            <Image src={Berita} alt="Shoes" className="w-full" />
            <h2 className="text-xl font-bold mt-2">
              If a dog chews shoes whose shoes does he choose?
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perferendis consequatur sapiente dolorem! Accusantium placeat
              minus nisi voluptas repellat reiciendis harum nam pariatur
              expedita, tempore adipisci! Quidem, natus! Maxime deleniti minus,
              nulla earum, corporis quisquam distinctio consequatur officia
              fugit iure cupiditate in tempore quaerat veniam nostrum cumque
              quos velit ducimus sit aliquid illum adipisci at ratione libero!
              Obcaecati nobis velit, laborum iure repellendus, iste iusto
              voluptatum, accusantium odio molestias tempora in. Reprehenderit
              iure praesentium nulla voluptate quos, ducimus id adipisci cum
              quod velit ipsa animi facilis minima totam aperiam voluptas! Odit
              ut nam perferendis cum maiores voluptates soluta voluptatem
              sapiente sequi?
            </p>
          </div>
        </div>
        <div className="listBerita">
          {[1, 2, 3, 4, 5].map((index) => (
            <div key={index} className="w-96 bg-white p-4 shadow-xl">
              <figure>
                <Image src={Berita} alt="Shoes" width={350} height={200} />
              </figure>
              <div className="card-body">
                <h3 className="text-lg ">
                  Lorem ipsum dolor sit amet.Title Berita {index}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Media;
