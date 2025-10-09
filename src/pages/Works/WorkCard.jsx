import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const WorkCard = ({ project }) => {
  const handleClick = () => {
    // Create badges HTML from techStack array
    const techBadges = project.techStack
      .map(
        (tech) =>
          `<span class="inline-block bg-blue-100 text-blue-800 text-xs font-medium mr-1 mb-1 px-2.5 py-0.5 rounded">${tech}</span>`
      )
      .join(" ");

    MySwal.fire({
      title: project.title,
      html: `
        <img src="${project.image}" alt="${project.title}" class="w-full h-40 object-cover mb-4 rounded" />
        <p><strong>Tech Stack:</strong> ${techBadges}</p>
        <p><strong>Duration:</strong> ${project.duration}</p>
        <p><strong>Description:</strong> ${project.description}</p>
        <p><strong>Roles:</strong> ${project.roles}</p>
        <p><strong>Client:</strong> ${project.client}</p>
        <p><strong>GitHub:</strong> <a href="${project.github}" target="_blank" class="text-blue-600 underline">View Repo</a></p>
        <p><strong>Live Demo:</strong> <a href="${project.liveDemo}" target="_blank" class="text-blue-600 underline">Visit</a></p>
        <p><strong>Category:</strong> ${project.category}</p>
      `,
      showCloseButton: true,
      showConfirmButton: false,
      width: 400,
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
        <div className="flex flex-wrap gap-1 mt-1">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
