import BackLink from "@/components/Fragments/BackLink";
import QuizNumber from "@/components/Fragments/QuizNumber";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa6";

const ReviewPage = () => {
  return (
    <div className="px-[100px]">
      <div className="flex justify-center py-12">
        <Image src={"/logo.svg"} width={154} height={48} alt="log" />
      </div>
      <div className="pb-7 pt-16">
        <div className="flex justify-between">
          <BackLink href="/quiz">Kembali ke Halaman Utama</BackLink>
          <h1 className="text-4xl font-semibold">Kuis Satwa NTB</h1>
          <span className="text-2xl font-medium">Timer 00:00</span>
        </div>
      </div>
      {/* box */}
      <div className="relative mb-10 grid grid-cols-2 gap-20 rounded-md border px-28 pb-8 pt-24 shadow-md">
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
              <input type="radio" id="answer2" name="answer" checked />
              <label htmlFor="answer2">Rusa Timor</label>
              <FaCheck className="text-green-700" />
            </div>
            <div className="flex gap-2.5 text-sm font-medium md:text-base lg:text-lg">
              <input type="radio" id="answer3" name="answer" />
              <label htmlFor="answer3">Beo Sumbawa</label>
            </div>
            <div className="flex gap-2.5 text-sm font-medium md:text-base lg:text-lg">
              <input type="radio" id="answer4" name="answer" />
              <label htmlFor="answer4">Trenggiling</label>
            </div>
          </form>
        </div>
        <div className="flex flex-col gap-6">
          <Link
            href={"/quiz/finish"}
            className="hover:bg-primaryHover h-fit w-fit rounded-md border border-primary px-6 py-3 font-medium text-primary duration-100 hover:text-white"
          >
            Soal Sebelumnya
          </Link>
          <div className="">
            <h3 className="my-4 text-lg font-semibold">Penjelasan :</h3>
            <p className="font-semibold">
              Satwa diatas merupakan rusa timor. Rusa Timor ditetapkan menjadi
              fauna identitas Provinsi NTB.
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <Link
            href={"/quiz/finish"}
            className="hover:bg-primaryHover h-fit rounded-md bg-primary px-6 py-3 text-white"
          >
            Soal Selanjutnya
          </Link>
        </div>
      </div>
      {/* navigasi soal */}
      <div className="mb-14">
        <h3 className="mb-4 text-2xl font-semibold text-neutral950">
          Navigasi Kuis
        </h3>
        <div className="flex gap-5">
          <QuizNumber status="correct">1</QuizNumber>
          <QuizNumber status="correct">2</QuizNumber>
          <QuizNumber status="correct">3</QuizNumber>
          <QuizNumber status="wrong">4</QuizNumber>
          <QuizNumber status="correct">5</QuizNumber>
          <QuizNumber status="correct">6</QuizNumber>
          <QuizNumber status="correct">7</QuizNumber>
          <QuizNumber status="wrong">8</QuizNumber>
          <QuizNumber status="correct">9</QuizNumber>
          <QuizNumber status="correct">10</QuizNumber>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
