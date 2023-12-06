import InputForm from "@/components/Fragments/InputForm";
import { useLoginContext } from "@/context/loginContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { GoPerson, GoLock, GoUnlock } from "react-icons/go";

type UserType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterPage = () => {
  const router = useRouter();
  const { status, setStatus, data, setData } = useLoginContext();

  const handleSignUp = (e: FormEvent) => {
    e.preventDefault();
    const Form = e.target as HTMLFormElement;
    const formData = new FormData(Form);

    const formDataObject = Object.fromEntries(formData.entries()) as UserType;
    const { confirmPassword, ...data } = formDataObject;

    fetch("http://localhost:3000/api/user", {
      method: "POST",
      body: JSON.stringify(data),
    }).then((res) => {
      setStatus(true);
      setData({
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
      });
      router.push("/quiz");
    });
  };

  return (
    <div className="grid h-screen lg:grid-cols-2">
      <div className="">
        <Link
          href="/"
          className="mb-8 ml-10 mt-12 flex items-center gap-2 font-semibold text-primary"
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
        <div className="hidden flex-col items-center justify-center text-center lg:flex">
          <h1 className="mb-4 text-4xl font-semibold text-neutral950">
            Halo Selamat Datang
          </h1>
          <p className="mb-10 text-lg font-medium text-black600">
            Ayo buat akun dan nikmati permainan yang seru <br /> dan
            menyenangkan ini uhuy
          </p>
          <div className="relative h-[350px] w-[250px]">
            <Image src={"/maskot2.svg"} alt="maskot" fill />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center rounded-3xl border py-12 shadow-2xl md:px-28">
        <h1 className="mb-6 text-center text-4xl font-bold text-neutral950">
          Sign Up
          {JSON.stringify(status)}
        </h1>
        <form className="flex flex-col gap-4" onSubmit={handleSignUp}>
          <InputForm
            icon={<AiOutlineMail className="text-xl" />}
            id="email"
            type="email"
            label="Email"
          >
            Masukkan Email anda
          </InputForm>
          <InputForm
            icon={<GoPerson className="text-xl" />}
            id="firstName"
            type="text"
            label="First Name"
          >
            Masukkan nama pertama
          </InputForm>
          <InputForm
            icon={<GoPerson className="text-xl" />}
            id="lastName"
            type="text"
            label="Last Name"
          >
            Masukkan nama terakhir
          </InputForm>
          <InputForm
            icon={<GoUnlock className="text-xl" />}
            id="password"
            type="password"
            label="Password"
          >
            Masukkan kata sandi
          </InputForm>
          <InputForm
            icon={<GoLock className="text-xl" />}
            id="confirmPassword"
            type="password"
            label="Confirm Password"
          >
            Konfirmasi kata sandi
          </InputForm>
          <div className="flex items-center gap-3 font-medium">
            <input type="checkbox" className="h-5 w-5" />
            <span>
              Menyetujui{" "}
              <Link href="/register" className=" text-info underline">
                Syarat & Ketentuan
              </Link>{" "}
              yang berlaku
            </span>
          </div>
          <button
            type="submit"
            className="rounded-md bg-primary py-2.5 text-center font-semibold text-white hover:bg-primaryHover"
          >
            Sign Up
          </button>
          <div className="">
            <span className="text-neutral500">Sudah punya akun? </span>
            <Link href="/login" className="font-semibold text-info underline">
              Masuk di sini
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
