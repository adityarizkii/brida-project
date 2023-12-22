import BackLink from "@/components/Fragments/BackLink";
import Footer from "@/components/Fragments/Footer";
import Image from "next/image";
import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

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
        <div className="mt-20 grid grid-cols-[20%_80%] gap-x-12 pr-12">
          <div className="w-[250px] text-lg font-medium">
            <h2>Ketentuan Utama</h2>
          </div>
          <div className="text-sm">
            <p className="mb-6">
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
        <div className="my-10 grid grid-cols-[20%_80%] gap-x-12 pr-12">
          <div className="w-[250px] text-lg font-medium">
            <h2>Persyaratan</h2>
          </div>
          <div className="text-sm">
            <div className="flex gap-4">
              <FaRegCircleCheck className="mt-1 text-2xl text-info" />
              <p className="mb-8">
                Persetujuan: Dengan mengakses atau menggunakan situs
                web/aplikasi kami, Anda setuju untuk mematuhi syarat dan
                ketentuan kami.
              </p>
            </div>
            <div className="flex gap-4">
              <FaRegCircleCheck className="mt-1 text-2xl text-info" />
              <p className="mb-8">
                Kekayaan Intelektual: Semua konten, merek dagang, dan kekayaan
                intelektual di platform kami dilindungi oleh undang-undang hak
                cipta.
              </p>
            </div>
            <div className="flex gap-4">
              <FaRegCircleCheck className="mt-1 text-2xl text-info" />
              <p className="mb-8">
                Perilaku Pengguna: Pengguna bertanggung jawab atas tindakan
                mereka dan tidak boleh terlibat dalam aktivitas ilegal, kasar,
                atau berbahaya.
              </p>
            </div>
            <div className="flex gap-4">
              <FaRegCircleCheck className="mt-1 text-2xl text-info" />
              <p className="mb-8">
                Tautan Pihak Ketiga: Kami tidak bertanggung jawab atas konten
                atau praktik privasi situs web pihak ketiga yang ditautkan pada
                platform kami.
              </p>
            </div>
            <div className="flex gap-4">
              <FaRegCircleCheck className="mt-1 text-2xl text-info" />
              <p className="mb-8">
                Tautan Pihak Ketiga: Kami tidak bertanggung jawab atas konten
                atau praktik privasi situs web pihak ketiga yang ditautkan pada
                platform kami.
              </p>
            </div>
          </div>
        </div>
        <div className="my-10 grid grid-cols-[20%_80%] gap-x-12 pr-12">
          <div className="w-[250px] text-lg font-medium">
            <h2>Nilai-nilai kami</h2>
          </div>
          <div className="text-sm">
            <div className="flex gap-4">
              <FaRegCircleCheck className="mt-1 text-2xl text-info" />
              <p className="mb-8">
                Pengumpulan Informasi: Kami mengumpulkan informasi pribadi
                seperti nama dan alamat email untuk tujuan menyediakan layanan
                kami.
              </p>
            </div>
            <div className="flex gap-4">
              <FaRegCircleCheck className="mt-1 text-2xl text-info" />
              <p className="mb-8">
                Penggunaan Data: Data yang dikumpulkan dapat digunakan untuk
                mempersonalisasi pengalaman pengguna, meningkatkan layanan kami,
                dan berkomunikasi dengan pengguna.
              </p>
            </div>
            <div className="flex gap-4">
              <FaRegCircleCheck className="mt-1 text-2xl text-info" />
              <p className="mb-8">
                Keamanan Data: Kami menerapkan langkah-langkah keamanan standar
                industri untuk melindungi data pengguna dari akses atau
                pengungkapan yang tidak sah.
              </p>
            </div>
            <div className="flex gap-4">
              <FaRegCircleCheck className="mt-1 text-2xl text-info" />
              <p className="mb-8">
                Cookie: Situs web/aplikasi kami dapat menggunakan cookie untuk
                meningkatkan pengalaman pengguna dan mengumpulkan informasi
                statistik.
              </p>
            </div>
            <div className="flex gap-4">
              <FaRegCircleCheck className="mt-1 text-2xl text-info" />
              <p className="mb-8">
                Pembagian dengan Pihak Ketiga: Kami tidak menjual atau
                membagikan informasi pribadi kepada pihak ketiga kecuali
                diwajibkan oleh hukum atau dengan persetujuan pengguna.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsConditionsPage;
