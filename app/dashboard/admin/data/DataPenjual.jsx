import { useState, useEffect } from "react";

import { FiEdit } from "react-icons/fi";
import { BsPlusLg, BsTrashFill } from "react-icons/bs";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

import {
  getDataPenjual,
  createDataPenjual,
  updateDataPenjual,
  deletePenjual,
} from "@/services/admin/penjual";

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
  const [isLoading, setIsloading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);
  const [editErrorMessage, setEditErrorMessage] = useState("");
  const [dataPenjual, setDataPenjual] = useState([]);
  const [dataEditPenjual, setDataEditPenjual] = useState({});
  const [formDataPenjual, setFormDataPenjual] = useState({
    username: "",
    nama_toko: "",
    telepon: "",
    type_seller: 0,
    foto: null,
    email: "",
    password: "",
    repassword: "",
  });
  const [avatar, setAvatar] = useState(null);
  const [typeSeller, setTypeSeller] = useState("DEFAULT");
  const [typeSellerEdit, setTypeSellerEdit] = useState("DEFAULT");

  const fetchData = async () => {
    const data_penjual = await getDataPenjual();
    console.log(data_penjual);
    setDataPenjual([...data_penjual.payload]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmitHandleAdd = async (event) => {
    event.preventDefault();
    formDataPenjual.foto = avatar;
    formDataPenjual.type_seller = typeSeller;

    setIsloading(true);
    const idd = toast.loading("Create Data Penjual...");

    try {
      const data = await createDataPenjual(formDataPenjual);
      console.log(data);

      if (
        data.statusCode === 200 ||
        data.statusCode === 201 ||
        data.statusCode === 202
      ) {
        setIsloading(false);
        toast.update(idd, {
          render: "Success Create Data Penjual",
          type: "success",
          isLoading: isLoading,
          autoClose: 1000,
        });

        setFormDataPenjual({
          username: "",
          nama_toko: "",
          type_seller: 0,
          telepon: "",
          foto: null,
          email: "",
          password: "",
          repassword: "",
        });
        fetchData();
        setTypeSeller("DEFAULT");
        setAvatar(null);
        setShowForm(false);
      } else {
        setIsloading(false);
        toast.update(idd, {
          render: "Something went wrong",
          type: "error",
          isLoading: isLoading,
          autoClose: 1000,
        });

        if (data.errors !== undefined) {
          setErrorMessage([...data.errors]);
        } else if (data.error !== undefined) {
          setErrorMessage([data.error]);
        } else {
          setErrorMessage([data.message]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitHandleEdit = async (event) => {
    event.preventDefault();
    dataEditPenjual.profile = avatar;
    dataEditPenjual.type_seller = typeSellerEdit;

    setIsloading(true);
    const idd = toast.loading("Update Data Penjual...");

    try {
      const data = await updateDataPenjual({
        email: dataEditPenjual.email,
        username: dataEditPenjual.username,
        nama_toko: dataEditPenjual.nama_toko,
        telepon: dataEditPenjual.telepon,
        type_seller: dataEditPenjual.type_seller,
        foto: dataEditPenjual.profile,
      });
      console.log(data);

      if (
        data.statusCode === 202 ||
        data.statusCode === 201 ||
        data.statusCode === 200
      ) {
        setIsloading(false);
        toast.update(idd, {
          render: "Success Update Data Penjual",
          type: "success",
          isLoading: isLoading,
          autoClose: 1000,
        });

        fetchData();
        setDataEditPenjual({});
        setAvatar(null);
        setShowModal(false);
      } else {
        setIsloading(false);
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

  const onHandleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0];
      setAvatar(image);
    }
  };

  const onHandleEdit = (id) => {
    const data_penjual = dataPenjual.find((item) => item.id === id);
    setTypeSellerEdit(data_penjual.type_seller);
    setDataEditPenjual({ ...data_penjual });
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
          const data = await deletePenjual(id);
          console.log(data);

          if (
            data.statusCode === 202 ||
            data.statusCode === 201 ||
            data.statusCode === 200
          ) {
            fetchData();
            Swal.fire("Deleted!", "Data Penjual has been deleted.", "success");
          } else {
            if (data.error !== undefined) {
              Swal.fire("Failed Delete!", `${data.error}`, "error");
            } else {
              Swal.fire("Failed Delete!", `${data.message}`, "error");
            }
          }
        } catch (error) {
          console.log(error);
        }
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
              <p>Isi Data Penjual dengan Benar</p>
              <p
                className={`${
                  errorMessage ? "py-3" : ""
                } text-red-500 font-semibold`}
              >
                {errorMessage.length > 0
                  ? errorMessage.map((item, index) => {
                      return (
                        <li className="list-disc" key={index}>
                          {item}
                        </li>
                      );
                    })
                  : ""}
              </p>
            </div>
            <form
              action=""
              className="flex flex-col pt-5"
              onSubmit={onSubmitHandleAdd}
              encType="multipart/form-data"
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
                      required
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
                      required
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
                      required
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
                      required
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
                      required
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
                      required
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
                      required
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
                      htmlFor="avatar-toko-penjual"
                    >
                      Avatar
                    </label>
                    <input
                      id="avatar-toko-penjual"
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
                  Tambah Penjual
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
          <div className="flex justify-between p-8 ">
            <h1 className="text-start font-bold text-3xl">Data Penjual</h1>
            <button
              className="btn text-gray-500 bg-[#FDE9CC] hover:bg-[#E0924A] hover:text-white"
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
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex flex-col justify-center items-start px-5 pt-5 pb-2 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-bold pb-2">
                    Form Edit Data Penjual
                  </h3>
                  <p>Update Data Penjual dengan teliti</p>
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
                      onSubmitHandleEdit(event, dataEditPenjual.id)
                    }
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
                            value={dataEditPenjual.username}
                            onChange={(e) => {
                              setDataEditPenjual({
                                ...dataEditPenjual,
                                username: e.target.value,
                              });
                            }}
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
                            value={dataEditPenjual.nama_toko}
                            onChange={(e) => {
                              setDataEditPenjual({
                                ...dataEditPenjual,
                                nama_toko: e.target.value,
                              });
                            }}
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
                            value={dataEditPenjual.telepon}
                            onChange={(e) => {
                              setDataEditPenjual({
                                ...dataEditPenjual,
                                telepon: e.target.value,
                              });
                            }}
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
                            value={dataEditPenjual.email}
                            disabled={true}
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
                            value={dataEditPenjual.password}
                            disabled={true}
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
                            value={typeSellerEdit}
                            onChange={(e) => setTypeSellerEdit(e.target.value)}
                            id="type_seller"
                            required
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
                            htmlFor="avatar-toko-penjual"
                          >
                            Avatar
                          </label>
                          <input
                            id="avatar-toko-penjual"
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
                        Edit Data Penjual
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

export default DataPenjual;
