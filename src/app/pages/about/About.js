import React from 'react'
import './About.css'
import about from "../../../assets/about.jpg"
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'

const About = () => {
    return (
        <div className='col-sm-12 about'>
            <div className='text'>
                <div className='images'>
                    <h1> Qui Sommes-nous ?</h1>
                </div>
                <p>
                    Pour une bonne cause: ensemble, nous sommes la solution pour promouvoir la pop culture avec notre programme <strong>Ligablo production</strong>.
                    Avec le défi des insignes virtuels la classe apprend et remplit sa caisse.
                </p>
                <ul>
                    <li> Nos objectifs </li>
                    <li> <FaCheck /> Production séries </li>
                    <li> <FaCheck /> Soutien à la pop culture</li>
                    <li> <FaCheck /> Développer la production</li>
                    <li> <FaCheck /> Dénicher de nouveaux talents</li>
                </ul>
                <Link to="/productions">
                    <button className='btn'>Particper à une production</button>
                </Link>
            </div>
            <img src={about} alt="about" />

        </div>
    )
}

export default About