import React from 'react'
import "./Contact.css"
import { FiSend } from 'react-icons/fi'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

const Contact = () => {
    return (
        <div className="contact">
            <div className='col1'>
                <div className='overPlay'></div>
                <div className='text'>
                    <div className='row1'>
                        <FaMapMarkerAlt />
                        <div>Kwango 131, Kinshasa Gombe</div>
                    </div>

                    <div className='row1'>
                        <FaEnvelope size={30} />
                        <div>g.kazadi@opale-cie.com, i.basa@opale-cie.com</div>
                    </div>

                    <div className='row1'>
                        <FaPhoneAlt />
                        <div>+243 895 034 286</div>
                    </div>
                </div>
            </div>
            <div className='col2'>
                <form>
                    <h5>Contacts</h5>
                    <div className='form-group'>
                        <input type="text" className='form-control' placeholder='Votre nom complet' />
                    </div>
                    <div className='form-group'>
                        <input type="email" className='form-control' placeholder='Votre adresse email' />
                    </div>
                    <div className='form-group'>
                        <input type="number" className='form-control' placeholder='Votre numéro de téléphone' />
                    </div>
                    <div className='form-group'>
                        <textarea cols="30" rows="8" placeholder='Votre message' className="form-control"></textarea>
                    </div>

                    <button type='submit' className='btn'>Envoyer <FiSend /> </button>
                </form>
            </div>
        </div>
    )
}

export default Contact