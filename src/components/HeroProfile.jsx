import React from "react";
import {
  FaGithub,
  FaDribbble,
  FaBehance,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import pict from "../assets/7.png";

const Profile = () => {
  return (
    <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-80 h-[480px] flex flex-col text-center z-20">
      {/* Top 60% */}
      <div className="h-[60%] flex justify-center items-center bg-gray-100">
        <img src={pict} alt="Profile" className="w-full h-full object-cover" />
      </div>

      {/* Middle 30% */}
      <div className="h-[30%] flex flex-col justify-center items-center space-y-1">
        <h2 className="text-lg font-bold text-gray-800">
          Vincent Sadino Guizot
        </h2>
        <p className="text-gray-500 italic text-sm">Full Stack Developer</p>

        <div className="flex justify-center gap-3 text-gray-600 mt-2">
          {[FaGithub, FaDribbble, FaBehance, FaLinkedin, FaInstagram].map(
            (Icon, i) => (
              <Icon
                key={i}
                size={18}
                className="hover:text-blue-600 transition-transform hover:scale-110 cursor-pointer"
              />
            )
          )}
        </div>
      </div>

      {/* Bottom 10% */}
      <div className="h-[10%] flex justify-center items-center border-t border-gray-200/60">
        <button className="text-gray-700 py-2 px-5 rounded-md font-medium bg-transparent hover:bg-blue-600 hover:text-white transition-all duration-300">
          Download CV
        </button>
      </div>
    </div>
  );
};

// 🔹 Background Layer (subtle offset)
const ProfileBG = () => {
  return (
    <div className="absolute -top-2 -left-2 w-80 h-[480px] bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-lg z-10"></div>
  );
};

const HeroProfile = () => {
  return (
    <div className="relative flex justify-center items-center">
      <ProfileBG />
      <Profile />
    </div>
  );
};

export default HeroProfile;
