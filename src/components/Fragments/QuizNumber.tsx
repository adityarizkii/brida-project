import React from "react";

type PropsType = {
  children: string;
  status?: string;
  onClick: (idx: number) => void;
  toIndex: number;
  isActive: boolean;
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
      className={`h-[70px] w-[60px] overflow-hidden rounded-md border-2 ${bgcolor} hover:cursor-pointer ${
        isActive ? "border-neutral-900" : "border-neutral-500"
      }`}
      onClick={() => {
        onClick(toIndex);
      }}
    >
      <div className="h-[35px] bg-white text-center text-2xl font-semibold">
        <span>{children}</span>
      </div>
    </div>
  );
};

export default QuizNumber;
