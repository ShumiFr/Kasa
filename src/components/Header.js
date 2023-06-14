import React from "react";
import Navigation from "./Navigation";
import Logo from "../assets/img/Logo.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="Logo Kasa" />
      <Navigation />
    </header>
  );
};

export default Header;
