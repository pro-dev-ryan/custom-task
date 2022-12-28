import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Sections/Footer/Footer";
import Navbar from "../Sections/Navbar/Navbar";

const Main = () => {
  return (
    <div className="lg:mx-8 mx-2">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
