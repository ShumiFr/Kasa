import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";

const Home = ({ url }) => {
  return (
    <div>
      <Header />
      <Banner srcImage={url} />
      <Gallery />
      <Footer />
    </div>
  );
};
export default Home;
