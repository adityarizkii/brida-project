import Link from "next/link";
import React, { useEffect, useState } from "react";

type DataArticleType = {
  idArtikel: string;
  title: string;
  url: string;
  year: Date;
  image: string;
};

const News = () => {
  const [dataArticle, setDataArticle] = useState<DataArticleType[]>();
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

  const fetchNewsData = async () => {
    const response = await fetch("http://localhost:3000/api/data-article");
    const result = await response.json();
    result.splice(3);
    setDataArticle(result);
  };

  useEffect(() => {
    fetchNewsData();
  }, []);

  return (
    <div className="mb-16">
      <h1 className="mb-6 text-center text-2xl font-semibold text-neutral950 md:mb-9 md:text-4xl">
        Berita Satwa NTB
      </h1>
      <div className="mb-9 grid gap-7 md:mb-10 md:grid-cols-2 md:px-7 lg:grid-cols-3 lg:gap-y-11">
        {/* card */}
        {dataArticle?.map((data) => {
          const dateObject = new Date(data.year);
          const year = dateObject.getFullYear();
          const month = monthNames[dateObject.getMonth()];
          const day = dateObject.getDate();
          return (
            <div
              className="card mx-auto max-w-[300px] rounded-lg border shadow-xl md:max-w-[336px] lg:max-w-[370px]"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="100"
              key={data.idArtikel}
            >
              <div className="rounded-lg">
                <img src={data.image} alt="gambar artikel" />
              </div>
              <div className="p-4">
                <span className="mb-2 text-sm font-medium text-blue-500">
                  {`${day} ${month} ${year}`}
                </span>
                <h2 className="mb-4 font-semibold text-neutral950">
                  {data.title}
                </h2>
                <a
                  href={data.url}
                  target="_blank"
                  className="font-semibold text-blue-500"
                >
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <Link
          href={"/news"}
          className="rounded-md border border-primary px-4 py-1.5 text-primary duration-200 hover:bg-primaryHover hover:text-white lg:px-8 lg:py-3.5 lg:text-2xl"
        >
          Selengkapnya
        </Link>
      </div>
    </div>
  );
};

export default News;
