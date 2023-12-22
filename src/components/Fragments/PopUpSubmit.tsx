import React from "react";

const PopUpSubmit = ({ setIsPopUp, handleSubmit }: any) => {
  return (
    <div className="absolute left-0 top-0 z-30 flex h-screen w-full items-center justify-center bg-black  bg-opacity-70">
      <div className="min-w-96 rounded-lg border bg-white p-8  shadow-xl">
        <h1 className="text-xl font-semibold">
          Apakah sudah yakin dengan jawaban anda?
        </h1>
        <div className="mt-8 flex justify-center gap-6">
          <button
            className="rounded-md border  border-primary px-4 py-2"
            onClick={() => {
              setIsPopUp(false);
            }}
          >
            Kembali ke soal
          </button>
          <button
            className="rounded-md bg-primary px-4 py-2 text-white"
            onClick={handleSubmit}
          >
            Yakin, kirim sekarang!
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUpSubmit;
