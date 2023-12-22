import BackLink from "@/components/Fragments/BackLink";
import QuizNumber from "@/components/Fragments/QuizNumber";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

type DataSoalType = {
  idSoal: string;
  soal: string;
  jawaban: string;
  opsi: string[];
  penjelasan: string;
  image: string;
};

type UserOptionType = {
  number: number;
  option: string;
};

const ReviewPage = () => {
  const [dataSoal, setDataSoal] = useState<DataSoalType[]>();
  const [currSoal, setCurrSoal] = useState<DataSoalType>();
  const [currIdx, setCurrIdx] = useState<number>(0);
  const [userOptions, setUserOptions] = useState<UserOptionType[] | undefined>(
    undefined
  );

  useEffect(() => {
    const soal = localStorage.getItem("dataSoal");
    const options = localStorage.getItem("userOptions");

    if (soal) {
      setDataSoal(JSON.parse(soal));
    }

    if (options) {
      // console.log(JSON.parse(options));
      setUserOptions(JSON.parse(options));
    }
  }, []);

  useEffect(() => {
    setCurrSoal(dataSoal?.[currIdx]);
  }, [dataSoal, currIdx]);

  // useEffect(() => {
  //   setDefaultOption();
  // }, [currIdx, currSoal]);

  const handlePrev = () => {
    if (currIdx === 0) return setCurrIdx(9);
    setCurrIdx(currIdx - 1);
  };

  const handleNext = () => {
    if (currIdx === 9) return setCurrIdx(0);
    setCurrIdx(currIdx + 1);
  };

  const handleNavigate = (idx: number) => {
    setCurrIdx(idx);
  };

  // const setDefaultOption = () => {
  //   const optionIdx = dataSoal?.[currIdx].opsi.findIndex(
  //     (data) => data === userOptions?.[currIdx].option
  //   );

  //   const defaultOption = userOptions?.[currIdx];
  //   console.log(userOptions?.[currIdx]);
  // };

  const removeQuizData = () => {
    localStorage.removeItem("dataSoal");
    localStorage.removeItem("userOptions");
  };

  return (
    <div className="px-[100px]">
      <div className="flex justify-center py-12">
        <Image src={"/logo.svg"} width={154} height={48} alt="log" />
      </div>
      <div className="pb-7 pt-16">
        <div className="flex justify-between">
          <div className="" onClickCapture={removeQuizData}>
            <BackLink href="/quiz">Kembali ke Halaman Utama</BackLink>
          </div>
          <h1 className="text-4xl font-semibold">Kuis Satwa NTB</h1>
          <span className="text-2xl font-medium">Timer 00:00</span>
        </div>
      </div>
      {/* box */}
      <div className="relative mb-10 grid grid-cols-2 gap-20 rounded-md border px-28 pb-8 pt-24 shadow-md">
        {currSoal?.image && (
          <div className="relative h-[296px] w-[417px] overflow-hidden rounded-lg">
            <Image src={currSoal.image} alt="gambar soal" fill />
          </div>
        )}
        <div className={currSoal?.image ? "" : "col-span-2"}>
          <h2 className="text-2xl font-medium">Pertanyaan {currIdx + 1}/10</h2>
          <p className="my-3 text-lg font-medium">{currSoal?.soal}</p>
          <p className="mb-6 text-lg font-medium">Jawab:</p>
          <form className="mb-2.5 flex flex-col gap-2.5 lg:mb-4">
            {currSoal?.opsi.map((option, idx) => {
              const isChecked = userOptions?.[currIdx].option === option;
              return (
                <div
                  className={`flex w-fit gap-2.5 py-1 text-sm font-medium md:text-base lg:text-lg ${
                    currSoal.jawaban === option
                      ? "-ml-4 border border-green-500 bg-green-50 px-4"
                      : ""
                  } ${
                    currSoal.jawaban !== option &&
                    userOptions?.[currIdx].option === option
                      ? "-ml-4 border border-error bg-red-50 px-4"
                      : ""
                  }`}
                  key={idx}
                >
                  <input
                    type="radio"
                    id="answer1"
                    name="answer"
                    disabled
                    checked={isChecked}
                  />
                  <label htmlFor="answer1">{option}</label>
                  {currSoal.jawaban === option && (
                    <FaCheck className="ml-1 mt-1 text-green-500" />
                  )}
                  {currSoal.jawaban !== option &&
                    userOptions?.[currIdx].option === option && (
                      <IoClose className="mt-1.5 text-error" />
                    )}
                </div>
              );
            })}
          </form>
        </div>
        <div className="flex flex-col gap-6">
          <button
            className="h-fit w-fit rounded-md border border-primary px-6 py-3 font-medium text-primary duration-100 hover:bg-primaryHover hover:text-white"
            onClick={handlePrev}
          >
            Soal Sebelumnya
          </button>
          <div className="">
            <h3 className="my-4 text-lg font-semibold">Penjelasan :</h3>
            <p className="font-semibold">{currSoal?.penjelasan}</p>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <button
            className="h-fit rounded-md bg-primary px-6 py-3 text-white hover:bg-primaryHover"
            onClick={handleNext}
          >
            Soal Selanjutnya
          </button>
        </div>
      </div>
      {/* navigasi soal */}
      <div className="mb-14">
        <h3 className="mb-4 text-2xl font-semibold text-neutral950">
          Navigasi Kuis
        </h3>
        <div className="flex gap-5">
          {dataSoal?.map((soal, idx) => (
            <QuizNumber
              status={
                soal.jawaban === userOptions?.[idx].option ? "correct" : "wrong"
              }
              onClick={handleNavigate}
              toIndex={idx}
              isActive={currIdx === idx}
              key={idx}
            >
              {`${idx + 1}`}
            </QuizNumber>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
