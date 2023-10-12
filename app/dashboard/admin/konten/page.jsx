"use client";
import { useState } from "react";

import PageHeading from "@/app/components/PageHeading";

import { BsPlusLg, BsTrashFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

export default function KelolaKonten() {
  const [showForm, setShowForm] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setShowForm(false);
  };

  // const onSearchHandler = (e) => {
  //   e.preventDefault();
  //   setShowForm(true);
  // };

  const TABLE_HEAD = [
    "ID Konten",
    "Judul Konten",
    "Penulis",
    "Tanggal",
    "Kategori",
    "Action",
  ];
  const TABLE_FOOT = [
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
      action: {
        edit: <FiEdit size={20} />,
        hapus: <BsTrashFill size={20} />,
      },
    },
    {
      id_konten: "#0002",
      judul: "Lorem Ipsum Sinema Indo",
      penulis: "Andi",
      tanggal: "14/07/2023",
      kategori: "Artikel",
      action: {
        edit: <FiEdit size={20} />,
        hapus: <BsTrashFill size={20} />,
      },
    },
    {
      id_konten: "#0003",
      judul: "Lorem Ipsum Sinema Indo",
      penulis: "Habib",
      tanggal: "01/01/2023",
      kategori: "Artikel",
      action: {
        edit: <FiEdit size={20} />,
        hapus: <BsTrashFill size={20} />,
      },
    },
    {
      id_konten: "#0004",
      judul: "Lorem Ipsum Sinema Indo",
      penulis: "Andi",
      tanggal: "19/09/2023",
      kategori: "Berita",
      action: {
        edit: <FiEdit size={20} />,
        hapus: <BsTrashFill size={20} />,
      },
    },
    {
      id_konten: "#0005",
      judul: "Lorem Ipsum Sinema Indo",
      penulis: "Agus",
      tanggal: "11/10/2023",
      kategori: "Berita",
      action: {
        edit: <FiEdit size={20} />,
        hapus: <BsTrashFill size={20} />,
      },
    },
  ];

  return (
    <div className="w-full flex flex-col gap-5">
      <PageHeading title="Kelola Konten" />
      {showForm ? (
        <div className="m-5 divide-y-2 divide-black">
          <h1 className="text-center font-bold text-3xl mb-4">Form Konten</h1>
          <form action="">
            <div className="flex">
              <div className="w-3/4">
                <div class="mb-6">
                  <label
                    htmlFor="judul"
                    className="mb-2 text-sm font-medium border border-gray-500 rounded-lg focus:ring-black focus:border-black"
                  >
                    Judul
                  </label>
                  <input
                    type="text"
                    id="judul"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Masukkan Judul"
                    required
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    id="password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="konten"
                    className="text-lg font-medium text-black"
                  >
                    Konten
                  </label>
                  <textarea
                    id="konten"
                    rows="4"
                    className="p-5 w-full text-sm border border-gray-500 rounded-lg focus:ring-black focus:border-black"
                    placeholder="Write your thoughts here..."
                  ></textarea>
                </div>
              </div>
            </div>
            <button
              className="btn bg-black text-white"
              onClick={() => setShowForm(!showForm)}
            >
              Batalkan
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-white m-5 rounded-lg">
          <div className="flex justify-between p-8 ">
            <form>
              <label
                for="default-search"
                className="mb-2 text-sm font-medium text-gray-500 sr-only"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-3 pl-10 text-sm border border-gray-500 rounded-lg focus:ring-black focus:border-black outline-none"
                  placeholder="Search..."
                  required
                />
              </div>
            </form>
            <button
              className="btn text-gray-500 bg-[#FDE9CC] hover:bg-[#E0924A] hover:text-white"
              type="button"
              onClick={() => setShowForm(true)}
            >
              <BsPlusLg size={20} />
              <span>Tambah Konten</span>
            </button>
          </div>
          <div className="overflow-x-auto h-96 scrollbar-hide">
            <table className="table table-zebra table-pin-rows">
              {/* head */}
              <thead className="font-bold text-black">
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th key={head}>{head}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map(
                  (
                    { id_konten, judul, penulis, tanggal, kategori, action },
                    index
                  ) => (
                    <tr key={id_konten}>
                      <td>{id_konten}</td>
                      <td>{judul}</td>
                      <td>{penulis}</td>
                      <td>{tanggal}</td>
                      <td>{kategori}</td>
                      <td>
                        <div className="flex gap-3">
                          <button className="text-[#624DE3]">
                            {action.edit}
                          </button>
                          <button className="text-[#A30D11]">
                            {action.hapus}
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
              <tfoot className="font-bold text-black">
                <tr>
                  {TABLE_FOOT.map((head) => (
                    <th key={head}>{head}</th>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
