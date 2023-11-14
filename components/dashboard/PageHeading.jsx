import Image from "next/image";

export default function PageHeading({ title }) {
  return (
    <div className="p-6 shadow-lg bg-white flex justify-between items-center">
      <span className="text-3xl text-[#828282] font-bold">{title}</span>
      <div className="flex gap-5 items-center">
        <p>{new Date().toLocaleDateString()}</p>
        <Image src="/logo.svg" alt="Logo DWP" width={50} height={50} />
      </div>
    </div>
  );
}
