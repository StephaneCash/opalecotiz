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

import FormJeuneTalent from './FormJeuneTalent';
import { useDispatch, useSelector } from 'react-redux';
import { newTalent } from '../../../features/Talents';

const Paiement = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const { state } = useLocation();
    let navigate = useNavigate()

    const [choix, setChoix] = useState(0);
    const [montant, setMontant] = useState(
        state && state.val && state.val.title === "Jeune Talent" ? "500 FC" : 200
    );

    const [devise, setDevise] = useState(
        state && state.val && state.val.title === "Jeune Talent" ? "FC" : ""
    );
    const [email, setEmail] = useState("");
    const [prenom, setPrenom,] = useState("");
    const [chec, setChec] = useState(false);

    const [numTel, setNumTel] = useState("");
    const [dateNaissance, setDateNaissance] = useState("");
    const [commune, setCommune] = useState("");
    const [occupation, setOccupation] = useState("");
    const [file, setFile] = useState("");
    const [categorie, setCategorie] = useState("");
    const [nom, setNom] = useState("");
    const [modePaiement, setModePaiement] = useState('');
    const [duration, setDuration] = useState(0);

    const [isChecked, setIsChecked] = useState(false);
    const [btnClic, setBtnClic] = useState(false);
    const [typeMobile, setTypeMobile] = useState(0);

    const isLoading = useSelector(state => state.talents.loading);

    const dispatch = useDispatch();

    const submitData = (e) => {
        e.preventDefault();
        setBtnClic(true);
        const checkBox = document.getElementById('checkBoxTermes');
        if (state && state.val && state.val.title === "Jeune Talent") {
            if (checkBox && checkBox.checked === true) {
                setIsChecked(true);
                if (!montant) {
                    toast.error('Veuillez remplir le champ montant svp')
                } else {
                    if (choix === 3) {
                        toast.success("Votre paiement sera pris en compte dès que vous aurez réglé en présentiel.")
                        navigate('/productions');
                    } else {
                        const typeVideo = file && file.type && file.type.split('/');
                        if (file && typeVideo[0] === "video") {
                            if (file && file.size > 20000000) {
                                toast.error("Votre fichier est trop volumineux, taille max: 20Mo")
                            } else {
                                if (duration > 5) {
                                    toast.error("La vidéo doit avoir une durée max 5 Min")
                                } else {
                                    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
                                    if (pattern.test(email)) {
                                        let formData = new FormData();
                                        formData.append('nom', nom);
                                        formData.append('montant', montant);
                                        formData.append('video', file);
                                        formData.append('prenom', prenom);
                                        formData.append('email', email);
                                        formData.append('numTel', numTel);
                                        formData.append('dateNaissance', dateNaissance);
                                        formData.append('commune', commune);
                                        formData.append('occupation', occupation);
                                        formData.append('categorie', categorie);
                                        formData.append('modePaiement', modePaiement);

                                        dispatch(newTalent(formData));
                                    } else {
                                        toast.error("L'adresse email n'est pas valide.")
                                    }
                                }
                            }
                        } else {
                            toast.error("Seuls les fichiers de type vidéos sont autorisés");
                        }
                    }
                }
            } else {
                setIsChecked(false)
            }
        } else {
            setIsChecked(true);
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
        }
    };

    const verifCheck = () => {
        let inputCheck = document.getElementById("flexCheckChecked")
        if (inputCheck.checked === true) {
            setChec(true);
        } else {
            setChec(false);
        }
    };

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
                        <div className={
                            state && state.val && state.val.title === "Jeune Talent" ? "montant col-sm-12" : "montant col-sm-6"
                        }>
                            <label>Montant de votre partication</label>
                            <div className="form-group mb-3 infosData mt-2">
                                <input type="text" className="form-control" id="exampleInputEmail1"
                                    onChange={(e) => setMontant(e.target.value)}
                                    value={montant}
                                    disabled={
                                        state && state.val && state.val.title === "Jeune Talent" ? true : false
                                    }
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
                        <div className={
                            state && state.val && state.val.title === "Jeune Talent" ? "col-sm-6 showFalse" : "col-sm-6"
                        }>
                            <label>Veuillez choisir une devise svp</label>
                            <select onChange={(e) => setDevise(e.target.value)} className='form-control'>
                                <option value="">--Veuillez choisir une devise svp--</option>
                                <option value="Dollar">$</option>
                                <option value="Euro">€</option>
                                <option value="FC">FC</option>
                            </select>

                            {
                                state && state.val && state.val.title === "Jeune Talent" ? "" :
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
                            }
                        </div>
                    </div>

                    <div className='montant'>
                        <div className='textPayement'>
                            <h4>Vos coordonées</h4>
                            {
                                state && state.val && state.val.title === "Jeune Talent" ? "" :
                                    <div className='anonymat'>
                                        <span>Je préfère l'anonymat</span>
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" onClick={verifCheck} />
                                    </div>
                            }
                        </div>

                        {
                            !chec &&
                                state && state.val && state.val.title === "Jeune Talent" ?
                                <FormJeuneTalent
                                    setNom={setNom}
                                    setEmail={setEmail}
                                    setNumTel={setNumTel}
                                    setCategorie={setCategorie}
                                    setDateNaissance={setDateNaissance}
                                    setPrenom={setPrenom}
                                    setCommune={setCommune}
                                    setOccupation={setOccupation}
                                    setFile={setFile}
                                    setDuration={setDuration}
                                />
                                :
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
                        <h4 style={{
                            fontFamily: "Poppins"
                        }}>Chosir le mode de paiement</h4> <br />
                        <div className="row">
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
                                    <div className={typeMobile === 1 ? "card checked" : "card"} onClick={() => {
                                        setTypeMobile(1); setModePaiement("MPSA")
                                    }}>
                                        {typeMobile === 1 && <FaCheckCircle size={30} />}     <img src={mpsa} alt="" />
                                    </div>
                                    <div className={typeMobile === 2 ? "card checked" : "card"} onClick={() => {
                                        setTypeMobile(2); setModePaiement("ORANGE MONEY")
                                    }}>
                                        {typeMobile === 2 && <FaCheckCircle size={30} />}   <img src={orange} alt="" />
                                    </div>
                                    <div className={typeMobile === 3 ? "card checked" : "card"} onClick={() => {
                                        setTypeMobile(3); setModePaiement("AIRTEL MONEY")
                                    }}>
                                        {typeMobile === 3 && <FaCheckCircle size={30} />}    <img src={airtel} alt="" />
                                    </div>
                                    <div className={typeMobile === 4 ? "card checked" : "card"} onClick={() => {
                                        setTypeMobile(4); setModePaiement("AFRI MONEY")
                                    }}>
                                        {typeMobile === 4 && <FaCheckCircle size={30} />}   <img src={africell} alt="" />
                                    </div>
                                </div>
                            </>
                        )
                    }


                    {
                        state && state.val && state.val.title === "Jeune Talent" ?
                            <>
                                <div className='mt-4 termeDec'>
                                    <h3 className='titleTerme'>
                                        Termes de confidentialité :
                                    </h3>
                                    <p className='alert'>
                                        « Une fois vos données personnelles fournies et par nous recueillies , vous vous en dessaisissez automatiquement et vous nous en laissez l'exclusivité d'usage en tenant compte des restrictions légales y afférentes.

                                        Nous tâcherons de les garder soigneusement sans en altérer l'origine ni en faire usage illégal. »
                                    </p>
                                </div>

                                {
                                    btnClic && !isChecked && <span style={{ color: "red" }}>Veuillez cocher la case pour avoir accepté les termes de confidentialité.</span>
                                }

                                <div className='mt-3 btnTermes'>
                                    <label className={isChecked ? "labelLue" : "noChecked"}>J'ai lu et j'accepte les termes de confidentialité</label>
                                    <input className={isChecked ? "form-check-input" : "form-check-input noChecked"} type="checkbox" value="" id="checkBoxTermes"></input>
                                </div>
                            </>
                            : ""
                    }
                    <div
                        style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
                        {
                            state && state.val && state.val.title === "Jeune Talent" ?
                                <button
                                    type="submit"
                                    className="btn"
                                    style={{ width: "40%" }}
                                    disabled={
                                        nom && prenom && dateNaissance && commune &&
                                            occupation && categorie && file ? false : true
                                    }
                                >
                                    {
                                        choix === 3 ? "Confirmer ce payement" :
                                            isLoading ? "Validation..." :
                                                "Valider et Payer"
                                    }
                                </button> :
                                <button type="submit" className="btn" style={{ width: "40%" }}>
                                    {
                                        choix === 3 ? "Confirmer ce payement" :
                                            "Valider et Payer"
                                    }
                                </button>
                        }
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Paiement