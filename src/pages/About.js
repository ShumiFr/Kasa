import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";

function About() {
  return (
    <div>
      <Header />
      <Banner imgSrc="../assets/banner-about.png" imgAlt="Bannière" />
      <Footer />
    </div>
  );
}

export default About;
