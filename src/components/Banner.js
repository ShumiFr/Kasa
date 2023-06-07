import React from "react";

function Banner(props) {
  return (
    <div className="banner">
      <div className="overlay"></div>
      <img src={props.imgSrc} alt={props.imgAlt} />
      {props.title ? <h1>{props.title}</h1> : null}
    </div>
  );
}

export default Banner;
