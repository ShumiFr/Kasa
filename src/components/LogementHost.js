import React from "react";

const LogementHost = (props) => {
  return (
    <div>
      <div className="logement-host">
        <span>{props.hostName}</span>
        <img src={props.hostPicture} alt={`portrait de ${props.hostName}`} />
      </div>
    </div>
  );
};

export default LogementHost;
