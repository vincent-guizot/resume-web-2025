import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import HeroProfile from "../components/HeroProfile";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
      {/* 🔹 Floating Sidebar - beside main container */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 z-30">
        <SideBar />
      </div>

      {/* 🔹 Main centered container */}
      <div className="relative w-full max-w-6xl h-[85vh] bg-white rounded-xl shadow-md flex overflow-hidden">
        {/* Left fixed Hero section */}
        <div className="w-[40%] flex justify-center items-center bg-transparent relative z-10">
          <HeroProfile />
        </div>

        {/* Right scrollable content area */}
        <div className="w-[60%] flex flex-col overflow-hidden relative py-8">
          <div className="flex-1 overflow-y-auto ">
            <Outlet />
            <div className="h-12" /> {/* keep bottom padding while scrolling */}
          </div>

          {/* Optional subtle bottom fade for elegance */}
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
