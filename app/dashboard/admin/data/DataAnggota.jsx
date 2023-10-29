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
        <div className="flex flex-col justify-center items-center mt-5">
          <h1 className="text-3xl font-bold mb-5">Form Data Anggota</h1>
          <div className="flex flex-col bg-white p-10 rounded-xl  divide-y">
            <div className="">
              <h1 className="text-2xl font-bold mb-5">Data Anggota</h1>
              <p>Isi data anggota dengan benar</p>
            </div>
            <form action="" className="flex flex-col pt-5">
              <div className="flex justify-between ">
                <div className="flex flex-col">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="nama-anggota"
                    >
                      Nama
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="nama-anggota"
                      type="text"
                      placeholder="Nama Anggota..."
                    />
                  </div>
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="jabatan"
                    >
                      Jabatan
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="jabatan"
                      type="text"
                      placeholder="Jabatan Anggota..."
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
                  Tambah Anggota
                </button>
                <button
                  type="button"
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
          <h1 className="text-start font-bold text-3xl p-5">Data Anggota</h1>
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
