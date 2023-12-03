import SideBar from "@/components/dashboard/SideBar";

import { MENU_ITEMS_PENJUAL } from "@/constant/menu";

export const metadata = {
  title: "Dashboard Penjual | DWP",
  description: "Dashboard for Penjual",
};

const AdminDashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-row bg-[#EEECEC]">
      <header className="flex basis-1/6 ">
        <SideBar menuItems={MENU_ITEMS_PENJUAL} />
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
