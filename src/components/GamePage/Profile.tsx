import React from "react";
import { FiMenu } from "react-icons/fi";

const Profile = () => {
  return (
    <div>
      <header className="mb-10 flex items-center justify-between p-4">
        <img src="/logo.svg" alt="logo" className="" />
        <FiMenu className="text-2xl"></FiMenu>
      </header>
      <div className="px-8">
        {/* breadcrumb */}
        <div className="mb-5">
          <span className="text-sm font-medium text-[#858C95]">Beranda</span>
          <span> &gt; </span>
          <span className="text-sm font-medium text-info">
            Profile Pengguna
          </span>
        </div>
        <h1 className="text-2xl font-bold text-primary">Profile Pengguna</h1>
        {/* card */}
        <div className="">
          <div className="">
            <h2>Alamat Email</h2>
            <span>bitalya@gmail.com</span>
          </div>
          <div className="">
            <h2>Nama Pertama</h2>
            <span>Bita</span>
          </div>
          <div className="">
            <h2>Nama Kedua</h2>
            <span>Alya</span>
          </div>
          <div className="">
            <h2>Password</h2>
            <span>********</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
