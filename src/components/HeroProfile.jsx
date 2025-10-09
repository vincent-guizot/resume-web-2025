import React from "react";
import {
  FaGithub,
  FaDribbble,
  FaBehance,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Profile = () => {
  return (
    <div className="relative bg-white shadow-lg rounded-xl overflow-hidden w-80 h-[480px] flex flex-col text-center z-20">
      {/* Top 60% */}
      <div className="h-[60%] flex justify-center items-center bg-gradient-to-b from-gray-200 to-white">
        <img
          src="https://via.placehold.co/150"
          alt="Profile"
          className="w-32 h-32 object-cover"
        />
      </div>

      {/* Middle 30% */}
      <div className="h-[30%] flex flex-col justify-center items-center space-y-2">
        <h2 className="text-lg font-bold">Vincent Sadino Guizot</h2>
        <p className="text-gray-500 italic text-sm">Full Stack Developer</p>

        <div className="flex justify-center gap-3 text-gray-600 mt-2">
          <a href="#" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-black transition" size={18} />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <FaDribbble className="hover:text-pink-500 transition" size={18} />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <FaBehance className="hover:text-blue-500 transition" size={18} />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-blue-700 transition" size={18} />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <FaInstagram className="hover:text-rose-500 transition" size={18} />
          </a>
        </div>
      </div>

      {/* Bottom 10% */}
      <div className="h-[10%] flex justify-center items-center border-t border-gray-200/50 py-2">
        <button className="border-gray-400/40 text-gray-700 py-2 px-5 rounded-md font-medium bg-transparent hover:bg-blue-600 hover:text-white transition-all duration-300">
          Download CV
        </button>
      </div>
    </div>
  );
};

// 🔹 Background Layer (now clearly top-left)
const ProfileBG = () => {
  return (
    <div className="absolute -top-3 -left-3 w-80 h-[480px] bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl shadow-xl z-10"></div>
  );
};

// 🔹 Main Wrapper (Layered Look)
const HeroProfile = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 relative">
      <div className="relative">
        <ProfileBG />
        <Profile />
      </div>
    </div>
  );
};

export default HeroProfile;
