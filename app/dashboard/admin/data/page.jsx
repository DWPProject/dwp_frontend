import PageHeading from "@/app/components/PageHeading";

export default function KelolaData() {
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
      <PageHeading title="Kelola Data" />
      <div className="flex flex-col gap-5">
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Who shot first?
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
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
      </div>
    </div>
  );
}
