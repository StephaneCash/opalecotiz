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
            <h3>Nos dernières productions...</h3>
            <div className='cardsData'>
                {
                    sliceCagnottes && sliceCagnottes.length > 0 && sliceCagnottes.map(val => {
                        const talents = val && val.talents && val.talents.length
                        return <div className='card' key={val.id}>
                            <img src={baseUrlImage + "/" + val.url} alt={val.title} />
                            <div className='card-body'>
                                <div className='title'>
                                    {val && val.title}
                                </div>
                                <hr />

                                <div className='montant'>
                                    <div className='prixRecoltat'>
                                        {
                                            val && val.title === "Jeune Talent" ?
                                                talents 
                                                : 0
                                        }
                                    </div>
                                    <div className='devise'>

                                        {
                                            val.title === "Jeune Talent" ? <div className='nomJeuneTalent' style={{ marginLeft: "5px" }}> Participants</div> :
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
                                    <span>
                                        {
                                            val && val.title === "Jeune Talent" ? " enregistrés sur " : " collectés sur "
                                        }
                                    </span>  <span>{val.title === "Jeune Talent" ? "" : 12656}
                                        {
                                            val && val.title === "Jeune Talent" ? val && val.montant / 1000 + " participants" :
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
                                    {
                                        val.title === "Jeune Talent" ? "Je m'inscris" : "Je participe"
                                    }
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