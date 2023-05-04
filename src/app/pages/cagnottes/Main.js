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
                                return nom && nom.includes(value) || desc && desc.includes(value);
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
                                                <span className='bgTitle'>{val.categorie && val.categorie.nom}</span> <br />
                                                <span>Lancée {dateParserFunction(val.createdAt)}</span>
                                            </div>
                                            <img src={baseUrlImage + "/" + val.url} alt="" />
                                        </div>
                                        <div className='card-body'>
                                            <div className='overPlay'></div>
                                            <span>{val.title}</span>
                                            <div className='dataShow'>
                                                <div>Montant à atteindre  </div>
                                                <div>{val.montant} $</div>
                                            </div>
                                            <div className='dataShow'>
                                                <div>Delai  </div>
                                                <div>Deux mois</div>
                                            </div>
                                            <div className='lastDiv'>14 000 $ collectés avec <strong>220</strong> participants </div>
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