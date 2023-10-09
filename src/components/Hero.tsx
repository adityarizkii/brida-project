import React from "react";

const Hero = () => {
  return (
    <div className="md:flex md:max-h-[475px] md:rounded-2xl md:overflow-hidden lg:max-h-[620px] bg-blue-300">
      <div className="left md:pt-10 md:pl-10 md:pb-7 lg:max-w-[684px]">
        <h1 className="mb-6 text-4xl md:text-[40px] lg:text-7xl lg:min-w-[685px] font-semibold">
          Cakrawala <span className="text-primary">Satwa</span>, Kendali{" "}
          <span className="text-secondary">Dunia</span>
        </h1>
        <p className="mb-[30px] lg:text-lg text-neutral500 font-medium lg:max-w-[450px]">
          Jelajahi keanekaragaman satwa asli NTB, kenali mereka, dan lestarikan
          alam indah nan asri.
        </p>
        <div className="flex gap-4 mb-16 md:mb-[70px] lg:mb-[138px]">
          <button className="px-4 py-2.5 text-sm text-white rounded-lg bg-primary font-semibold">
            Ikuti Quiz
          </button>
          <button className="px-4 py-2.5 text-sm border-2 border-primary rounded-lg font-semibold text-primary">
            Lihat Peta Satwa
          </button>
        </div>
        <div className="flex gap-8 md:max-w-[350px] lg:max-w-[502px]">
          <p>
            <h2 className="text-2xl lg:text-4xl text-neutral950 font-semibold">
              2,000+
            </h2>
            <span className="text-sm lg:text-lg text-neutral500 font-medium">
              Jumlah Satwa di NTB
            </span>
          </p>
          <p>
            <h2 className="text-2xl lg:text-4xl text-neutral950 font-semibold">
              124
            </h2>
            <span className="text-sm lg:text-lg text-neutral500 font-medium">
              Jumlah Satwa yang Dilindungi
            </span>
          </p>
        </div>
      </div>
      <div className="right hidden md:block ml-auto">
        <img src="/hero.svg" alt="hero" className="h-full min-w-[460px]" />
      </div>
    </div>
  );
};

export default Hero;
