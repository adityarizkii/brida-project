import React, { useEffect, useState } from "react";

const Timer = ({ seconds }: { seconds: number }) => {
  const [timeLeft, setTimeLeft] = useState<number>(seconds);
  const [toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
    if (timeLeft === 0) return;

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
    <div>
      <p>{formatTime(timeLeft)}</p>
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "true" : "false"}
      </button>
    </div>
  );
};

export default Timer;
