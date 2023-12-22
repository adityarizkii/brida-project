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
    <div className="flex w-full gap-6">
      <div className="relative h-full w-[188px]">
        <Image src={img} alt="burung" fill className="object-cover" />
      </div>
      <div className="w-[376px]">
        <h3 className="text-xl font-semibold text-neutral950">{title}</h3>
        <h4 className="my-4 text-lg font-semibold text-neutral950">{year}</h4>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-info"
        >
          Baca Selengkapnya
        </a>
      </div>
    </div>
  );
};

export default SmallCard;
