import React from "react";
import BackLink from "@/components/Fragments/BackLink";
import Image from "next/image";
import Link from "next/link";
import ScoreBar from "@/components/Fragments/ScoreBar";

const UnfinishedPage = () => {
  return (
    <div className="h-[850px] px-16">
      <div className="flex justify-center py-12">
        <Image src={"/logo.svg"} width={154} height={48} alt="log" />
      </div>
      <div className="flex justify-center pb-7">
        <h1 className="text-4xl font-semibold">Kuis Satwa NTB</h1>
      </div>
      <BackLink href="/quiz">Kembali ke Halaman Utama</BackLink>
      <div className="mt-16 grid grid-cols-3">
        <div className="flex justify-center">
          <Image
            src={"/maskot-sad.svg"}
            alt="maskot"
            width={300}
            height={300}
          />
        </div>
        <div className="flex justify-center">
          <div className="mt-16 max-w-[450px] text-center">
            <h2 className="mb-14 text-3xl font-medium leading-[1.5]">
              Kamu belum selesai menyelesaikan kuis!
            </h2>
            <div className="mb-4 text-xl font-medium">
              Selesaikan kuis hingga selesai, maka skor kamu akan muncul{" "}
            </div>
            {/* <div className="mb-16 text-5xl font-medium">95</div>
            <Link
              href={"/finish"}
              className="text-xl font-medium text-info underline"
            >
              Lihat Jawaban
            </Link> */}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex w-[315px] flex-col gap-5 rounded-lg px-4 py-9 shadow-xl">
            <h3 className="text-xl font-medium">Peringkat Kuis</h3>
            <ScoreBar></ScoreBar>
            <ScoreBar></ScoreBar>
            <ScoreBar></ScoreBar>
            <ScoreBar></ScoreBar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnfinishedPage;
