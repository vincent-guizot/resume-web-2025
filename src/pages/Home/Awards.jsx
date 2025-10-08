import React from "react";
import { TextStyles } from "../../components";

const Awards = () => {
  const awards = [
    {
      title: "Best of the Best Mentor",
      org: "Binus University",
      year: "2012 / 2013",
    },
    {
      title: "Web Design Course",
      org: "Dumet School",
      year: "2017",
    },
    {
      title: "Immersive Full Stack Bootcamp",
      org: "Hacktiv8",
      year: "2020",
    },
  ];

  return (
    <div className="my-10 px-4">
      <TextStyles text={"Awards"} />

      <div className="max-w-2xl mx-auto mt-8 bg-white rounded-2xl shadow p-6">
        {awards.map((award, index) => (
          <div key={index}>
            <div className="py-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {award.title}
              </h3>
              <p className="text-gray-600">{award.org}</p>
              <p className="text-sm text-gray-500">{award.year}</p>
            </div>

            {/* Divider except last one */}
            {index !== awards.length - 1 && (
              <hr className="border-gray-300 opacity-40" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
