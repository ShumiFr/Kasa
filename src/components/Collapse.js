import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/components/_collapse.scss";

const Collapse = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const descriptionRef = useRef(null); // useRef permet d'accéder à un élément du DOM afin de le manipuler (ici pour la hauteur de la description)

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      descriptionRef.current.style.height = `${descriptionRef.current.scrollHeight}px`;
    } else {
      descriptionRef.current.style.height = "0px";
    }
  }, [isOpen]);

  return (
    <li>
      <div>
        <div
          onClick={toggleCollapse}
          className={`drop-down ${isOpen ? "open" : ""}`}
        >
          <span>{title}</span>
          <FontAwesomeIcon
            icon={faChevronUp}
            className={`rotate-icon ${isOpen ? "rotate-icon-open" : ""}`}
          />
        </div>
        <div
          className={`description ${isOpen ? "open" : ""}`}
          ref={descriptionRef}
        >
          {description}
        </div>
      </div>
    </li>
  );
};

export default Collapse;
