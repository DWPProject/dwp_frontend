import Image from "next/image";

import { username } from "@/utils/auth";

export default function PageHeading({ title }) {
  const user_name = username();
  return (
    <div className="p-6 shadow-lg bg-white flex justify-between items-center">
      <span className="text-3xl text-[#828282] font-bold">{title}</span>
      <div className="flex gap-5 items-center">
        <p>{user_name}</p>
        <Image src="/logo.svg" alt="Logo DWP" width={50} height={50} />
      </div>
    </div>
  );
}
