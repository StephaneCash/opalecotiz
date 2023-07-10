import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { baseUrlImage } from '../../../bases/basesUrl'
import { dateParserFunction } from '../../../utils'

const Main = ({ listcategories, listCagnottes, valueSearch, setValueSearch }) => {

    const [valueCategorieId, setValueCategorieId] = useState(null);

    useEffect(() => {
        if (valueSearch) {
            setValueCategorieId(null);
        }
    }, [valueSearch]);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <div className='mainSearch'>
                <div className='inputSearch'>
                    <h5>Vous cherchez une production ?</h5>
                    <input type="search" placeholder='Ex: Pour Grace et Kamaro' className='form-control' onChange={(e) => setValueSearch(e.target.value)} />
                </div>

                <div className='categoriesCagnottes'>
                    {
                        listcategories && listcategories.length > 0 ? listcategories.slice(0, 8).map(val => {
                            return <Link to=""
                                className={valueCategorieId === val.id ? "show" : ""}
                                key={val.id} onClick={() => setValueCategorieId(val.id)}>
                                {val.nom}
                            </Link>
                        }) : "Chargement"
                    }
                    <Link to="" onClick={() => setValueCategorieId(null)}>Toutes les catégories</Link>

                </div>
            </div>
            <div className='productions'>
                {
                    listCagnottes && listCagnottes.length > 0 ?
                        listCagnottes.filter(search => {
                            const nom = search.title && search.title.toLowerCase();
                            const desc = search.description && search.description.toLowerCase();
                            const value = valueSearch.toLocaleLowerCase();
                            const categorieId = search.categorieId && search.categorieId;
                            if (valueCategorieId) {
                                return categorieId === valueCategorieId
                            } else {
                                return (nom && nom.includes(value)) || (desc && desc.includes(value));
                            }
                        })
                            .map(val => {
                                return <div className='card' key={val.id}>
                                    <Link to={{
                                        pathname: `/production/${val.title}`
                                    }}
                                        state={{ val: val }}
                                    >
                                        <div className='image'>
                                            <div className='overPlay'></div>
                                            <div className='textMain '>
                                                <span className='titleImportant'>{val.title}</span> <br />
                                                <span className='bgTitle'>{val.categorie && val.categorie.nom}</span> <br />
                                                <span>Lancée {dateParserFunction(val.createdAt)}</span>
                                            </div>
                                            <img src={baseUrlImage + "/" + val.url} alt="" />
                                        </div>
                                        <div className='card-body'>
                                            <div className='overPlay'></div>

                                            <div className='title'>
                                                {
                                                    val && val.title && val.title.length > 20 ? val.title.substring(0, 20) + "..." :
                                                        val.title
                                                }
                                            </div>

                                            <hr />

                                            <div className='montant'>
                                                <div className='prixRecoltat'>
                                                    {
                                                        val && val.montantRecolte ? val.montantRecolte : 0
                                                    }
                                                </div>
                                                <div className='devise'>
                                                    {
                                                        val.devise && val.devise.split(',') && val.devise.split(',').map(value => {
                                                            if (value === "Dollar") {
                                                                return " $"
                                                            } else if (value === "Euro") {
                                                                return " €"
                                                            } else if (value === "FC") {
                                                                return " FC"
                                                            } else {
                                                                return null
                                                            }
                                                        })
                                                    }
                                                </div>
                                            </div>
                                            <div className='collect'>
                                                <span>collectés sur </span>  <span>{val.montant}
                                                    {
                                                        val.devise && val.devise.split(',') && val.devise.split(',').map(value => {
                                                            if (value === "Dollar") {
                                                                return " $"
                                                            } else if (value === "Euro") {
                                                                return " €"
                                                            } else if (value === "FC") {
                                                                return " FC"
                                                            } else {
                                                                return null
                                                            }
                                                        })
                                                    }
                                                </span>
                                            </div>

                                            <div className='alert text-center' style={{ background: "#efefef" }}>
                                                Lancement : {dateParserFunction(val.dateDebut)}
                                                <br />
                                                Fermeture : {dateParserFunction(val.dateFin)}
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            })
                        : ""
                }
            </div>
        </>
    )
}

export default Main