import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SatwaDetail = () => {
  return (
    <div>
      <header className="flex flex-col gap-6 items-center mb-5">
        <img src="/logo.svg" alt="logo" />
        <h1 className="text-2xl text-primary font-semibold">
          Detail Satwa NTB
        </h1>
      </header>
      <nav className="flex items-center gap-3 mb-7 md:mb-[100px] text-xs md:text-base font-semibold">
        <div className="p-1 border-2 border-primary text-primary  rounded-full flex justify-center items-center">
          <BiArrowBack />
        </div>{" "}
        Kembali ke Halaman Utama
      </nav>
      <div className="grid md:grid-cols-2">
        <div className="left mb-[60px]">
          <div className="flex justify-center items-center gap-3 lg:gap-4 mx-auto mb-10 py-6 px-12 md:px-12 md:py-[60px] max-w-[300px] max-h-[300px] md:max-w-[370px] md:max-h-[370px] lg:max-w-[600px] lg:max-h-[600px] overflow-hidden border shadow-2xl rounded-md">
            <div className="p-1 lg:p-2 h-fit border rounded-md">
              <IoIosArrowBack size={30} />
            </div>
            <img src="/kucing1.png" alt="kucing" />
            <div className="p-1 lg:p-2 h-fit border rounded-md">
              <IoIosArrowForward size={30} />
            </div>
          </div>
          <div className="flex justify-around max-w-[300px] lg:max-w-none mx-auto font-bold text-2xl text-neutral950">
            <h3>Kucing gemoy</h3>
            <h3>Narmada, Lombok</h3>
          </div>
        </div>
        <div className="right mt-24">
          <div className="p-4 mx-auto max-w-[300px] md:max-w-[350px] lg:max-w-[500px] shadow-2xl font-medium text-sm border lg:text-base lg:tracking-wide">
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
        <h2 className="mb-10 text-lg lg:text-[32px] text-primary font-semibold">
          Satwa yang ada di Narmada
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          <div className="mx-auto shadow-2xl rounded-md lg:w-full">
            <img src="/kucing2.png" alt="kucing" className="lg:w-full" />
            <h3 className="my-4 px-4 font-semibold">Kucing</h3>
          </div>
          <div className="mx-auto shadow-2xl rounded-md lg:w-full">
            <img src="/kucing2.png" alt="kucing" className="lg:w-full" />
            <h3 className="my-4 px-4 font-semibold">Kucing</h3>
          </div>
          <div className="mx-auto shadow-2xl rounded-md lg:w-full">
            <img src="/kucing2.png" alt="kucing" className="lg:w-full" />
            <h3 className="my-4 px-4 font-semibold">Kucing</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SatwaDetail;
