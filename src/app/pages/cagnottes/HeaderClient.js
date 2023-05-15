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
                        <FaFacebook
                            onClick={() => window.open("https://www.facebook.com/ligablo.co?mibextid=LQQJ4d")}
                        />
                        <FaInstagram
                            onClick={() => window.open('https://www.instagram.com/ligablo.co')}
                        />
                        <FaTwitter
                            onClick={() => window.open('https://twitter.com/ligablo_co')}
                        />
                        <FaYoutube
                            onClick={() => window.open("https://www.youtube.com/@ligablo/videos")}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderClient