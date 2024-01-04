import Image from "next/image";
import Link from "next/link";
import React from "react";

type PropsType = {
  img: string;
  title: string;
  url: string;
  year: string;
};

const SmallCard = ({ img, title, url, year }: PropsType) => {
  return (
    <div className="flex w-[300px] gap-4 overflow-hidden rounded-lg shadow-sm shadow-gray-400 lg:w-full lg:gap-6">
      <div className="relative h-full w-[200px]">
        <Image src={img} alt="burung" fill className="object-cover" />
      </div>
      <div className="w-[376px] p-3 pl-0">
        <h3 className="text-sm font-semibold text-neutral950 lg:text-xl">
          {title}
        </h3>
        <h4 className="my-3 text-xs font-semibold text-blue-500 lg:my-4 lg:text-lg">
          {year}
        </h4>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-info lg:text-base"
        >
          Baca Selengkapnya
        </a>
      </div>
    </div>
  );
};

export default SmallCard;
