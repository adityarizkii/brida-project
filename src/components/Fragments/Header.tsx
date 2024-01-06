import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { useCookies } from "react-cookie";

type propsType = {
  classname: string;
  isSidebarActive: boolean;
  setIsSidebarActive: Dispatch<SetStateAction<boolean>>;
};

const Header = (props: propsType) => {
  const { classname, setIsSidebarActive, isSidebarActive } = props;
  const [cookies, setCookies, removeCookies] = useCookies();
  const [firstName, setFirstName] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [accSetting, setAccSetting] = useState<boolean>(false);
  const [pathname, setPathname] = useState<string[]>();
  const path = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (path) {
      const pathname = path.split("/");
      setPathname(pathname);
    }
  }, [path]);

  const handleLogout = () => {
    removeCookies("token");
    removeCookies("firstName");
    router.replace("/login");
  };

  useEffect(() => {
    setFirstName(cookies.firstName);
    setToken(cookies.token);
  }, [cookies, token]);

  return (
    <>
      <div
        className={`fixed top-0 z-10 flex w-full items-center justify-between border-b bg-white shadow-md ${classname}`}
      >
        <Link href={"/"}>
          <div className="relative h-12 w-36">
            <Image src={"/logo.svg"} alt="logo" fill priority />
          </div>
        </Link>
        <ul className="hidden gap-12 lg:flex">
          <li
            className={`font-medium transition duration-200 hover:-translate-y-1 ${
              pathname && !pathname[1] ? "text-primary" : ""
            }`}
          >
            <Link href="/">Beranda</Link>
          </li>
          <li
            className={`font-medium transition duration-200 hover:-translate-y-1 ${
              pathname && pathname[1] === "map" ? "text-primary" : ""
            }`}
          >
            <Link href="/map">Peta</Link>
          </li>
          <li
            className={`font-medium transition duration-200 hover:-translate-y-1 ${
              pathname && pathname[1] === "news" ? "text-primary" : ""
            }`}
          >
            <Link href="/news">Berita</Link>
          </li>
          <li
            className={`font-medium transition duration-200 hover:-translate-y-1 ${
              pathname && pathname[1] === "quiz" ? "text-primary" : ""
            }`}
          >
            <Link href="/login">Kuis</Link>
          </li>
        </ul>
        {token && (
          <div className="relative hidden gap-3 lg:flex">
            <h3 className="text-lg font-semibold text-primary">{firstName}</h3>
            <button
              onClick={() => {
                setAccSetting(!accSetting);
              }}
            >
              <Image
                src={"/arrow-down.svg"}
                alt="arrow-down"
                width={25}
                height={25}
              />
            </button>
            {accSetting && (
              <div className="absolute right-0 top-10 rounded-md border bg-white p-4 shadow-lg">
                <ul>
                  <li onClick={handleLogout} className="cursor-pointer">
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
        {!token && (
          <div className="hidden gap-4 lg:flex">
            <Link
              href={"/login"}
              className="rounded-md bg-primary px-4 py-2.5 text-white duration-200 hover:bg-primaryHover"
            >
              Masuk
            </Link>
            <Link
              href={"/register"}
              className="rounded-md border border-primary bg-white px-4 py-2.5 text-primary duration-200 hover:bg-primaryHover hover:text-white"
            >
              Daftar
            </Link>
          </div>
        )}

        {/* mobile */}
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
        className={`fixed top-0 z-10 h-screen overflow-y-scroll bg-white pb-12 shadow-xl shadow-gray-700 transition-all duration-300 ${
          isSidebarActive ? "right-0" : "-right-[250px]"
        }`}
      >
        <div className="mx-7 my-12" onClick={() => setIsSidebarActive(false)}>
          <div className="relative h-[48px] w-[144px]">
            <Image src="/logo.svg" alt="logo" fill priority />
          </div>
        </div>
        <ul className="mb-6">
          <li
            className={`px-14 py-3 text-center text-neutral500 ${
              pathname && !pathname[1] ? "bg-primary text-white" : ""
            }`}
          >
            <Link href={"/"}>Beranda</Link>
          </li>
          <li
            className={`px-14 py-3 text-center text-neutral500 ${
              pathname && pathname[1] === "map" ? "bg-primary text-white" : ""
            }`}
          >
            <Link href={"/map"}>Peta</Link>
          </li>
          <li
            className={`px-14 py-3 text-center text-neutral500 ${
              pathname && pathname[1] === "news" ? "bg-primary text-white" : ""
            }`}
          >
            <Link href={"/news"}>Berita</Link>
          </li>
          <li
            className={`px-14 py-3 text-center text-neutral500 ${
              pathname && pathname[1] === "quiz" ? "bg-primary text-white" : ""
            }`}
          >
            <Link href={"/quiz"}>Kuis</Link>
          </li>
        </ul>
        <div className="mx-[30px] mb-[100px] h-[1px] bg-neutral500" />
        <div className="flex flex-col items-center gap-2.5">
          {!token && (
            <>
              <button
                className="rounded-lg bg-primary px-6 py-2 font-medium text-white"
                onClick={() => {
                  router.push("/login");
                }}
              >
                Masuk
              </button>
              <button
                className="rounded-lg border border-primary px-6 py-2 font-medium text-primary"
                onClick={() => {
                  router.push("/register");
                }}
              >
                Daftar
              </button>
            </>
          )}
          {token && (
            <>
              <h3 className="mb-2 font-semibold text-primary">{firstName}</h3>
              <button
                onClick={handleLogout}
                className="w-full border-2 bg-red-100 py-2"
              >
                Log out
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
