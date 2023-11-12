import { useState, useEffect } from "react";

import { FiEdit } from "react-icons/fi";
import { BsPlusLg, BsTrashFill } from "react-icons/bs";
import Swal from "sweetalert2";

import {
  getDataAnggota,
  createDataAnggota,
  updateDataAnggota,
  deleteDataAnggota,
} from "@/services/anggota";

const TABLE_HEAD = ["ID Anggota", "Nama Anggota", "Jabatan", "Action"];

const DataAnggota = () => {
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [dataAnggota, setDataAnggota] = useState([]);
  const [dataEditAnggota, setDataEditAnggota] = useState({});
  const [formDataAnggota, setFormDataAnggota] = useState({
    nama: "",
    jabatan: "",
    foto: null,
  });
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data_anggota = await getDataAnggota();
      setDataAnggota([...data_anggota.data]);
    };
    fetchData();
  }, []);

  const onSubmitHandleAdd = async (e) => {
    formDataAnggota.foto = avatar;
    const data = await createDataAnggota(formDataAnggota);
    console.log(data);

    setFormDataAnggota({
      nama: "",
      jabatan: "",
      foto: null,
    });
  };

  const onSubmitHandleEdit = async (event, id) => {
    dataEditAnggota.foto = avatar;
    const data = await updateDataAnggota(dataEditAnggota, id);
    console.log(data);

    setDataEditAnggota({
      nama: "",
      jabatan: "",
      foto: null,
    });
  };

  const onHandleEdit = (id) => {
    const data_anggota = dataAnggota.find((item) => item.id === id);
    setDataEditAnggota({ ...data_anggota });
    setShowModal(true);
  };

  const onHandleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0];
      setAvatar(image);
    }
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
        const data = await deleteDataAnggota(id);
        console.log(data);

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
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
                      htmlFor="nama-anggota"
                    >
                      Nama
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="nama-anggota"
                      type="text"
                      placeholder="Nama Anggota..."
                      onChange={(e) => [
                        setFormDataAnggota({
                          ...formDataAnggota,
                          nama: e.target.value,
                        }),
                      ]}
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
                      onChange={(e) => [
                        setFormDataAnggota({
                          ...formDataAnggota,
                          jabatan: e.target.value,
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
                  <input
                    className=""
                    id="avatar-anggota"
                    type="file"
                    onChange={onHandleImage}
                  />
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
          <div className="flex justify-between p-5">
            <h1 className="text-start font-bold text-3xl">Data Anggota</h1>
            <button
              className="btn text-gray-500 bg-[#FDE9CC] hover:bg-[#E0924A] hover:text-white"
              onClick={() => setShowForm(!showForm)}
            >
              <BsPlusLg size={20} />
              <span>Tambah Anggota</span>
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
                {dataAnggota.map(({ id, nama, jabatan }) => (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{nama}</td>
                    <td>{jabatan}</td>
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
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex flex-col justify-center items-start px-5 pt-5 pb-2 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-bold pb-2">
                    Form Edit Data Anggota
                  </h3>
                  <p>Update Data Anggota dengan teliti</p>
                </div>
                <div className="relative p-6 flex-auto">
                  <form
                    action=""
                    className="flex flex-col pt-5"
                    encType="multipart/form-data"
                    onSubmit={(e) => onSubmitHandleEdit(e, dataEditAnggota.id)}
                  >
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
                            value={dataEditAnggota.nama}
                            onChange={(e) => {
                              setDataEditAnggota({
                                ...dataEditAnggota,
                                nama: e.target.value,
                              });
                            }}
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
                            value={dataEditAnggota.jabatan}
                            onChange={(e) => {
                              setDataEditAnggota({
                                ...dataEditAnggota,
                                jabatan: e.target.value,
                              });
                            }}
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
                        <input
                          className=""
                          id="avatar-anggota"
                          type="file"
                          onChange={onHandleImage}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3 mt-5">
                      <button
                        type="submit"
                        className="rounded-xl bg-orange-500 text-white font-bold px-3 py-2"
                      >
                        Edit Data Anggota
                      </button>
                      <button
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

export default DataAnggota;
