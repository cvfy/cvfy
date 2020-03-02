import React from "react";
import Desktop from "./Desktop";
import Section1 from "./Section_1/Section1";
import Section2 from "./Section_2/Section2";
import Section3 from "./Section_3/Section3";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Desktop />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </>
  );
};

export default Home;
