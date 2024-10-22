import Image from "next/image";
import React from "react";

const CustomMarker = ({ pathImg }: { pathImg: string }) => {
  return (
    <div className="h-[55px] w-[105px]" data-aos="zoom-in-up">
      <div className="h-full w-full rounded-md bg-white p-2">
        <div className="relative h-full w-full">
          <Image src={pathImg} alt="img" fill style={{ objectFit: "cover" }} />
        </div>
      </div>
      <div className="mx-auto h-0 w-0 border-x-[20px] border-t-[15px] border-solid border-transparent border-t-white"></div>
    </div>
  );
};

export default CustomMarker;
