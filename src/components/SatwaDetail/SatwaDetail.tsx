import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SatwaDetail = () => {
  return (
    <div>
      <header className="mb-5 flex flex-col items-center gap-6">
        <img src="/logo.svg" alt="logo" />
        <h1 className="text-2xl font-semibold text-primary">
          Detail Satwa NTB
        </h1>
      </header>
      <nav className="mb-7 flex items-center gap-3 text-xs font-semibold md:mb-[100px] md:text-base">
        <div className="flex items-center justify-center rounded-full  border-2 border-primary p-1 text-primary">
          <BiArrowBack />
        </div>{" "}
        Kembali ke Halaman Utama
      </nav>
      <div className="grid md:grid-cols-2">
        <div className="left mb-[60px]">
          <div className="mx-auto mb-10 flex max-h-[300px] max-w-[300px] items-center justify-center gap-3 overflow-hidden rounded-md border px-12 py-6 shadow-2xl md:max-h-[370px] md:max-w-[370px] md:px-12 md:py-[60px] lg:max-h-[600px] lg:max-w-[600px] lg:gap-4">
            <div className="h-fit rounded-md border p-1 lg:p-2">
              <IoIosArrowBack size={30} />
            </div>
            <img src="/kucing1.png" alt="kucing" />
            <div className="h-fit rounded-md border p-1 lg:p-2">
              <IoIosArrowForward size={30} />
            </div>
          </div>
          <div className="mx-auto flex max-w-[300px] justify-around text-2xl font-bold text-neutral950 lg:max-w-none">
            <h3>Kucing gemoy</h3>
            <h3>Narmada, Lombok</h3>
          </div>
        </div>
        <div className="right mt-24">
          <div className="mx-auto max-w-[300px] border p-4 text-sm font-medium shadow-2xl md:max-w-[350px] lg:max-w-[500px] lg:text-base lg:tracking-wide">
            Cucak Timor (Philemon buceroides) adalah burung dalam keluarga
            Meliphagidae. Burung ini juga dikenal sebagai koak kao di daerah
            Nusa Tenggara barat (NTB). Burung ini pada habitatnya ditemukan di
            Australia dan Indonesia. <br />
            <br /> Habitat asli brung koakiau adalah daerah kering hutan
            subtrofis hingga trofis, hutan lembab dataran rendah, dan daerah
            hutan bakau. Salah satu daerah konversi Cucak Timor ini adalah di
            taman burung pulau Moyo - NTB. Umumnya burung ini memakan
            buah-buahan dan biji-bijian, namun selain itu kadang-kadang burung
            ini juga memangsa serangga, ikan kecil, dan katak.
          </div>
        </div>
      </div>
      <div className="mt-[60px] w-full">
        <h2 className="mb-10 text-lg font-semibold text-primary lg:text-[32px]">
          Satwa yang ada di Narmada
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          <div className="mx-auto rounded-md shadow-2xl lg:w-full">
            <img src="/kucing2.png" alt="kucing" className="lg:w-full" />
            <h3 className="my-4 px-4 font-semibold">Kucing</h3>
          </div>
          <div className="mx-auto rounded-md shadow-2xl lg:w-full">
            <img src="/kucing2.png" alt="kucing" className="lg:w-full" />
            <h3 className="my-4 px-4 font-semibold">Kucing</h3>
          </div>
          <div className="mx-auto rounded-md shadow-2xl lg:w-full">
            <img src="/kucing2.png" alt="kucing" className="lg:w-full" />
            <h3 className="my-4 px-4 font-semibold">Kucing</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SatwaDetail;
