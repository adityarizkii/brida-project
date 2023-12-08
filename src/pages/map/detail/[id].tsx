import BackLink from "@/components/Fragments/BackLink";
import Footer from "@/components/Fragments/Footer";
import Header from "@/components/Fragments/Header";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type DataSatwaType = {
  idSatwa: string;
  name: string;
  description: string;
  location: string;
  image: string;
  coorX: number;
  coorY: number;
  idxSatwa: number;
};

const DetailSatwaPage = () => {
  const [isSidebarActive, setisSidebarActive] = useState<boolean>(false);
  const [dataSatwa, setDataSatwa] = useState<DataSatwaType[]>(); //untuk menyimpan hasil fetch
  const [filteredData, setFilteredData] = useState<DataSatwaType>();

  const router = useRouter();
  let nextIdx =
    filteredData?.idxSatwa !== undefined ? filteredData?.idxSatwa + 1 : 1;
  if (dataSatwa !== undefined) {
    if (nextIdx === dataSatwa.length + 1) {
      nextIdx = 1;
    }
  }
  let prevIdx =
    filteredData?.idxSatwa !== undefined ? filteredData?.idxSatwa - 1 : 1;
  if (prevIdx === 0) {
    prevIdx = dataSatwa !== undefined ? dataSatwa?.length : 1;
  }

  const fetchData = () => {
    fetch("http://localhost:3000/api/data-satwa")
      .then((res) => res.json())
      .then((response) => {
        setDataSatwa(response);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (router.isReady && dataSatwa) {
      const id = router.query.id as string;
      const filtered = dataSatwa?.find(
        (data: DataSatwaType) => data.idxSatwa === parseInt(id)
      );
      setFilteredData(filtered);
    }
  }, [router, dataSatwa]);

  return (
    <div>
      <Header
        classname="px-4 py-5 lg:px-[100px]"
        isSidebarActive={isSidebarActive}
        setIsSidebarActive={setisSidebarActive}
      />
      <div className="px-[100px] pt-[150px]">
        <div className="grid md:grid-cols-2">
          <div className="left mb-[60px]">
            <div className="mx-auto mb-10 flex max-w-[300px] items-center justify-center gap-3 overflow-hidden rounded-md border px-8 py-4 shadow-2xl md:max-w-[370px] md:py-12 lg:max-w-[600px] lg:gap-5">
              <div className="rounded-md border p-1 hover:bg-slate-300 lg:p-2 lg:p-2">
                <Link href={"/map/detail/" + prevIdx}>
                  <IoIosArrowBack size={24} />
                </Link>
              </div>
              <Image
                src={"/kucing1.png"}
                alt="satwa"
                width={300}
                height={300}
              />
              <div className="rounded-md border p-1 hover:bg-slate-300 lg:p-2">
                <Link href={"/map/detail/" + nextIdx}>
                  <IoIosArrowForward size={24} />
                </Link>
              </div>
            </div>
            <div className="mx-auto grid max-w-[300px] grid-cols-2 text-center text-2xl font-bold text-neutral950 lg:max-w-none">
              <h3>{filteredData?.name}</h3>
              <h3>{filteredData?.location}</h3>
            </div>
          </div>
          <div className="right">
            <div className="mx-auto max-w-[300px] overflow-y-scroll rounded-md border p-4 text-sm font-medium shadow-2xl md:max-w-[350px] lg:max-h-[400px] lg:max-w-[500px] lg:text-base lg:tracking-wide">
              {filteredData?.description}
            </div>
          </div>
        </div>
        {/* more */}
        <div className="mb-[118px] mt-[60px] w-full">
          <h2 className="mb-10 text-lg font-semibold text-primary lg:text-[32px]">
            Satwa Lainnya
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="rounded-md shadow-2xl lg:w-full">
              <img src="/kucing2.png" alt="kucing" className="lg:w-full" />
              <h3 className="my-4 px-4 font-semibold">Kucing</h3>
            </div>
            <div className="rounded-md shadow-2xl lg:w-full">
              <img src="/kucing2.png" alt="kucing" className="lg:w-full" />
              <h3 className="my-4 px-4 font-semibold">Kucing</h3>
            </div>
            <div className="rounded-md shadow-2xl lg:w-full">
              <img src="/kucing2.png" alt="kucing" className="lg:w-full" />
              <h3 className="my-4 px-4 font-semibold">Kucing</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailSatwaPage;
