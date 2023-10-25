import React from "react";

const Sidebar = ({ setIsSidebarActive }: any) => {
  return (
    <>
      <div
        className="absolute bottom-0 left-0 right-0 top-0 bg-black opacity-50"
        onClick={() => setIsSidebarActive(false)}
      ></div>
      <div className="absolute right-0 top-0 min-h-screen border bg-white pb-8">
        <div className="mx-7 my-12">
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

export default Sidebar;
