import Header from "@/components/Fragments/Header";
import Footer from "@/components/Fragments/Footer";
import News from "@/components/NewsPage/News";
import React, { useState } from "react";

const NewsPage = () => {
  const [isSidebarActive, setisSidebarActive] = useState<boolean>(false);
  return (
    <div>
      <Header
        classname="px-4 py-5 lg:px-[100px]"
        isSidebarActive={isSidebarActive}
        setIsSidebarActive={setisSidebarActive}
      ></Header>
      <div className="lg:mb-20 lg:px-[100px] lg:pt-[150px]">
        <News></News>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default NewsPage;
