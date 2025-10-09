import React from "react";
import { TextStyles } from "../../components";
import { FaBriefcase } from "react-icons/fa";

const WorkExperience = () => {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "PT Silvertech Indonesia",
      period: "Mar 2025 - Aug 2025",
      description: `
        Develop and maintain web applications using front-end and back-end technologies.
        Design and implement responsive user interfaces with HTML, CSS, JavaScript, and React.
      `,
      stack: ["React.js", "Next.js", "Node.js", "Express.js", "PostgreSQL"],
    },
    {
      role: "Full Stack / Front End Instructor",
      company: "PT. Code Development Indonesia",
      period: "Jul 2021 - Jan 2025",
      description: `
        Conducted Full Stack JavaScript Bootcamp program covering front-end and back-end technologies.
        Designed and implemented responsive UIs using HTML, CSS, JavaScript, and React.
        Conducted training sessions on React.js, Redux, Firebase, Tailwind CSS, and Next.js.
        Evaluated student projects, provided feedback, and guided learners through coding challenges.
        Developed and updated course materials, tutorials, and project-based learning content.
      `,
      stack: [
        "React.js",
        "Redux",
        "Next.js",
        "Firebase",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
      ],
    },
    {
      role: "Front End Instructor",
      company: "Hacktiv8",
      period: "2021 - 2025 (Part-time)",
      description: `
        Conducted bootcamp sessions on front-end development using React and modern JavaScript.
        Mentored students in real-world project building, debugging, and code reviews.
        Delivered lessons and workshops on React, Redux, and best practices in software development.
      `,
      stack: ["React.js", "Redux", "Firebase", "JavaScript"],
    },
    {
      role: "Front End & UI/UX Designer",
      company: "Course Net Indonesia",
      period: "2017 - Now",
      description: `
        Designed and developed interactive web interfaces.
        Created wireframes, prototypes, and high-fidelity mockups using Figma and Adobe XD.
        Focused on modern, responsive design principles to deliver intuitive user experiences.
      `,
      stack: ["Figma", "Adobe XD", "React.js", "CSS3", "Tailwind CSS"],
    },
    {
      role: "Full Stack Developer",
      company: "PT Intikom Berlian Mustika",
      period: "Feb 2018 - Sep 2019",
      description: `
        Developed and maintained full-stack web applications.
        Built REST APIs using Node.js and Express, and connected them with PostgreSQL databases.
        Collaborated with teams to design scalable front-end systems using React.js.
      `,
      stack: ["Node.js", "Express.js", "PostgreSQL", "React.js", "Bootstrap"],
    },
  ];

  return (
    <div className="">
      <TextStyles text={"Work Experience"} />

      <div className="max-w-3xl mx-auto mt-8 relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-300 opacity-50"></div>

        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-12 mb-10">
            {/* Timeline icon */}
            <div className="absolute left-0 top-1 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shadow-sm">
              <FaBriefcase className="text-green-600" />
            </div>

            <h3 className="text-lg font-semibold text-gray-800">{exp.role}</h3>
            <p className="text-gray-600">{exp.company}</p>
            <p className="text-sm text-gray-500 mb-3">{exp.period}</p>

            <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              {exp.stack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
