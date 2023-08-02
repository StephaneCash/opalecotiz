import React from 'react'
import "./Services.css"
import talent from "../../../assets/talent.jpg"
import serie from "../../../assets/pexels-cottonbro-studio-5082566.jpg"
import pub from "../../../assets/pub-518543.jpg"
import { Link } from 'react-router-dom'

const Services = () => {
    return (
        <div className='services' id="services">
            <h5>Nos services</h5>
            <div className='grille'>
                <div className='card'>
                    <img src={talent} alt="" />
                    <h4>CONCOURS JEUNES TALENTS</h4>
                    <div>
                        LiGABLO production organise des jeux concours pour toute génération dans le secteur de danse, musique, théatre
                        et autres. Votre talent sera recompensé en gagnant le prix disposé.
                    </div>
                    <Link
                        to={{
                            pathname: `/service/talent`
                        }}
                        state={{
                            val: {
                                url: talent,
                                title: "Concours jeunes talents",
                                text: "LiGABLO production organise des jeux concourts pour toute génération dans le secteur de danse, musique, théatre et autres. Votre talent sera recompensé en gagnant le prix disposé"
                            }
                        }}
                    >En savoir plus</Link>
                </div>

                <div className='card'>
                    <img src={serie} alt="" />
                    <h4>PRODUCTION SERIE</h4>
                    <div>
                        LiGABLO production dans le secteur série représente une activité exercée sous le contrôle, la responsabilité et la gestion de OPALE qui combine des
                        ressources en main-d'œuvre, capital et biens et services pour produire des séries télévisées.
                    </div>
                    <Link
                        to={{
                            pathname: `/service/serie`
                        }}
                        state={{
                            val: {
                                url: serie,
                                title: "Production série",
                                text: "LiGABLO production dans le secteur série représente une activité exercée sous le contrôle, la responsabilité et la gestion de OPALE qui combine des ressources en main-d'œuvre, capital et biens et services pour produire des séries télévisées."
                            }
                        }}
                    >En savoir plus</Link>
                </div>

                <div className='card'>
                    <img src={pub} alt="" />
                    <h4>PUBLICITES</h4>
                    <div>
                        LiGABLO production utilise des séries produites pour passer quelques pubs des entreprises ou marques engagées.
                    </div>
                    <Link
                        to={{
                            pathname: `/service/publicites`
                        }}
                        state={{
                            val: {
                                url: pub,
                                title: "Publicité",
                                text: "LiGABLO production utilise des séries produites pour passer quelques pubs des entreprises ou marques engagés."
                            }
                        }}
                    >En savoir plus</Link>
                </div>
            </div>
        </div>
    )
}

export default Services