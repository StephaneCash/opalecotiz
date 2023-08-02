import React from 'react'
import "./Faillure.css"
import { FaRegSadTear } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Faillure = () => {
    return (
        <div className='faillure'>
            <FaRegSadTear />
            <span>Votre inscription a échoué. <br /> Veuillez recommencer.</span>
            <Link to="/productions" className='btn' style={{ textDecoration: "none", color: "#fff" }}>Recommencer</Link>
        </div>
    )
}

export default Faillure