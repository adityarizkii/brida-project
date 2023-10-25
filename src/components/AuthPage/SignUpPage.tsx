import React from "react";

const SignUpPage = () => {
  return (
    <div className="grid lg:grid-cols-2">
      <div className="hidden lg:block">
        <img src="/maskot.svg" alt="maskot" />
      </div>
      <div className="flex flex-col justify-center md:px-28">
        <h1 className="mb-6 text-[32px] font-bold text-center">Sign Up</h1>
        <form action="" className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="signin" className="text-sm font-medium">
              Email
            </label>
            <input
              type="text"
              id="signin"
              className="p-3 border bg-[#F8F9FB] rounded-md"
              placeholder="Masukkan email anda"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="signin" className="text-sm font-medium">
              Nama Pertama
            </label>
            <input
              type="text"
              id="signin"
              className="p-3 border bg-[#F8F9FB] rounded-md"
              placeholder="Masukkan email anda"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="signin" className="text-sm font-medium">
              Nama Terakhir
            </label>
            <input
              type="text"
              id="signin"
              className="p-3 border bg-[#F8F9FB] rounded-md"
              placeholder="Masukkan email anda"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="signin" className="text-sm font-medium">
              Kata Sandi
            </label>
            <input
              type="text"
              id="signin"
              className="p-3 border bg-input rounded-md"
              placeholder="Masukkan kata sandi anda"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="signin" className="text-sm font-medium">
              Konfirmasi Kata Sandi
            </label>
            <input
              type="text"
              id="signin"
              className="p-3 border bg-input rounded-md"
              placeholder="Masukkan kata sandi anda"
            />
          </div>
          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
              <input type="checkbox" className="w-5 h-5" />
              <span className="font-medium">
                Menyetujui{" "}
                <a href="" className="text-info underline">
                  Syarat & Ketentuan
                </a>{" "}
                yang berlaku
              </span>
            </div>
          </div>
          <button className="py-3 bg-primary text-white rounded-md font-semibold">
            Sign In
          </button>
          <div className="">
            <span className="text-neutral500">Sudah punya akun? </span>
            <a href="" className="font-semibold text-info underline">
              Masuk di sini
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
