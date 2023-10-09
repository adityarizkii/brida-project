import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 py-4 md:px-8">
      <img src="/logo.svg" alt="logo" className="" />
      <img src="/burger-menu.svg" alt="burger-menu" className="lg:hidden" />
      <ul className="hidden lg:flex gap-12">
        <li>Beranda</li>
        <li>Peta</li>
        <li>Artikel</li>
        <li>Permainan</li>
      </ul>
      <div className="hidden lg:flex gap-4">
        <button className="px-4 py-2 rounded-lg bg-primary text-white">
          Masuk
        </button>
        <button className="px-4 py-2 border border-primary rounded-lg text-primary">
          Daftar
        </button>
      </div>
    </header>
  );
};

export default Header;
