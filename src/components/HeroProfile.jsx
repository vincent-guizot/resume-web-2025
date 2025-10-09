import React from "react";
import {
  FaGithub,
  FaDribbble,
  FaBehance,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import pict from "/image/7.png";

const socialLinks = [
  { icon: FaGithub, url: "https://github.com/yourusername" },
  { icon: FaDribbble, url: "https://dribbble.com/yourusername" },
  { icon: FaBehance, url: "https://www.behance.net/yourusername" },
  { icon: FaLinkedin, url: "https://www.linkedin.com/in/yourusername" },
  { icon: FaInstagram, url: "https://www.instagram.com/yourusername" },
];

const Profile = () => {
  return (
    <div className="relative bg-white shadow-md rounded-lg w-full h-[640px] flex flex-col text-center z-20 overflow-hidden">
      {/* Top 60% */}
      <div className="h-[60%] flex justify-center items-end rounded-lg bg-gray-100">
        <img
          src={pict}
          alt="Profile"
          className="w-72 h-72 object-cover object-bottom"
        />
      </div>

      {/* Middle 30% */}
      <div className="h-[30%] flex flex-col justify-center items-center space-y-1">
        <h2 className="text-2xl font-bold text-gray-800">
          Vincent Sadino Guizot
        </h2>
        <p className="text-gray-500 italic text-sm">Full Stack Developer</p>

        <div className="flex justify-center gap-3 text-gray-600 mt-2">
          {socialLinks.map(({ icon: Icon, url }, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-transform hover:scale-110"
            >
              <Icon size={18} className="cursor-pointer" />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom 10% */}
      <div className="h-[10%] flex justify-center items-center border-t border-gray-200/60">
        <a
          href="https://drive.google.com/file/d/16IoxtmVzBgf_phZv7FMP5cFsucnk3N2W/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="uppercase text-gray-700 py-2 px-5 rounded-md font-semibold bg-transparent hover:text-blue-600 transition-all duration-300"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

const ProfileBG = () => {
  return (
    <div className="absolute -top-3 -left-3 w-full h-[640px] bg-gradient-to-br from-blue-700 to-blue-800 rounded-lg shadow z-10 md:block hidden"></div>
  );
};

const HeroProfile = () => {
  return (
    <div className="relative w-full flex justify-center items-center">
      <ProfileBG />
      <Profile />
    </div>
  );
};

export default HeroProfile;
