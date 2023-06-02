import React, { useState } from 'react';

const HamburgerMenu = () => {
const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
   <>
    <div className={`ham-menu ${isNavOpen ? 'open' : ''}`} onClick={toggleNav}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
    </div>
      <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
      <ul className="ham-links">
            <li>
            <a className="active-bar" href="#home">Home</a>
            </li>
            <li>
            <a href="#findDoctor">Find a doctor</a>
            </li>
            <li>
            <a href="#downloadApp">Apps</a>
            </li>
            <li>
            <a href="#testimonials">Testimonials</a>
            </li>
            <li>
            <a href="#about">About us</a>
            </li>
        </ul>
      </nav>
   </>
  );
};

export default HamburgerMenu;
