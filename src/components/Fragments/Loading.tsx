import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 z-30 flex h-full w-full items-center justify-center overflow-hidden bg-white opacity-80">
      <Image
        src={"/circle.svg"}
        alt="loading circle"
        width={200}
        height={200}
        className="animate-spin"
      />
    </div>
  );
};

export default Loading;
