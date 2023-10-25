import React from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { FaChevronDown, FaSearch, FaArrowRight } from "react-icons/fa";

const NewsPage = () => {
  return (
    <>
      <header className="flex flex-col items-center gap-6 mb-4 md:mb-16">
        <img src="/logo.svg" alt="logo" />
        <h1 className="text-2xl md:text-[32px] text-primary font-semibold">
          Berita Satwa NTB
        </h1>
      </header>
      <a
        href="/"
        className="flex items-center gap-3 mb-5 mr-auto font-semibold text-primary"
      >
        <div className="">
          <IoArrowBackCircleOutline></IoArrowBackCircleOutline>
        </div>
        <span>Kembali ke Halaman Utama</span>
      </a>
      <div className="flex mb-9">
        <div className="dropdown flex items-center gap-3 px-3.5 mb-3 py-1 w-fi border mx-auto">
          <span>Pilih Daerah</span>
          <FaChevronDown></FaChevronDown>
        </div>
        <div className="flex items-center px-3.5 py-1.5 gap-2 text-gray-400 bg-gray-100 w-fit mx-auto">
          <FaSearch></FaSearch>
          <input type="text" placeholder="Cari" className="bg-transparent" />
        </div>
      </div>
      {/* grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12 md:mb-[76px]">
        <div className="card max-w-[300px] md:max-w-full lg:max-w-[370px] mx-auto rounded-lg border shadow-xl">
          <div className="rounded-lg">
            <img src="/burung.png" alt="burung" />
          </div>
          <div className="p-4">
            <span className="inline-block mb-2 font-medium text-sm text-blue-500">
              25 Apr 2023
            </span>
            <h2 className="mb-4 font-semibold text-neutral950">
              Perburuan liar terjadi di Dompu menyebabkan burung turu
            </h2>
            <a
              href=""
              className="flex items-center gap-1.5 w-fit font-semibold text-info"
            >
              <span className="">Baca Selengkapnya</span>
              <FaArrowRight></FaArrowRight>
            </a>
          </div>
        </div>
        <div className="card max-w-[300px] md:max-w-full lg:max-w-[370px] mx-auto rounded-lg border shadow-xl">
          <div className="rounded-lg">
            <img src="/burung.png" alt="burung" />
          </div>
          <div className="p-4">
            <span className="inline-block mb-2 font-medium text-sm text-blue-500">
              25 Apr 2023
            </span>
            <h2 className="mb-4 font-semibold text-neutral950">
              Perburuan liar terjadi di Dompu menyebabkan burung turu
            </h2>
            <a
              href=""
              className="flex items-center gap-1.5 w-fit font-semibold text-info"
            >
              <span className="">Baca Selengkapnya</span>
              <FaArrowRight></FaArrowRight>
            </a>
          </div>
        </div>
        <div className="card max-w-[300px] md:max-w-full lg:max-w-[370px] mx-auto rounded-lg border shadow-xl">
          <div className="rounded-lg">
            <img src="/burung.png" alt="burung" />
          </div>
          <div className="p-4">
            <span className="inline-block mb-2 font-medium text-sm text-blue-500">
              25 Apr 2023
            </span>
            <h2 className="mb-4 font-semibold text-neutral950">
              Perburuan liar terjadi di Dompu menyebabkan burung turu
            </h2>
            <a
              href=""
              className="flex items-center gap-1.5 w-fit font-semibold text-info"
            >
              <span className="">Baca Selengkapnya</span>
              <FaArrowRight></FaArrowRight>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="px-4 py-1.5 text-primary border border-primary rounded-md lg:text-2xl md:px-6 md:py-3 lg:px-7">
          Selengkapnya
        </button>
      </div>
    </>
  );
};

export default NewsPage;
