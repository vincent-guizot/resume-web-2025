import { NavLink } from "react-router-dom";
import { Home, FileText, Briefcase, Image, Mail } from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "Resume", path: "/resume", icon: FileText },
  { name: "Works", path: "/works", icon: Briefcase },
  { name: "Galleries", path: "/galleries", icon: Image },
  { name: "Contact", path: "/contact", icon: Mail },
];

const SideBar = ({ isMobile = false }) => {
  const baseStyle =
    "flex flex-col items-center gap-1 transition-all duration-200 text-sm";
  const activeStyle = "text-blue-600 scale-110 font-semibold";
  const inactiveStyle = "text-gray-500 hover:text-blue-600 hover:scale-105";

  return (
    <nav
      className={`flex ${
        isMobile ? "flex-row justify-around w-full" : "flex-col gap-6 px-4 py-6"
      } items-center bg-white rounded-2xl shadow-md`}
    >
      {navItems.map(({ name, path, icon: Icon }) => (
        <NavLink key={path} to={path} end>
          {({ isActive }) => (
            <div
              className={`${baseStyle} ${
                isActive ? activeStyle : inactiveStyle
              } ${isMobile ? "flex-col md:flex-col" : ""}`}
            >
              <Icon className="w-6 h-6" />
              {!isMobile && <span>{name}</span>}
            </div>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default SideBar;
