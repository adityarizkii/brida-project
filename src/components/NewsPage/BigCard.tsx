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
    <div className="rounded-xl">
      <div className="relative h-[314px] w-full rounded-lg">
        <Image src={img} alt="burung" fill className="object-cover" />
      </div>
      <div className="p-4 pl-0">
        <span className="mb-2 inline-block text-sm font-medium text-blue-500">
          {year}
        </span>
        <h2 className="mb-4 text-2xl font-semibold text-neutral950">{title}</h2>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-fit items-center gap-1.5 font-semibold text-info"
        >
          Baca Selengkapnya
        </a>
      </div>
    </div>
  );
};

export default BigCard;
