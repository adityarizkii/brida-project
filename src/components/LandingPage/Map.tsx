import Image from "next/image";
import Link from "next/link";
import React from "react";

const Map = () => {
  return (
    <div className="mb-16 grid grid-cols-3">
      <div
        className="relative col-span-3 flex h-[143px] items-center justify-center md:h-[375px] lg:col-span-2 lg:h-[335px]"
        data-aos="zoom-in"
        data-aos-duration="700"
      >
        <div className="relative h-full w-full">
          <Image
            src={"/map2.jpg"}
            alt="map"
            fill
            style={{ objectFit: "fill" }}
            sizes="(min-width: 1040px) calc(66.68vw - 134px), calc(100vw - 32px)"
          />
          <div className="absolute bottom-0 top-0 w-full bg-gray-900 opacity-50"></div>
        </div>
        <Link
          href="/map"
          className="absolute rounded-md bg-primary px-4 py-2 font-medium text-white duration-200 hover:bg-primaryHover md:px-6 md:py-4 lg:rounded-lg lg:px-7 lg:py-5 lg:text-xl"
        >
          Lihat Peta
        </Link>
      </div>
      <div className="hidden pl-10 pt-10 lg:block" data-aos="fade-left">
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
