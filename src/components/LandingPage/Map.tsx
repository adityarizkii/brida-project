import Image from "next/image";
import React from "react";

const Map = () => {
  return (
    <div className="mb-16">
      <h1 className="mb-6 text-center text-2xl font-semibold text-neutral950 md:text-[32px] lg:text-4xl">
        Peta Satwa
      </h1>
      <div className="flex justify-center">
        <Image src={"/map2.svg"} alt="map" width={1030} height={451}></Image>
      </div>
    </div>
  );
};

export default Map;
