import Header from "@/components/Fragments/Header";
import Footer from "@/components/Fragments/Footer";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ScoreBar from "@/components/Fragments/ScoreBar";
import { useRouter } from "next/router";

type UserDataType = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  score: number;
};

const DashboardQuizPage = () => {
  const [isSidebarActive, setisSidebarActive] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserDataType[]>();
  const router = useRouter();

  const fetchScores = async () => {
    const response = await fetch("https://ecosaver.vercel.app/api/scores");
    const result = await response.json();
    result.splice(10);
    setUserData(result);
  };

  useEffect(() => {
    fetchScores();
  }, []);

  const element = [];
  for (let i = 0; i < 2; i++) {
    element.push(
      <div className="flex flex-col gap-4" key={i}>
        {userData?.map((data, idx) => {
          if (i === 0) {
            if (idx > 4) {
              return;
            } else {
              return (
                <ScoreBar
                  key={idx}
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
                  key={idx}
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

  const handleStart = async () => {
    router.push("/quiz/start");
  };

  return (
    <div className="">
      <Header
        classname="px-4 py-5 lg:px-[100px]"
        isSidebarActive={isSidebarActive}
        setIsSidebarActive={setisSidebarActive}
      />
      <div className="bg-slate-100 px-4 pb-20 pt-[130px] lg:px-[180px]">
        {/* hero */}
        <div className="mb-6 flex justify-between bg-white lg:mb-12">
          <div className="py-10 pl-9" data-aos="fade-right">
            <h1 className="mb-4 text-2xl font-semibold text-primary lg:text-3xl">
              Beranda Kuis
            </h1>
            <p className="mb-7 text-base text-black950 lg:mb-11 lg:text-base">
              Jangan lewatkan kesempatan untuk menguji <br /> pengetahuanmu
              tentang satwa-satwa asli NTB. <br /> Ayo, ikuti kuisnya dan
              jadilah juara!
            </p>
            <button
              className="rounded-lg bg-primary px-5 py-3 text-base font-semibold text-white hover:bg-primaryHover lg:px-7 lg:py-4 lg:text-xl"
              onClick={handleStart}
            >
              Mulai Kuis
            </button>
          </div>
          <div
            className="relative hidden h-[300px] w-[300px] lg:block"
            data-aos="fade-left"
          >
            <Image src={"/beranda-kuis.svg"} alt="img" fill />
          </div>
        </div>
        {/* leaderboard */}
        <div className="realtive w-[full] translate-x-5 translate-y-5 rounded-md lg:h-[460px] lg:w-[988px] lg:bg-primary">
          <div className="absolute -right-32 bottom-0 z-10 hidden lg:block">
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
            <div className="grid grid-cols-1 gap-x-10 gap-y-5 px-5 lg:mx-28 lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-5">
              {userData?.map((data, idx) => (
                <ScoreBar
                  key={idx}
                  score={data.score}
                  name={data.firstName}
                  position={++idx}
                />
              ))}
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
