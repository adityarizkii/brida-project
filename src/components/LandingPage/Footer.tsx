import React from "react";
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#23272E] px-8 py-10 md:py-12">
      <div className="mb-6 flex flex-col items-center gap-6 md:mb-8 md:flex-row md:justify-between">
        <img src="/logo2.svg" alt="logo" />
        <ul className="flex gap-2 text-white md:gap-6">
          <li>
            <a href="">Peta Satwa</a>
          </li>
          <li>
            <a href="">Artikel Satwa</a>
          </li>
          <li>
            <a href="">Kuis Satwa</a>
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
          <span className="font-medium text-white">Privacy Policy</span>
          <span className="font-medium text-white">Terms & Conditions</span>
        </p>
        <p className="text-white">© 2023 - EcoSaver. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
