import React from 'react';
import "./Why.css";
import card1 from "../../../assets/card1.jpg"
import card2 from "../../../assets/card2.jpeg"

const Why = () => {
    return (
        <div className='why'>
            <h3>Pourquoi cotiser ?</h3>
            <div className='cardsData'>
                <div>
                    <h5>Pour grandir ensemble</h5>
                    <div className='card'>
                        <div className='card-body'>
                            <img src={card2} alt="" />
                        </div>
                        <p>
                            Pour un pot commun...
                            Parfait pour les évènements entre proches, naissances, mariages, pots de départ...
                        </p>
                    </div>
                </div>
                <div>
                    <h5>Promouvoir la culture</h5>
                    <div className='card'>
                        <div className='card-body'>
                            <img src={card2} alt="" />
                        </div>
                        <p>
                            Pour un pot commun...
                            Parfait pour les évènements entre proches, naissances, mariages, pots de départ...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Why