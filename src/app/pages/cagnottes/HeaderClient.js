import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import logoBlanc from "../../../assets/logoBlanc.png"
import { Link } from 'react-router-dom';
import "./HeaderClient.css"

const HeaderClient = () => {
    return (
        <>
            <div className='headerTop'>
                <Link to="/">
                    <img src={logoBlanc} alt="Logo" />
                </Link>
                <div>
                    <span>Suivez-nous sur  </span>
                    <div className='icons'>
                        <FaFacebook />
                        <FaInstagram />
                        <FaTwitter />
                        <FaYoutube />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderClient