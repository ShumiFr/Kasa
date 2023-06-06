import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="overlay">
        <img src={props.cover} alt="logement" />
        <span>{props.title}</span>
      </div>
    </div>
  );
};

export default Card;
