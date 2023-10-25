import React from "react";
import { FiMenu } from "react-icons/fi";

const EditProfile = () => {
  return (
    <div className="bg-[#F6F7F9]">
      <header className="mb-10 flex items-center justify-between bg-white p-4">
        <div className="">
          <img src="/logo.svg" alt="logo" />
        </div>
        <FiMenu className="text-2xl"></FiMenu>
      </header>
      <div className="px-8">
        {/* breadcrumb */}
        <div className="mb-4 flex items-center gap-1.5">
          <span className="text-sm font-medium text-[#858C95]">Beranda</span>
          <span className="text-[#858C95]">&gt;</span>
          <span className="text-sm font-medium text-info">
            Edit Profile Pengguna
          </span>
        </div>
        {/* title */}
        <h1 className="mb-10 text-2xl font-bold text-primary">
          Edit Profile Pengguna
        </h1>
        {/* form */}
        <form action="" className="text-[#323539]">
          <div className="mt-4 flex flex-col gap-1.5">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="rounded-md bg-[#E7E7E7] px-3 py-2.5 text-sm"
            />
          </div>
          <div className="mt-4 flex flex-col gap-1.5">
            <label htmlFor="firstName" className="font-semibold">
              Nama Pertama
            </label>
            <input
              type="text"
              id="firstName"
              className="rounded-md bg-[#E7E7E7] px-3 py-2.5 text-sm"
            />
          </div>
          <div className="mt-4 flex flex-col gap-1.5">
            <label htmlFor="lastName" className="font-semibold">
              Nama Akhir
            </label>
            <input
              type="text"
              id="lastName"
              className="rounded-md bg-[#E7E7E7] px-3 py-2.5 text-sm"
            />
          </div>
          <div className="mt-4 flex flex-col gap-1.5">
            <label htmlFor="password" className="font-semibold">
              Kata Sandi Lama
            </label>
            <input
              type="password"
              id="password"
              className="rounded-md bg-[#E7E7E7] px-3 py-2.5 text-sm"
            />
          </div>
          <div className="mt-4 flex flex-col gap-1.5">
            <label htmlFor="newPassword" className="font-semibold">
              Kata Sandi Baru
            </label>
            <input
              type="password"
              id="newPassword"
              className="rounded-md bg-[#E7E7E7] px-3 py-2.5 text-sm"
            />
          </div>
          <div className="mt-4 flex flex-col gap-1.5">
            <label htmlFor="confirmNewPassword" className="font-semibold">
              Kata Sandi Baru
            </label>
            <input
              type="password"
              id="confirmNewPassword"
              className="rounded-md bg-[#E7E7E7] px-3 py-2.5 text-sm"
            />
          </div>
          {/* sumbit button */}
          <button className="mt-5 rounded-md bg-primary px-5 py-2 font-medium text-white">
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
