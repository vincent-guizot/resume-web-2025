import React from "react";
import { TextStyles } from "../../components";

const AboutMe = () => {
  return (
    <div className="">
      <TextStyles text="About Me" />
      <div className="mt-2  space-y-4">
        <p className="text-gray-700 leading-relaxed">
          I’m a <span className="font-semibold">Full Stack Web Developer</span>{" "}
          based in <span className="font-semibold">Jakarta, Indonesia</span>,
          with over{" "}
          <span className="font-semibold">5 years of hands-on experience</span>{" "}
          building modern, scalable web applications. I focus on clean code,
          responsive design, and performance-driven solutions.
        </p>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            💻 Front-End Expertise
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              React.js & Next.js for dynamic and optimized user interfaces
            </li>
            <li>Tailwind CSS & Bootstrap for responsive, modern UI</li>
            <li>Firebase for authentication, hosting, and real-time data</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            ⚙️ Back-End Expertise
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              Node.js & Express.js for robust RESTful APIs and server logic
            </li>
            <li>
              PostgreSQL & Sequelize ORM for structured, efficient data
              management
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🚀 What I Deliver
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Full-cycle web development: from concept to deployment</li>
            <li>Reusable component-based architecture</li>
            <li>Clean UI/UX with focus on performance and accessibility</li>
            <li>Scalable, maintainable code with modern best practices</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🌏 Other Highlights
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Experienced in collaborating with cross-functional teams</li>
            <li>
              Strong understanding of OOP, MVC, and modern ES6+ JavaScript
            </li>
            <li>Passionate about mentoring and continuous learning</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
