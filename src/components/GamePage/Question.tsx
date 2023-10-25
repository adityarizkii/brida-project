import React from "react";
import { BiArrowBack } from "react-icons/bi";

// className="px-4 pt-12 md:p-8 lg:py-8 lg:px-[100px]"
const Question = () => {
  return (
    <div>
      <header className="mb-16 flex items-center justify-between lg:justify-center">
        <img src="/logo.svg" alt="logo" />
        <h1 className="font-semibold md:text-[32px] lg:hidden">
          Kuis Satwa NTB
        </h1>
      </header>
      {/* nav */}
      <div className="mb-4 flex justify-between md:mb-14">
        <a href="/" className="flex gap-4">
          <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border-2 border-primary text-primary ">
            <BiArrowBack />
          </div>{" "}
          <span className="font-medium md:text-2xl">Batalkan Kuis</span>
        </a>
        <h1 className="hidden font-semibold md:text-[32px] lg:block lg:text-4xl">
          Kuis Satwa NTB
        </h1>
        <span className="font-medium md:text-2xl">Timer 05:00</span>
      </div>
      {/* card */}
      <div className="mb-3 rounded-2xl border px-6 py-6 shadow-2xl md:px-20 md:pt-16 lg:mb-10">
        <div className="grid gap-4 lg:grid-cols-2">
          {/* gambar */}
          <div className="md:max-w-[395px] lg:max-w-[417px]">
            <img src="/rusa.png" alt="rusa" className="w-full" />
          </div>
          {/* soal */}
          <div className="">
            <h2 className="my-5 font-medium md:text-lg lg:mt-0 lg:text-2xl">
              Pertanyaan 2/10
            </h2>
            <h3 className="text-sm font-medium md:text-base lg:text-lg">
              Gambar di samping merupakan satwa yang berasal dari daerah ?{" "}
            </h3>
            <p className="my-5 text-sm font-medium md:text-base lg:text-lg">
              Jawab:{" "}
            </p>
            {/* form */}
            <form className="mb-2.5 flex flex-col gap-2.5 lg:mb-4">
              <div className="flex gap-2.5 text-sm font-medium md:text-base lg:text-lg">
                <input type="radio" id="answer1" name="answer" />
                <label htmlFor="answer1">Dompu</label>
              </div>
              <div className="flex gap-2.5 text-sm font-medium md:text-base lg:text-lg">
                <input type="radio" id="answer2" name="answer" />
                <label htmlFor="answer2">Bima</label>
              </div>
              <div className="flex gap-2.5 text-sm font-medium md:text-base lg:text-lg">
                <input type="radio" id="answer3" name="answer" />
                <label htmlFor="answer3">Narmada</label>
              </div>
              <div className="flex gap-2.5 text-sm font-medium md:text-base lg:text-lg">
                <input type="radio" id="answer4" name="answer" />
                <label htmlFor="answer4">Tanjung</label>
              </div>
              <a className="mt-4 text-xs font-medium text-info underline md:text-sm lg:text-base">
                Bersihkan Jawaban
              </a>
            </form>
            {/* button */}
            <div className="mt-7 flex justify-between md:mb-12 md:mt-[70px] lg:mt-8">
              <button className="rounded-md border border-primary px-4 py-2 text-xs font-medium text-primary md:my-2.5 md:px-6 md:text-base">
                Sebelumnya
              </button>
              <button className="rounded-md border border-primary bg-primary px-4 py-2 text-xs font-medium text-white md:my-2.5 md:px-6 md:text-base">
                Sesudahnya
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* kuis nav */}
      <div className="">
        <h2 className="mb-4 text-sm font-semibold md:text-lg lg:mb-[18px] lg:text-2xl">
          Navigasi Kuis
        </h2>
        <ul className="flex flex-wrap gap-2.5 md:gap-4">
          <li className="w-[35px] rounded-sm border border-black bg-[#D9D9D9] text-sm font-semibold md:w-[45px]">
            <div className="mb-5 border-b border-black bg-white text-center md:mb-6 md:py-1">
              1
            </div>
          </li>
          <li className="w-[35px] rounded-sm border border-black bg-[#D9D9D9] text-sm font-semibold md:w-[45px]">
            <div className="mb-5 border-b border-black bg-white text-center md:mb-6 md:py-1">
              1
            </div>
          </li>
          <li className="w-[35px] rounded-sm border border-black bg-[#D9D9D9] text-sm font-semibold md:w-[45px]">
            <div className="mb-5 border-b border-black bg-white text-center md:mb-6 md:py-1">
              1
            </div>
          </li>
          <li className="w-[35px] rounded-sm border border-black bg-[#D9D9D9] text-sm font-semibold md:w-[45px]">
            <div className="mb-5 border-b border-black bg-white text-center md:mb-6 md:py-1">
              1
            </div>
          </li>
          <li className="w-[35px] rounded-sm border border-black bg-[#D9D9D9] text-sm font-semibold md:w-[45px]">
            <div className="mb-5 border-b border-black bg-white text-center md:mb-6 md:py-1">
              1
            </div>
          </li>
          <li className="w-[35px] rounded-sm border border-black bg-[#D9D9D9] text-sm font-semibold md:w-[45px]">
            <div className="mb-5 border-b border-black bg-white text-center md:mb-6 md:py-1">
              1
            </div>
          </li>
          <li className="w-[35px] rounded-sm border border-black bg-[#D9D9D9] text-sm font-semibold md:w-[45px]">
            <div className="mb-5 border-b border-black bg-white text-center md:mb-6 md:py-1">
              1
            </div>
          </li>
          <li className="w-[35px] rounded-sm border border-black bg-[#D9D9D9] text-sm font-semibold md:w-[45px]">
            <div className="mb-5 border-b border-black bg-white text-center md:mb-6 md:py-1">
              1
            </div>
          </li>
          <li className="w-[35px] rounded-sm border border-black bg-[#D9D9D9] text-sm font-semibold md:w-[45px]">
            <div className="mb-5 border-b border-black bg-white text-center md:mb-6 md:py-1">
              1
            </div>
          </li>
          <li className="w-[35px] rounded-sm border border-black bg-[#D9D9D9] text-sm font-semibold md:w-[45px]">
            <div className="mb-5 border-b border-black bg-white text-center md:mb-6 md:py-1">
              10
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Question;
