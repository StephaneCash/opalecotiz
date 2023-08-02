import React, { useEffect, useState } from 'react'
import "./ServiceById.css"
import { Link, useLocation } from 'react-router-dom'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { FaAngleRight, FaHome } from 'react-icons/fa';

const ServiceById = () => {

    const [img, setImg] = useState('');

    const location = useLocation();
    const { state } = location;

    useEffect(() => {
        if (state) {
            setImg(state && state.val && state.val.url.replace(/\\/g, "/"));
        }
    }, [state]);

    const nom = state && state.val && state.val.title;

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <Header />
            <div className='serviceById'>
                <div className='toolbar'>
                    <div className='accueilPath'>
                        <FaHome />
                        <Link to="/">Accueil</Link>
                    </div>
                    <FaAngleRight />
                    <span>Services</span>
                    <FaAngleRight /> <span>
                        {nom && nom.length > 30 ? nom.substring(0, 30) + "..." : nom}
                    </span>
                </div>

                <div className='annonce' style={{ backgroundImage: `url(${img})` }}>
                    <div className='overPlay'></div>
                    <div className='text'>
                        <div className='theme'>Service</div>
                        <div className='title'>
                            {
                                state && state.val && state.val.title
                                    && state.val.title.length > 150 ? state.val.title.substring(0, 150) + "..." : state && state.val.title
                            }
                        </div>
                    </div>
                </div>

                <div className='description'>
                    <div className='title'>
                        {state && state.val && state.val.text}
                    </div>
                    <div className='desc'>
                        <div className='text'>
                            {
                                nom === "Production série" ?
                                    <div className='serieText'>
                                        <p style={{ fontSize: "15px" }}>
                                            Devenues le format de fiction le plus consommé et le plus diffusé à la télévision, les séries télévisées se
                                            sont imposées comme un objet d'étude en sciences sociales.
                                        </p>

                                        <p style={{ fontSize: "15px" }}>
                                            La production des séries « associe le travail d'auteurs de plus en plus nombreux et de plus en plus spécialisés
                                            mais aussi d'un capital pour sa production.
                                        </p>
                                        <p style={{ fontSize: "15px" }}>
                                            Pour produire une série télévisée, on procède comme suit:
                                        </p>
                                        <ol>
                                            <li>
                                                Nous commencons par trouver une idée originale. Cette idée doit être encrée. Soit nous allons nous associer à un auteur qui a déjà dévoloppé son
                                                idée afin de la produire.
                                            </li>
                                            <li>
                                                Une fois que nous avons cette idée, nous pouvons commencer
                                                à la faire grandir et mûrir progressivement en lui faisant suivre des étapes précises.
                                            </li>
                                            <li>
                                                Si il y a déjà un scénario écrit par l'auteur on peut juste le mûrir si non nous écrivons un scénario à partir de notre idée.
                                                Ensuite, nous allons choisir la durée de l'émission, soit une durée de 30 minutes ou d'une heure.
                                            </li>
                                            <li>
                                                Une fois que le scénario ait été bien écrit, nous pouvons le présenter à une chaîne pour qu'elle l'achète et le diffuse
                                            </li>

                                            <li>Tout d'abord, LiGABLO production commence par créer une cagnotte. Cette dernière
                                                aura un montant élévé en FC ou USD, une durée c'est-à-dire une date de lancement et de fermeture,
                                                une description et autres accessoires l'illustrant.
                                                La cagnotte représente une sorte d'appel de fonds.
                                            </li>
                                            <li>
                                                Ensuite, une fois le montant de cagnotte atteint et dans le délai, LiGABLO procédera au
                                                lancement de la dite série.
                                            </li>
                                            <li>Le lancement va débuter par un tournage professionnel, en association avec des experts de domaine. </li>
                                        </ol>                       <p>
                                            Ce service n'est pas encore mis au point, le début de son lancement est prévu pour fin de l'année 2023.

                                        </p>

                                    </div>
                                    : nom === "Concours jeunes talents" ?
                                        <div className='textTalent'>
                                            <p>
                                                Nous organisons des jeux concours pour plusieurs raisons à savoir :
                                            </p>

                                            <ul>
                                                <li>Ils nous permettent d'augmenter en notoriété et en visibilité</li>
                                                <li>De promouvoir nos produits</li>
                                                <li>D'attirer de nouveaux consommateurs, de fidéliser nos clients</li>
                                                <li>Egalement un excellent moyen de découvrir de nouveaux talents</li>
                                            </ul>

                                            <p>Cette organisation se passe déroule comme suit : </p>

                                            <ul>
                                                <li>
                                                    Nous déterminons le type de talent que nous recherchons. Décidons si nous voulons faire un spectacle d’exhibition ou de levée de fonds.
                                                    Statuons sur le type de performance que nous voulons et s’il s’agira d’une compétition. Une fois cela fait,
                                                    nous pourrons choisir le complexe adéquat et l’équipe d’organisation.
                                                </li>
                                                <li>
                                                    Faisons un budget. Le budget est le lien vital de notre show. Nous serons tenu d’organiser notre concours à un endroit mais beaucoup plus
                                                    souvent cela se passe en ligne
                                                    , de faire la promotion et d’acheter le nécessaire. Déterminons l’envergure du spectacle ainsi que
                                                    le budget qu’il nous faudra pour que l’organisation soit une réussite.
                                                </li>
                                                <li>Choisissons une plateforme pour créer des jeux-concours telles que ligabloprod.com</li>
                                                <li>
                                                    Faisons la promotion du concours en utilisant les réseaux sociaux, les affiches... <br />
                                                    Lors de cette promotion sera dévoilée les prix pour les gagnants.
                                                </li>
                                            </ul>
                                        </div>
                                        : nom === "Publicité" ?
                                            <div>
                                                <p>
                                                    Les publicités sont égalemnt  l'une des sources de revenus pour notre entreprise.
                                                    Elles nous permettent d'augmenter en visibilité
                                                    et en notoriété, attirer de nouveaux clients, fidéliser nos clients existants.
                                                </p> 
                                                Ces publicités peuvent être diffusées sur différents canaux tels que les réseaux sociaux,
                                                les sites Web, les applications mobiles aussi séries télévisées par nous.

                                            </div>
                                            : ""
                            }
                        </div>
                        <div className='image'>
                            <img src={state && state.val && state.val.url} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ServiceById