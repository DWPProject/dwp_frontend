import { useState } from "react";

import { FiEdit } from "react-icons/fi";
import { BsPlusLg, BsTrashFill } from "react-icons/bs";

import Swal from "sweetalert2";
import { v4 as uuid } from "uuid";

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
  },
  {
    id_penjual: "#0002",
    nama: "Krisna Saputra",
    nama_toko: "Toko DEF",
    email: "krisna@gmail.com",
    password: "qfwefwgddslvnbnorwn132ninirw",
  },
  {
    id_penjual: "#0003",
    nama: "Chrisnico Alexander Hutapea",
    nama_toko: "Toko GHI",
    email: "niko@gmail.com",
    password: "qfwefwgddslvnbnorwn132ninirw",
  },
  {
    id_penjual: "#0004",
    nama: "Iqbal Alfarizi",
    nama_toko: "Toko OPQ",
    email: "iqbal@gmail.com",
    password: "qfwefwgddslvnbnorwn132ninirw",
  },
  {
    id_penjual: "#0005",
    nama: "Jossy Saragih",
    nama_toko: "Toko XYZ",
    email: "jossy@gmail.com",
    password: "qfwefwgddslvnbnorwn132ninirw",
  },
];

const DataPenjual = () => {
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    id_penjual: "",
    nama: "",
    nama_toko: "",
    email: "",
    password: "",
  });

  const onSubmitHandle = (e) => {
    e.preventDefault();
    TABLE_ROWS.push({
      id_penjual: uuid(),
      nama: formData.nama,
      nama_toko: formData.nama_toko,
      email: formData.email,
      password: formData.password,
    });

    setFormData({
      id_penjual: "",
      nama: "",
      nama_toko: "",
      email: "",
      password: "",
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

  return (
    <>
      {showForm ? (
        <div className="flex flex-col justify-center items-center mt-5 pb-10">
          <h1 className="text-3xl font-bold mb-5">Form Data Penjual</h1>
          <div className="flex flex-col bg-white p-10 rounded-xl  divide-y">
            <div className="">
              <h1 className="text-2xl font-bold mb-5">Data Penjual</h1>
              <p>Isi data penjual dengan benar</p>
            </div>
            <form
              action=""
              className="flex flex-col pt-5"
              onSubmit={onSubmitHandle}
            >
              <div className="flex justify-between ">
                <div className="flex flex-col">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="nama-penjual"
                    >
                      Nama
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="nama-penjual"
                      type="text"
                      placeholder="Nama Penjual..."
                      onChange={(e) => [
                        setFormData({
                          ...formData,
                          nama: e.target.value,
                        }),
                      ]}
                    />
                  </div>
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="nama-toko-penjual"
                    >
                      Nama Toko
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="nama-toko-penjual"
                      type="text"
                      placeholder="Nama Toko Penjual..."
                      onChange={(e) => [
                        setFormData({
                          ...formData,
                          nama_toko: e.target.value,
                        }),
                      ]}
                    />
                  </div>
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="email"
                      type="email"
                      placeholder="Email..."
                      onChange={(e) => [
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        }),
                      ]}
                    />
                  </div>
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="password"
                      type="text"
                      placeholder="Password..."
                      onChange={(e) => [
                        setFormData({
                          ...formData,
                          password: e.target.value,
                        }),
                      ]}
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
                  Tambah Penjual
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
          <h1 className="text-start font-bold text-3xl p-5">Data Penjual</h1>
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
                  ({ id_penjual, nama, nama_toko, email, password }, index) => (
                    <tr key={id_penjual}>
                      <td>{id_penjual}</td>
                      <td>{nama}</td>
                      <td>{nama_toko}</td>
                      <td>{email}</td>
                      <td>{password}</td>
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
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex flex-col justify-center items-start px-5 pt-5 pb-2 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-bold pb-2">
                    Form Edit Data Penjual
                  </h3>
                  <p>Update Data Penjual dengan teliti</p>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form action="" className="flex flex-col pt-5">
                    <div className="flex justify-between ">
                      <div className="flex flex-col">
                        <div className="w-full px-3">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="nama-penjual"
                          >
                            Nama
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="nama-penjual"
                            type="text"
                            placeholder="Nama Penjual..."
                          />
                        </div>
                        <div className="w-full px-3">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="nama-toko-penjual"
                          >
                            Nama Toko
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="nama-toko-penjual"
                            type="text"
                            placeholder="Nama Toko Penjual..."
                          />
                        </div>
                        <div className="w-full px-3">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="email"
                          >
                            Email
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="email"
                            type="email"
                            placeholder="Email..."
                          />
                        </div>
                        <div className="w-full px-3">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="password"
                          >
                            Password
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="password"
                            type="text"
                            placeholder="Password..."
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
                        Tambah Penjual
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

export default DataPenjual;
