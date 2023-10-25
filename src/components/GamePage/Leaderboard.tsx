import React from "react";

const Leaderboard = () => {
  return (
    <div>
      <header className="mb-3 flex items-center justify-between font-semibold md:mb-0 lg:mb-[127px] lg:justify-center">
        <img src="/logo.svg" alt="" className="w-32 md:w-[154px]" />
        <h1 className="font-semibold md:text-[32px] lg:hidden">
          Kuis Satwa NTB
        </h1>
      </header>
      <div className="lg:grid lg:grid-cols-4">
        {/* hero */}
        <div className="mb-5 flex flex-col items-center lg:col-span-2 lg:col-start-2">
          <h2 className="mb-3.5 hidden text-center text-lg font-medium md:mb-14 md:text-4xl lg:mb-3.5  lg:block lg:text-[40px]">
            Selamat Kepada <br /> Bita !
          </h2>
          <div className="mb-3.5 flex-shrink-0 md:mb-14 ">
            <img
              src="/juara.svg"
              alt=""
              className="md:w-[468px] lg:w-[407px]"
            />
          </div>
          <h2 className="mb-7 text-lg font-semibold md:mb-14 md:text-4xl lg:hidden">
            Selamat Kepada Bita !
          </h2>
          <p className="text-lg font-semibold md:mb-12 md:text-[32px] lg:font-medium">
            Kamu mendapatkan skor 80
          </p>
        </div>
        {/* card score */}
        <div className="h-fit rounded-lg border px-4 py-9 shadow-xl lg:mt-[50px] lg:w-[314px]">
          <h2 className="mb-5 text-center text-2xl font-medium">
            Peringkat Kuis
          </h2>
          <ul className="flex flex-col gap-5">
            <li className="flex justify-between rounded-md border px-4 py-1.5 pr-7 text-lg">
              <p>
                <span className="mr-3">1.</span>
                <span>Kevin</span>
              </p>
              <span>100</span>
            </li>
            <li className=" flex justify-between rounded-md border px-4 py-1.5 pr-7 text-lg">
              <p>
                <span className="mr-3">1.</span>
                <span>Kevin</span>
              </p>
              <span>100</span>
            </li>
            <li className="flex justify-between rounded-md border px-4 py-1.5 pr-7 text-lg ">
              <p>
                <span className="mr-3">1.</span>
                <span>Kevin</span>
              </p>
              <span>100</span>
            </li>
            <li className="flex justify-between rounded-md border px-4 py-1.5 pr-7 text-lg ">
              <p>
                <span className="mr-3">1.</span>
                <span>Kevin</span>
              </p>
              <span>100</span>
            </li>
            <li className="flex justify-between rounded-md border px-4 py-1.5 pr-7 text-lg ">
              <p>
                <span className="mr-3">1.</span>
                <span>Kevin</span>
              </p>
              <span>100</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
