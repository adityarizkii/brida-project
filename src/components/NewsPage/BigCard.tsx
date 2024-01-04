import Image from "next/image";
import Link from "next/link";
import React from "react";

type PropsType = {
  img: string;
  title: string;
  url: string;
  year: string;
};

const BigCard = ({ img, title, url, year }: PropsType) => {
  return (
    <div className="w-[300px] rounded-xl lg:w-full">
      <div className="relative h-[150px] rounded-lg lg:h-[314px]">
        <Image src={img} alt="burung" fill className="object-cover" />
      </div>
      <div className="p-4 pl-0">
        <span className="mb-2 inline-block text-xs font-medium text-blue-500 lg:text-sm">
          {year}
        </span>
        <h2 className="mb-4 font-semibold text-neutral950 lg:text-2xl">
          {title}
        </h2>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-fit items-center gap-1.5 text-sm font-semibold text-info lg:text-base"
        >
          Baca Selengkapnya
        </a>
      </div>
    </div>
  );
};

export default BigCard;
