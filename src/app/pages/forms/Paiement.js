import React, { useEffect, useState } from 'react'
import HeaderClient from '../cagnottes/HeaderClient'
import "./Paiement.css";
import vbancaire from "../../../assets/vbancaire.jpg";
import cash from "../../../assets/don.jpg";
import pmobile from "../../../assets/pmobile.jpg"
import { FaArrowLeft, FaCheckCircle, FaInfo } from 'react-icons/fa';
import Footer from '../footer/Footer';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import mpsa from "../../../assets/mpsa.jpg";
import orange from "../../../assets/orangemoney.png";
import airtel from "../../../assets/airtel-money-logo.png";
import africell from "../../../assets/afrimoney-services-424805.jpg";
import { toast } from 'react-toastify';

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const Paiement = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const [choix, setChoix] = useState(0);
    const [montant, setMontant] = useState(200);

    const [devise, setDevise] = useState("");
    const [email, setEmail] = useState("");
    const [prenom, setPrenom,] = useState("");
    const [chec, setChec] = useState(false);

    const [typeMobile, setTypeMobile] = useState(0);

    const { state } = useLocation();

    let navigate = useNavigate()

    const submitData = (e) => {
        e.preventDefault();
        if (!montant) {
            toast.error('Veuillez remplir le champ montant svp')
        } else {
            if (choix === 3) {
                toast.success("Votre paiement sera pris en compte dès que vous aurez réglé en présentiel.")
                navigate('/productions');
            } else {
                toast.warning("Veuillez suivre le processus normal")
            }
        }
    };

    const verifCheck = () => {
        let inputCheck = document.getElementById("flexCheckChecked")
        if (inputCheck.checked === true) {
            setChec(true);
        } else {
            setChec(false);
        }
    }

    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        fetch("/config").then(async (r) => {
            const { publishableKey } = await r.json();
            setStripePromise(loadStripe(publishableKey));
        });
    }, []);

    useEffect(() => {
        fetch("/create-payment-intent", {
            method: "POST",
            body: JSON.stringify({}),
        }).then(async (result) => {
            var { clientSecret } = await result.json();
            setClientSecret(clientSecret);
        });
    }, []);

    return (
        <>
            <HeaderClient />

            <div className='payement'>
                <Link
                    to={{
                        pathname: `/production/${state && state.val && state.val.title}`
                    }}
                    state={{
                        val: state && state.val
                    }}
                    style={{ borderRadius: "10px" }}
                    className='linksPayement'>
                    <span><FaArrowLeft /></span>
                    <span>Retour</span>
                </Link>
                <h5>Paiement de la production {state && state.val && state.val.title}</h5>

                <form onSubmit={submitData}>

                    <div className='row'>
                        <div className='montant col-sm-6'>
                            <label>Montant de votre partication</label>
                            <div className="form-group mb-3 infosData">
                                <input type="number" className="form-control" id="exampleInputEmail1"
                                    onChange={(e) => setMontant(e.target.value)}
                                    value={montant}
                                    aria-describedby="emailHelp" placeholder="Montant de votre partication" />
                                {
                                    montant < 5000 && montant >= 200 ?
                                        <div className='alert alert-info mt-2'>
                                            <FaInfo />

                                            <span>Entre 200 $ et 5000 $, vous avez droit à l'apparition de votre nom à la fin des 5 premiers épisodes.</span>
                                        </div>
                                        : montant >= 5000 && montant <= 10000 ?
                                            <div className='alert alert-info mt-2'>
                                                <FaInfo /> <span>Entre 5000 $ et 10000 $, vous avez
                                                    droit à l'apparition de votre nom + une information de votre choix
                                                    (ex. Instagram, entreprise, adresse) à la fin de tous les épisodes.</span>
                                            </div>
                                            : montant < 200 ?
                                                <div className='alert alert-info mt-2'>
                                                    <FaInfo />
                                                    <span style={{ color: "red" }}>Désolé.e, le sponsoring commence à partir de 200 $.</span>
                                                </div> :
                                                montant >= 10000 && montant <= 30000 ?
                                                    <div className='alert alert-info mt-2'>
                                                        <FaInfo /> <span>Entre 10000 $ et 30000 $, votre entreprise a droit à deux placements de produits de 3-5 sec. dans tous les épisodes. </span>
                                                    </div>
                                                    :
                                                    montant > 30000 && montant <= 50000 ?
                                                        <div className='alert alert-info mt-2'>
                                                            <FaInfo />
                                                            <span>Entre 30000 $ et 50000 $, votre entreprise a droit à trois placements de produits de 3-5 sec. dans tous les épisodes.</span>
                                                        </div> :
                                                        montant > 50000 && montant <= 90000 ?
                                                            <div className='alert alert-info mt-2'>
                                                                <FaInfo />
                                                                <span>Entre 50000 $ et 90000 $, votre entreprise a droit à trois à quatre placements de produits de 3-5 sec. dans tous les épisodes.</span>
                                                            </div> :
                                                            montant > 90000 && montant <= 130000 ?
                                                                <div className='alert alert-info mt-2'>
                                                                    <FaInfo />
                                                                    <span>Entre 90000 $ et 130000 $, votre entreprise a droit à quatre à cinq placements de produits de 5-15 sec. dans tous les épisodes.</span>
                                                                </div> :
                                                                montant > 130000 &&
                                                                <div className='alert alert-info mt-2'>
                                                                    <FaInfo />
                                                                    <span>Au délà 130000 $, votre entreprise a droit à cinq à dix placements de produits de 5-15 sec. dans tous les épisodes.</span>
                                                                </div>
                                }

                                {

                                }
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <label>Veuillez choisir une devise svp</label>
                            <select onChange={(e) => setDevise(e.target.value)} className='form-control'>
                                <option value="">--Veuillez choisir une devise svp--</option>
                                <option value="Dollar">$</option>
                                <option value="Euro">€</option>
                                <option value="FC">FC</option>
                            </select>

                            <div className='row'>
                                <div className='col-sm-6'>
                                    {
                                        montant >= 5000 &&
                                        <div>
                                            <textarea style={{ height: "90px", fontSize: '14px' }} cols="30" rows="2" className='mt-2 form-control' maxLength={25} placeholder='Votre nom à afficher'></textarea>
                                        </div>
                                    }
                                </div>

                                <div className='col-sm-6'>
                                    {
                                        montant >= 5000 &&
                                        <div>
                                            <textarea style={{ height: "90px", fontSize: '14px' }} cols="30" rows="2" className='mt-2 form-control' maxLength={25} placeholder='Votre message à afficher'></textarea>
                                        </div>
                                    }
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='montant'>
                        <div className='textPayement'>
                            <h4>Vos coordonées</h4>
                            <div className='anonymat'>
                                <span>Je préfère l'anonymat</span>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" onClick={verifCheck} />
                            </div>
                        </div>

                        {
                            !chec &&
                            <>
                                <div className="form-group mb-3">
                                    <input type="text" className="form-control"
                                        onChange={(e) => setPrenom(e.target.value)}
                                        id="exampleInputPassword1" placeholder="Votre nom et prénom" />
                                </div>
                                <div className="form-group mb-3">
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                        onChange={(e) => setEmail(e.target.value)}
                                        aria-describedby="emailHelp" placeholder="Adresse email" />
                                </div>
                            </>
                        }

                    </div>

                    <div className='montant paiementModes'>
                        <br />
                        <h4>Chosir le mode de paiement</h4> <br />
                        <div class="row">
                            <div className='col-sm-4'>
                                <div className={choix === 1 ? "card choisi" : "card"} onClick={() => setChoix(1)}>
                                    <img src={pmobile} alt="Paiement mobile" />
                                    {
                                        choix === 1 && <FaCheckCircle size={40} />
                                    }
                                </div>
                                <p style={{ fontSize: "1rem", fontWeight: "bold", textAlign: "center" }}>Paiement mobile</p>
                            </div>
                            <div className='col-sm-4' onClick={() => setChoix(2)}>
                                <div className={choix === 2 ? "card choisi" : "card"}>
                                    <img src={vbancaire} alt="Virement bancaire" />
                                    {
                                        choix === 2 && <FaCheckCircle size={40} />
                                    }
                                </div>
                                <p style={{ fontSize: "1rem", fontWeight: "bold", textAlign: "center" }}>Virement bancaire</p>
                            </div>

                            <div className='col-sm-4' onClick={() => setChoix(3)}>
                                <div className={choix === 3 ? "card choisi" : "card"}>
                                    <img src={cash} alt="Paiement cash" />
                                    {
                                        choix === 3 && <FaCheckCircle size={40} />
                                    }
                                </div>
                                <p style={{ fontSize: "1rem", fontWeight: "bold", textAlign: "center" }}>Paiement Cash</p>
                            </div>
                        </div>
                    </div>

                    {
                        choix === 3 &&
                        <div className="payementCash mt-5">
                            <h6 className='mb-2'>Vous avez choisi le payement cash</h6>
                            <table className='table table-bordered table-striped'>
                                <tbody>
                                    <tr>
                                        <td>Montant</td>
                                        <td style={{ fontWeight: "bold" }}>
                                            {montant}
                                            {
                                                devise === "Dollar" ? " $" : devise === "Euro" ? " €" :
                                                    devise === "FC" ? " FC" : ""
                                            }
                                        </td>
                                    </tr>
                                    {
                                        chec === true ?
                                            <tr>
                                                <td>Status personne</td>
                                                <td style={{ fontWeight: "bold" }}>
                                                    Anonyme
                                                </td>
                                            </tr>
                                            :
                                            <tr>
                                                <td>Email et Prénom</td>
                                                <td style={{ fontWeight: "bold" }}>
                                                    {email} {prenom && ', ' + prenom}
                                                </td>
                                            </tr>
                                    }

                                    <tr>
                                        <td>Adresse physique</td>
                                        <td style={{ fontWeight: "bold" }}>
                                            Kwango, 131 Gombe Kinshasa
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    }
                    {
                        choix === 1 && (
                            <>
                                <h5>Choisir un mode opératoire</h5>
                                <div className='grille mobilesBank'>
                                    <div className={typeMobile === 1 ? "card checked" : "card"} onClick={() => setTypeMobile(1)}>
                                        {typeMobile === 1 && <FaCheckCircle size={30} />}     <img src={mpsa} alt="" />
                                    </div>
                                    <div className={typeMobile === 2 ? "card checked" : "card"} onClick={() => setTypeMobile(2)}>
                                        {typeMobile === 2 && <FaCheckCircle size={30} />}   <img src={orange} alt="" />
                                    </div>
                                    <div className={typeMobile === 3 ? "card checked" : "card"} onClick={() => setTypeMobile(3)}>
                                        {typeMobile === 3 && <FaCheckCircle size={30} />}    <img src={airtel} alt="" />
                                    </div>
                                    <div className={typeMobile === 4 ? "card checked" : "card"} onClick={() => setTypeMobile(4)}>
                                        {typeMobile === 4 && <FaCheckCircle size={30} />}   <img src={africell} alt="" />
                                    </div>
                                </div>
                            </>
                        )
                    }

                    {
                        choix === 2 &&
                        clientSecret && stripePromise && (
                            <Elements stripe={stripePromise} options={{ clientSecret }}>
                                <CheckoutForm />
                            </Elements>
                        )
                    }

                    <div
                        style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
                    >


                        <form action="https://api-testbed.maxicashapp.com/PayEntryPost" method="POST">
                            <input type="hidden" name="PayType" value="MaxiCash" />
                            <input type="hidden" name="Amount" value="1000" />
                            <input type="hidden" name="Currency" value="MaxiDollar" />
                            <input type="hidden" name="Telephone" value="0817247035" />
                            <input type="hidden" name="Email" value="ligabloopale@gmail.com" />
                            <input type="hidden" name="MerchantID" value="e536dee7701d4ab598e2aa5a112bd88e" />
                            <input type="hidden" name="MerchantPassword" value="ce11a5a4214548368ba1bc5bbbe0d9a0" />
                            <input type="hidden" name="Language" value="En" />
                            <input type="hidden" name="Reference" value="5656" />
                            <input type="hidden" name="accepturl" value="ligabloprod.com" />
                            <input type="hidden" name="cancelurl" value="ligabloprod.com" />
                            <input type="hidden" name="declineurl" value="ligabloprod.com" />
                            <input type="hidden" name="notifyurl" value="ligabloprod.com" />

                            <button type="submit" className="btn" style={{ width: "100%" }}>
                                {
                                    choix === 3 ? "Confirmer ce payement" :
                                        "Valider et Payer"
                                }
                            </button>
                        </form>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Paiement