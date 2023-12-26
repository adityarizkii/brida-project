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
  region: string;
};

const DetailSatwaPage = () => {
  const [isSidebarActive, setisSidebarActive] = useState<boolean>(false);
  const [dataSatwa, setDataSatwa] = useState<DataSatwaType[]>(); //untuk menyimpan hasil fetch
  const [filteredData, setFilteredData] = useState<DataSatwaType>();
  const [recommendSatwa, setRecommendSatwa] = useState<DataSatwaType[]>();
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

  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/api/data-satwa");
    const result = await response.json();
    setDataSatwa(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (router.isReady && dataSatwa) {
      // get 1 data was clicked in map
      const id = router.query.id as string;
      const filtered = dataSatwa?.find(
        (data: DataSatwaType) => data.idxSatwa === parseInt(id)
      );

      if (filtered) {
        setFilteredData(filtered);
        // console.log("region now = " + filtered?.region);

        // get three recommendation data
        let threeData: DataSatwaType[] = [];
        dataSatwa?.forEach((data) => {
          if (threeData.length < 3) {
            if (
              data.region === filtered?.region &&
              data.idxSatwa !== filtered.idxSatwa
            ) {
              // console.log(filtered.region);
              // console.log(data.region);
              threeData.push(data);
            }
          }
        });
        // console.log(threeData.length);
        setRecommendSatwa(threeData);
      }
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
                src={filteredData ? filteredData.image : "/img-not-foung.png"}
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
            Satwa lain yang berada di {filteredData?.region}
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            {recommendSatwa?.map((data) => (
              <Link
                href={`/map/detail/${data.idxSatwa}`}
                className="overflow-hidden rounded-md shadow-2xl lg:w-full"
                key={data.idSatwa}
              >
                <div className="relative h-[243px] w-[365px]">
                  <Image src={data.image} alt="satwa-image" fill />
                </div>
                <h3 className="my-4 px-4 font-semibold">{data.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailSatwaPage;
