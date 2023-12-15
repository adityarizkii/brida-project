import Timer from "@/components/Fragments/Timer";
import React from "react";

const TesTimerPage = () => {
  return (
    <div className="p-4">
      <h1>timer</h1>
      <Timer seconds={10} />
    </div>
  );
};

export default TesTimerPage;
