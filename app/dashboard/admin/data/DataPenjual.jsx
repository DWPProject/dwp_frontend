import { useState } from "react";

import { FiEdit } from "react-icons/fi";
import { BsPlusLg, BsTrashFill } from "react-icons/bs";

const TABLE_HEAD = [
  "ID Penjual",
  "Nama",
  "Nama Toko",
  "Email",
  "Password",
  "Action",
];

const TABLE_FOOT = [
  "ID Penjual",
  "Nama",
  "Nama Toko",
  "Email",
  "Password",
  "Action",
];

const TABLE_ROWS = [
  {
    id_penjual: "#0001",
    nama: "Basrunki Siburian",
    nama_toko: "Toko ABC",
    email: "basrunki@gmail.com",
    password: "qfwefwgddslvnbnorwn132ninirw",
    action: {
      edit: <FiEdit size={20} />,
      hapus: <BsTrashFill size={20} />,
    },
  },
  {
    id_penjual: "#0002",
    nama: "Krisna Saputra",
    nama_toko: "Toko DEF",
    email: "krisna@gmail.com",
    password: "qfwefwgddslvnbnorwn132ninirw",
    action: {
      edit: <FiEdit size={20} />,
      hapus: <BsTrashFill size={20} />,
    },
  },
  {
    id_penjual: "#0003",
    nama: "Chrisnico Alexander Hutapea",
    nama_toko: "Toko GHI",
    email: "niko@gmail.com",
    password: "qfwefwgddslvnbnorwn132ninirw",
    action: {
      edit: <FiEdit size={20} />,
      hapus: <BsTrashFill size={20} />,
    },
  },
  {
    id_penjual: "#0004",
    nama: "Iqbal Alfarizi",
    nama_toko: "Toko OPQ",
    email: "iqbal@gmail.com",
    password: "qfwefwgddslvnbnorwn132ninirw",
    action: {
      edit: <FiEdit size={20} />,
      hapus: <BsTrashFill size={20} />,
    },
  },
  {
    id_penjual: "#0005",
    nama: "Jossy Saragih",
    nama_toko: "Toko XYZ",
    email: "jossy@gmail.com",
    password: "qfwefwgddslvnbnorwn132ninirw",
    action: {
      edit: <FiEdit size={20} />,
      hapus: <BsTrashFill size={20} />,
    },
  },
];

const DataPenjual = () => {
  const [showForm, setShowForm] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setShowForm(false);
  };

  return (
    <>
      {showForm ? (
        <div className="flex flex-col justify-center items-center mt-5">
          <h1 className="text-3xl font-bold mb-5">Form Data Penjual</h1>
          <div className="flex flex-col bg-white p-10 rounded-xl">
            <h1>Data Penjual</h1>
            <p>Isi data penjual dengan benar</p>
            {/* <form className="w-full max-w-lg">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-1/2 px-3 mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    First Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Jane"
                  />
                  <p className="text-red-500 text-xs italic">
                    Please fill out this field.
                  </p>
                </div>
                <div className="w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Last Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    Password
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="password"
                    placeholder="******************"
                  />
                  <p className="text-gray-600 text-xs italic">
                    Make it as long and as crazy as you&apos;d like
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-1/3 px-3 mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-city"
                  >
                    City
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-city"
                    type="text"
                    placeholder="Albuquerque"
                  />
                </div>
              </div>
            </form> */}
            <form action="" className="flex justify-between">
              <div className="flex flex-col">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="nama-penjual"
                  >
                    Password
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="nama-penjual"
                    type="text"
                    placeholder="Nama penjual..."
                  />
                </div>
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="nama-toko-penjual"
                  >
                    Password
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="nama-toko-penjual"
                    type="text"
                    placeholder="Nama toko penjual..."
                  />
                </div>
                <div>
                  <label htmlFor="nama-toko-penjual">Nama Toko Penjual</label>
                  <input
                    type="text"
                    id="nama-toko-penjual"
                    placeholder="Nama toko penjual..."
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email-penjual">Email</label>
                  <input
                    type="email"
                    id="email-penjual"
                    placeholder="penjual@gmail.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password-penjual">Password</label>
                  <input
                    type="text"
                    placeholder="Password penjual..."
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="avatar-toko-penjual">Avatar</label>
                <input type="file" />
              </div>
            </form>
          </div>
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
              onClick={() => setShowForm(true)}
            >
              <BsPlusLg size={20} />
              <span>Tambah Penjual</span>
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
                    { id_penjual, nama, nama_toko, email, password, action },
                    index
                  ) => (
                    <tr key={id_penjual}>
                      <td>{id_penjual}</td>
                      <td>{nama}</td>
                      <td>{nama_toko}</td>
                      <td>{email}</td>
                      <td>{password}</td>
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

export default DataPenjual;
