import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaCloudUploadAlt } from 'react-icons/fa';
import Leftbar from '../../components/leftbar/Leftbar';
import Navbar from '../../components/navbar/Navbar';
import "./Cagnottes.css";
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/loader/Loader';
import { baseUrlImage } from '../../bases/basesUrl';
import { newCagnotte, updateCagnotte } from '../../features/Cagnotte';
import Select from 'react-dropdown-select'

const AddCagnotte = () => {

    const [title, setTitle] = useState('');
    const [montant, setMontant] = useState('');
    const [lien, setLien] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [categorie, setCategorie] = useState('');
    const [file, setFile] = useState('');

    const [date1, setDate1] = useState('');
    const [date2, setDate2] = useState('');
    const [devise, setDevise] = useState('');

    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.cagnottes.loading);

    const location = useLocation();
    const { state } = location;

    const categories = useSelector(state => state.categories);

    const devises = [
        { id: 1, nom: "Dollar" },
        { id: 2, nom: "Euro" },
        { id: 3, nom: "FC" }
    ]

    const handleImage = (e) => {
        setImage(e.target.files[0]);
        setFile(URL.createObjectURL(e.target.files[0]))
    };

    useEffect(() => {
        if (state) {
            setTitle(state && state.data && state.data.title);
            setImage(state && state.data && state.data.url);
            setDescription(state && state.data && state.data.description);
            setLien(state && state.data && state.data.link);
            setMontant(state && state.data && state.data.montant);
            setDate1(state && state.data && state.data.dateDebut);
            setDate2(state && state.data && state.data.dateFin);
            setCategorie(state && state.data && state.data.categorie && state.data.categorie.id);
        }
    }, [state]);

    const addInfluenceur = (e) => {

        let findLink = lien.split("watch?v=");
        let replaceLink = findLink.join("embed/");

        let formData = new FormData();
        formData.append('title', title);
        formData.append('montant', montant);
        formData.append('link', replaceLink);
        formData.append('image', image);
        formData.append('categorieId', categorie);
        formData.append('description', description);
        formData.append('dateDebut', date1);
        formData.append('dateFin', date2);
        formData.append('devise', devise && devise.map(val => {
            return val.nom
        }));

        dispatch(newCagnotte(formData));
    };

    const updateInfluenceurHandle = (e) => {

        let findLink = lien.split("watch?v=");
        let replaceLink = findLink.join("embed/");

        let formData = new FormData();
        formData.append('title', title);
        formData.append('montant', montant);
        formData.append('link', replaceLink);
        formData.append('image', image);
        formData.append('categorieId', categorie);
        formData.append('description', description);
        formData.append('dateDebut', date1);
        formData.append('dateFin', date2);
        formData.append('devise', devise && devise.map(val => {
            return val.nom
        }));

        let data = {}
        data.form = formData;
        data.id = state && state.data && state.data.id;

        dispatch(updateCagnotte(data));
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
                                    <Link to="/admin/cagnottes"
                                        style={{
                                            fontSize: "16px", color: "#009c4e", alignItems:"center",
                                            display: "flex", alignItems: "center", gap: "5px",
                                        }}
                                    >
                                        <FaArrowLeft /> Productions
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

                            <div className='row'>
                                <div className='col-sm-8'>
                                    <div className='col-sm-12'>
                                        <div className="form-group mb-3">
                                            <label htmlFor="nom">Entrer un titre</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="nom"
                                                placeholder="Entrer un nom"
                                                value={title}
                                                onChange={(e) => setTitle(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-sm-6'>
                                            <div className="form-group mb-3">
                                                <label htmlFor="postnom">Montant à atteindre</label>
                                                <input
                                                    type="number"
                                                    placeholder='Montant'
                                                    className="form-control"
                                                    id="montant"
                                                    value={montant}
                                                    onChange={(e) => setMontant(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className='col-sm-6'>
                                            <div className="form-group mb-3">
                                                <label htmlFor="postnom">Choisir une devise</label>
                                                <Select
                                                    name='select'
                                                    options={devises}
                                                    labelField="nom"
                                                    valueField="id"
                                                    multi
                                                    className='form-control'
                                                    searchable={true}
                                                    dropdownPosition='bottom'
                                                    onChange={(value => setDevise(value))}
                                                >
                                                </Select>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='row'>
                                        <div className='col-sm-6'>
                                            <div className="form-group mb-3">
                                                <label htmlFor="pseudo">Un lien</label>
                                                <input
                                                    type="text"
                                                    placeholder='Url'
                                                    className="form-control"
                                                    id="url"
                                                    value={lien}
                                                    onChange={(e) => setLien(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className='col-sm-6'>
                                            <div className="form-group mb-3">
                                                <label htmlFor="photod">Choisir une photo</label>
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    id="photo"
                                                    onChange={handleImage}
                                                    style={{ width: "100%" }}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-sm-6'>
                                            <div className="form-group mb-3">
                                                <label htmlFor="pseudo">Choisir la date du lancement</label>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    id="date"
                                                    value={date1}
                                                    onChange={(e) => setDate1(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className='col-sm-6'>
                                            <div className="form-group mb-3">
                                                <label htmlFor="photod">Choisir la date de fermeture</label>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    value={date2}
                                                    id="date1"
                                                    onChange={(e) => setDate2(e.target.value)}
                                                    style={{ width: "100%" }}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label htmlFor="desc">Description</label>
                                        <textarea
                                            className="form-control"
                                            id="desc"
                                            placeholder='Description'
                                            onChange={(e) => setDescription(e.target.value)}
                                            value={description}
                                            rows="3">
                                        </textarea>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="exampleFormControlTextarea1">Choisir une catégorie</label>
                                        <select
                                            className="form-control"
                                            id="exampleFormControlTextarea1"
                                            onChange={(e) => setCategorie(e.target.value)}
                                        >
                                            <option value="" key="">--Choisir une catégorie--</option>
                                            {
                                                categories && categories.isSuccess ?
                                                    categories.value && categories.value.map((val, i) => {
                                                        return <option value={val.id} key={i} selected={
                                                            state ? categorie === val.id ? true : false : false
                                                        }>
                                                            {val.nom}
                                                        </option>
                                                    })
                                                    : "Aucune catégorie trouvée."
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className='col-sm-4'>
                                    <div className={file ? "col-sm-12 imageCard" : image ? "col-sm-12 imageCard" : "col-sm-12"}>
                                        <h5>Image</h5>
                                        <div className='card' style={{ border: image ? "1px solid #ddd" : "0px solid #ddd" }}>
                                            {
                                                file ? <img src={file} alt="" className='img-thumbnail' /> :
                                                    image ?
                                                        <img src={image ? baseUrlImage + "/" + image : ""}
                                                            className='img-thumbnail' alt="catégorie" />
                                                        : <div className='noneImage'>
                                                            <FaCloudUploadAlt size={100} />
                                                            <label htmlFor="photo"> Veuillez choisir une image</label>
                                                        </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button
                                className='btn btn-primary'
                                onClick={!state ? addInfluenceur : updateInfluenceurHandle}
                                disabled={title && description && montant && devise && date1 && date2 && categorie ? false : true}
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

export default AddCagnotte