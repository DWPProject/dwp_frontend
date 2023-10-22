import { useState } from "react";

import { FiEdit } from "react-icons/fi";
import { BsPlusLg, BsTrashFill } from "react-icons/bs";

const TABLE_HEAD = ["ID Anggota", "Nama", "Jabatan", "Action"];
const TABLE_FOOT = ["ID Anggota", "Nama", "Jabatan", "Action"];

const TABLE_ROWS = [
  {
    id_anggota: "#0001",
    nama: "Basrunki Siburian",
    jabatan: "Ketua",
    action: {
      edit: <FiEdit size={20} />,
      hapus: <BsTrashFill size={20} />,
    },
  },
  {
    id_anggota: "#0002",
    nama: "Habib Basuki",
    jabatan: "Anggota",
    action: {
      edit: <FiEdit size={20} />,
      hapus: <BsTrashFill size={20} />,
    },
  },
  {
    id_anggota: "#0003",
    nama: "Kurisna Saputra",
    jabatan: "Anggota",
    action: {
      edit: <FiEdit size={20} />,
      hapus: <BsTrashFill size={20} />,
    },
  },
];

const DataAnggota = () => {
  const [showForm, setShowForm] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setShowForm(false);
  };

  return (
    <>
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
                    type="text"
                    id="password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    htmlFor="user_avatar"
                  >
                    Upload file
                  </label>
                  <input
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="user_avatar_help"
                    id="user_avatar"
                    type="file"
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
                htmlFor="default-search"
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
              onClick={() => setShowForm(!showForm)}
            >
              <BsPlusLg size={20} />
              <span>Tambah Anggota</span>
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
                  ({ id_anggota, nama, jabatan, action }, index) => (
                    <tr key={id_anggota}>
                      <td>{id_anggota}</td>
                      <td>{nama}</td>
                      <td>{jabatan}</td>
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
    </>
  );
};

export default DataAnggota;
