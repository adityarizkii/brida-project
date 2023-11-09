import Header from "@/components/Fragments/Header";
import Footer from "@/components/Fragments/Footer";
import React, { useState } from "react";
import Image from "next/image";
import ScoreBar from "@/components/Fragments/ScoreBar";
import Link from "next/link";
import HeaderLogin from "@/components/Fragments/HeaderLogin";

const DashboardQuizPage = () => {
  const [isSidebarActive, setisSidebarActive] = useState<boolean>(false);
  return (
    <div className="">
      <HeaderLogin
        classname="px-4 py-5 lg:px-[100px]"
        isSidebarActive={isSidebarActive}
        setIsSidebarActive={setisSidebarActive}
      />
      <div className="bg-slate-100 px-4 pb-20 pt-[130px] lg:px-[180px]">
        {/* hero */}
        <div className=" mb-12 flex justify-between bg-white">
          <div className="py-10 pl-9">
            <h1 className="mb-4 text-3xl font-semibold text-primary">
              Beranda Kuis
            </h1>
            <p className="mb-11 text-black950">
              Jangan lewatkan kesempatan untuk menguji <br /> pengetahuanmu
              tentang satwa-satwa asli NTB. <br /> Ayo, ikuti kuisnya dan
              jadilah juara!
            </p>
            <Link
              href={"/quiz/start"}
              className="rounded-lg bg-primary px-7 py-4 text-xl font-semibold text-white"
            >
              Mulai Kuis
            </Link>
          </div>
          <div className="relative h-[300px] w-[300px]">
            <Image src={"/beranda-kuis.svg"} alt="img" fill />
          </div>
        </div>
        {/* leaderboard */}
        <div className="realtive h-[468px] w-[988px] translate-x-5 translate-y-5 rounded-md bg-primary">
          <div className="absolute -right-32 bottom-0 z-10">
            <Image
              src={"/maskot-game.svg"}
              alt="maskot"
              width={270}
              height={296}
            />
          </div>
          <div className="-translate-x-5 -translate-y-5 rounded-md bg-white py-10">
            <h2 className="mb-10 text-center text-2xl font-semibold text-primary">
              Leaderboard Kuis
            </h2>
            <div className="mx-auto grid w-[665px] grid-cols-2 gap-16">
              <div className="flex flex-col gap-4">
                <ScoreBar></ScoreBar>
                <ScoreBar></ScoreBar>
                <ScoreBar></ScoreBar>
                <ScoreBar></ScoreBar>
                <ScoreBar></ScoreBar>
              </div>
              <div className="flex flex-col gap-4">
                <ScoreBar></ScoreBar>
                <ScoreBar></ScoreBar>
                <ScoreBar></ScoreBar>
                <ScoreBar></ScoreBar>
                <ScoreBar></ScoreBar>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardQuizPage;
