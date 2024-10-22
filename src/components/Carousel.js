import React, { useState } from "react";
import LogementBanner from "./LogementBanner";
import ArrowBanner from "./ArrowBanner";

const Carousel = ({ pictures, title }) => {
  const [activeBanner, setActiveBanner] = useState(0);

  const handleClickNextBanner = () => {
    if (activeBanner === pictures.length - 1) {
      setActiveBanner(0);
    } else {
      setActiveBanner(activeBanner + 1);
    }
  };

  const handleClickPreviousBanner = () => {
    if (activeBanner === 0) {
      setActiveBanner(pictures.length - 1);
    } else {
      setActiveBanner(activeBanner - 1);
    }
  };

  return (
    <div className="carousel">
      <div className="arrows-banner-zone">
        <ArrowBanner
          onClick={handleClickPreviousBanner}
          className={
            pictures.length > 1 ? "arrow-left fa-solid fa-chevron-up" : null
          }
        />
        <ArrowBanner
          onClick={handleClickNextBanner}
          className={
            pictures.length > 1 ? "arrow-right fa-solid fa-chevron-up" : null
          }
        />
      </div>
      {pictures.map((e, index) => (
        <LogementBanner
          className={`img-banner ${
            index === activeBanner ? "active-banner" : ""
          }`}
          key={index}
          imgSrc={e}
          title={`${title} - Bannière n°${activeBanner + 1}`}
        />
      ))}
      <span className="counter">
        {pictures.length > 1 ? `${activeBanner + 1}/${pictures.length}` : null}
      </span>
    </div>
  );
};

export default Carousel;
