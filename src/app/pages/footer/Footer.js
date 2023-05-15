import React from 'react';
import "./Footer.css"
import logo from "../../../assets/logoBlanc.png"
import { Link } from 'react-router-dom';

const Footer = () => {
    const annee = new Date().getFullYear();
    return (
        <div className='footer'>
            <div className='mainDiv'>
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            &copy; Par Ligablo  {annee} | Transactions cryptées et sécurisées en SSL/HTTPS.
        </div>
    )
}

export default Footer