import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "./../components/header/Navbar";

const Root = () => {
  return (
    <div className='bg-[#111216]'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
