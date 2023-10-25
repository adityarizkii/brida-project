import React from "react";
import dataJSON from "@/data/tes.json";

const NewsPageBeta = () => {
  return (
    <div>
      <div className="grid grid-cols-2 grid-rows-3 gap-4 bg-green-200 p-4">
        {dataJSON.map((data, index) => (
          <div
            className={`rows-span-3 bg-red-200 ${
              index % 4 === 0 ? "row-span-3" : ""
            }`}
          >
            {data.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPageBeta;
