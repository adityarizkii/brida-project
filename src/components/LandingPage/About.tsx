import React from "react";

const About = () => {
  return (
    <div className="mb-24">
      <div className="mx-auto mb-9 max-w-[800px] text-center">
        <h1 className="mb-4 text-2xl font-semibold text-neutral950 md:text-[32px] lg:text-4xl">
          Jelajahi Bersama Kami
        </h1>
        <p className="text-sm text-black600 md:text-base lg:text-lg">
          Terdapat 3 fitur utama pada website ini yang dapat diakses sehingga
          fitur-fitur yang ada pada website ini dapat menambah pengetahuan
          tentang satwa asli NTB.
        </p>
      </div>
      <div className="grid md:grid-cols-2">
        <div className="mx-auto hidden md:block">
          <img
            src="/duarusa.svg"
            alt="dua rusa"
            className="mb-7 w-[300px] lg:w-[400px]"
          />
          <img
            src="/nontonrusa.svg"
            alt="nonton rusa"
            className="w-[200px] lg:w-[300px]"
          />
        </div>
        <div className="flex flex-col gap-9">
          <div className="flex gap-4 rounded-md border px-7 py-6 shadow-md md:max-w-[400px] lg:h-[150px] lg:max-w-[600px] lg:py-[30px]">
            <div className="">
              <div className="w-[40px] lg:w-[45px]">
                <img src="/map.svg" alt="map" />
              </div>
            </div>
            <div className="">
              <h2 className="mb-2 text-lg font-bold text-neutral950 lg:text-2xl">
                Peta Satwa NTB
              </h2>
              <p className="text-sm text-black600 lg:text-base">
                Peta yang menyajikan berbagai satwa asli NTB beserta
                deskripsinya
              </p>
            </div>
          </div>
          <div className="flex gap-4 rounded-md border px-7 py-6 shadow-md md:max-w-[400px] lg:h-[150px] lg:max-w-[600px] lg:py-[30px]">
            <div className="">
              <div className="w-[40px] lg:w-[45px]">
                <img src="/map.svg" alt="map" />
              </div>
            </div>
            <div className="">
              <h2 className="mb-2 text-lg font-bold text-neutral950 lg:text-2xl">
                Artikel Satwa NTB
              </h2>
              <p className="text-sm text-black600 lg:text-base">
                Berbagai topik artikel tentang satwa bisa anda akses melalui
                website ini
              </p>
            </div>
          </div>
          <div className="flex gap-4 rounded-md border px-7 py-6 shadow-md md:max-w-[400px] lg:h-[150px] lg:max-w-[600px] lg:py-[30px]">
            <div className="">
              <div className="w-[40px] lg:w-[45px]">
                <img src="/map.svg" alt="map" />
              </div>
            </div>
            <div className="">
              <h2 className="mb-2 text-lg font-bold text-neutral950 lg:text-2xl">
                Kuis Satwa NTB
              </h2>
              <p className="text-sm text-black600 lg:text-base">
                Kuis satwa NTB siap membawa anda dalam mengenal lebih dekat
                satwa asli NTB
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;