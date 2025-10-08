import React, { useState, useEffect } from "react";
import { TextStyles } from "../../components";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Helen Floyd",
      position: "Art Director",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/assets/testimonial1.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Startup Founder",
      message:
        "Working with this developer was an amazing experience. Communication was clear, and delivery exceeded expectations.",
      image: "/assets/testimonial2.jpg",
    },
    {
      id: 3,
      name: "Aisyah Rahma",
      position: "Product Manager",
      message:
        "The project turned out beautifully — user-friendly, modern, and fast. Would definitely collaborate again in the future!",
      image: "/assets/testimonial3.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="my-10 px-4 text-center">
      <TextStyles text={"Testimonials"} />

      <div className="max-w-3xl mx-auto mt-10">
        <p className="italic text-gray-600 text-lg md:text-xl">
          <span className="text-3xl text-gray-400 align-middle mr-2">“</span>
          {testimonials[current].message}
          <span className="text-3xl text-gray-400 align-middle ml-2">”</span>
        </p>

        <div className="mt-8 flex flex-col items-center">
          <img
            src={testimonials[current].image || "/assets/no-profile.png"}
            alt={testimonials[current].name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <h4 className="mt-4 font-semibold text-lg text-gray-800">
            {testimonials[current].name}
          </h4>
          <p className="text-gray-500 text-sm">
            {testimonials[current].position}
          </p>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                current === index ? "bg-green-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
