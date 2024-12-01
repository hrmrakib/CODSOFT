import React from "react";
import HeroSection from "../components/header/Hero";
import Vacancy from "./../components/home/Vacancy";
import HowItWorks from "../components/home/HowItWorks";
import Navbar from "../components/header/Navbar";
import GetStarted from "../components/home/GetStarted";
import Header from "../components/header/Header";
import InfoCards from "../components/home/InfoCard";

function HomePage() {
  return (
    <div className='space-y-8'>
      <Header />
      <Vacancy />
      <HowItWorks />
      <GetStarted />
      <InfoCards />
    </div>
  );
}

export default HomePage;
