import React from "react";

type PropsType = {
  dataAos: string;
  dataAosDelay: string;
};
const ScoreBar = ({ dataAos = "", dataAosDelay = "" }: PropsType) => {
  return (
    <div
      className="flex justify-between rounded-md border border-[#E5E5E7] bg-[#F8F9FB] p-3 text-black950"
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
    >
      <span>1. Hermione</span>
      <span>100</span>
    </div>
  );
};

export default ScoreBar;
