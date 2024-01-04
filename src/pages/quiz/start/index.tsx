import BackLink from "@/components/Fragments/BackLink";
import PopUpSubmit from "@/components/Fragments/PopUpSubmit";
import PopUpTimeLeft from "@/components/Fragments/PopUpTimeLeft";
import QuizNumber from "@/components/Fragments/QuizNumber";
import Timer from "@/components/Fragments/Timer";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

type DataSoalType = {
  idSoal: string;
  soal: string;
  jawaban: string;
  opsi: string[];
  penjelasan: string;
  image: string;
  idxSoal: number;
};

type UserOptionsType = {
  number: number;
  option: string | undefined;
};

const QuizPage = () => {
  const [dataSoal, setDataSoal] = useState<DataSoalType[]>();
  const [currSoal, setCurrSoal] = useState<DataSoalType>();
  const [currIdx, setCurrIdx] = useState<number>(1);
  const [currOption, setCurrOption] = useState<string | undefined>(undefined);
  const [cookies, setCookies, removeCookies] = useCookies();
  const [isTimeLeft, setIsTimeLeft] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [radioValues, setRadioValues] = useState<Array<boolean>>(
    Array(currSoal?.opsi.length).fill(false)
  );
  const router = useRouter();
  const [isPopUp, setIsPopUp] = useState<boolean>(false);
  const [userOptions, setUserOptions] = useState<UserOptionsType[]>([
    { number: 1, option: undefined },
    { number: 2, option: undefined },
    { number: 3, option: undefined },
    { number: 4, option: undefined },
    { number: 5, option: undefined },
    { number: 6, option: undefined },
    { number: 7, option: undefined },
    { number: 8, option: undefined },
    { number: 9, option: undefined },
    { number: 10, option: undefined },
  ]);

  const fetchDataSoal = async () => {
    const response = await fetch("https://ecosaver.vercel.app/api/data-soal");
    const result = await response.json();
    const indexingResult = result.map((data: DataSoalType, idx: number) => {
      return { ...data, idxSoal: ++idx };
    });
    setDataSoal(indexingResult);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    recordAnswer();

    let score = 0;
    dataSoal?.forEach((soal, idx) => {
      if (soal.jawaban === userOptions[idx].option) {
        score = score + 10;
      }
    });

    await fetch("https://ecosaver.vercel.app/api/update-score", {
      method: "POST",
      body: JSON.stringify(score),
    });

    localStorage.setItem("dataSoal", JSON.stringify(dataSoal));
    localStorage.setItem("userOptions", JSON.stringify(userOptions));

    setIsLoading(false);
    router.replace("/quiz/finish");
    // console.log("score " + score);
    // console.log(dataSoal);
    // console.log(userOptions);
  };

  useEffect(() => {
    if (!isTimeLeft) {
      recordAnswer();
      setIsPopUp(true);
    }
  }, [isTimeLeft]);

  useEffect(() => {
    fetchDataSoal();
  }, []);

  useEffect(() => {
    // set soal awal
    const current = dataSoal?.find((data) => data.idxSoal === currIdx);
    setCurrSoal(current);

    // set default option
    const defaultOption = current?.opsi.findIndex((option) => {
      return option === userOptions[currIdx - 1].option;
    });
    const newRadioValues = Array(currSoal?.opsi.length).fill(false);
    if (defaultOption != undefined) {
      newRadioValues[defaultOption] = true;
    }
    setRadioValues(newRadioValues);

    // set curr option
    if (defaultOption !== undefined) {
      setCurrOption(current?.opsi[defaultOption]);
    }
    // console.log(userOptions);
  }, [dataSoal, currIdx]);

  const recordAnswer = () => {
    let newUserOptions: any = [];
    userOptions.forEach((option) => {
      if (option.number === currIdx) {
        newUserOptions.push({ number: option.number, option: currOption });
      } else {
        newUserOptions.push({ number: option.number, option: option.option });
      }
    });
    setUserOptions(newUserOptions);
  };

  const resetRadioValues = () => {
    setRadioValues(Array(currSoal?.opsi.length).fill(false));
  };

  const handleNext = () => {
    recordAnswer();
    resetRadioValues();

    if (currIdx === 10) {
      setCurrIdx(1);
    } else {
      setCurrIdx(currIdx + 1);
    }
  };

  const handlePrev = () => {
    recordAnswer();
    resetRadioValues();

    if (currIdx === 1) {
      setCurrIdx(10);
    } else {
      setCurrIdx(currIdx - 1);
    }
  };

  const handleNavigate = (idx: number) => {
    recordAnswer();
    resetRadioValues();
    setCurrIdx(idx);
  };

  return (
    <div className={isPopUp ? "max-h-screen overflow-y-hidden" : ""}>
      {!isTimeLeft && <PopUpTimeLeft handleSubmit={handleSubmit} />}
      {isPopUp && isTimeLeft && (
        <PopUpSubmit setIsPopUp={setIsPopUp} handleSubmit={handleSubmit} />
      )}
      <div className="px-4 lg:px-[100px]">
        <div className="pb-[18px] pt-8">
          <div className="flex items-center justify-between">
            <BackLink href="/quiz/unfinished" removeToken={removeCookies}>
              Batalkan Kuis
            </BackLink>
            <div className="relative h-[38px] w-[125px] lg:h-[48px] lg:w-[154px]">
              <Image
                src={"/logo.svg"}
                alt="logo"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <Timer seconds={120} setIsTimeLeft={setIsTimeLeft} />
          </div>
        </div>
        {/* box */}
        <div className="relative mb-5 grid rounded-md border p-4 pb-8 shadow-md lg:mb-10 lg:grid-cols-2 lg:gap-x-20 lg:gap-y-12 lg:px-[100px] lg:pt-12">
          {currSoal?.image && (
            <div className="relative col-span-2 mb-4 h-[165px] overflow-hidden rounded-lg lg:col-span-1 lg:mb-0 lg:h-[279px] lg:w-[370px] ">
              <Image
                src={currSoal.image}
                alt="gambar soal"
                fill
                objectFit="cover"
              />
            </div>
          )}
          <div
            className={`${
              currSoal?.image ? "" : "lg:col-span-2"
            } col-span-2 lg:col-span-1`}
          >
            <h2 className="font-medium lg:text-xl">
              Pertanyaan {currSoal?.idxSoal}/10
            </h2>
            <p className="my-3 text-sm font-medium lg:text-base">
              {currSoal?.soal}
            </p>
            <p className="mb-6 text-sm font-medium lg:text-base">Jawab:</p>
            <form className="mb-6 flex flex-col gap-2.5 lg:mb-4">
              {currSoal?.opsi.map((option, idx) => (
                <div
                  className="flex cursor-pointer gap-2.5 text-xs font-medium md:text-base lg:text-sm"
                  key={idx}
                >
                  <input
                    type="radio"
                    id={"answer" + idx}
                    name={"answer"}
                    onChange={() => {
                      const newRadioValues = Array(currSoal.opsi.length).fill(
                        false
                      );
                      newRadioValues[idx] = true;
                      setRadioValues(newRadioValues);
                      setCurrOption(option);
                    }}
                    checked={radioValues[idx]}
                    className="cursor-pointer"
                  />
                  <label htmlFor={"answer" + idx} className="cursor-pointer">
                    {option}
                  </label>
                </div>
              ))}
              <span
                className="mt-4 cursor-pointer text-xs font-medium text-info underline md:text-sm"
                onClick={() => {
                  const newRadioValues = Array(currSoal?.opsi.length).fill(
                    false
                  );
                  setRadioValues(newRadioValues);
                  setCurrOption(undefined);
                }}
              >
                Bersihkan Jawaban
              </span>
            </form>
          </div>
          {currIdx !== 1 && (
            <button
              onClick={handlePrev}
              className="col-start-1 w-fit rounded-md border border-primary bg-white px-2 py-1.5 text-xs font-medium text-primary hover:bg-primaryHover hover:text-white lg:px-6 lg:py-3 lg:text-base"
            >
              Soal Sebelumnya
            </button>
          )}
          <div className="col-start-2 flex flex-row-reverse">
            {currIdx !== 10 ? (
              <button
                onClick={handleNext}
                className="w-fit rounded-md bg-primary px-2 py-1.5 text-xs text-white hover:bg-primaryHover lg:px-6 lg:py-3 lg:text-base"
              >
                Soal Selanjutnya
              </button>
            ) : (
              <button
                onClick={() => {
                  recordAnswer();
                  setIsPopUp(true);
                }}
                className="w-fit rounded-md bg-primary px-6 py-1.5 text-xs text-white hover:bg-primaryHover lg:px-6 lg:py-3 lg:text-base"
              >
                Selesai
              </button>
            )}
          </div>
          <Image
            src={
              currSoal?.image
                ? "/maskot-kuis-kanan.svg"
                : "/maskot-kuis-kiri.svg"
            }
            alt="maskot"
            width={80}
            height={130}
            className="absolute -bottom-4 left-[45%] hidden lg:block"
          />
        </div>
        {/* navigasi soal */}
        <div className="mb-10">
          <h3 className="mb-4 text-base font-semibold text-neutral950 lg:text-xl">
            Navigasi Kuis
          </h3>
          <div className="flex gap-1.5 lg:gap-3">
            {dataSoal?.map((soal, idx) => (
              <QuizNumber
                key={idx}
                onClick={handleNavigate}
                toIndex={soal.idxSoal}
                status={userOptions[idx].option ? "filled" : "unfilled"}
                isActive={currIdx - 1 === idx ? true : false}
              >
                {`${soal.idxSoal}`}
              </QuizNumber>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
