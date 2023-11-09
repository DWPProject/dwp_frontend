import SideBar from "../components/SideBar";

import { MENU_ITEMS_ADMIN } from "@/app/common/constant/menu";

export const metadata = {
  title: "Dashboard Admin | DWP",
  description: "Dashboard for Admin",
};

const AdminDashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-row bg-[#EEECEC]">
      <header className="flex basis-1/6 ">
        <SideBar menuItems={MENU_ITEMS_ADMIN} />
      </header>
      <main className="flex  basis-5/6 ">
        <div className="w-full flex flex-col h-screen scrollbar-hide overflow-y-auto gap-5">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboardLayout;
