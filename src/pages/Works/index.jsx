import React from "react";
import WorkCard from "./WorkCard";

const works = [
  {
    id: 1,
    title: "Portfolio Website",
    techStack: ["React", "TailwindCSS"],
    image: "/images/work1.png",
    duration: "2 weeks",
    description: "Personal portfolio to showcase projects.",
    roles: "Frontend Developer",
    client: "Self",
    github: "https://github.com/vincent/portfolio",
    liveDemo: "https://vincent-portfolio.com",
    category: "Web Development",
  },
  {
    id: 2,
    title: "E-commerce App",
    techStack: ["React", "Redux", "Node.js", "PostgreSQL"],
    image: "/images/work2.png",
    duration: "1 month",
    description: "Online shop with authentication and payment.",
    roles: "Full Stack Developer",
    client: "Shopify Clone",
    github: "https://github.com/vincent/ecommerce",
    liveDemo: "https://ecommerce-demo.com",
    category: "Web Application",
  },
  {
    id: 3,
    title: "Blog Platform",
    techStack: ["Next.js", "MongoDB"],
    image: "/images/work3.png",
    duration: "3 weeks",
    description: "Blogging platform with CRUD functionality.",
    roles: "Frontend & Backend Developer",
    client: "Self",
    github: "https://github.com/vincent/blog-platform",
    liveDemo: "https://blog-demo.com",
    category: "Web Application",
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    techStack: ["React", "Firebase"],
    image: "/images/work4.png",
    duration: "2 weeks",
    description: "Dashboard to track user analytics.",
    roles: "Frontend Developer",
    client: "Self",
    github: "https://github.com/vincent/social-dashboard",
    liveDemo: "https://dashboard-demo.com",
    category: "Dashboard",
  },
  {
    id: 5,
    title: "Task Manager App",
    techStack: ["Vue.js", "Node.js", "MySQL"],
    image: "/images/work5.png",
    duration: "2 weeks",
    description: "Task management tool for teams.",
    roles: "Full Stack Developer",
    client: "Team Tools",
    github: "https://github.com/vincent/task-manager",
    liveDemo: "https://task-demo.com",
    category: "Web Application",
  },
  {
    id: 6,
    title: "Chat Application",
    techStack: ["React", "Socket.io", "Node.js"],
    image: "/images/work6.png",
    duration: "3 weeks",
    description: "Real-time chat for private and group messages.",
    roles: "Full Stack Developer",
    client: "Self",
    github: "https://github.com/vincent/chat-app",
    liveDemo: "https://chat-demo.com",
    category: "Communication App",
  },
  {
    id: 7,
    title: "Weather App",
    techStack: ["React", "OpenWeather API"],
    image: "/images/work7.png",
    duration: "1 week",
    description: "Shows current weather and forecast.",
    roles: "Frontend Developer",
    client: "Self",
    github: "https://github.com/vincent/weather-app",
    liveDemo: "https://weather-demo.com",
    category: "Utility App",
  },
];

const Works = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {works.map((project) => (
        <WorkCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Works;
