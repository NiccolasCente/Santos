// Import React
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//Import CSS
import "../Header/Dropdown.css";

const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {title}
      </button>
      <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
        {items.map((item, index) => (
          <Link key={index} to={item.path} className="dropdown-item">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
