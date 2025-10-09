import { Outlet } from "react-router-dom";
import { SideBar } from "../components";
import HeroProfile from "../components/HeroProfile";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
      {/* 🔹 Floating Sidebar (Desktop) */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-50 hidden md:block">
        <SideBar />
      </div>

      {/* 🔹 Main centered container */}
      <div className="relative w-full max-w-6xl h-[85vh] bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Left: Hero Section */}
        <div className="md:w-[40%] w-full flex justify-center items-center bg-transparent relative z-10 p-4 md:p-0">
          <HeroProfile />
        </div>

        {/* Right: Scrollable Outlet Section */}
        <div className="md:w-[60%] w-full flex flex-col overflow-hidden relative">
          <div className="flex-1 overflow-y-auto px-6 py-8 md:py-8 scroll-smooth">
            <Outlet />
            <div className="h-10" /> {/* Keeps padding when scrolled */}
          </div>

          {/* Elegant bottom fade */}
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
