import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { HiOutlineMenu } from "react-icons/hi";
import logo from "../../images/logo.png";


const Navbar = () => {

  const [menu, setMenu] = useState(false);

  function handleMenu() {
    setMenu(!menu);
  }

  return (
    <nav className='navbar' id='navbar'>
      <div className='container navbar-content flex'>
      
      <div className="brand-and-toggler flex flex-jc-sb">

        <Link to= "/" className="navbar-brand flex">
          <img src={ logo } alt="Lit Verse Logo" className='logo'/>
        </Link>

        <button type="button" className='navbar-toggler-btn' onClick={handleMenu}>
          <HiOutlineMenu size={30} style={menu ? {color:"#fff"} : {color:"#789461"}}/>
        </button>
      </div>

      <div className={menu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
        <ul className="navbar-nav">

          <li className="nav-item">
            <Link to="book" className="nav-link text-uppercase fontsize-22 fontweight-6 letterspace-1">Home</Link>
          </li>

          <li className="nav-item">
          <Link to="about" className="nav-link text-uppercase fontsize-22 fontweight-6 letterspace-1">About</Link>
          </li>

          <li className="nav-item">
          <Link to="contact" className="nav-link text-uppercase fontsize-22 fontweight-6 letterspace-1">Contact Us</Link>
          </li>

        </ul>
      </div>

      </div>
    </nav>
  )
}

export default Navbar