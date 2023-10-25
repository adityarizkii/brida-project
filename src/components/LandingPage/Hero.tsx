import React from "react";

const Hero = () => {
  return (
    <div className="mb-20 md:mx-8 md:flex md:max-h-[475px] md:justify-between md:overflow-hidden md:rounded-2xl md:bg-[#F6F7F9] lg:max-h-[620px]">
      <div className="left md:pb-7 md:pl-10 md:pt-10 lg:max-w-[684px]">
        <h1 className="mb-6 text-4xl font-semibold md:min-w-[400px] md:text-[40px] lg:min-w-[685px] lg:text-7xl">
          Cakrawala <span className="text-primary">Satwa</span>, Kendali{" "}
          <span className="text-secondary">Dunia</span>
        </h1>
        <p className="mb-[30px] font-medium text-neutral500 lg:max-w-[450px] lg:text-lg">
          Jelajahi keanekaragaman satwa asli NTB, kenali mereka, dan lestarikan
          alam indah nan asri.
        </p>
        <div className="mb-16 flex gap-4 md:mb-[70px] lg:mb-[138px]">
          <button className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white">
            Ikuti Quiz
          </button>
          <button className="rounded-lg border-2 border-primary px-4 py-2.5 text-sm font-semibold text-primary">
            Lihat Peta Satwa
          </button>
        </div>
        <div className="flex gap-8 md:max-w-[350px] lg:max-w-[502px]">
          <p>
            <h2 className="text-2xl font-semibold text-neutral950 lg:text-4xl">
              2,000+
            </h2>
            <span className="text-sm font-medium text-neutral500 lg:text-lg">
              Jumlah Satwa di NTB
            </span>
          </p>
          <p>
            <h2 className="text-2xl font-semibold text-neutral950 lg:text-4xl">
              124
            </h2>
            <span className="text-sm font-medium text-neutral500 lg:text-lg">
              Jumlah Satwa yang Dilindungi
            </span>
          </p>
        </div>
      </div>
      <div className="right  hidden md:block">
        <img
          src="/hero.svg"
          alt="hero"
          className="h-full md:min-w-[350px] lg:min-w-[460px]"
        />
      </div>
    </div>
  );
};

export default Hero;
