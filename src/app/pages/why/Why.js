import React from 'react';
import "./Why.css";
import { useSelector } from 'react-redux';
import { baseUrlImage } from '../../../bases/basesUrl';
import { Link } from 'react-router-dom';

const Why = () => {

    const listCagnottes = useSelector(state => state.cagnottes.value);
    const lengthArray = listCagnottes && listCagnottes.length;

    const sliceCagnottes = listCagnottes && listCagnottes.length > 0 && listCagnottes.slice(lengthArray - 2, lengthArray);

    return (
        <div className='why'>
            <h3>Les Dernières productions...</h3>
            <div className='cardsData'>
                {
                    sliceCagnottes && sliceCagnottes.length > 0 && sliceCagnottes.map(val => {
                        return <div className='card' key={val.id}>
                            <img src={baseUrlImage + "/" + val.url} alt="" />
                            <div className='card-body'>
                                <div className='title'>
                                    {val && val.title}
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

                                <Link to={{
                                    pathname: `/production/${val.title}`
                                }}
                                    state={{
                                        val: val
                                    }}
                                >
                                    En savoir plus
                                </Link>
                            </div>
                        </div>
                    })
                }
            </div>

            <Link to="/productions" className='toutesNos btn'>Découvrir Toutes nos productions</Link>
        </div>
    )
}

export default Why