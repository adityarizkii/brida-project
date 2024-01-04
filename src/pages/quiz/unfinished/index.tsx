import React, { useEffect, useState } from "react";
import BackLink from "@/components/Fragments/BackLink";
import Image from "next/image";
import Link from "next/link";
import ScoreBar from "@/components/Fragments/ScoreBar";

type DataUserType = {
  id: string;
  firstName: string;
  email: string;
  score: number;
};

const UnfinishedPage = () => {
  const [dataScores, setDataScores] = useState<DataUserType[]>();

  const fetchScores = async () => {
    const response = await fetch("https://ecosaver.vercel.app/api/scores");
    const result = await response.json();
    result.splice(5);

    setDataScores(result);
  };

  useEffect(() => {
    fetchScores();
  }, []);

  return (
    <div className="h-[850px] px-4 lg:px-16">
      <div className="relative mx-auto h-[38px] w-[125px] py-8 lg:h-[48px] lg:w-[154px] lg:py-12">
        <Image src={"/logo.svg"} alt="log" fill />
      </div>
      <div className="hidden justify-center pb-7 lg:flex">
        <h1 className="text-4xl font-semibold">Kuis Satwa NTB</h1>
      </div>
      <BackLink href="/quiz">Kembali ke Halaman Utama</BackLink>
      <div className="mt-8 lg:mt-16 lg:grid lg:grid-cols-3">
        <div className="relative mx-auto h-[150px] w-[150px] justify-center lg:h-[300px] lg:w-[300px]">
          <Image src={"/maskot-sad.svg"} alt="maskot" fill />
        </div>
        <div className="flex justify-center">
          <div className="mt-8 max-w-[450px] text-center lg:mt-16">
            <h2 className="mb-4 text-xl font-medium leading-[1.5] lg:mb-14 lg:text-3xl">
              Kamu belum selesai menyelesaikan kuis!
            </h2>
            <div className="lg:mb-4 lg:text-xl lg:font-medium">
              Selesaikan kuis hingga selesai, maka skor kamu akan muncul{" "}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="mb-8 flex w-full flex-col gap-5 rounded-lg px-4 py-9 shadow-xl lg:mb-0 lg:w-[315px]">
            <h3 className="text-center text-xl font-medium">Peringkat Kuis</h3>
            {dataScores?.map((data, idx) => (
              <ScoreBar
                dataAos="fade-right"
                dataAosDelay="200"
                position={++idx}
                score={data.score}
                name={data.firstName}
                key={idx}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnfinishedPage;
