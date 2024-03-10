import React, { useState } from 'react'
import "./Header.scss"
import StWide from "../../assets/stress_wide.svg"
import { Link } from "react-router-dom"

const Header = () => {
    const [activeItem, setActiveItem] = useState("Welcome");

    const handleItemClick = (item) => {
        setActiveItem(item);
    };
  return (
    <div className='header'>
        <div className="logo">
            <img src={StWide} alt="stressAway" />
        </div>
        <ul className='list'>
            <Link to="/" className={`link ${activeItem === "Welcome" && "active"}`} onClick={() => handleItemClick("Welcome")}><li>Welcome</li></Link>
            <Link to="/your-thoughts" className={`link ${activeItem === "Thoughts" && "active"}`} onClick={() => handleItemClick("Thoughts")}><li>Your Thoughts</li></Link>
            <Link to="/learn&grow" className={`link ${activeItem === "Learn" && "active"}`} onClick={() => handleItemClick("Learn")}><li>Learn & Grow</li></Link>
            <Link to="/about-us" className={`link ${activeItem === "About" && "active"}`} onClick={() => handleItemClick("About")}><li>About us</li></Link>
        </ul>
        <div className='button'>
            <button>Sign Up</button>
        </div>
    </div>
  )
}

export default Header