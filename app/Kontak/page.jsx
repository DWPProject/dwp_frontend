import Footer from "../components/Footer";

const Kontak = () => {
  return (
    <div className="containerKontak p-4">
      <h1 className="font-bold text-3xl lg:m-4 mt-4">Hubungi Kami</h1>
      <div className="flex flex-col md:flex-row justify-between mt-4 lg:m-8 lg:p-4">
        <div className="w-full md:w-1/2 md:pr-4">
          <form action="" className="mb-4">
            <label htmlFor="nama">Nama Lengkap</label>
            <input
              type="text"
              id="nama"
              name="nama"
              className="w-full p-3 mb-4 bg-[#D9D9D9] rounded"
              placeholder="Nama Lengkap"
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 mb-4 bg-[#D9D9D9] rounded"
              placeholder="Email anda"
            />
            <label htmlFor="subjek">Subjek</label>
            <input
              type="text"
              id="subjek"
              name="subjek"
              className="w-full p-3 bg-[#D9D9D9] rounded"
              placeholder="Kerja Sama / Feedback"
            />
          </form>
        </div>
        <div className="w-full md:w-1/2">
          <label htmlFor="pesan">Pesan</label>
          <textarea
            name="pesan"
            id="pesan"
            cols="30"
            rows="10"
            className="w-full p-3 bg-[#D9D9D9] rounded"
            placeholder="Tulis pesan Anda di sini"
          ></textarea>
        </div>
      </div>
      <div className="flex justify-start w-full mt-4 mb-4 items-start sm:items-end sm:justify-end">
        
      <button
        className="bg-[#D9D9D9] text-black font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
        type="submit"
      >
        Kirim
      </button>
      </div>
      <Footer />
    </div>
  );
};

export default Kontak;
