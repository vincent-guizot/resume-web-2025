import { Outlet } from "react-router-dom";
import { SideBar } from "../components";
import HeroProfile from "../components/HeroProfile";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-gray-300 to-gray-200 overflow-hidden">
      {/* 🔹 Floating Sidebar (Desktop) */}
      <div className="absolute left-30 top-1/2 -translate-y-1/2 z-50 hidden md:block">
        <SideBar />
      </div>

      {/* 🔹 Main container */}
      <div className="relative w-full max-w-6xl h-auto md:h-[85vh] flex flex-col md:flex-row">
        {/* Left section: HeroProfile */}
        <div className="w-full md:w-[40%] flex justify-center items-center mb-6 md:mb-0">
          <HeroProfile />
        </div>

        {/* Right section: Outlet content */}
        <div className="w-full md:w-[60%] flex flex-col overflow-hidden relative px-6 py-6 bg-white rounded-t-lg md:rounded-r-lg shadow-md">
          <div className="flex-1 overflow-y-auto scroll-smooth">
            <Outlet />
            <div className="h-8" /> {/* Bottom padding */}
          </div>

          {/* Fade effect at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </div>
      </div>

      {/* 🔹 Bottom Navigation Bar (Mobile) */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-white/90 backdrop-blur-md rounded-2xl shadow-md py-3 px-4 flex justify-around items-center md:hidden z-50">
        <SideBar isMobile />
      </div>
    </div>
  );
};

export default MainLayout;
