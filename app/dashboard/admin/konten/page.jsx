"use client";
import { useState } from "react";
import Swal from "sweetalert2";
import { v4 as uuid } from "uuid";

import PageHeading from "@/components/dashboard/PageHeading";

import { BsPlusLg, BsTrashFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

const TABLE_HEAD = [
  "ID Konten",
  "Judul Konten",
  "Penulis",
  "Tanggal",
  "Kategori",
  "Action",
];

const TABLE_ROWS = [
  {
    id_konten: "#0001",
    judul: "Lorem Ipsum Sinema Indo",
    penulis: "Wijaya",
    tanggal: "30/09/2023",
    kategori: "Berita",
  },
  {
    id_konten: "#0002",
    judul: "Lorem Ipsum Sinema Indo",
    penulis: "Andi",
    tanggal: "14/07/2023",
    kategori: "Artikel",
  },
  {
    id_konten: "#0003",
    judul: "Lorem Ipsum Sinema Indo",
    penulis: "Habib",
    tanggal: "01/01/2023",
    kategori: "Artikel",
  },
  {
    id_konten: "#0004",
    judul: "Lorem Ipsum Sinema Indo",
    penulis: "Andi",
    tanggal: "19/09/2023",
    kategori: "Berita",
  },
  {
    id_konten: "#0005",
    judul: "Lorem Ipsum Sinema Indo",
    penulis: "Agus",
    tanggal: "11/10/2023",
    kategori: "Berita",
  },
];

const KelolaKonten = () => {
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [categories, setCategories] = useState("DEFAULT");
  const [formData, setFormData] = useState({
    judul: "",
    penulis: "",
    kategori: "",
  });

  const onSubmitHandleAdd = (e) => {
    e.preventDefault();
    TABLE_ROWS.push({
      id_konten: uuid(),
      judul: formData.judul,
      penulis: formData.penulis,
      kategori: formData.kategori,
    });

    setFormData({
      id_konten: uuid(),
      judul: "",
      penulis: "",
      kategori: "",
    });
    setShowForm(false);
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
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
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
              <p>Isi data konten dengan benar</p>
            </div>
            <form
              action=""
              className="flex flex-col pt-5"
              onSubmit={onSubmitHandleAdd}
            >
              <div className="flex justify-between divide-x">
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <div className="w-full px-3">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="nama-anggota"
                      >
                        Judul
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="nama-anggota"
                        type="text"
                        placeholder="Masukkan Judul..."
                      />
                    </div>
                    <div className="px-3">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="media-konten"
                      >
                        Upload Gambar
                      </label>
                      <input className="" id="media-konten" type="file" />
                    </div>
                  </div>
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="konten"
                    >
                      Konten
                    </label>
                    <textarea
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="konten"
                      type="text"
                      placeholder="Masukkan konten..."
                      rows={8}
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
                >
                  Tambah Konten
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
                {TABLE_ROWS.map((konten) => (
                  <tr key={konten.id_konten}>
                    <td>{konten.id_konten}</td>
                    <td>{konten.judul}</td>
                    <td>{konten.penulis}</td>
                    <td>{konten.tanggal}</td>
                    <td>{konten.kategori}</td>
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
                      </div>
                    </td>
                  </tr>
                ))}
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
                  <p>Update Data Konten dengan teliti</p>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form action="" className="flex flex-col pt-5">
                    <div className="flex justify-between divide-x">
                      <div className="flex flex-col">
                        <div className="flex justify-between">
                          <div className="w-full px-3">
                            <label
                              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              htmlFor="nama-anggota"
                            >
                              Judul
                            </label>
                            <input
                              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="nama-anggota"
                              type="text"
                              placeholder="Masukkan Judul..."
                            />
                          </div>
                          <div className="px-3">
                            <label
                              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              htmlFor="media-konten"
                            >
                              Upload Gambar
                            </label>
                            <input className="" id="media-konten" type="file" />
                          </div>
                        </div>
                        <div className="w-full px-3">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="konten"
                          >
                            Konten
                          </label>
                          <textarea
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="konten"
                            type="text"
                            placeholder="Masukkan konten..."
                            rows={8}
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
                            onChange={(e) => setCategories(e.target.value)}
                            id="kategori"
                          >
                            <option value={"DEFAULT"} disabled>
                              Pilih Kategori
                            </option>
                            <option value={"berita"}>Berita</option>
                            <option value={"artikel"}>Artikel</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3 mt-5">
                      <button
                        type="submit"
                        className="rounded-xl bg-orange-500 text-white font-bold px-3 py-2"
                      >
                        Tambah Konten
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

export default KelolaKonten;
