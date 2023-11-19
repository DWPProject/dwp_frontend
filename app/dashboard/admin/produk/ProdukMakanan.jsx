import { useEffect, useState } from "react";
import Image from "next/image";

import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { FiEdit } from "react-icons/fi";
import { BsPlusLg, BsTrashFill } from "react-icons/bs";

import { getDataPenjual } from "@/services/admin/penjual";
import {
  getDataBankProduct,
  getDataSellProduct,
  createDataProduct,
  updateDataProduct,
  setProductToSell,
  setProductToNotSell,
  deleteProduct,
} from "@/services/admin/product";

const TABLE_HEAD = [
  "ID Produk",
  "Nama Produk",
  "Nama Toko",
  "Harga",
  "Stok",
  "Action",
];

const ProdukMakanan = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [editErrorMessage, setEditErrorMessage] = useState("");
  const [dataBankProduk, setDataBankProduk] = useState([]);
  const [dataProdukJual, setDataProdukJual] = useState([]);
  const [dataPenjual, setDataPenjual] = useState([]);
  const [dataEditProduct, setDataEditProduct] = useState({});
  const [formData, setFormData] = useState({
    nama: "",
    harga: 0,
    stok: 0,
    kategori: "makanan",
    foto: null,
    id_penjual: "",
  });
  const [toko, setToko] = useState("DEFAULT");
  const [fotoProduk, setFotoProduk] = useState(null);

  const fetchData = async () => {
    const data_penjual = await getDataPenjual();
    const data_bank_produk = await getDataBankProduct();
    const data_produk_jual = await getDataSellProduct();
    const data_bank_produk_makanan = data_bank_produk.data.filter(
      (item) => item.kategori === "makanan"
    );
    const data_produk_jual_makanan = data_produk_jual.data.filter(
      (item) => item.kategori === "makanan"
    );
    console.log(data_penjual);
    console.log(data_bank_produk);
    console.log(data_produk_jual);
    setDataPenjual([...data_penjual.payload]);
    setDataBankProduk([...data_bank_produk_makanan]);
    setDataProdukJual([...data_produk_jual_makanan]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmitHandleAdd = async (e) => {
    e.preventDefault();
    formData.foto = fotoProduk;
    formData.id_penjual = toko;

    setIsLoading(true);
    const idd = toast.loading("Create Data Product...");

    try {
      const data = await createDataProduct(formData);
      console.log(data);

      if (
        data.statusCode === 200 ||
        data.statusCode === 201 ||
        data.statusCode === 202
      ) {
        setIsLoading(false);
        toast.update(idd, {
          render: "All is good",
          type: "success",
          isLoading: isLoading,
          autoClose: 1000,
        });

        setFormData({
          nama: "",
          harga: 0,
          stok: 0,
          kategori: "makanan",
          foto: null,
          id_penjual: "",
        });
        fetchData();
        setToko("DEFAULT");
        setFotoProduk(null);
        setShowForm(false);
      } else {
        setIsLoading(false);
        toast.update(idd, {
          render: "Something went wrong",
          type: "error",
          isLoading: isLoading,
          autoClose: 1000,
        });

        if (data.error !== undefined) {
          setErrorMessage(data.error);
        } else {
          setErrorMessage(data.message);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitHandleEdit = async (event, id) => {
    event.preventDefault();
    dataEditProduct.foto = fotoProduk;

    setIsLoading(true);
    const idd = toast.loading("Update Data Product...");

    try {
      const data = await updateDataProduct(
        {
          nama: dataEditProduct.nama,
          harga: dataEditProduct.harga,
          kategori: "makanan",
          stok: dataEditProduct.stok,
        },
        id
      );
      console.log(data);

      if (
        data.statusCode === 200 ||
        data.statusCode === 201 ||
        data.statusCode === 202
      ) {
        setIsLoading(false);
        toast.update(idd, {
          render: "All is good",
          type: "success",
          isLoading: isLoading,
          autoClose: 1000,
        });

        fetchData();
        setDataEditProduct({});
        setFotoProduk(null);
        setShowModal(false);
      } else {
        setIsLoading(false);
        toast.update(idd, {
          render: "Something went wrong",
          type: "error",
          isLoading: isLoading,
          autoClose: 1000,
        });

        if (data.error !== undefined) {
          setEditErrorMessage(data.error);
        } else {
          setEditErrorMessage(data.message);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleEdit = (id) => {
    const data_bank_product = dataBankProduk.find((item) => item.id === id);
    setDataEditProduct({ ...data_bank_product });
    setShowModal(true);
  };

  const onHandleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const data = await deleteProduct(id);
          console.log(data);

          fetchData();
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  const onHandleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0];
      setFotoProduk(image);
    }
  };

  const onHandleJual = async (id) => {
    try {
      await setProductToSell(id);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleNotJual = async (id) => {
    try {
      await setProductToNotSell(id);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {showForm ? (
        <div className="flex flex-col justify-center items-center mt-5 pb-10">
          <h1 className="text-3xl font-bold mb-5">Form Data Produk Makanan</h1>
          <div className="flex flex-col bg-white p-10 rounded-xl  divide-y">
            <div className="">
              <h1 className="text-2xl font-bold mb-5">Produk Makanan</h1>
              <p>Isi data produk dengan benar</p>
              <p
                className={`${
                  errorMessage ? "py-3" : ""
                } text-red-500 font-semibold`}
              >
                {errorMessage}
              </p>
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
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          nama: e.target.value,
                        });
                      }}
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
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          harga: e.target.value,
                        });
                      }}
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
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          stok: e.target.value,
                        });
                      }}
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
                      {dataPenjual.map((item) => {
                        return (
                          <option key={item.id} value={item.id}>
                            {item.nama_toko}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="avatar-anggota"
                    >
                      Avatar
                    </label>
                    <input
                      className=""
                      id="avatar-anggota"
                      type="file"
                      onChange={onHandleImage}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-3 mt-5">
                <button
                  type="submit"
                  className="rounded-xl bg-orange-500 text-white font-bold px-3 py-2"
                  disabled={isLoading}
                >
                  Tambah Produk
                </button>
                <button
                  className="rounded-xl bg-black text-white font-bold px-3 py-2"
                  onClick={() => setShowForm(false)}
                  disabled={isLoading}
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
                Bank Produk Makanan
              </h1>
              <button
                className="btn text-gray-500 bg-[#FDE9CC] hover:bg-[#E0924A] hover:text-white"
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
                    {TABLE_HEAD.map((head) => (
                      <th key={head}>{head}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {dataBankProduk.map((bankProduct) => (
                    <tr key={bankProduct.id}>
                      <td>{bankProduct.id}</td>
                      <td>
                        <div className="flex gap-2 items-center">
                          <Image
                            src={bankProduct.foto}
                            alt="Produk1"
                            width={50}
                            height={50}
                          />
                          {bankProduct.nama}
                        </div>
                      </td>
                      <td>{bankProduct.user.nama_toko}</td>
                      <td>Rp. {bankProduct.harga}</td>
                      <td>{bankProduct.stok}</td>
                      <td>
                        <div className="flex gap-3">
                          <button
                            className="text-[#624DE3]"
                            onClick={() => onHandleEdit(bankProduct.id)}
                          >
                            <FiEdit size={20} />
                          </button>
                          <button
                            className="text-[#A30D11]"
                            onClick={() => onHandleDelete(bankProduct.id)}
                          >
                            <BsTrashFill size={20} />
                          </button>
                          <button
                            className="py-2 px-3 bg-red-500 text-white rounded-lg"
                            onClick={() => onHandleJual(bankProduct.id)}
                          >
                            <p className="font-bold text-center">Sell</p>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white m-5 rounded-lg">
            <h1 className="text-start font-bold text-3xl p-8">
              Produk Jual Makanan
            </h1>
            <div className="overflow-x-auto h-fit pb-5 scrollbar-hide">
              <table className="table table-pin-rows">
                {/* head */}
                <thead className="font-bold text-black">
                  <tr>
                    {TABLE_HEAD.map((head) => (
                      <th key={head}>{head}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {dataProdukJual.map((produkJual) => (
                    <tr key={produkJual.id}>
                      <td>{produkJual.id}</td>
                      <td>
                        <div className="flex gap-2 items-center">
                          <Image
                            src={produkJual.foto}
                            alt="Produk1"
                            width={50}
                            height={50}
                          />
                          {produkJual.nama}
                        </div>
                      </td>
                      <td>{produkJual.user.nama_toko}</td>
                      <td>Rp. {produkJual.harga}</td>
                      <td>{produkJual.stok}</td>
                      <td>
                        <button
                          className="py-2 px-3 bg-red-500 text-white rounded-lg"
                          onClick={() => onHandleNotJual(produkJual.id)}
                        >
                          <p className="font-bold text-center">Not Sell</p>
                        </button>
                      </td>
                    </tr>
                  ))}
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
                    Form Edit Produk Makanan
                  </h3>
                  <p>Update Produk Makanan dengan teliti</p>
                  <p
                    className={`${
                      editErrorMessage ? "py-3" : ""
                    } text-red-500 font-semibold`}
                  >
                    {editErrorMessage}
                  </p>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form
                    action=""
                    className="flex flex-col pt-5"
                    encType="multipart/form-data"
                    onSubmit={(event) =>
                      onSubmitHandleEdit(event, dataEditProduct.id)
                    }
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
                            value={dataEditProduct.nama}
                            onChange={(e) => {
                              setDataEditProduct({
                                ...dataEditProduct,
                                nama: e.target.value,
                              });
                            }}
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
                            value={dataEditProduct.harga}
                            onChange={(e) => {
                              setDataEditProduct({
                                ...dataEditProduct,
                                harga: e.target.value,
                              });
                            }}
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
                            value={dataEditProduct.stok}
                            onChange={(e) => {
                              setDataEditProduct({
                                ...dataEditProduct,
                                stok: e.target.value,
                              });
                            }}
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
                            value={dataEditProduct.user.id}
                            disabled
                            id="toko"
                          >
                            <option value={dataEditProduct.user.id}>
                              {dataEditProduct.user.nama_toko}
                            </option>
                          </select>
                        </div>
                        <div className="px-3">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="avatar-anggota"
                          >
                            Avatar
                          </label>
                          <input
                            className=""
                            id="avatar-anggota"
                            type="file"
                            onChange={onHandleImage}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3 mt-5">
                      <button
                        type="submit"
                        className="rounded-xl bg-orange-500 text-white font-bold px-3 py-2"
                        disabled={isLoading}
                      >
                        Edit Data Produk
                      </button>
                      <button
                        className="rounded-xl bg-black text-white font-bold px-3 py-2"
                        onClick={() => setShowModal(false)}
                        disabled={isLoading}
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

export default ProdukMakanan;
