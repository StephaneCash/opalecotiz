import React, { useState } from 'react'
import "./Contact.css"
import { FiSend } from 'react-icons/fi'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { toast } from 'react-toastify'

const Contact = () => {

    const [noms, setNoms] = useState('');
    const [email, setEmail] = useState('');
    const [numTel, setNumTel] = useState('');
    const [msg, setMasg] = useState('');

    const submitMsg = (e) => {
        e.preventDefault();
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
        if (noms && email && numTel && msg) {
            if (pattern.test(email)) {
                if (numTel.length < 10) {
                    toast.error("Numéro de téléphone doit avoir au minimum 10 caractères ");
                } else {
                    toast.success("Message bien soumis.");
                    setNoms("")
                    setEmail("")
                    setNumTel("")
                    setMasg("")
                }
            } else {
                toast.error("Adresse email non valide");
            }
        } else {
            toast.error("Veuillez remplir tous les champs svp");
        }
    }

    return (
        <div className="contact">
            <div className='col1'>
                <div className='overPlay'></div>
                <div className='text'>
                    <div className='row1'>
                        <FaMapMarkerAlt />
                        <div>131, Kwango. Kinshasa Gombe <br /> Réf. INA (Institut National des Arts)</div>
                    </div>

                    <div className='row1'>
                        <FaEnvelope size={20} />
                        <div>contact@opale-cie.com</div>
                    </div>

                    <div className='row1'>
                        <FaPhoneAlt />
                        <div>+243 895 034 286, +243 811 876 825</div>
                    </div>
                </div>
            </div>
            <div className='col2'>
                <form onSubmit={submitMsg}>
                    <h5>Contacts</h5>
                    <div className='form-group'>
                        <input
                            type="text"
                            className='form-control'
                            placeholder='Votre nom complet'
                            value={noms}
                            onChange={(e) => setNoms(e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type="email"
                            className='form-control'
                            placeholder='Votre adresse email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type="number"
                            className='form-control'
                            placeholder='Votre numéro de téléphone'
                            value={numTel}
                            onChange={(e) => setNumTel(e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <textarea
                            cols="30" rows="8"
                            value={msg}
                            placeholder='Votre message'
                            onChange={(e) => setMasg(e.target.value)}
                            className="form-control"></textarea>
                    </div>

                    <button type='submit' className='btn'>Envoyer <FiSend /> </button>
                </form>
            </div>
        </div>
    )
}

export default Contact