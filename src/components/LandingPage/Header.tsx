import React from "react";

const Header = ({ toggleNavbar }: any) => {
  return (
    <>
      <header className={`flex items-center justify-between`}>
        <img src="/logo.svg" alt="logo" className="" />
        <button onClick={() => toggleNavbar(true)}>
          <img src="/burger-menu.svg" alt="burger-menu" className="lg:hidden" />
        </button>
        <ul className="hidden gap-12 lg:flex">
          <li>Beranda</li>
          <li>Peta</li>
          <li>Artikel</li>
          <li>Permainan</li>
        </ul>
        <div className="hidden gap-4 lg:flex">
          <button className="rounded-lg bg-primary px-4 py-2 text-white">
            Masuk
          </button>
          <button className="rounded-lg border border-primary px-4 py-2 text-primary">
            Daftar
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
