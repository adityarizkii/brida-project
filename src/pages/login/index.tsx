import Loading from "@/components/Fragments/Loading";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, useEffect, useState } from "react";

type UserType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const LoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState<{ message: string }>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault();
    setError(undefined);
    setIsLoading(true);
    const Form = e.target as HTMLFormElement;
    const formData = new FormData(Form);
    const formDataObject = Object.fromEntries(formData.entries()) as UserType;

    const response = await fetch("https://ecosaver.vercel.app/api/login", {
      method: "POST",
      body: JSON.stringify(formDataObject),
    });
    const result = await response.json();

    if (response.status !== 200) {
      setError(result);
      setIsLoading(false);
      return;
    }

    router.replace("/quiz");
    setIsLoading(false);
  };

  return (
    <div className={isLoading ? "h-screen overflow-hidden" : ""}>
      {isLoading && <Loading />}
      <div className="grid h-screen lg:grid-cols-2">
        <div className="flex flex-col justify-center rounded-3xl border px-6 shadow-2xl md:px-28">
          <span
            onClick={() => {
              router.push("/");
            }}
            className="mb-14 flex items-center gap-2 font-semibold text-primary"
          >
            <Image
              src={"/arrow-left.svg"}
              alt="left-arrow"
              width={24}
              height={24}
            />
            <span className="hidden text-sm font-semibold md:inline-block">
              Kembali ke Halaman Utama
            </span>
            <span className="text-sm font-semibold md:hidden">Kembali</span>
          </span>
          <h1 className="mb-6 text-center text-3xl font-bold">Sign In</h1>
          <form className="flex flex-col gap-6" onSubmit={handleSignIn}>
            <div className="flex flex-col gap-2">
              <label htmlFor="signin" className="text-sm font-medium">
                Email
              </label>
              <input
                name="email"
                type="text"
                id="email"
                className="rounded-md border bg-[#F8F9FB] p-3"
                placeholder="Masukkan email anda"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="signin" className="text-sm font-medium">
                Kata Sandi
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="rounded-md border bg-input p-3"
                placeholder="Masukkan kata sandi anda "
                required
              />
            </div>
            {error?.message && (
              <p className="text-sm font-medium text-error">{error.message}</p>
            )}
            {/* <Link href="/login" className="font-semibold text-info">
              Lupa kata sandi?
            </Link> */}
            <button
              type="submit"
              className="rounded-md bg-primary py-3 text-center font-semibold text-white hover:bg-primaryHover"
            >
              Sign In
            </button>
            <div className="">
              <span className="text-neutral500">Belum punya akun? </span>
              <Link
                href="/register"
                className="font-semibold text-info underline"
              >
                Daftar di sini
              </Link>
            </div>
          </form>
        </div>
        <div className="hidden flex-col items-center justify-center text-center lg:flex">
          <h1 className="mb-4 text-4xl font-semibold text-neutral950">
            Halo Selamat Datang
          </h1>
          <p className="mb-10 font-medium text-black600">
            Ayo masuk kembali dan nikmati permainan yang seru <br /> dan
            menyenangkan ini uhuy
          </p>
          <div className="relative h-[350px] w-[250px]">
            <Image src={"/maskot2.svg"} alt="maskot" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
