import React from "react";
import Vacancy from "./../components/home/Vacancy";
import HowItWorks from "../components/home/HowItWorks";
import GetStarted from "../components/home/GetStarted";
import InfoCards from "../components/home/InfoCard";
import HeroSection from "../components/header/Hero";
import WhyJobBoard from "../components/home/WhyJobBoard";

function HomePage() {
  return (
    <div className='space-y-8'>
      <HeroSection />
      <Vacancy />
      <HowItWorks />
      <WhyJobBoard />
      <GetStarted />
      <InfoCards />
    </div>
  );
}

export default HomePage;
