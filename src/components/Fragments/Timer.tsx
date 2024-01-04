import React, { useEffect, useState } from "react";

type PropsType = {
  seconds: number;
  setIsTimeLeft: any;
};

const Timer = ({ seconds, setIsTimeLeft }: PropsType) => {
  const [timeLeft, setTimeLeft] = useState<number>(seconds);

  useEffect(() => {
    if (timeLeft === 0) {
      setIsTimeLeft(false);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <p
      className={`w-10 font-medium lg:w-32 lg:text-xl ${
        timeLeft <= 10 ? "text-error" : ""
      } `}
    >
      <span className="mr-3 hidden lg:inline">Time : </span>
      {formatTime(timeLeft)}
    </p>
  );
};

export default Timer;
