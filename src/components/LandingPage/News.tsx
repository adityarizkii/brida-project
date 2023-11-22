import Link from "next/link";
import React from "react";

const News = () => {
  return (
    <div className="mb-16">
      <h1 className="mb-6 text-center text-2xl font-semibold text-neutral950 md:mb-9 md:text-4xl">
        Berita Satwa NTB
      </h1>
      <div className="mb-9 grid gap-7 md:mb-10 md:grid-cols-2 md:px-7 lg:grid-cols-3 lg:gap-y-11">
        {/* card */}
        <div
          className="card mx-auto max-w-[300px] rounded-lg border shadow-xl md:max-w-[336px] lg:max-w-[370px]"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="100"
        >
          <div className="rounded-lg">
            <img src="/burung.png" alt="burung" />
          </div>
          <div className="p-4">
            <span className="mb-2 text-sm font-medium text-blue-500">
              25 Apr 2023
            </span>
            <h2 className="mb-4 font-semibold text-neutral950">
              Perburuan liar terjadi di Dompu menyebabkan burung turu
            </h2>
            <span className="font-semibold text-blue-500">
              Baca Selengkapnya
            </span>
          </div>
        </div>
        <div
          className="card mx-auto max-w-[300px] rounded-lg border shadow-xl md:max-w-[336px] lg:max-w-[370px]"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="300"
        >
          <div className="rounded-lg">
            <img src="/burung.png" alt="burung" />
          </div>
          <div className="p-4">
            <span className="mb-2 text-sm font-medium text-blue-500">
              25 Apr 2023
            </span>
            <h2 className="mb-4 font-semibold text-neutral950">
              Perburuan liar terjadi di Dompu menyebabkan burung turu
            </h2>
            <span className="font-semibold text-blue-500">
              Baca Selengkapnya
            </span>
          </div>
        </div>
        <div
          className="card mx-auto max-w-[300px] rounded-lg border shadow-xl md:max-w-[336px] lg:max-w-[370px]"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="500"
        >
          <div className="rounded-lg">
            <img src="/burung.png" alt="burung" />
          </div>
          <div className="p-4">
            <span className="mb-2 text-sm font-medium text-blue-500">
              25 Apr 2023
            </span>
            <h2 className="mb-4 font-semibold text-neutral950">
              Perburuan liar terjadi di Dompu menyebabkan burung turu
            </h2>
            <span className="font-semibold text-blue-500">
              Baca Selengkapnya
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          href={"/news"}
          className="rounded-md border border-primary px-4 py-1.5 text-primary duration-200 hover:bg-primaryHover hover:text-white lg:px-8 lg:py-3.5 lg:text-2xl"
        >
          Selengkapnya
        </Link>
      </div>
    </div>
  );
};

export default News;
