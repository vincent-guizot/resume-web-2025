import { Outlet } from "react-router-dom";
import { SideBar } from "../components";
import HeroProfile from "../components/HeroProfile";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-100 overflow-hidden">
      {/* 🔹 Floating Sidebar (Desktop) */}
      <div className="absolute left-30 top-1/2 -translate-y-1/2 z-50 hidden md:block">
        <SideBar />
      </div>

      {/* 🔹 Main centered container */}
      <div className="relative w-full max-w-6xl h-[85vh]  flex   ">
        {/* Left section: HeroProfile inside container */}
        <div className="w-[40%] flex justify-center items-center">
          <HeroProfile />
        </div>

        {/* Right section: Outlet content */}
        <div className="w-[60%] flex flex-col overflow-hidden relative px-8 py-8 bg-white rounded-lg shadow-md">
          <div className="flex-1 overflow-y-auto scroll-smooth">
            <Outlet />
            <div className="h-8" /> {/* Keeps bottom padding while scrolling */}
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
