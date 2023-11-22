import Link from "next/link";
import React from "react";

const Quiz = () => {
  return (
    <div className="mb-14 grid md:grid-cols-2 md:gap-11 lg:grid-cols-3">
      <div
        className="hidden items-center justify-center lg:flex"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <img src="/maskot1.svg" alt="maskot" />
      </div>
      <div
        className="left mb-6 flex flex-col items-center px-2 py-5  text-center"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        <h1 className="mb-6 text-2xl font-semibold text-neutral950 md:text-4xl">
          Kuis Satwa NTB
        </h1>
        <p className="mb-9 text-black600 md:text-lg">
          Suka dengan hewan dan pengetahuan tentang alam? Mari ikut kuis satwa
          NTB dan tunjukkan seberapa hebatnya kamu dalam mengenal satwa-satwa
          daerah kita!
        </p>
        <Link
          href={"/login"}
          className="rounded-md bg-primary px-5 py-3 font-semibold text-white duration-200 hover:bg-primaryHover"
        >
          Mulai Kuis
        </Link>
      </div>
      <div className="right" data-aos="zoom-in" data-aos-delay="600">
        <div className="rounded-md px-5 py-8 shadow-2xl md:max-w-[350px]">
          <h1 className="mb-14 text-center text-2xl font-semibold text-primary">
            Leaderboard Kuis
          </h1>
          <ul>
            <li>
              <div className="mb-4 flex justify-between rounded-md bg-[#F8F9FB] px-5 py-3 text-neutral500">
                <span>1. Kevin</span>
                <span>100</span>
              </div>
              <div className="mb-4 flex justify-between rounded-md bg-[#F8F9FB] px-5 py-3 text-neutral500">
                <span>1. Kevin</span>
                <span>100</span>
              </div>
              <div className="mb-4 flex justify-between rounded-md bg-[#F8F9FB] px-5 py-3 text-neutral500">
                <span>1. Kevin</span>
                <span>100</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
