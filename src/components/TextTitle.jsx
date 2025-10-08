import React from "react";

const TextTitle = ({ text }) => {
  return (
    <div className="relative flex items-center gap-2">
      {/* Circle */}
      <div className="w-6 h-6 rounded-full bg-green-200/60 absolute -left-3"></div>

      {/* Text */}
      <h2 className="text-2xl font-semibold text-gray-800 relative">{text}</h2>
    </div>
  );
};

export default TextTitle;
