import React from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";

const Root = () => {
  return (
    <div className='bg-[#111216]'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
