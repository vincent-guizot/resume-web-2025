import { Outlet } from "react-router-dom";
import { SideBar } from "../components";
import HeroProfile from "../components/HeroProfile";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-100 overflow-hidden">
      {/* 🔹 Floating Sidebar (Desktop) */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-50 hidden md:block">
        <SideBar />
      </div>

      {/* 🔹 Main centered container */}
      <div className="relative w-full max-w-6xl h-[85vh] bg-white rounded-2xl shadow-lg flex overflow-hidden">
        {/* Left section: HeroProfile inside container */}
        <div className="w-[40%] flex justify-center items-center bg-gray-50 border-r border-gray-200">
          <HeroProfile />
        </div>

        {/* Right section: Outlet content */}
        <div className="w-[60%] flex flex-col overflow-hidden relative">
          <div className="flex-1 overflow-y-auto   py-10 scroll-smooth">
            <Outlet />
            <div className="h-12" />{" "}
            {/* Keeps bottom padding while scrolling */}
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
