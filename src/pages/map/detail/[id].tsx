import Footer from "@/components/Fragments/Footer";
import Header from "@/components/Fragments/Header";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
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
    const response = await fetch("https://ecosaver.vercel.app/api/data-satwa");
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
      <div className="pt-[120px] lg:px-[100px] lg:pt-[150px]">
        <div className="grid md:grid-cols-2">
          <div className="left mb-6 lg:mb-[60px]">
            <div className="flex justify-center">
              <div className="mb-6 flex items-center justify-center gap-3 overflow-hidden rounded-md border px-2 py-4 shadow-xl md:max-w-[370px] md:py-12 lg:mb-10 lg:max-w-[600px] lg:gap-5 lg:px-8">
                <div className="rounded-md border p-1 hover:bg-slate-300 lg:p-2">
                  <Link href={"/map/detail/" + prevIdx}>
                    <IoIosArrowBack size={20} />
                  </Link>
                </div>
                <div className="relative h-[200px] w-[200px] lg:h-[300px] lg:w-[300px] ">
                  <Image
                    src={
                      filteredData ? filteredData.image : "/img-not-found.png"
                    }
                    alt="satwa"
                    fill
                    style={{ objectFit: "fill" }}
                    sizes="100%"
                    priority
                  />
                </div>
                <div className="rounded-md border p-1 hover:bg-slate-300 lg:p-2">
                  <Link href={"/map/detail/" + nextIdx}>
                    <IoIosArrowForward size={20} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="mx-auto grid max-w-[300px] grid-cols-2 text-center font-bold text-neutral950 lg:max-w-none lg:text-2xl">
              <h3>{filteredData?.name}</h3>
              <h3 className="">{filteredData?.location}</h3>
            </div>
          </div>
          <div className="right px-4">
            <div className=" overflow-y-scroll rounded-md border p-4 text-sm font-medium tracking-wide shadow-2xl md:max-w-[350px] lg:max-h-[400px] lg:max-w-[500px] lg:p-8 lg:text-base">
              {filteredData?.description}
            </div>
          </div>
        </div>
        {/* more */}
        <div className="mb-16 mt-10 w-full px-6 lg:mb-[118px] lg:mt-[60px]">
          <h2 className="mb-5 font-semibold text-primary lg:mb-10 lg:text-[32px] lg:text-lg">
            Satwa lain yang berada di {filteredData?.region}
          </h2>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-10">
            {recommendSatwa?.map((data) => (
              <Link
                href={`/map/detail/${data.idxSatwa}`}
                className="overflow-hidden rounded-md shadow-2xl lg:w-full"
                key={data.idSatwa}
              >
                <div className="relative h-[100px] w-full lg:h-[243px] lg:w-[365px]">
                  <Image
                    src={data.image}
                    alt="satwa-image"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="100%"
                  />
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
