import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

// Frontend and Backend tech arrays
const frontEndTech = [
  "React",
  "TailwindCSS",
  "Bootstrap",
  "Next.js",
  "Firebase",
  "Firestore",
  "Vue",
  "Redux",
];
const backEndTech = [
  "Node.js",
  "Express.js",
  "Sequelize",
  "PostgreSQL",
  "PG",
  "MongoDB",
];

// Badge colors
const badgeColor = {
  front: "bg-blue-100 text-blue-800",
  back: "bg-green-100 text-green-800",
  other: "bg-gray-100 text-gray-800",
};

const WorkCard = ({ project }) => {
  const handleClick = () => {
    const techBadges = project.techStack
      .map((tech) => {
        const category = frontEndTech.includes(tech)
          ? "front"
          : backEndTech.includes(tech)
          ? "back"
          : "other";
        return `<span class="inline-block ${badgeColor[category]} text-xs font-medium mr-1 mb-1 px-2.5 py-0.5 rounded">${tech}</span>`;
      })
      .join(" ");

    const gridDetails = `
      <div class="grid grid-cols-2 gap-4 mt-3 text-sm">
        <div><strong>Duration:</strong><br/>${project.duration}</div>
        <div><strong>Roles:</strong><br/>${project.roles}</div>
        <div><strong>Client:</strong><br/>${project.client}</div>
        <div><strong>Category:</strong><br/>${project.category}</div>
        <div class="col-span-2"><strong>GitHub:</strong> <a href="${project.github}" target="_blank" class="text-blue-600 underline">View Repo</a></div>
        <div class="col-span-2"><strong>Live Demo:</strong> <a href="${project.liveDemo}" target="_blank" class="text-blue-600 underline">Visit</a></div>
      </div>
    `;

    MySwal.fire({
      title: project.title,
      html: `
        <img src="${project.image}" alt="${project.title}" class="w-full h-40 object-cover rounded mb-4" />
        <div class="mb-2">${techBadges}</div>
        <p class="text-sm mb-3">${project.description}</p>
        ${gridDetails}
      `,
      showCloseButton: true,
      showConfirmButton: false,
      width: 500,
      customClass: {
        htmlContainer: "text-left",
      },
    });
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{project.title}</h3>

        {/* Tech badges with color by Front/Back */}
        <div className="flex flex-wrap gap-1 mt-1 overflow-hidden whitespace-nowrap text-ellipsis">
          {project.techStack.map((tech, index) => {
            const category = frontEndTech.includes(tech)
              ? "front"
              : backEndTech.includes(tech)
              ? "back"
              : "other";
            return (
              <span
                key={index}
                className={`${badgeColor[category]} text-xs font-medium px-2.5 py-0.5 rounded`}
              >
                {tech}
              </span>
            );
          })}
        </div>

        {/* Description */}
        <p className="text-sm mt-2 line-clamp-3">{project.description}</p>
      </div>
    </div>
  );
};

export default WorkCard;
