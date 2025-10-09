import React from "react";
import { TextStyles } from "../../components";
import { FaReact, FaNodeJs, FaBootstrap, FaDatabase } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiPostgresql,
  SiSequelize,
} from "react-icons/si";

const MySkills = () => {
  const skills = [
    {
      category: "Front-End",
      items: [
        {
          name: "React.js",
          icon: <FaReact className="text-sky-500 text-3xl" />,
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-gray-800 text-3xl" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-cyan-500 text-3xl" />,
        },
        {
          name: "Bootstrap",
          icon: <FaBootstrap className="text-purple-600 text-3xl" />,
        },
        {
          name: "Firebase",
          icon: <SiFirebase className="text-yellow-500 text-3xl" />,
        },
      ],
    },
    {
      category: "Back-End",
      items: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-green-600 text-3xl" />,
        },
        {
          name: "Express.js",
          icon: <FaNodeJs className="text-gray-700 text-3xl" />,
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-blue-700 text-3xl" />,
        },
        {
          name: "Sequelize",
          icon: <SiSequelize className="text-indigo-600 text-3xl" />,
        },
      ],
    },
  ];

  return (
    <div className=" ">
      <TextStyles text={"My Skills"} />

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {skills.map((group, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md p-6 transition-all duration-300 hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
              {group.category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {group.items.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center bg-gray-50 rounded-xl py-4 hover:bg-green-50 transition duration-300"
                >
                  {skill.icon}
                  <p className="mt-2 font-medium text-gray-700">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
