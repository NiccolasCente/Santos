import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Header/Dropdown.css';

const Dropdown = ({ title, items, theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${theme}`}>
      <button className={`dropdown-toggle`} onClick={toggleDropdown}>
        {title}
      </button>
      <div className={`dropdown-menu ${isOpen ? 'show' : ''} ${theme}`}>
        {items.map((item, index) => (
          <Link key={index} to={item.path} className={`dropdown-item`}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
