import Header from "@/components/Fragments/Header";
import Footer from "@/components/Fragments/Footer";
import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import ScoreBar from "@/components/Fragments/ScoreBar";
import Link from "next/link";
import { InferGetServerSidePropsType } from "next";

type UserDataType = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  score: number;
};

const DashboardQuizPage = () => {
  const [isSidebarActive, setisSidebarActive] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserDataType[]>();

  const fetchScores = async () => {
    const response = await fetch("http://localhost:3000/api/scores");
    const result = await response.json();
    setUserData(result);
  };

  useEffect(() => {
    fetchScores();
  }, []);

  const element = [];
  for (let i = 0; i < 2; i++) {
    element.push(
      <div className="flex flex-col gap-4">
        {userData?.map((data, idx) => {
          if (i === 0) {
            if (idx > 4) {
              return;
            } else {
              return (
                <ScoreBar
                  dataAos="zoom-in"
                  dataAosDelay={idx + 1 + "00"}
                  score={data.score}
                  name={data.firstName}
                  position={++idx}
                />
              );
            }
          } else {
            if (idx < 5) {
              return;
            } else {
              return (
                <ScoreBar
                  dataAos="zoom-in"
                  dataAosDelay={idx + 1 + "00"}
                  score={data.score}
                  name={data.firstName}
                  position={++idx}
                />
              );
            }
          }
        })}
      </div>
    );
  }

  return (
    <div className="">
      <Header
        classname="px-4 py-5 lg:px-[100px]"
        isSidebarActive={isSidebarActive}
        setIsSidebarActive={setisSidebarActive}
      />
      <div className="bg-slate-100 px-4 pb-20 pt-[130px] lg:px-[180px]">
        {/* hero */}
        <div className=" mb-12 flex justify-between bg-white">
          <div className="py-10 pl-9" data-aos="fade-right">
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
              className="rounded-lg bg-primary px-7 py-4 text-xl font-semibold text-white hover:bg-primaryHover"
            >
              Mulai Kuis
            </Link>
          </div>
          <div className="relative h-[300px] w-[300px]" data-aos="fade-left">
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
              {element}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export const getServerSideProps = async (context: any) => {
  const cookies = context.req.cookies;
  const token = cookies.token;

  return { props: { token } };
};

export default DashboardQuizPage;
