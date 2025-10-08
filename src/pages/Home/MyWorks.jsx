import React from "react";
import { TextStyles } from "../../components";

const MyWorks = () => {
  const works = [
    {
      id: 1,
      title: "Company Profile Website",
      description:
        "A responsive company profile website built for a corporate client. Focused on showcasing brand identity, products, and achievements. Optimized for SEO and fast loading performance.",
      image: "/assets/work1.png",
      type: "Company",
      role: "Full Stack Developer",
      duration: "4 weeks",
      stack: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "PostgreSQL",
      ],
      link: "https://companyprofile.com",
      client: "PT. VisionTech Indonesia",
      year: 2024,
    },
    {
      id: 2,
      title: "E-Commerce Web App",
      description:
        "An online store platform featuring cart management, payment integration, and admin dashboards. Designed for smooth user experience and scalability.",
      image: "/assets/work2.png",
      type: "Freelance",
      role: "Front End Developer",
      duration: "6 weeks",
      stack: ["Next.js", "Firebase", "Tailwind CSS"],
      link: "https://shopverse.app",
      client: "ShopVerse",
      year: 2023,
    },
    {
      id: 3,
      title: "Mobile Android App",
      description:
        "Developed an Android app for service booking using React Native. The app integrates with Firebase for authentication and real-time data synchronization.",
      image: "/assets/work3.png",
      type: "Freelance",
      role: "Mobile Developer",
      duration: "5 weeks",
      stack: ["React Native", "Firebase"],
      link: "",
      client: "Freelance Client",
      year: 2023,
    },
    {
      id: 4,
      title: "Dashboard Analytics",
      description:
        "A modern dashboard for monitoring user activity and sales metrics. Built with chart visualizations and secure backend APIs.",
      image: "", // intentionally left empty for validation test
      type: "Company",
      role: "Full Stack Developer",
      duration: "3 weeks",
      stack: ["React.js", "Recharts", "Express.js", "Sequelize"],
      link: "",
      client: "DataVision Analytics",
      year: 2022,
    },
  ];

  return (
    <div className="my-10 px-4">
      <TextStyles text={"My Works"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {works.map((work) => (
          <div
            key={work.id}
            className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03]"
          >
            <img
              src={work.image || "/assets/no-image.png"}
              alt={work.title}
              className="w-full h-60 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
              <h3 className="font-semibold text-lg">{work.title}</h3>
              <p className="text-sm line-clamp-2">{work.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWorks;
