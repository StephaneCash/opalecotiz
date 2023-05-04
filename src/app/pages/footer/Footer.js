import React from 'react';
import "./Footer.css"
import logo from "../../../assets/logoBlanc.png"

const Footer = () => {
    const annee = new Date().getFullYear();
    return (
        <div className='footer'>
            <div className='mainDiv'>
                <img src={logo} alt="Logo" />
            </div>
            &copy; Par Ligablo  {annee} | Transactions cryptées et sécurisées en SSL/HTTPS.
        </div>
    )
}

export default Footer