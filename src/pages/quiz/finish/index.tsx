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

const FinishPage = () => {
  const [dataUser, setDataUser] = useState<DataUserType>();
  const [dataScores, setDataScores] = useState<DataUserType[]>();

  const fetchData = async () => {
    const response = await fetch("https://ecosaver.vercel.app/api/single-user");
    const result = await response.json();

    setDataUser(result);
  };

  const fetchScores = async () => {
    const response = await fetch("https://ecosaver.vercel.app/api/scores");
    const result = await response.json();
    result.splice(5);

    setDataScores(result);
  };

  useEffect(() => {
    fetchData();
    fetchScores();
  }, []);

  return (
    <div className="px-4 lg:h-[850px] lg:px-16">
      <div className="relative mx-auto h-[38px] w-[125px] py-10 lg:h-[48px] lg:w-[154px] lg:py-12">
        <Image src={"/logo.svg"} fill alt="log" />
      </div>
      <div className="flex justify-center pb-7">
        <h1 className="text-2xl font-semibold lg:text-4xl">Kuis Satwa NTB</h1>
      </div>
      <BackLink href="/quiz">Kembali ke Halaman Utama</BackLink>
      <div className="mt-6 lg:mt-16 lg:grid lg:grid-cols-3">
        <div className="relative mx-auto h-[150px] w-[150px] lg:h-[300px] lg:w-[300px]">
          <Image src={"/maskot1.svg"} alt="maskot" width={300} height={300} />
        </div>
        <div className="flex justify-center">
          <div className="mt-16 text-center lg:max-w-[330px]">
            <h2 className="mb-4 text-2xl font-medium leading-[1.5] lg:mb-14 lg:text-4xl">
              Selamat Kepada {dataUser?.firstName}!
            </h2>
            <div className="mb-8 text-2xl font-medium lg:text-4xl">
              Skor kamu
            </div>
            <div className="mb-8 text-5xl font-medium lg:mb-16">
              {dataUser?.score}
            </div>
            <Link
              href={"/quiz/review"}
              className="font-medium text-info underline lg:text-xl"
            >
              Lihat Jawaban
            </Link>
          </div>
        </div>
        <div className="mb-8 mt-4 flex justify-center lg:mb-0 lg:mt-0">
          <div className="flex w-[315px] flex-col gap-5 rounded-lg px-4 py-9 shadow-xl">
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

export default FinishPage;
