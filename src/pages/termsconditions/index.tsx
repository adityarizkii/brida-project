import BackLink from "@/components/Fragments/BackLink";
import Footer from "@/components/Fragments/Footer";
import Image from "next/image";
import React from "react";

const TermsConditionsPage = () => {
  return (
    <>
      <div className="px-[100px] pt-[60px]">
        <header className="flex flex-col items-center gap-10">
          <div className="relative h-12 w-[150px]">
            <Image src={"/logo.svg"} alt="logo" fill />
          </div>
          <h1 className="text-2xl font-bold">Syarat & Ketentuan</h1>
        </header>
        <BackLink href="/">Kembali</BackLink>
        <div className="mt-20 grid grid-cols-[20%_80%] gap-x-12">
          <div className="w-[250px] text-xl font-medium">
            <h2>Ketentuan Utama</h2>
          </div>
          <div className="">
            <p className="mb-8">
              Kami menjaga privasi dan perlindungan informasi pribadi Anda
              dengan serius. Kebijakan privasi ini menguraikan cara kami
              mengumpulkan, menggunakan, mengungkapkan, dan melindungi data
              pribadi Anda saat Anda menggunakan platform perangkat lunak
              sebagai layanan kami. Dengan mengakses atau menggunakan layanan
              kami, Anda menyetujui poin-poin yang dijelaskan dalam kebijakan
              ini.
            </p>
            <p>
              Pengumpulan dan Penggunaan Informasi: Kami dapat mengumpulkan
              berbagai jenis informasi untuk menyediakan dan meningkatkan
              layanan kami. Hal ini dapat mencakup informasi yang dapat
              diidentifikasi secara pribadi (seperti nama, alamat email, dan
              detail kontak Anda) dan informasi yang tidak dapat diidentifikasi
              secara pribadi (seperti data penggunaan dan analisis).
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsConditionsPage;
