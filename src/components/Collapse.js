import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/components/_collapse.scss";

const Collapse = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <p onClick={toggleCollapse} className="drop-down">
        <span>{title}</span>
        <FontAwesomeIcon
          icon={faChevronUp}
          className={isOpen ? "rotate-icon" : ""}
        />
      </p>
      {isOpen && <div className="description">{description}</div>}
    </div>
  );
};

export default Collapse;
