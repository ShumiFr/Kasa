import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="header">
      <img src="./Logo.svg" alt="Logo Kasa" />
      <Navigation />
    </header>
  );
};

export default Header;
