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
    <div className="relative bg-white shadow-lg rounded-2xl overflow-hidden w-80 h-[480px] flex flex-col text-center z-20">
      {/* Top 60% */}
      <div className="h-[60%] flex justify-center items-center bg-gradient-to-b from-gray-200 to-white">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
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
      <div className="h-[10%] flex justify-center items-center border-t">
        <button className="bg-blue-600 text-white py-2 px-5 rounded-xl font-medium hover:bg-blue-700 transition">
          Download CV
        </button>
      </div>
    </div>
  );
};

// 🔹 Background Layer
const ProfileBG = () => {
  return (
    <div className="absolute top-6 left-6 w-80 h-[480px] bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-xl z-10"></div>
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
