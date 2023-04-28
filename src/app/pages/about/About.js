import React from 'react'
import './About.css'
import about from "../../../assets/about.jpg"
import logoRouge from "../../../assets/logoRouge.png"

const About = () => {
    return (
        <div className='col-sm-12 about'>
            <img src={about} alt="about" />
            <div className='text'>
                 <img src={logoRouge} alt="Logo" style={{width:"auto", height:"80px", borderRadius:"5px",}} /> 
                <p>
                    Pour une bonne cause: ensemble, nous sommes la solution pour promouvoir la pop culture avec notre programme <strong>Ligablo production</strong>. <br />
                    Avec le défi des insignes virtuels la classe apprend et remplit sa caisse.
                </p>
                <button className='btn'>Particper à une production</button>
            </div>
        </div>
    )
}

export default About