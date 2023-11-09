import Image from "next/image";
import Link from "next/link";
import React from "react";

const SmallCard = () => {
  return (
    <div className="flex w-full gap-6">
      <div className="relative h-full w-[188px]">
        <Image
          src={"/buru-kijang.png"}
          alt="burung"
          fill
          className="object-cover"
        />
      </div>
      <div className="w-[376px]">
        <h3 className="text-xl font-semibold text-neutral950">
          Perburuan liar terjadi di Dompu menyebabkan burung turu
        </h3>
        <h4 className="my-4 text-lg font-semibold text-neutral950">
          25 Apr 2023
        </h4>
        <Link href="/" className="font-semibold text-info">
          Baca Selengkapnya
        </Link>
      </div>
    </div>
  );
};

export default SmallCard;
