import BackLink from "@/components/Fragments/BackLink";
import QuizNumber from "@/components/Fragments/QuizNumber";
import Image from "next/image";
import React, { useEffect, useState } from "react";

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
  const [radioValues, setRadioValues] = useState<Array<boolean>>(
    Array(currSoal?.opsi.length).fill(false)
  );
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
    const response = await fetch("http://localhost:3000/api/data-soal");
    const result = await response.json();
    const indexingResult = result.map((data: DataSoalType, idx: number) => {
      return { ...data, idxSoal: ++idx };
    });
    setDataSoal(indexingResult);
  };

  const handleSubmit = async () => {
    let score = 0;
    dataSoal?.forEach((soal, idx) => {
      if (soal.jawaban === userOptions[idx].option) {
        score = score + 10;
      }
    });

    await fetch("http://localhost:3000/api/update-score", {
      method: "POST",
      body: JSON.stringify(score),
    });

    // console.log("score " + score);
    // console.log(dataSoal);
    // console.log(userOptions);
  };

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
    <div className="px-[100px]">
      <div className="pb-[18px] pt-8">
        <div className="flex items-center justify-between">
          <BackLink href="/quiz/unfinished">Batalkan Kuis</BackLink>
          <Image src={"/logo.svg"} width={154} height={48} alt="log" />
          <span className="text-xl font-medium text-error">Timer 00:15</span>
        </div>
      </div>
      {/* box */}
      <div className="relative mb-10 grid grid-cols-2 gap-x-20 gap-y-12 rounded-md border px-[100px] pb-8 pt-12 shadow-md">
        <div className="relative h-[279px] w-[370px] overflow-hidden rounded-lg">
          <Image src={"/rusa.png"} alt="gambar soal" fill />
        </div>
        <div className="">
          <h2 className="text-xl font-medium">
            Pertanyaan {currSoal?.idxSoal}/10
          </h2>
          <p className="my-3 font-medium">{currSoal?.soal}</p>
          <p className="mb-6 font-medium">Jawab:</p>
          <form className="mb-2.5 flex flex-col gap-2.5 lg:mb-4">
            {currSoal?.opsi.map((option, idx) => (
              <div
                className="flex gap-2.5 text-sm font-medium md:text-base"
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
                />
                <label htmlFor={"answer" + idx}>{option}</label>
              </div>
            ))}
            <span
              className="mt-4 text-xs font-medium text-info underline md:text-sm"
              onClick={() => {
                const newRadioValues = Array(currSoal?.opsi.length).fill(false);
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
            className="w-fit rounded-md border border-primary bg-white px-6 py-3 font-medium text-primary hover:bg-primaryHover hover:text-white"
          >
            Soal Sebelumnya
          </button>
        )}
        <div className="col-start-2 flex flex-row-reverse">
          {currIdx !== 10 ? (
            <button
              onClick={handleNext}
              className="w-fit rounded-md bg-primary px-6 py-3 text-white hover:bg-primaryHover"
            >
              Soal Selanjutnya
            </button>
          ) : (
            <button
              onClick={() => {
                handleNext();
                handleSubmit();
              }}
              className="w-fit rounded-md bg-primary px-12 py-3 text-white hover:bg-primaryHover"
            >
              Selesai
            </button>
          )}
        </div>
        <Image
          src={"/maskot-kuis.svg"}
          alt="maskot"
          width={80}
          height={130}
          className="absolute -bottom-4 left-[45%]"
        />
      </div>
      {/* navigasi soal */}
      <div className="mb-10">
        <h3 className="mb-4 text-xl font-semibold text-neutral950">
          Navigasi Kuis
        </h3>
        <div className="flex gap-3">
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
  );
};

export default QuizPage;
