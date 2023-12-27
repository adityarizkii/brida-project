import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#23272E] px-8 py-10 md:py-12 lg:px-[100px]">
      <div className="mb-6 flex flex-col items-center gap-6 md:mb-8 md:flex-row md:justify-between">
        <div className="relative h-[48px] w-[150px]">
          <Image src="/logo2.svg" alt="logo" fill priority />
        </div>
        <ul className="flex w-full justify-center gap-12 text-white md:gap-6">
          <li>
            <Link href="/">Beranda</Link>
          </li>
          <li>
            <Link href="/map">Peta</Link>
          </li>
          <li>
            <Link href="/news">Berita</Link>
          </li>
          <li>
            <Link href="/quiz">Kuis</Link>
          </li>
        </ul>
        <div className="flex items-center gap-6">
          <FaFacebook className="text-2xl text-white"></FaFacebook>
          <FaGoogle className="text-2xl text-white"></FaGoogle>
          <FaInstagram className="text-2xl text-white"></FaInstagram>
        </div>
      </div>
      <div className="flex flex-col gap-6 border-t pt-6 md:flex-row-reverse md:justify-between md:pt-8">
        <p className="flex justify-between md:gap-6">
          <span className="font-medium text-white">Tentang Kami</span>
          <span className="font-medium text-white">Syarat & Ketentuan</span>
        </p>
        <p className="text-sm text-white">
          © 2023 - EcoSaver. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
