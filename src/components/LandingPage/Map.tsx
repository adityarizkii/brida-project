import Image from "next/image";
import Link from "next/link";
import React from "react";

const Map = () => {
  return (
    <div className="mb-16 grid grid-cols-3">
      <div
        className="relative col-span-2 flex h-[335px] items-center justify-center"
        data-aos="zoom-in"
        data-aos-duration="700"
      >
        <div className="relative h-full w-full">
          <Image
            src={"/map2.jpg"}
            alt="map"
            fill
            style={{ objectFit: "fill" }}
          />
          <div className="absolute bottom-0 top-0 w-full bg-gray-900 opacity-50"></div>
        </div>
        <Link
          href="/map"
          className="absolute rounded-lg bg-primary px-7 py-5 text-xl font-bold text-white duration-200 hover:bg-primaryHover"
        >
          Lihat Peta
        </Link>
      </div>
      <div className="pl-10 pt-10" data-aos="fade-left">
        <h1 className="mb-6 text-center text-xl font-semibold text-neutral950 md:text-[32px] lg:text-4xl">
          Peta Satwa
        </h1>
        <p className="text-center text-sm">
          Yuk, jangan lewatkan kesempatan untuk menjelajahi kekayaan satwa Nusa
          Tenggara Barat! Temukan pesona satwa NTB di peta ini. Segera buka peta
          satwa NTB di website kami dan mulailah petualanganmu! Jadilah bagian
          dari perlindungan satwa NTB!
        </p>
      </div>
    </div>
  );
};

export default Map;
