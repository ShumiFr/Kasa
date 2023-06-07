import React, { useState, useEffect } from "react";

const Banner = () => {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [bannerTitle, setBannerTitle] = useState("");

  useEffect(() => {
    const currentPath = window.location.pathname;

    if (currentPath === "/") {
      setBackgroundImage(`url(${require("../assets/img/banner-home.png")})`);
      setBannerTitle("Chez vous, partout et ailleurs");
    } else if (currentPath === "/about") {
      setBackgroundImage(`url(${require("../assets/img/banner-about.png")})`);
      setBannerTitle("");
    }
  }, []);

  const bannerStyle = {
    backgroundImage: backgroundImage,
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: "30px",
  };

  return (
    <div className="banner" style={bannerStyle}>
      <div className="overlay"></div>
      <h1>{bannerTitle}</h1>
    </div>
  );
};

export default Banner;
