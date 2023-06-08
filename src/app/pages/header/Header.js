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
                <Link to="/"><img src={logoBlanc} alt="Logo" /></Link>
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
            <div className='logoAndBarSearch'>
                <div className='prodSearch'>
                    <FiSearch />
                    < Link to="/productions" style={{ textDecoration: "none", color: "#222" }} >
                        <span>Rechercher une production</span>
                    </Link>
                </div>
                <div className='linksCagnottes'>
                    {
                        listCagnottes ? listCagnottes.length > 0 ?
                            listCagnottes.slice(0, 5).map(val => {
                                return <Link key={val.id} to={{
                                    pathname: `/production/${val.title}`
                                }}
                                    state={{
                                        val: val
                                    }}
                                >{
                                        val && val.title && val.title.length > 20 ? val.title.substring(0, 20) + "..." : val.title
                                    }</Link>
                            })
                            : "Chargement..." : "Serveur non disponible."
                    }
                </div>
                <Link to="/productions" style={{ textDecoration: "none" }}>
                    <div className='btnSearch'>
                        <span>Autres productions...</span>
                        <FiArrowRightCircle />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header