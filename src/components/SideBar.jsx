import { NavLink } from "react-router-dom";
import { Home, FileText, Briefcase, Image, Mail } from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "Resume", path: "/resume", icon: FileText },
  { name: "Works", path: "/works", icon: Briefcase },
  { name: "Galleries", path: "/galleries", icon: Image },
  { name: "Contact", path: "/contact", icon: Mail },
];

const SideBar = () => {
  const baseStyle =
    "flex flex-col items-center gap-1 transition-all duration-200 text-sm";
  const activeStyle = "text-blue-600 scale-110 font-semibold";
  const inactiveStyle = "text-gray-500 hover:text-blue-600 hover:scale-105";

  return (
    <nav className="flex flex-col items-center gap-6 bg-white rounded-2xl shadow-md px-4 py-6">
      {navItems.map(({ name, path, icon: Icon }) => (
        <NavLink key={path} to={path} end>
          {({ isActive }) => (
            <div
              className={`${baseStyle} ${
                isActive ? activeStyle : inactiveStyle
              }`}
            >
              <Icon className="w-6 h-6" />
              <span>{name}</span>
            </div>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default SideBar;
