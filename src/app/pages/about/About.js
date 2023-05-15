import React, { useEffect } from 'react'
import './About.css'
import { Link } from 'react-router-dom'

const About = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className='col-sm-12 about'>
            <div className='overPlay'></div>
            <div className='text'>
                <h1>LiGABLO PRODUCTION</h1>
                <div className='textQuiSommesNous'>Qui sommes-nous ?</div>
                <p>
                    Pour une bonne cause : ensemble, nous sommes la solution pour promouvoir la pop culture avec notre programme <strong>LiGABLO PRODUCTION</strong>.
                    Avec le défi des insignes virtuels la classe apprend et remplit sa caisse.
                </p>
                <div className='dataFlex'>
                    <div className='co'>
                        <Link to="/productions">
                            <button className='btn'>Particper à une production</button>
                        </Link>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default About