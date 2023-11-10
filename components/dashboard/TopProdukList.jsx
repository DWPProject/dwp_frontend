import Image from "next/image";

const TopProdukList = ({ topProdukData }) => {
  return (
    <>
      {topProdukData.map((produk) => (
        <div
          className="flex justify-between items-center text-center pt-5"
          key={produk.id}
        >
          <div className="flex gap-2">
            <Image
              src="/images/produk1.png"
              alt="Produk Teratas"
              width={50}
              height={50}
            />
            <div className="flex flex-col">
              <h1 className="font-semibold">{produk.nama_produk}</h1>
              <p>{produk.detail_pesanan}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold">Inventory</h1>
            <p>{produk.stok_produk}</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold">Terjual</h1>
            <p>{produk.produk_terjual}</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold">Price</h1>
            <p>Rp. {produk.harga_produk}</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold">Today</h1>
            <p>Rp. {produk.total_penjualan}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopProdukList;
