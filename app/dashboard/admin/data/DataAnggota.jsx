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
  return (
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
        <button className="btn text-gray-500 bg-[#FDE9CC] hover:bg-[#E0924A] hover:text-white">
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
            {TABLE_ROWS.map(({ id_anggota, nama, jabatan, action }, index) => (
              <tr key={id_anggota}>
                <td>{id_anggota}</td>
                <td>{nama}</td>
                <td>{jabatan}</td>
                <td>
                  <div className="flex gap-3">
                    <button className="text-[#624DE3]">{action.edit}</button>
                    <button className="text-[#A30D11]">{action.hapus}</button>
                  </div>
                </td>
              </tr>
            ))}
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
  );
};

export default DataAnggota;
