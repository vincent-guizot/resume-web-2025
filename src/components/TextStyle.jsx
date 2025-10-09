import React from "react";

const TextStyle = ({ text }) => {
  return (
    <div className="relative w-full mb-8">
      {/* Text + Circle */}
      <div className="relative flex items-center gap-2 mb-2">
        {/* Circle */}
        <div className="w-6 h-6 rounded-full bg-green-200/60 absolute -left-3"></div>

        {/* Text */}
        <h2 className="text-2xl font-semibold text-gray-800 relative">
          {text}
        </h2>
      </div>

      {/* Gradient Line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-green-400/50 via-green-200 to-transparent rounded-full"></div>
    </div>
  );
};

export default TextStyle;
