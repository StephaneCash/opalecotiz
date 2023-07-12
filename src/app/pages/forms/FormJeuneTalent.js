import React, { useEffect, useState } from 'react'

const FormJeuneTalent = ({ setNom, setEmail, setNumTel, setCategorie,
    setDateNaissance, setPrenom, setCommune, setOccupation, setFile, setDuration }) => {

    const [video, setVideo] = useState('');

    const handleChange = (e) => {
        setFile(e.target.files[0]);
        setVideo(URL.createObjectURL(e.target.files[0]))
    }

    useEffect(() => {
        if (video) {
            let myVideo = document.getElementById('myVideo');

            myVideo.addEventListener('loadedmetadata', () => {
                let duration = myVideo.duration;
                let durationFomated = duration.toFixed(5) / 60;
                setDuration(durationFomated);
            })
        }
    }, [video, setDuration])

    return (
        <div className='formulaire'>
            <div className='row mb-3'>
                <div className="col-sm-6">
                    <input type="text" className="form-control"
                        onChange={(e) => setNom(e.target.value)}
                        placeholder="Votre nom*" />
                </div>
                <div className="col-sm-6">
                    <input type="text" className="form-control"
                        onChange={(e) => setPrenom(e.target.value)}
                        placeholder="Votre prénom*" />
                </div>
            </div>

            <div className='row mb-3'>
                <div className="col-sm-6 mt-2">
                    <input type="text" className="form-control"
                        placeholder='Votre adresse email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="col-sm-6 mt-2">
                    <input type="text" className="form-control"
                        onChange={(e) => setNumTel(e.target.value)}
                        placeholder="Votre numéro de téléphone" />
                </div>
            </div>

            <div className='row mb-3'>
                <label>Votre date de naissance*</label>
                <div className="col-sm-6 mt-2">
                    <input type="date" className="form-control"
                        onChange={(e) => setDateNaissance(e.target.value)}
                    />
                </div>
                <div className="col-sm-6 mt-2">
                    <input type="text" className="form-control"
                        onChange={(e) => setCommune(e.target.value)}
                        placeholder="Votre commune*" />
                </div>
            </div>

            <div className='row mb-3'>
                <div className="col-sm-6">
                    <input type="text" className="form-control"
                        onChange={(e) => setOccupation(e.target.value)}
                        placeholder="Votre occupation*" />
                </div>
                <div className="col-sm-6">
                    <select onChange={(e) => setCategorie(e.target.value)} className='form-control'>
                        <option value="">Veuillez choisir une catégorie...</option>
                        <option value="Musique">Musique</option>
                        <option value="Danse">Danse</option>
                    </select>
                </div>
            </div>

            <label>Télécharger une vidéo à nous envoyer</label>
            <div className='row mt-2'>
                <div className="col-sm-12">
                    <input
                        type="file"
                        className="form-control"
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className='row mt-3'>
                {
                    video &&
                    <video width="100%" height="100%" src={video} autoPlay={false} controls id="myVideo"></video>
                }
            </div>
        </div>
    )
}

export default FormJeuneTalent