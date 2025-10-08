import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import HeroProfile from "../components/HeroProfile";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
      {/* Floating SideBar */}
      <SideBar />

      {/* Center floating container */}
      <div className="relative w-full max-w-4xl mx-4 bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-6">
        {/* Hero/Profile Section */}
        <HeroProfile />

        {/* Dynamic Page Content */}
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
