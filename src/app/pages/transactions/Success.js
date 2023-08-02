import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import "./Success.css"

const Success = () => {
    return (
        <div className='success'>
            <FaCheckCircle color='green' />
            <span>Votre inscription a été bien reçue. <br/> Vous serez contacté dans un bref délai.</span>
            <Link to="/" className='btn btn-success' style={{ textDecoration: "none", color: "#fff" }}>Retour sur le site.</Link>
        </div>
    )
}

export default Success