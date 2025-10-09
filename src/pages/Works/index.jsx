import React from "react";
import WorkCard from "./WorkCard";
import { TextStyles } from "../../components";

const works = [
  {
    id: 1,
    title: "Portfolio Website",
    techStack: ["React", "TailwindCSS"],
    image: "/images/work1.png",
    duration: "1 weeks",
    description:
      "This is my personal portfolio website designed to showcase my projects and skills. It features responsive layouts and smooth animations. The website also includes a contact form for potential clients to reach out.",
    roles: "Frontend Developer",
    client: "Self",
    github: "https://github.com/vincent-guizot/resume-web-2025",
    liveDemo: "https://vincentguizot.com",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Protein Shack",
    techStack: ["React", "Redux", "Node.js", "PostgreSQL"],
    image: "/images/work2.png",
    duration: "1 month",
    description:
      "An online shop platform with user authentication and payment integration. Customers can browse products, add them to a cart, and checkout securely. Admins can manage products, track orders, and view analytics.",
    roles: "Full Stack Developer",
    client: "Self",
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
    description:
      "A full-featured blogging platform where users can create, edit, and delete posts. It supports user authentication and role-based access. Readers can leave comments and interact with posts in real-time.",
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
    description:
      "A dashboard application to monitor user activity and engagement on social media. It provides analytics charts and real-time updates. Users can filter and export data to make data-driven decisions.",
    roles: "Frontend Developer",
    client: "Self",
    github: "https://github.com/vincent/social-dashboard",
    liveDemo: "https://dashboard-demo.com",
    category: "Dashboard",
  },
  {
    id: 5,
    title: "Task Manager App",
    techStack: ["Vue", "Node.js", "MySQL"],
    image: "/images/work5.png",
    duration: "2 weeks",
    description:
      "A collaborative task management tool designed for teams. Users can create tasks, assign them to team members, and track progress. The app also sends notifications for upcoming deadlines.",
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
    description:
      "A real-time chat application that supports private and group messaging. Users can send text, images, and emojis. The app ensures instant delivery and reliable message storage.",
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
    description:
      "An app that displays current weather conditions and a 7-day forecast. Users can search by city or use geolocation for automatic detection. The app also shows detailed metrics like humidity, wind speed, and sunrise/sunset times.",
    roles: "Frontend Developer",
    client: "Self",
    github: "https://github.com/vincent/weather-app",
    liveDemo: "https://weather-demo.com",
    category: "Utility App",
  },
];

const Works = () => {
  return (
    <>
      <TextStyles text={"My Works"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {works.map((project) => (
          <WorkCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export default Works;
