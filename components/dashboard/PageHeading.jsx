import { useState, useEffect } from "react";
import Image from "next/image";

import { getUserFromLocalStorage } from "@/utils/localStorage";
import { getProfileUser } from "@/services/auth";

export default function PageHeading({ title }) {
  const [userId, setUserId] = useState("");
  const [dataUser, setDataUser] = useState({});

  const fetchData = async (userId) => {
    const data_user = await getProfileUser(userId);
    setDataUser({ ...data_user.data });
  };

  useEffect(() => {
    const user = getUserFromLocalStorage();
    if (user.length > 0) {
      setUserId(user[0].id);
    } else {
      setUserId("");
    }
    fetchData(userId);
  }, [userId]);

  return (
    <div className="p-6 shadow-lg bg-white flex justify-between items-center">
      <span className="text-3xl text-[#828282] font-bold">{title}</span>
      <div className="flex gap-5 items-center">
        <p>{dataUser.username}</p>
        <Image src="/logo.svg" alt="Logo DWP" width={50} height={50} />
      </div>
    </div>
  );
}
