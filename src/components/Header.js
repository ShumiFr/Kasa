import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="header">
      <img src="./Logo.svg" alt="Logo Kasa" />
      <Navigation />
    </div>
  );
};

export default Header;
