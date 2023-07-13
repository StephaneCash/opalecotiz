import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import Leftbar from '../../components/leftbar/Leftbar';
import Navbar from '../../components/navbar/Navbar';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/loader/Loader';
import { baseUrlImage } from '../../bases/basesUrl';
import { newTalent, updateTalent } from '../../features/Talents';

const AddTalent = () => {

  const [email, setEmail] = useState("");
  const [prenom, setPrenom,] = useState("");

  const [numTel, setNumTel] = useState("");
  const [dateNaissance, setDateNaissance] = useState("");
  const [commune, setCommune] = useState("");
  const [occupation, setOccupation] = useState("");
  const [file, setFile] = useState("");
  const [categorie, setCategorie] = useState("");
  const [nom, setNom] = useState("");
  const [duration, setDuration] = useState(0);
  const [video, setVideo] = useState('');
  const [montant, setMontant] = useState(0);

  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.talents.loading);

  const location = useLocation();
  const { state } = location;

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    setVideo(URL.createObjectURL(e.target.files[0]))
  }

  useEffect(() => {
    if (state) {
      setNom(state && state.data && state.data.nom);
      setVideo(state && state.data && state.data.url);
      setOccupation(state && state.data && state.data.occupation);
      setPrenom(state && state.data && state.data.prenom);
      setCommune(state && state.data && state.data.commune);
      setDateNaissance(state && state.data && state.data.dateNaissance);
      setNumTel(state && state.data && state.data.numTel);
      setCategorie(state && state.data && state.data.categorie);
      setMontant(state && state.data && setMontant.data.montant)
    }
  }, [state]);

  const addTalent = (e) => {

    let formData = new FormData();
    formData.append('nom', nom);
    formData.append('montant', montant);
    formData.append('prenom', prenom);
    formData.append('video', file);
    formData.append('categorie', categorie);
    formData.append('occupation', occupation);
    formData.append('commune', commune);
    formData.append('dateNaissance', dateNaissance);
    formData.append('numTel', numTel);
    formData.append('dateNaissance', dateNaissance);
    formData.append('email', email);

    dispatch(newTalent(formData));
  };

  const updateTalentHandle = (e) => {

    let formData = new FormData();
    formData.append('nom', nom);
    formData.append('montant', montant);
    formData.append('prenom', prenom);
    formData.append('video', file);
    formData.append('categorie', categorie);
    formData.append('occupation', occupation);
    formData.append('commune', commune);
    formData.append('dateNaissance', dateNaissance);
    formData.append('numTel', numTel);
    formData.append('dateNaissance', dateNaissance);
    formData.append('email', email);

    let data = {}
    data.form = formData;
    data.id = state && state.data && state.data.id;

    dispatch(updateTalent(data));
  };


  return (
    <>
      <Navbar />
      <div className='mainApp'>
        <div className='contentMain'>
          <div className='contentLeftBar'>
            <Leftbar />
          </div>
          <div className='contentApp'>
            <div className='col-sm-12'>
              <div className='alert alertInputSearch' style={{ border: "1px solid #ddd", background: "#009c4e" }}>
                <h4 style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  color: "#009c4e"
                }}>
                  <Link to="/admin/talents"
                    style={{
                      fontSize: "16px", color: "#009c4e", alignItems: "center",
                      display: "flex", gap: "5px",
                    }}
                  >
                    <FaArrowLeft /> Talents
                  </Link>
                  <span style={{ fontSize: "15px", color: "#009c4e", }}>/</span>
                  <span style={{ fontSize: "17px" }}>
                    {
                      state ? `Modification de ${state && state.data && state.data.title}` : "Ajout"
                    }
                  </span>
                </h4>
              </div>
            </div>

            <div className='col-sm-12 tableCategorie'>

              <div className='formulaire'>
                <div className='row mb-3'>
                  <div className="col-sm-6">
                    <input type="text" className="form-control"
                      onChange={(e) => setNom(e.target.value)}
                      placeholder="Entrer un nom*" />
                  </div>
                  <div className="col-sm-6">
                    <input type="text" className="form-control"
                      onChange={(e) => setPrenom(e.target.value)}
                      placeholder="Entrer un prénom*" />
                  </div>
                </div>

                <div className='row mb-3'>
                  <div className="col-sm-6 mt-2">
                    <input type="text" className="form-control"
                      placeholder='Adresse email'
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="col-sm-6 mt-2">
                    <input type="text" className="form-control"
                      onChange={(e) => setNumTel(e.target.value)}
                      placeholder="Numéro de téléphone" />
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
                      placeholder="La commune*" />
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

              <button
                className='btn btn-primary'
                onClick={!state ? addTalent : updateTalentHandle}
                disabled={nom && prenom && montant && occupation && numTel && dateNaissance && categorie ? false : true}
              >
                {
                  isLoading && isLoading ? <Loader /> : state ? "Modifier" : "Ajouter"
                }
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddTalent