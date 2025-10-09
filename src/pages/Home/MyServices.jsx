import React from "react";
import { TextStyles } from "../../components";
import { Code, Smartphone, Building2, Palette } from "lucide-react";

const services = [
  {
    icon: <Code className="w-8 h-8 text-green-700" />,
    title: "Web Application",
    desc: "I develop modern and scalable web applications with a strong focus on performance and clean architecture. My approach combines efficiency, responsive design, and user-friendly interfaces. Each project is built using the latest JavaScript frameworks to ensure long-term stability and maintainability.",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-green-700" />,
    title: "Mobile Applications",
    desc: "I build fast and responsive Android applications that deliver a smooth user experience. Using React Native and modern design principles, I focus on creating mobile apps that are lightweight and easy to use. (Currently supporting Android only — iOS coming soon! 😄)",
  },
  {
    icon: <Building2 className="w-8 h-8 text-green-700" />,
    title: "Company Profile",
    desc: "I design professional and elegant company profile websites that help businesses stand out online. The layouts are clean, optimized for SEO, and easily manageable. My goal is to make your company look credible, modern, and trustworthy on the web.",
  },
  {
    icon: <Palette className="w-8 h-8 text-green-700" />,
    title: "UI / UX",
    desc: "I craft intuitive user interfaces with an emphasis on usability and visual harmony. Every layout is carefully designed to make navigation simple and enjoyable. From wireframes to final designs, I ensure a balance between functionality and aesthetic appeal.",
  },
];

const MyServices = () => {
  return (
    <div className="px-6 py-8">
      {/* Section Title */}
      <TextStyles text="My Services" />

      {/* Grid Section */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition"
          >
            {/* Circle with Icon */}
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-200/50 shrink-0">
              {service.icon}
            </div>

            {/* Text Content */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyServices;
