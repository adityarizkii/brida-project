import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent } from "react";

type UserType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const LoginPage = () => {
  const router = useRouter();
  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault();
    const Form = e.target as HTMLFormElement;
    const formData = new FormData(Form);
    const formDataObject = Object.fromEntries(formData.entries()) as UserType;
    // console.log(formDataObject);

    const result = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      body: JSON.stringify(formDataObject),
    });

    const resultJson = await result.json();
    console.log(resultJson);
    router.push("/login");
  };
  return (
    <div className="grid h-screen lg:grid-cols-2">
      <div className="flex flex-col justify-center rounded-3xl border shadow-2xl md:px-28">
        <Link
          href="/"
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
        </Link>
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
              placeholder="Masukkan kata sandi anda"
            />
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="h-5 w-5" />
              <label htmlFor="" className="font-medium">
                Ingat saya
              </label>
            </div>
            <a href="/" className="font-semibold text-info">
              Lupa kata sandi?
            </a>
          </div>
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
  );
};

export default LoginPage;
