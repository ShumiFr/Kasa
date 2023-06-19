import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/components/_collapse.scss";

const Collapse = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const descriptionRef = useRef(null);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const getDescriptionHeight = () => {
    return isOpen ? descriptionRef.current.scrollHeight : 0;
  };

  return (
    <li>
      <div>
        <p
          onClick={toggleCollapse}
          className={`drop-down ${isOpen ? "open" : ""}`}
        >
          <span>{title}</span>
          <FontAwesomeIcon
            icon={faChevronUp}
            className={`rotate-icon ${isOpen ? "rotate-icon-open" : ""}`}
          />
        </p>
        <div
          className="description"
          style={{
            maxHeight: getDescriptionHeight(),
            overflow: "hidden",
            transition: "max-height 0.3s ease-in-out",
          }}
          ref={descriptionRef}
        >
          {description}
        </div>
      </div>
    </li>
  );
};

export default Collapse;
