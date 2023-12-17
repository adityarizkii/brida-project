import React from "react";

type PropsType = {
  dataAos: string;
  dataAosDelay: string;
  name: string;
  score: number;
  position: number;
};
const ScoreBar = ({
  dataAos = "",
  dataAosDelay = "",
  score,
  name,
  position,
}: PropsType) => {
  return (
    <div
      className="flex justify-between rounded-md border border-[#E5E5E7] bg-[#F8F9FB] p-3 text-black950"
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
    >
      <span>
        {position}. {name}
      </span>
      <span>{score}</span>
    </div>
  );
};

export default ScoreBar;
