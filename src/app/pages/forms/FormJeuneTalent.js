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
            <div className='row'>
                <div className="col-sm-6 mb-3">
                    <input type="text" className="form-control"
                        onChange={(e) => setNom(e.target.value)}
                        placeholder="Votre nom*" />
                </div>
                <div className="col-sm-6 mb-2">
                    <input type="text" className="form-control"
                        onChange={(e) => setPrenom(e.target.value)}
                        placeholder="Votre prénom*" />
                </div>
            </div>

            <div className='row'>
                <div className="col-sm-6 mt-2  mb-2">
                    <input type="text" className="form-control"
                        placeholder='Votre adresse email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="col-sm-6 mt-2">
                    <input type="text" className="form-control"
                        onChange={(e) => setNumTel(e.target.value)}
                        placeholder="Votre numéro de téléphone*" />
                </div>
            </div>

            <div className='row '>
                <label className='lableDate'>Votre date de naissance*</label>
                <div className="col-sm-6 mt-2 mb-2">
                    <input type="date" className="form-control"
                        onChange={(e) => setDateNaissance(e.target.value)}
                    />
                </div>
                <div className="col-sm-6 mt-2 mb-1">
                    <input type="text" className="form-control mb-3"
                        onChange={(e) => setCommune(e.target.value)}
                        placeholder="Votre commune*" />
                </div>
            </div>

            <div className='row'>
                <div className="col-sm-6  mb-3">
                    <input type="text" className="form-control"
                        onChange={(e) => setOccupation(e.target.value)}
                        placeholder="Votre occupation*" />
                </div>
                <div className="col-sm-6">
                    <select onChange={(e) => setCategorie(e.target.value)} className='form-control categorieJeune'>
                        <option value="">Veuillez choisir une catégorie*</option>
                        <option value="Chant">Chant</option>
                        <option value="Danse">Danse</option>
                        <option value="Autres">Autre</option>
                    </select>
                </div>
            </div>

            <label className='lableDate'>Télécharger une vidéo à nous envoyer (Max 2 minutes)</label>
            <div className='row mt-2' >
                <div className="col-sm-12">
                    <input
                        type="file"
                        className="form-control"
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className='row mt-3' style={{ height: video ? "300px" : 0 }}>
                {
                    video &&
                    <video width="100%" height="100%" src={video} autoPlay={false} controls id="myVideo"></video>
                }
            </div>
        </div>
    )
}

export default FormJeuneTalent