import React from 'react'
import { Modal } from "react-bootstrap";
import "./ModalPaiement.css"
import { useState } from 'react';
import { toast } from 'react-toastify';

const ModalPaiement = (props) => {

    const show = props.show;
    const [numTelPaie, setNumTelPaie] = useState('');
    const [isOk, setIsOk] = useState(false);

    function handleNumr(e) {
        const value = e.target.value;
        let patternMin = /[a-z]/g.test(value);
        setNumTelPaie(e.target.value);

        if (patternMin === true) {
            toast.error('Le numéro de téléphone ne peut pas contenir des lettres.')
            setIsOk(false)
        } else {
            setIsOk(true)
        }
    };

    const handleClic = () => {
        if (isOk) {
            if (numTelPaie) {
                if (numTelPaie.length > 10) {
                    toast.error('Numéro de téléphone trop long');
                } else if (numTelPaie.length < 10) {
                    toast.error('Numéro de téléphone trop court');
                } else {
                    if (numTelPaie)
                        props.closeModal();
                }
            } else {
                toast.error("Veuillez entrer un numéro de téléphone svp.")
            }
        } else {
            toast.error('Votre numéro est invalide')
        }
    };

    return (
        <Modal show={show} className='modalImage' style={{ marginTop: "50px", fontFamily: "Poppins" }}>
            <Modal.Header style={{ backgroundColor: '#ddd', color: '#111' }}>
                <h4>Renseigner les informations de payement</h4>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <label>Votre numéro de téléphone qui a un compte {props && props.modePaiement}</label> <br />
                    <input
                        type="text"
                        placeholder='Votre numéro de téléphone ex. 0825566555'
                        className='form-control'
                        onChange={(e) => handleNumr(e)}
                        value={numTelPaie}
                    />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={() => handleClic()}>Valider</button>
            </Modal.Footer>
        </Modal>
    )
}
export default ModalPaiement;