import React from "react";

const LogementBanner = (props) => {
  return (
    <img className={props.className} src={props.imgSrc} alt={props.title} />
  );
};

export default LogementBanner;
