import React from "react";

const QuizNumber = ({ children }: { children: string }) => {
  return (
    <div className="h-[70px] w-[60px] overflow-hidden rounded-md border-2 border-neutral950 bg-neutral-400">
      <div className="h-[35px] bg-white text-center text-2xl font-semibold">
        <span>{children}</span>
      </div>
    </div>
  );
};

export default QuizNumber;
