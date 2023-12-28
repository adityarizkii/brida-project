import InputForm from "@/components/Fragments/InputForm";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { GoPerson, GoLock, GoUnlock } from "react-icons/go";
import registerValidation from "@/validation/registerValidation";
import Loading from "@/components/Fragments/Loading";

type UserType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterPage = () => {
  const router = useRouter();
  const [error, setError] = useState<any>();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [confirmPwError, setConfirmPwError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();
    setConfirmPwError(false);
    setError(false);
    setIsLoading(true);

    const Form = e.target as HTMLFormElement;
    const formData = new FormData(Form);
    const formDataObject = Object.fromEntries(formData.entries()) as UserType;
    const validation = registerValidation.safeParse(formDataObject);

    if (validation.success === false) {
      // console.log(validation.error.flatten().fieldErrors);
      setError(validation.error.flatten().fieldErrors);
      setIsLoading(false);
      return;
    }

    // validation confirm password
    if (formDataObject.password !== formDataObject.confirmPassword) {
      setConfirmPwError(true);
      setIsLoading(false);
      return;
    }

    const { confirmPassword, ...data } = formDataObject;

    const response = await fetch("https://ecosaver.vercel.app/api/register", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const result = await response.json();

    if (response.status !== 200) {
      setError(result);
      setIsLoading(false);
      return;
    }

    router.push("/quiz");
    setIsLoading(false);
  };

  return (
    <div className="h-screen overflow-hidden">
      {isLoading && <Loading />}
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
          </h1>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSignUp}
            noValidate
          >
            <InputForm
              icon={<AiOutlineMail className="text-xl" />}
              id="email"
              type="email"
              label="Email"
            >
              Masukkan Email anda
            </InputForm>
            {error?.email && (
              <p className="text-sm font-medium text-red-500">
                Email yang kamu masukkan tidak valid
              </p>
            )}
            <InputForm
              icon={<GoPerson className="text-xl" />}
              id="firstName"
              type="text"
              label="First Name"
            >
              Masukkan nama pertama
            </InputForm>
            {error?.firstName && (
              <p className="text-sm font-medium text-red-500">
                Tidak boleh kurang dari 2 karakter
              </p>
            )}
            <InputForm
              icon={<GoPerson className="text-xl" />}
              id="lastName"
              type="text"
              label="Last Name"
            >
              Masukkan nama terakhir
            </InputForm>
            {error?.lastName && (
              <p className="text-sm font-medium text-red-500">
                Tidak boleh kurang dari 2 karakter
              </p>
            )}
            <InputForm
              icon={<GoUnlock className="text-xl" />}
              id="password"
              type="password"
              label="Password"
            >
              Masukkan kata sandi
            </InputForm>
            {error?.password && (
              <p className="text-sm font-medium text-red-500">
                Password minimal 8 karakter, kombinasi huruf dan angka
              </p>
            )}
            <InputForm
              icon={<GoLock className="text-xl" />}
              id="confirmPassword"
              type="password"
              label="Confirm Password"
            >
              Konfirmasi kata sandi
            </InputForm>
            {confirmPwError && (
              <p className="text-sm font-medium text-red-500">
                Sesuaikan dengan password anda
              </p>
            )}
            {error?.message && (
              <p className="animate-errorShake text-sm font-medium text-red-500">
                {error.message}
              </p>
            )}
            <div className="flex items-center gap-3 font-medium">
              <input
                type="checkbox"
                className="h-5 w-5 cursor-pointer"
                onChange={handleCheckboxChange}
                checked={isChecked}
              />
              <span>
                Menyetujui{" "}
                <Link href="/termsconditions" className=" text-info underline">
                  Syarat & Ketentuan
                </Link>{" "}
                yang berlaku
              </span>
            </div>
            <button
              type="submit"
              className={` rounded-md bg-primary py-2.5 text-center font-semibold text-white ${
                !isChecked
                  ? "cursor-not-allowed opacity-60"
                  : "cursor-pointer hover:bg-primaryHover"
              }`}
              disabled={!isChecked}
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
    </div>
  );
};

export default RegisterPage;
