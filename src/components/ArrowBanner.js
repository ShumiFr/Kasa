import React from "react";

const ArrowBanner = (props) => {
  return <i onClick={props.onClick} className={props.className}></i>;
};

export default ArrowBanner;
