import { useState } from "react";
import Image from "next/image";

import { FiEdit } from "react-icons/fi";
import { BsPlusLg, BsTrashFill } from "react-icons/bs";
import Swal from "sweetalert2";
import { v4 as uuid } from "uuid";

const TABLE_HEAD_BANK_PRODUK = [
  "ID Produk",
  "Nama Produk",
  "Nama Toko",
  "Harga",
  "Stok",
  "Action",
];

const TABLE_HEAD_PRODUK_JUAL = [
  "ID Produk",
  "Nama Produk",
  "Nama Toko",
  "Harga",
  "Stok",
  "Action",
];

const ProdukBarang = () => {
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    id_produk: "",
    nama_produk: "",
    harga: 0,
    stok: 0,
  });
  const [toko, setToko] = useState("DEFAULT");
  const [fotoProduk, setFotoProduk] = useState(null);
  const [bankProduk, setBankProduk] = useState([
    {
      id_produk: "#0001",
      nama_produk: "Baju Koko",
      nama_toko: "Toko ABC",
      harga: 10000,
      stok: 20,
    },
    {
      id_produk: "#0002",
      nama_produk: "Kotak Pensil",
      nama_toko: "Toko ABC",
      harga: 5000,
      stok: 15,
    },
  ]);
  const [produkJual, setProdukJual] = useState([]);

  const onSubmitHandleAdd = (e) => {
    e.preventDefault();
    setBankProduk([
      ...bankProduk,
      {
        id_produk: uuid(),
        nama_produk: formData.nama_produk,
        harga: formData.harga,
        stok: formData.stok,
      },
    ]);

    setFormData({
      id_produk: "",
      nama_produk: "",
      nama_toko: "",
      harga: 0,
      stok: 0,
    });
    setShowForm(false);
  };

  const onHandleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const onHandleJual = (product) => {
    setProdukJual([...produkJual, product]);
    setBankProduk(
      bankProduk.filter((item) => item.id_produk !== product.id_produk)
    );
  };

  const onHandleNotJual = (product) => {
    setBankProduk([...bankProduk, product]);
    setProdukJual(
      produkJual.filter((item) => item.id_produk !== product.id_produk)
    );
  };

  return (
    <>
      {showForm ? (
        <div className="flex flex-col justify-center items-center mt-5 pb-10">
          <h1 className="text-3xl font-bold mb-5">Form Data Produk Barang</h1>
          <div className="flex flex-col bg-white p-10 rounded-xl  divide-y">
            <div className="">
              <h1 className="text-2xl font-bold mb-5">Produk Barang</h1>
              <p>Isi data produk dengan benar</p>
            </div>
            <form
              action=""
              className="flex flex-col pt-5"
              onSubmit={onSubmitHandleAdd}
            >
              <div className="flex justify-between ">
                <div className="flex flex-col">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="nama-produk"
                    >
                      Nama Produk
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="nama-produk"
                      type="text"
                      placeholder="Nama Produk Anda..."
                    />
                  </div>
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="nama-toko"
                    >
                      Nama Toko
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="nama-toko"
                      type="text"
                      placeholder="Nama Toko Penjual..."
                    />
                  </div>
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="harga"
                    >
                      Harga
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="harga"
                      type="number"
                      placeholder="Harga Produk Anda..."
                    />
                  </div>
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="stok"
                    >
                      Stok
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="stok"
                      type="number"
                      placeholder="Stok Produk Anda..."
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="toko"
                    >
                      Toko
                    </label>
                    <select
                      className="select select-bordered"
                      value={toko}
                      onChange={(e) => setToko(e.target.value)}
                      id="toko"
                    >
                      <option value={"DEFAULT"} disabled>
                        Pilih Toko
                      </option>
                      <option value={"Toko ABC"}>Toko ABC</option>
                      <option value={"Toko XYZ"}>Toko XYZ</option>
                    </select>
                  </div>
                  <div className="px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="avatar-anggota"
                    >
                      Avatar
                    </label>
                    <input className="" id="avatar-anggota" type="file" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-3 mt-5">
                <button
                  type="submit"
                  className="rounded-xl bg-orange-500 text-white font-bold px-3 py-2"
                >
                  Tambah Produk
                </button>
                <button
                  className="rounded-xl bg-black text-white font-bold px-3 py-2"
                  onClick={() => setShowForm(false)}
                >
                  Batalkan
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <>
          <div className="bg-white m-5 rounded-lg">
            <div className="flex justify-between p-8 ">
              <h1 className="text-start font-bold text-3xl">
                Bank Produk Barang
              </h1>
              <button
                className="btn text-gray-500 bg-[#FDE9CC] hover:bg-[#E0924A] hover:text-white"
                type="button"
                onClick={() => setShowForm(!showForm)}
              >
                <BsPlusLg size={20} />
                <span>Tambah Produk</span>
              </button>
            </div>
            <div className="overflow-x-auto h-fit pb-5 scrollbar-hide">
              <table className="table table-pin-rows">
                {/* head */}
                <thead className="font-bold text-black">
                  <tr>
                    {TABLE_HEAD_BANK_PRODUK.map((head) => (
                      <th key={head}>{head}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {bankProduk.map(
                    ({ id_produk, nama_produk, nama_toko, harga, stok }) => (
                      <tr key={id_produk}>
                        <td>{id_produk}</td>
                        <td>
                          <div className="flex gap-2 items-center">
                            <Image
                              src="/images/example_product2.png"
                              alt="Produk1"
                              width={50}
                              height={50}
                            />
                            {nama_produk}
                          </div>
                        </td>
                        <td>{nama_toko}</td>
                        <td>Rp. {harga}</td>
                        <td>{stok}</td>
                        <td>
                          <div className="flex gap-3">
                            <button
                              className="text-[#624DE3]"
                              onClick={() => setShowModal(true)}
                            >
                              <FiEdit size={20} />
                            </button>
                            <button
                              className="text-[#A30D11]"
                              onClick={onHandleDelete}
                            >
                              <BsTrashFill size={20} />
                            </button>
                            <button
                              className="py-2 px-3 bg-red-500 text-white rounded-lg"
                              type="button"
                              onClick={() =>
                                onHandleJual({
                                  id_produk,
                                  nama_produk,
                                  nama_toko,
                                  harga,
                                  stok,
                                })
                              }
                            >
                              <p className="font-bold text-center">Sell</p>
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white m-5 rounded-lg">
            <h1 className="text-start font-bold text-3xl p-8">
              Produk Jual Barang
            </h1>
            <div className="overflow-x-auto h-fit pb-5 scrollbar-hide">
              <table className="table table-pin-rows">
                {/* head */}
                <thead className="font-bold text-black">
                  <tr>
                    {TABLE_HEAD_PRODUK_JUAL.map((head) => (
                      <th key={head}>{head}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {produkJual.map(
                    ({ id_produk, nama_produk, nama_toko, harga, stok }) => (
                      <tr key={id_produk}>
                        <td>{id_produk}</td>
                        <td>
                          <div className="flex gap-2 items-center">
                            <Image
                              src="/images/example_product.png"
                              alt="Produk1"
                              width={50}
                              height={50}
                            />
                            {nama_produk}
                          </div>
                        </td>
                        <td>{nama_toko}</td>
                        <td>Rp. {harga}</td>
                        <td>{stok}</td>
                        <td>
                          <button
                            className="py-2 px-3 bg-red-500 text-white rounded-lg"
                            type="button"
                            onClick={() =>
                              onHandleNotJual({
                                id_produk,
                                nama_produk,
                                nama_toko,
                                harga,
                                stok,
                              })
                            }
                          >
                            <p className="font-bold text-center">Not Sell</p>
                          </button>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex flex-col justify-center items-start px-5 pt-5 pb-2 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-bold pb-2">
                    Form Edit Produk Barang
                  </h3>
                  <p>Update Produk Barang dengan teliti</p>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form action="" className="flex flex-col pt-5">
                    <div className="flex justify-between ">
                      <div className="flex flex-col">
                        <div className="w-full px-3">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="nama-produk"
                          >
                            Nama Produk
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="nama-produk"
                            type="text"
                            placeholder="Nama Produk Anda..."
                          />
                        </div>
                        <div className="w-full px-3">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="nama-toko"
                          >
                            Nama Toko
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="nama-toko"
                            type="text"
                            placeholder="Nama Toko Penjual..."
                          />
                        </div>
                        <div className="w-full px-3">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="harga"
                          >
                            Harga
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="harga"
                            type="number"
                            placeholder="Harga Produk Anda..."
                          />
                        </div>
                        <div className="w-full px-3">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="stok"
                          >
                            Stok
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="stok"
                            type="number"
                            placeholder="Stok Produk Anda..."
                          />
                        </div>
                      </div>
                      <div className="px-3">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="avatar-anggota"
                        >
                          Avatar
                        </label>
                        <input className="" id="avatar-anggota" type="file" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3 mt-5">
                      <button
                        type="submit"
                        className="rounded-xl bg-orange-500 text-white font-bold px-3 py-2"
                      >
                        Tambah Produk
                      </button>
                      <button
                        type="button"
                        className="rounded-xl bg-black text-white font-bold px-3 py-2"
                        onClick={() => setShowModal(false)}
                      >
                        Batalkan
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default ProdukBarang;
