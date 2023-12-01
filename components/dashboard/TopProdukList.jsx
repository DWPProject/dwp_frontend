import Image from "next/image";

export default function TopProdukList({ topProdukData }) {
  return (
    <>
      {topProdukData.map((produk) => (
        <div
          className="flex justify-between items-center text-center pt-5"
          key={produk.product_id}
        >
          <div className="flex gap-5">
            <Image
              src={produk.product_foto}
              alt="Produk Teratas"
              width={50}
              height={50}
            />
            <div className="flex flex-col">
              <h1 className="font-semibold">{produk.product_nama}</h1>
              <p>{produk.terjual} Orders</p>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold">Inventory</h1>
            <p>{produk.product_stok}</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold">Terjual</h1>
            <p>{produk.terjual}</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold">Price</h1>
            <p>Rp. {produk.product_harga}</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold">Today</h1>
            <p>Rp. {produk.total}</p>
          </div>
        </div>
      ))}
    </>
  );
}
