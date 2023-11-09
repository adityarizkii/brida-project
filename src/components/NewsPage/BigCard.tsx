import Image from "next/image";
import React from "react";

const BigCard = () => {
  return (
    <div className="rounded-xl">
      <div className="relative h-[314px] w-full rounded-lg">
        <Image src="/burung.png" alt="burung" fill className="object-cover" />
      </div>
      <div className="p-4 pl-0">
        <span className="mb-2 inline-block text-sm font-medium text-blue-500">
          25 Apr 2023
        </span>
        <h2 className="mb-4 text-2xl font-semibold text-neutral950">
          Perburuan liar terjadi di Dompu menyebabkan burung turu
        </h2>
        <a
          href=""
          className="flex w-fit items-center gap-1.5 font-semibold text-info"
        >
          <span className="">Baca Selengkapnya</span>
        </a>
      </div>
    </div>
  );
};

export default BigCard;
