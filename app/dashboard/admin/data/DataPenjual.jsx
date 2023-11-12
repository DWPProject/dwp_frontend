import { useState, useEffect } from "react";

import { FiEdit } from "react-icons/fi";
import { BsPlusLg, BsTrashFill } from "react-icons/bs";
import Swal from "sweetalert2";

import { getDataPenjual, createDataPenjual } from "@/services/penjual";

const TABLE_HEAD = [
  "ID Penjual",
  "Nama Penjual",
  "Nama Toko",
  "Nomor Telepon",
  "Tipe Penjual",
  "Email",
  "Password",
  "Action",
];

const DataPenjual = () => {
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [dataPenjual, setDataPenjual] = useState([]);
  const [formDataPenjual, setFormDataPenjual] = useState({
    username: "",
    nama_toko: "",
    type_seller: 0,
    telepon: "",
    email: "",
    password: "",
    repassword: "",
  });
  const [avatar, setAvatar] = useState(null);
  const [typeSeller, setTypeSeller] = useState("DEFAULT");

  useEffect(() => {
    const fetchData = async () => {
      const data_penjual = await getDataPenjual();
      setDataPenjual([...data_penjual.payload]);
    };
    fetchData();
  }, []);

  const onSubmitHandleAdd = async (e) => {
    e.preventDefault();
    formDataPenjual.foto = avatar;
    formDataPenjual.type_seller = typeSeller;
    const data = await createDataPenjual(formDataPenjual);
    console.log(data);

    setFormDataPenjual({
      username: "",
      nama_toko: "",
      type_seller: 0,
      telepon: "",
      email: "",
      password: "",
      repassword: "",
    });
  };

  const onHandleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0];
      setAvatar(image);
    }
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
              onSubmit={onSubmitHandleAdd}
            >
              <div className="flex justify-between ">
                <div className="flex flex-col">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="nama-penjual"
                    >
                      Nama Penjual
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="nama-penjual"
                      type="text"
                      placeholder="Nama Penjual..."
                      onChange={(e) => [
                        setFormDataPenjual({
                          ...formDataPenjual,
                          username: e.target.value,
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
                        setFormDataPenjual({
                          ...formDataPenjual,
                          nama_toko: e.target.value,
                        }),
                      ]}
                    />
                  </div>
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="no-telpon-penjual"
                    >
                      No. Telepon
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="no-telpon-penjual"
                      type="text"
                      placeholder="Nomor Telepon..."
                      onChange={(e) => [
                        setFormDataPenjual({
                          ...formDataPenjual,
                          telepon: e.target.value,
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
                        setFormDataPenjual({
                          ...formDataPenjual,
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
                        setFormDataPenjual({
                          ...formDataPenjual,
                          password: e.target.value,
                        }),
                      ]}
                    />
                  </div>
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="repassword"
                    >
                      Konfirmasi Password
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="repassword"
                      type="text"
                      placeholder="Konfirmasi Password..."
                      onChange={(e) => [
                        setFormDataPenjual({
                          ...formDataPenjual,
                          repassword: e.target.value,
                        }),
                      ]}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="type_seller"
                    >
                      Kategori Penjual
                    </label>
                    <select
                      className="select select-bordered"
                      value={typeSeller}
                      onChange={(e) => setTypeSeller(e.target.value)}
                      id="type_seller"
                    >
                      <option value={"DEFAULT"} disabled>
                        Pilih Kategori
                      </option>
                      <option value={0}>Dalam DWP</option>
                      <option value={1}>Luar DWP</option>
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
          <div className="flex justify-between p-8 ">
            <h1 className="text-start font-bold text-3xl">Data Penjual</h1>
            <button
              className="btn text-gray-500 bg-[#FDE9CC] hover:bg-[#E0924A] hover:text-white"
              type="button"
              onClick={() => setShowForm(true)}
            >
              <BsPlusLg size={20} />
              <span>Tambah Penjual</span>
            </button>
          </div>
          <div className="overflow-x-auto h-fit pb-5 scrollbar-hide">
            <table className="table table-pin-rows">
              <thead className="font-bold text-black">
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th key={head}>{head}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataPenjual.map(
                  ({
                    id,
                    username,
                    nama_toko,
                    telepon,
                    type_seller,
                    email,
                    password,
                  }) => (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{username}</td>
                      <td>{nama_toko}</td>
                      <td>{telepon}</td>
                      <td>{type_seller === 0 ? "Dalam DWP" : "Luar DWP"}</td>
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
                            htmlFor="no-telpon-penjual"
                          >
                            No. Telepon
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="no-telpon-penjual"
                            type="text"
                            placeholder="Nomor Telepon..."
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
