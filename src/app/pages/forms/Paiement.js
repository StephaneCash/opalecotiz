import React, { useState } from 'react'
import HeaderClient from '../cagnottes/HeaderClient'
import "./Paiement.css";
import vbancaire from "../../../assets/vbancaire.jpg";
import cash from "../../../assets/don.jpg";
import pmobile from "../../../assets/pmobile.jpg"
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import Footer from '../footer/Footer';
import { Link, useLocation } from 'react-router-dom';

import mpsa from "../../../assets/mpsa.jpg";
import orange from "../../../assets/orangemoney.png";
import airtel from "../../../assets/airtel-money-logo.png";
import africell from "../../../assets/afrimoney-services-424805.jpg";
import { toast } from 'react-toastify';

const Paiement = () => {

    const [choix, setChoix] = useState(0);
    const { state } = useLocation();

    const submitData = (e) => {
        e.preventDefault();
        toast.warning("Veuillez suivre le processus normal")
    };

    return (
        <>
            <HeaderClient />

            <div className='payement'>
                <h5>Paiement de la production {state && state.val && state.val.title}</h5>
                <Link
                    to={{
                        pathname: `/production/${state && state.val && state.val.title}`
                    }}
                    state={{
                        val: state && state.val
                    }}

                    className='linksPayement'>
                    <span><FaArrowLeft /></span>
                    <span>Retour</span>
                </Link>
                <form onSubmit={submitData}>
                    <div className='montant'>
                        <h4>Montant de votre partication</h4>
                        <div className="form-group mb-3">
                            <input type="number" className="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder="Montant de votre partication" />
                        </div>
                    </div>

                    <div className='montant'>
                        <h4>Vos coordonées</h4>
                        <div className="form-group mb-3">
                            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Votre nom et prénom" />
                        </div>
                        <div className="form-group mb-3">
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder="Adresse email" />
                        </div>
                    </div>

                    <div className='montant paiementModes'>
                        <br/>
                        <h4>Chosir le mode de paiement</h4> <br/>
                        <div class="row">
                            <div className='col-sm-4'>
                                <div className={choix === 1 ? "card choisi" : "card"} onClick={() => setChoix(1)}>
                                    <img src={pmobile} alt="Paiement mobile" />
                                    {
                                        choix === 1 && <FaCheckCircle size={40} />
                                    }
                                </div>
                                <p style={{ fontSize: "1rem", fontWeight: "bold", textAlign:"center" }}>Paiement mobile</p>
                            </div>
                            <div className='col-sm-4' onClick={() => setChoix(2)}>
                                <div className={choix === 2 ? "card choisi" : "card"}>
                                    <img src={vbancaire} alt="Virement bancaire" />
                                    {
                                        choix === 2 && <FaCheckCircle size={40} />
                                    }
                                </div>
                                <p style={{ fontSize: "1rem", fontWeight: "bold", textAlign:"center" }}>Virement bancaire</p>
                            </div>

                            <div className='col-sm-4' onClick={() => setChoix(3)}>
                                <div className={choix === 3 ? "card choisi" : "card"}>
                                    <img src={cash} alt="Paiement cash" />
                                    {
                                        choix === 3 && <FaCheckCircle size={40} />
                                    }
                                </div>
                                <p style={{ fontSize: "1rem", fontWeight: "bold", textAlign:"center" }}>Paiement Cash</p>
                            </div>
                        </div>
                    </div>

                    {
                        choix === 1 && (
                            <>
                                <h5>Choisir un mode opératoire</h5>
                                <div className='grille'>
                                    <div className='card'>
                                        <img src={mpsa} alt="" />
                                    </div>
                                    <div className='card'>
                                        <img src={orange} alt="" />
                                    </div>
                                    <div className='card'>
                                        <img src={airtel} alt="" />
                                    </div>
                                    <div className='card'>
                                        <img src={africell} alt="" />
                                    </div>
                                </div>
                            </>
                        )
                    }

                    <button type="submit" className="btn">Valider et Payer</button>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Paiement