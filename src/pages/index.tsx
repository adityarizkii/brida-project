import About from "@/components/LandingPage/About";
import Footer from "@/components/Fragments/Footer";
import Header from "@/components/Fragments/Header";
import Hero from "@/components/LandingPage/Hero";
import Map from "@/components/LandingPage/Map";
import News from "@/components/LandingPage/News";
import Quiz from "@/components/LandingPage/Quiz";
import { useState } from "react";

export default function Home() {
  const [isSidebarActive, setisSidebarActive] = useState<boolean>(false);
  return (
    <div className="">
      <Header
        classname="px-4 py-5 lg:px-[100px]"
        isSidebarActive={isSidebarActive}
        setIsSidebarActive={setisSidebarActive}
      />
      <div className="px-4 pb-8 pt-[130px] lg:px-[100px]">
        <Hero />
        <About />
        <Map />
        <News />
        <Quiz />
      </div>
      <Footer />
    </div>
  );
}
