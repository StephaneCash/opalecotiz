import React from 'react'
import { FaInfo } from "react-icons/fa"

export const FormSugestion = ({ montant, setMontant, state, }) => {
    return (
        <>
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
            </div>
        </>
    )
}
