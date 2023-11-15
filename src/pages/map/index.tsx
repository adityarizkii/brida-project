import Header from "@/components/Fragments/Header";
import Footer from "@/components/Fragments/Footer";
import React, { useState } from "react";
import Map from "@/components/Map";

const MapPage = () => {
  const [isSidebarActive, setisSidebarActive] = useState<boolean>(false);

  return (
    <div>
      <Header
        classname="px-4 py-5 lg:px-[100px]"
        isSidebarActive={isSidebarActive}
        setIsSidebarActive={setisSidebarActive}
      ></Header>
      <div className="lg:px-[100px] lg:pb-36 lg:pt-[150px]">
        <div className="mx-auto mb-[70px] text-center lg:max-w-3xl">
          <h1 className="mb-[50px] text-[32px] font-semibold text-black950">
            Peta Satwa NTB
          </h1>
          <p>
            Di peta satwa ini, kamu akan menemukan berbagai macam satwa asli
            Nusa Tenggara Barat yang memukau. Kami menyediakan detail lengkap
            tentang masing-masing satwa. Jadi, ketika kamu menjelajahi peta
            satwa NTB kami, kamu tidak hanya akan melihat gambar-gambar indah
            dari satwa-satwa tersebut, tetapi juga informasi mendalam yang akan
            memperkaya pengetahuanmu tentang kekayaan alam NTB. <br />
            <br />
            Selamat menjelajahi keajaiban satwa NTB!
          </p>
        </div>
        <Map />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MapPage;
