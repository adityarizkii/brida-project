import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Dispatch, SetStateAction } from "react";

type propsType = {
  classname: string;
  isSidebarActive: boolean;
  setIsSidebarActive: Dispatch<SetStateAction<boolean>>;
};

const Header = (props: propsType) => {
  const { classname, setIsSidebarActive, isSidebarActive } = props;

  return (
    <>
      <div
        className={`fixed top-0 z-10 flex w-full items-center justify-between border-b bg-white shadow-md ${classname}`}
      >
        <div className="relative h-12 w-36">
          <Image src={"/logo.svg"} alt="logo" fill />
        </div>
        <ul className="flex gap-12">
          <li className="font-medium text-primary">
            <Link href="/landing">Beranda</Link>
          </li>
          <li className="font-medium">
            <Link href="/map">Peta</Link>
          </li>
          <li className="font-medium">
            <Link href="/news">Berita</Link>
          </li>
          <li className="font-medium">
            <Link href="/login">Kuis</Link>
          </li>
        </ul>
        {/* <div className="flex gap-3">
          <h3 className="text-lg font-semibold text-primary">Draco Malfoy</h3>
          <Image
            src={"/arrow-down.svg"}
            alt="arrow-down"
            width={25}
            height={25}
          />
        </div> */}
        <div className="flex gap-4">
          <Link
            href={"/login"}
            className="rounded-lg bg-primary px-4 py-2.5 text-white"
          >
            Masuk
          </Link>
          <Link
            href={"/register"}
            className="rounded-lg border border-primary bg-white px-4 py-2.5 text-primary"
          >
            Daftar
          </Link>
        </div>
        <button onClick={() => setIsSidebarActive(true)} className="lg:hidden">
          <Image
            src={"/burger-menu.svg"}
            alt="burger-menu"
            width={24}
            height={24}
          />
        </button>
      </div>
      {/* sidebar */}
      <div
        className={`fixed top-0 z-10 h-screen overflow-y-scroll bg-red-300 transition-all duration-300 ${
          isSidebarActive ? "right-0" : "-right-[250px]"
        }`}
      >
        <div className="mx-7 my-12" onClick={() => setIsSidebarActive(false)}>
          <img src="/logo.svg" alt="logo" />
        </div>
        <ul className="mb-6">
          <li className="bg-primary px-14 py-3 text-center text-white">
            Beranda
          </li>
          <li className="px-14 py-3 text-center text-neutral500">Peta</li>
          <li className="px-14 py-3 text-center text-neutral500">Artikel</li>
          <li className="px-14 py-3 text-center text-neutral500">Permainan</li>
        </ul>
        <div className="mx-[30px] mb-[100px] h-[1px] bg-neutral500"></div>
        <div className="flex flex-col items-center gap-2.5">
          <button className="rounded-lg bg-primary px-6 py-2 font-medium text-white">
            Masuk
          </button>
          <button className="rounded-lg border border-primary px-6 py-2 font-medium text-primary">
            Daftar
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
