import React from 'react';
import "./Header.css";
import logoBlanc from "../../../assets/logoBlanc.png"
import { FiArrowRightCircle, FiSearch } from "react-icons/fi"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"

const Header = () => {

    const listCagnottes = useSelector(state => state.cagnottes.value);

    return (
        <div className='col-sm-12 headerApp'>
            <div className='borderTop'>
                <img src={logoBlanc} alt="Logo" />
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
            <div className='logoAndBarSearch'>
                <div className='prodSearch'>
                    <FiSearch />
                    <span>Rechercher une production</span>
                </div>
                <div className='linksCagnottes'>
                    {
                        listCagnottes ? listCagnottes.length > 0 ?
                            listCagnottes.slice(0, 5).map(val => {
                                return <Link key={val.id} to="/cagnottes">{val.title && val.title.toUpperCase()}</Link>
                            })
                            : "Chargement..." : "Serveur non disponible."
                    }
                </div>
                <div className='btnSearch'>
                    <span>Voir plus...</span>
                    <FiArrowRightCircle />
                </div>
            </div>
        </div>
    )
}

export default Header