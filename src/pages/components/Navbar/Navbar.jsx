import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { BiBookReader } from "react-icons/bi";
import { HiOutlineMenu } from "react-icons/hi";


const Navbar = () => {

  const style = { color: "#789461", width: "50px", height:"50px"};

  const [menu, setMenu] = useState(false);

  function handleMenu() {
    setMenu(!menu);
  }

  return (
    <nav className='navbar'>
      <div className='conteiner navbar-content flex'>
      <BiBookReader style={style}/>
      <HiOutlineMenu />
      </div>
    </nav>
  )
}

export default Navbar