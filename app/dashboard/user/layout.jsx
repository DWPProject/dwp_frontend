import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Dashboard User | DWP",
  description: "Dashboard for User",
};

const UserDashboardLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default UserDashboardLayout;
