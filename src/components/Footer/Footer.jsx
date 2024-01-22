import React from 'react'
import logo from "../../images/logo.png";
import "./Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='footer' id='footer'>
            <div className="contaniner flex  flex-jc-sb">
                <Link to="/" className="footer-brand flex">
                    <img src={logo} alt="Lit Verse Logo" className='logo'/>
                    <span className='text-logo-color text-uppercase'>Lit Verse</span>
                </Link>
                <div className="footer-text text-darker-green">
                    <span>© {currentYear} Lit Verse Inc. All rights reserved.</span>
                </div>
                <Link to="contact" className="text-darker-green fontsize-18 fontweight-6 letterspace-1">
                    Contact Us
                </Link>
            </div>
        </footer>
    )
}

export default Footer