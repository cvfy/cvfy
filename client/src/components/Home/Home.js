import React from "react";
import Desktop from "./Desktop";
import Section1 from "./Section_1/Section1";
import Section2 from "./Section_2/Section2";
import Section3 from "./Section_3/Section3";
import Section4 from "./Section_4/Section4";
import Section5 from "./Section_5/Section5";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer";
import "../../styles/LandingPage.scss";
import scrollToComponent from "react-scroll-to-component";

const Home = () => {
  return (
    <div className="LandingPage">
      <Navbar />
      <Desktop />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      {/* <Section5 /> */}
      <Footer />
    </div>
  );
};

export default Home;
