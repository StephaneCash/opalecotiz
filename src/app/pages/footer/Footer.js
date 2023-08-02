import React from 'react';
import "./Footer.css"
import logo from "../../../assets/logoBlanc.png"
import { Link } from 'react-router-dom';

const Footer = () => {
    const annee = new Date().getFullYear();
    return (
        <div className='footer'>
            <div className='ressourcesApropos'>
                <ul>
                    <li>A PROPOS</li>
                    <li>
                        <a href="#services">Comment ça marche</a>
                    </li>
                    <li>
                        <a href="#services">Pourquoi LiGABLO Production</a>
                    </li>
                </ul>

                <ul>
                    <li>RESSOURCES</li>
                    <li>
                        <Link to="/cgu">Conditions générales</Link>
                    </li>
                    <li>
                        <Link to="/termes-etconfidentialites">Confidentialité</Link>
                    </li>
                </ul>

                <div>
                    <div className='mainDiv'>
                        <Link to="/">
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>
                </div>
            </div>
            <hr />
            <span>
                &copy; Par Ligablo  {annee} | Transactions cryptées et sécurisées en SSL/HTTPS.</span>
        </div>
    )
}

export default Footer