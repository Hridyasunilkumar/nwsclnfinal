import React from "react";
import { Link } from "react-router-dom";
import mblogo from '../assets/mblogo.jpg';


const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <img  style={{width:"450px",marginLeft:"550px"}}src={mblogo} alt="" />
      <ul>
      <li><Link to="/">Home</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        
        <li><Link to="/ppdcast">Podcast</Link></li>
        <li><Link to="/Trending news">Trending News</Link></li>
        <li><Link to="/premium">premium</Link></li>
        <li><Link to="/videos">Vedios</Link></li>
        <li><Link to="/money">Money</Link></li>
        <li><Link to="/entertainment">Entertainment</Link></li>
        <li><Link to="/crime">Crime</Link></li>
        
        <li><Link to="/factcheck">Factcheck</Link></li>
        <li><Link to="/Grihalakshmi">Grihalakshmi</Link></li>
        <Link to="/login">
                <button className="lgnbtn">Login</button>
              </Link>
        
      </ul>
    </nav>
   
   </>
  );
};

export default Navbar;