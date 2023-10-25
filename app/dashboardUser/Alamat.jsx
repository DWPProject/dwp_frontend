const Alamat = () => {
  return (
    <div className="mt-8">
      <div className="  rounded-lg ">
        <h1 className="text-2xl font-bold mb-4">Alamat Pengiriman</h1>
        <p className="mb-4">
          Alamat ini akan digunakan secara default di halaman pengiriman.
        </p>
        <div className="mb-4">
          <input
            type="text"
            name="alamat"
            id="alamat"
            placeholder="Ubah alamat Anda"
            className="border p-2 rounded w-full"
          />
        </div>
        <button className="btn btn-neutral text-white ">Simpan</button>
      </div>
    </div>
  );
};

export default Alamat;
