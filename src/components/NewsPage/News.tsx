import React, { useEffect, useState } from "react";
import BigCard from "./BigCard";
import SmallCard from "./SmallCard";
import BackLink from "../Fragments/BackLink";

type DataArticleType = {
  idArtikel: string;
  title: string;
  url: string;
  year: Date;
  image: string;
};

const News = () => {
  const [dataArticle, setDataArticle] = useState<any>();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const fetchData = async () => {
    const response = await fetch(
      "https://ecosaver.vercel.app/api/data-article"
    );
    const result: DataArticleType[] = await response.json();
    // const dateObject = new Date(result[0].year);
    // console.log(dateObject.getFullYear());
    // console.log(monthNames[dateObject.getMonth()]);
    // console.log(dateObject.getDate());

    const newArray = [];
    let tempArray = [];
    let tempArrayInner = [];
    let counter = 0;
    for (let i = 0; i < result.length; i++) {
      if (i % 4 === 0) {
        if (i > 0) {
          newArray.push([...tempArray, [...tempArrayInner]]);
          counter = counter + 4;
        }

        tempArray = [];
        tempArray.push(result[i]);
      } else {
        if (i % 4 === 1) {
          tempArrayInner = [];
          tempArrayInner.push(result[i]);
        } else {
          tempArrayInner.push(result[i]);
        }
      }
    }

    setDataArticle(newArray);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="mb-4 text-center text-2xl font-semibold text-neutral950 md:mb-16 md:text-[32px]">
        Berita Satwa NTB
      </h1>
      <div className="lg:mb-24">
        {/* back link */}
        <BackLink href={"/"}>Kembali ke Halaman Utama</BackLink>
      </div>
      {/* grid */}
      {dataArticle?.map((dataArray: any, idx: number) => {
        return (
          <div className="grid gap-10 lg:mb-32 lg:grid-cols-2" key={idx}>
            {dataArray?.map((data: any, idx: number) => {
              if (Array.isArray(data)) {
                return (
                  <div className="flex flex-col gap-8" key={idx}>
                    {data?.map((dataArr, idx) => {
                      const dateObject = new Date(dataArr.year);
                      const year = dateObject.getFullYear();
                      const month = monthNames[dateObject.getMonth()];
                      const day = dateObject.getDate();

                      return (
                        <SmallCard
                          key={idx}
                          title={dataArr.title}
                          img={dataArr.image}
                          url={dataArr.url}
                          year={`${year} ${month} ${day}`}
                        />
                      );
                    })}
                  </div>
                );
              } else {
                const dateObject = new Date(data.year);
                const year = dateObject.getFullYear();
                const month = monthNames[dateObject.getMonth()];
                const day = dateObject.getDate();
                return (
                  <BigCard
                    key={idx}
                    title={data.title}
                    img={data.image}
                    url={data.url}
                    year={`${year} ${month} ${day}`}
                  />
                );
              }
            })}
          </div>
        );
      })}
    </div>
  );
};

export default News;
