import React from "react";

type PropsType = {
  children: string;
  status?: string;
  onClick: (idx: number) => void;
  toIndex: number;
  isActive?: boolean;
};

const QuizNumber = ({
  status = "unfilled",
  children,
  toIndex,
  onClick,
  isActive,
}: PropsType) => {
  let bgcolor;

  if (status == "filled") {
    bgcolor = "bg-neutral-400";
  } else if (status == "correct") {
    bgcolor = "bg-green-200";
  } else if (status == "wrong") {
    bgcolor = "bg-red-200";
  } else {
    bgcolor = "bg-neutral-300";
  }

  return (
    <div
      className={`h-[40px] w-8 overflow-hidden rounded-md border-2 lg:h-[60px] lg:w-[50px] ${bgcolor} hover:cursor-pointer ${
        isActive ? "border-neutral-900" : "border-neutral-500"
      }`}
      onClick={() => {
        onClick(toIndex);
      }}
    >
      <div className="h-5 bg-white text-center text-xs font-semibold lg:h-[35px] lg:text-xl">
        <span>{children}</span>
      </div>
    </div>
  );
};

export default QuizNumber;
