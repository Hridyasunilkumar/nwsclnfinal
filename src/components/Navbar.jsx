import React, { useState } from "react";
import { Link } from "react-router-dom";
import mblogo from "../assets/mblogo.jpg";
import "./Navbar.css"; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
/* toggle menu used for it visible only in mobile view*/
  const toggleMenu = () => { 
    setIsMenuOpen(!isMenuOpen);
  };
 
    const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Close the menu when a menu item is clicked laast updation create state for menu ,when we click the menu item in mobile view it closed automatically..
    
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <img className="mblgo" src={mblogo} alt="Logo" />
          <button className="hamburger" onClick={toggleMenu}>
            {isMenuOpen ? "×" : "☰"}
          </button>
        </div>
        <ul className={isMenuOpen ? "nav-links open" : "nav-links"}>
          <li>
            <Link to="/" onClick={handleMenuItemClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/movies" onClick={handleMenuItemClick}>
              Movies
            </Link>
          </li>
          <li>
            <Link to="/ppdcast" onClick={handleMenuItemClick}>
              Podcast
            </Link>
          </li>
          <li>
            <Link to="/Trending news" onClick={handleMenuItemClick}>
              Trending
            </Link>
          </li>
          <li>
            <Link style={{ color: "red" }} to="/premium" onClick={handleMenuItemClick}>
              Premium
            </Link>
          </li>
          <li>
            <Link to="/videos" onClick={handleMenuItemClick}>
              Videos
            </Link>
          </li>
          <li>
            <Link to="/money" onClick={handleMenuItemClick}>
              Money
            </Link>
          </li>
          <li>
            <Link to="/entertainment" onClick={handleMenuItemClick}>
              Entertainment
            </Link>
          </li>
          <li>
            <Link to="/crime" onClick={handleMenuItemClick}>
              Crime
            </Link>
          </li>
          <li>
            <Link to="/factcheck" onClick={handleMenuItemClick}>
              Factcheck
            </Link>
          </li>
          <li>
            <Link to="/Grihalakshmi" onClick={handleMenuItemClick}>
              Grihalakshmi
            </Link>
          </li>
        </ul>
        {/* Login Button outside of the <ul> */}
        <Link to="/login">
          <button className="lgnbtn">Login</button>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;