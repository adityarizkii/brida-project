import Image from "next/image";
import React from "react";
import BigCard from "./BigCard";
import SmallCard from "./SmallCard";
import Link from "next/link";
import BackLink from "../Fragments/BackLink";

const News = () => {
  return (
    <div>
      <h1 className="mb-4 text-center text-2xl font-semibold text-neutral950 md:mb-16 md:text-[32px]">
        Berita Satwa NTB
      </h1>
      <div className="flex items-center justify-between lg:mb-24">
        {/* back link */}
        <BackLink href={"/"}>Kembali ke Halaman Utama</BackLink>
        <input
          type="text"
          className="w-[200px] rounded-md bg-[#E5E5E7] px-3 py-1.5"
          placeholder="Cari"
        />
      </div>
      {/* grid */}
      <div className="grid gap-10 lg:mb-32 lg:grid-cols-2">
        <BigCard />
        <div className="flex flex-col gap-8">
          <SmallCard></SmallCard>
          <SmallCard></SmallCard>
          <SmallCard></SmallCard>
        </div>
      </div>
      <div className="grid gap-10 lg:mb-32 lg:grid-cols-2">
        <BigCard />
        <div className="flex flex-col gap-8">
          <SmallCard></SmallCard>
          <SmallCard></SmallCard>
          <SmallCard></SmallCard>
        </div>
      </div>
    </div>
  );
};

export default News;
