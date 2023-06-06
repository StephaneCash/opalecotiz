import React from 'react';
import "./Why.css";
import card2 from "../../../assets/pop.jpg"

const Why = () => {
    return (
        <div className='why'>
            <h3>Pourquoi cotiser ?</h3>
            <div className='cardsData'>
                <div className='col1'>
                    <img src={card2} alt="" />
                </div>

                <div className='col2'>

                    Dans le cas d’un salarié cadre d’entreprise, les cotisations sociales salariales et patronales représentent en moyenne 75 % de son salaire brut.
                    Si vous êtes dirigeant assimilé salarié, elles s’élèvent globalement 62 % de votre rémunération brute
                    Si vous êtes travailleur indépendant, elles correspondent environ à  45 % de votre rémunération nette ou de votre bénéfice.
                    Si vous êtes micro-entrepreneur, elles sont calculées directement en proportion du chiffre d’affaires encaissé : en fonction de votre activité, elles représentent soit 12,8 %, soit 22 % de votre chiffre d’affaires.
                    A noter : que vous soyez dirigeant assimilé salarié, travailleur indépendant ou micro-entrepreneur, vous pouvez bénéficier de la mesure d'exonération de début d'activité.
                </div>
            </div>
        </div>
    )
}

export default Why