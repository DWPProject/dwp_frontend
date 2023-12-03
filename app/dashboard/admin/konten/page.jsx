"use client";
import { useEffect, useState } from "react";

import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { BsPlusLg, BsTrashFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

import PageHeading from "@/components/dashboard/PageHeading";

import {
  getDataKonten,
  createKonten,
  updateDataKonten,
  deleteDataKonten,
} from "@/services/admin/konten";

const TABLE_HEAD = [
  "ID Konten",
  "Judul Konten",
  "Penulis",
  "Kategori",
  "Tanggal",
  "Action",
];

const KelolaKonten = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [editErrorMessage, setEditErrorMessage] = useState("");
  const [dataKonten, setDataKonten] = useState([]);
  const [dataEditKonten, setDataEditKonten] = useState({});
  const [formDataKonten, setFormDataKonten] = useState({
    judul: "",
    penulis: "",
    kategori: "",
    deskripsi: "",
    gambar: null,
  });
  const [categories, setCategories] = useState("DEFAULT");
  const [categoriesEdit, setCategoriesEdit] = useState("DEFAULT");
  const [foto, setFoto] = useState(null);

  const fetchData = async () => {
    const data_konten = await getDataKonten();
    console.log(data_konten);
    setDataKonten([...data_konten.data]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmitHandleAdd = async (event) => {
    event.preventDefault();
    formDataKonten.gambar = foto;
    formDataKonten.kategori = categories;

    setIsLoading(true);
    const idd = toast.loading("Create Data Konten...");

    try {
      const data = await createKonten(formDataKonten);
      console.log(data);

      if (
        data.statusCode === 200 ||
        data.statusCode === 201 ||
        data.statusCode === 202
      ) {
        setIsLoading(false);
        toast.update(idd, {
          render: "Success Create Data Konten",
          type: "success",
          isLoading: isLoading,
          autoClose: 1000,
        });

        setFormDataKonten({
          judul: "",
          penulis: "",
          kategori: "",
          deskripsi: "",
          gambar: null,
        });
        fetchData();
        setCategories("DEFAULT");
        setFoto(null);
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
    dataEditKonten.gambar = foto;
    dataEditKonten.kategori = categoriesEdit;

    setIsLoading(true);
    const idd = toast.loading("Create Data Konten...");

    try {
      const data = await updateDataKonten(
        {
          judul: dataEditKonten.judul,
          penulis: dataEditKonten.penulis,
          kategori: dataEditKonten.kategori,
          deskripsi: dataEditKonten.deskripsi,
          gambar: dataEditKonten.gambar,
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
          render: "Success Update Data Konten",
          type: "success",
          isLoading: isLoading,
          autoClose: 1000,
        });

        setDataEditKonten({});
        fetchData();
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
    const data_konten = dataKonten.find((item) => item.id === id);
    setDataEditKonten({ ...data_konten });
    setCategoriesEdit(data_konten.kategori);
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
          const data = await deleteDataKonten(id);
          console.log(data);

          fetchData();
          Swal.fire(`Deleted`, "Success Deleted Data Product", "success");
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  const onHandleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0];
      setFoto(image);
    }
  };

  return (
    <>
      <PageHeading title="Kelola Konten" />
      {showForm ? (
        <div className="flex flex-col justify-center items-center mt-5 pb-10">
          <h1 className="text-3xl font-bold mb-5">Form Konten</h1>
          <div className="flex flex-col bg-white p-10 rounded-xl  divide-y">
            <div className="">
              <h1 className="text-2xl font-bold mb-5">Data Konten</h1>
              <p>Isi Data Konten dengan Benar</p>
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
              encType="multipart/form-data"
            >
              <div className="flex justify-between divide-x">
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <div className="w-full px-3">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="judul-konten"
                      >
                        Judul
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="judul-konten"
                        type="text"
                        placeholder="Masukkan Judul..."
                        onChange={(e) => {
                          setFormDataKonten({
                            ...formDataKonten,
                            judul: e.target.value,
                          });
                        }}
                        required
                      />
                    </div>
                    <div className="px-3">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="media-konten"
                      >
                        Upload Gambar
                      </label>
                      <input
                        className=""
                        id="media-konten"
                        type="file"
                        onChange={onHandleImage}
                      />
                    </div>
                  </div>
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="deskripsi-konten"
                    >
                      Konten
                    </label>
                    <textarea
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="deskripsi-konten"
                      type="text"
                      placeholder="Masukkan konten..."
                      rows={8}
                      onChange={(e) => {
                        setFormDataKonten({
                          ...formDataKonten,
                          deskripsi: e.target.value,
                        });
                      }}
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="penulis"
                    >
                      Penulis
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="penulis"
                      type="text"
                      placeholder="Masukkan Nama Penulis..."
                      onChange={(e) => {
                        setFormDataKonten({
                          ...formDataKonten,
                          penulis: e.target.value,
                        });
                      }}
                      required
                    />
                  </div>
                  <div className="px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="kategori"
                    >
                      Kategori
                    </label>
                    <select
                      className="select select-bordered"
                      value={categories}
                      onChange={(event) => setCategories(event.target.value)}
                      id="kategori"
                      required
                    >
                      <option value={"DEFAULT"} disabled>
                        Pilih Kategori
                      </option>
                      <option value={"Berita"}>Berita</option>
                      <option value={"Artikel"}>Artikel</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-3 mt-5">
                <button
                  type="submit"
                  className="rounded-xl bg-orange-500 text-white font-bold px-3 py-2"
                  disabled={isLoading}
                >
                  Tambah Konten
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
        <div className="bg-white m-5 rounded-lg">
          <div className="flex justify-start p-8 ">
            <button
              className="btn text-gray-500 bg-[#FDE9CC] hover:bg-[#E0924A] hover:text-white"
              type="button"
              onClick={() => setShowForm(true)}
            >
              <BsPlusLg size={20} />
              <span>Tambah Konten</span>
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
                {dataKonten.map(
                  ({ id, judul, penulis, kategori, createdAt }) => (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{judul}</td>
                      <td>{penulis}</td>
                      <td>{kategori}</td>
                      <td>{createdAt}</td>
                      <td>
                        <div className="flex gap-3">
                          <button
                            className="text-[#624DE3]"
                            onClick={() => onHandleEdit(id)}
                          >
                            <FiEdit size={20} />
                          </button>
                          <button
                            className="text-[#A30D11]"
                            onClick={() => onHandleDelete(id)}
                          >
                            <BsTrashFill size={20} />
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
      )}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none divide-y">
                {/*header*/}
                <div className="flex flex-col justify-center items-start px-5 pt-5 pb-2 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-bold pb-2">Form Edit Konten</h3>
                  <p>Update Data Konten dengan Teliti</p>
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
                    onSubmit={(event) =>
                      onSubmitHandleEdit(event, dataEditKonten.id)
                    }
                    encType="multipart/form-data"
                  >
                    <div className="flex justify-between divide-x">
                      <div className="flex flex-col">
                        <div className="flex justify-between">
                          <div className="w-full px-3">
                            <label
                              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              htmlFor="judul-konten"
                            >
                              Judul
                            </label>
                            <input
                              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="judul-konten"
                              type="text"
                              placeholder="Masukkan Judul..."
                              value={dataEditKonten.judul}
                              onChange={(e) => {
                                setDataEditKonten({
                                  ...dataEditKonten,
                                  judul: e.target.value,
                                });
                              }}
                            />
                          </div>
                          <div className="px-3">
                            <label
                              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              htmlFor="media-konten"
                            >
                              Upload Gambar
                            </label>
                            <input
                              className=""
                              id="media-konten"
                              type="file"
                              onChange={onHandleImage}
                            />
                          </div>
                        </div>
                        <div className="w-full px-3">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="deskripsi-konten"
                          >
                            Konten
                          </label>
                          <textarea
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="deskripsi-konten"
                            type="text"
                            placeholder="Masukkan konten..."
                            rows={8}
                            value={dataEditKonten.deskripsi}
                            onChange={(e) => {
                              setDataEditKonten({
                                ...dataEditKonten,
                                deskripsi: e.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-3">
                        <div className="px-3">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="penulis"
                          >
                            Penulis
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="penulis"
                            type="text"
                            placeholder="Masukkan Nama Penulis..."
                            value={dataEditKonten.penulis}
                            onChange={(e) => {
                              setDataEditKonten({
                                ...dataEditKonten,
                                penulis: e.target.value,
                              });
                            }}
                          />
                        </div>
                        <div className="px-3">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="kategori"
                          >
                            Kategori
                          </label>
                          <select
                            className="select select-bordered"
                            value={categoriesEdit}
                            onChange={(e) => setCategoriesEdit(e.target.value)}
                            id="kategori"
                          >
                            <option value={"DEFAULT"} disabled>
                              Pilih Kategori
                            </option>
                            <option value={"Berita"}>Berita</option>
                            <option value={"Artikel"}>Artikel</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3 mt-5">
                      <button
                        type="submit"
                        className="rounded-xl bg-orange-500 text-white font-bold px-3 py-2"
                        disabled={isLoading}
                      >
                        Edit Data Konten
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

export default KelolaKonten;
