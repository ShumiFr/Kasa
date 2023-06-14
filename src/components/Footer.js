import React from "react";
import LogoFooter from "../assets/img/LogoFooter.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={LogoFooter} alt="Logo Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
