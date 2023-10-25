import About from "@/components/LandingPage/About";
import Footer from "@/components/LandingPage/Footer";
import Header from "@/components/LandingPage/Header";
import Hero from "@/components/LandingPage/Hero";
import Map from "@/components/LandingPage/Map";
import News from "@/components/LandingPage/News";
import Quiz from "@/components/LandingPage/Quiz";
import Sidebar from "@/components/LandingPage/Sidebar";
import React from "react";
import { useState } from "react";

const LandingPage = () => {
  const [isSidebarActive, setIsSidebarActive] = useState<boolean>(false);

  return (
    <>
      {isSidebarActive ? (
        <Sidebar setIsSidebarActive={setIsSidebarActive} />
      ) : (
        ""
      )}
      <div className="px-4 py-8">
        <div className="mb-11 md:px-8">
          <Header toggleNavbar={setIsSidebarActive}></Header>
        </div>
        <Hero></Hero>
        <About></About>
        <Map></Map>
        <News></News>
        <Quiz></Quiz>
      </div>
      <Footer></Footer>
    </>
  );
};

export default LandingPage;
