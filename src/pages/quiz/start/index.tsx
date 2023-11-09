import BackLink from "@/components/Fragments/BackLink";
import QuizNumber from "@/components/Fragments/QuizNumber";
import Image from "next/image";
import React from "react";

const QuizPage = () => {
  return (
    <div className="px-[100px]">
      <div className="flex justify-center py-12">
        <Image src={"/logo.svg"} width={154} height={48} alt="log" />
      </div>
      <div className="pb-7 pt-16">
        <div className="flex justify-between">
          <BackLink href="/quiz">Batalkan Kuis</BackLink>
          <h1 className="text-4xl font-semibold">Kuis Satwa NTB</h1>
          <span className="text-2xl font-medium text-error">Timer 00:15</span>
        </div>
      </div>
      {/* box */}
      <div className="relative mb-10 grid grid-cols-2 gap-28 rounded-md border px-28 pb-8 pt-24 shadow-md">
        <div className="relative h-[296px] w-[417px] overflow-hidden rounded-lg">
          <Image src={"/rusa.png"} alt="gambar soal" fill />
        </div>
        <div className="">
          <h2 className="text-2xl font-medium">Pertanyaan 1/10</h2>
          <p className="my-3 text-lg font-medium">
            Apa nama satwa disamping (fauna identitas provinsi NTB)?
          </p>
          <p className="mb-6 text-lg font-medium">Jawab:</p>
          <form className="mb-2.5 flex flex-col gap-2.5 lg:mb-4">
            <div className="flex gap-2.5 text-sm font-medium md:text-base lg:text-lg">
              <input type="radio" id="answer1" name="answer" />
              <label htmlFor="answer1">Burung Koakiau</label>
            </div>
            <div className="flex gap-2.5 text-sm font-medium md:text-base lg:text-lg">
              <input type="radio" id="answer2" name="answer" />
              <label htmlFor="answer2">Rusa Timor</label>
            </div>
            <div className="flex gap-2.5 text-sm font-medium md:text-base lg:text-lg">
              <input type="radio" id="answer3" name="answer" />
              <label htmlFor="answer3">Beo Sumbawa</label>
            </div>
            <div className="flex gap-2.5 text-sm font-medium md:text-base lg:text-lg">
              <input type="radio" id="answer4" name="answer" />
              <label htmlFor="answer4">Trenggiling</label>
            </div>
            <span className="mt-4 text-xs font-medium text-info underline md:text-sm lg:text-base">
              Bersihkan Jawaban
            </span>
          </form>
        </div>
        <div className="col-start-2 flex flex-row-reverse">
          <button className="w-fit rounded-md bg-primary px-6 py-3 text-white">
            Soal Selanjutnya
          </button>
        </div>
        <Image
          src={"/maskot-kuis.svg"}
          alt="maskot"
          width={100}
          height={150}
          className="absolute -bottom-4 left-[45%]"
        />
      </div>
      {/* navigasi soal */}
      <div className="mb-14">
        <h3 className="mb-4 text-2xl font-semibold text-neutral950">
          Navigasi Kuis
        </h3>
        <div className="flex gap-5">
          <QuizNumber>1</QuizNumber>
          <QuizNumber>2</QuizNumber>
          <QuizNumber>3</QuizNumber>
          <QuizNumber>4</QuizNumber>
          <QuizNumber>5</QuizNumber>
          <QuizNumber>6</QuizNumber>
          <QuizNumber>7</QuizNumber>
          <QuizNumber>8</QuizNumber>
          <QuizNumber>9</QuizNumber>
          <QuizNumber>10</QuizNumber>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
