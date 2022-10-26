import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import TechStack from "../Components/TechStack/TechStack";
import Home from "../Components/Home/Home";
import Portfolio from "../Components/Portfolio/Portfolio";

const Pages = () => {
  return (
    <>
      <Navbar />
      <Home />
      <TechStack />
      <Portfolio />
    </>
  );
};

export default Pages;
