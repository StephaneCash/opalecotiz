import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import Leftbar from '../../components/leftbar/Leftbar';
import Navbar from '../../components/navbar/Navbar';
import "./Categorie.css";
import { Link, useLocation } from 'react-router-dom';
import { newCategorie, updateCategorie } from "../../features/Categories";
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/loader/Loader';

const AddCategorie = () => {

    const [nom, setNom] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.categories);

    const location = useLocation();
    const { state } = location;

    useEffect(() => {
        if (state) {
            setNom(state && state.data && state.data.nom);
            setDescription(state && state.data && state.data.description);
        }
    }, [state]);

    const addCategorie = (e) => {
        let formData = new FormData();
        formData.append('nom', nom);
        formData.append('description', description);

        dispatch(newCategorie(formData));
    };

    const updCategorie = (e) => {
        let formData = new FormData();
        formData.append('nom', nom);
        formData.append('description', description);
        formData.append('idCategorie', state && state.data && state.data.id);

        let data = {}
        data.form = formData;
        data.id = state && state.data && state.data.id;

        dispatch(updateCategorie(data));
    };

    return (
        <>
            <Navbar />
            <div className='col-sm-12 categories'>
                <div className='col-sm-2'>
                    <Leftbar />
                </div>
                <div className='col-sm-10 main'>
                    <div className='col-sm-12'>
                        <div className='alert alert-primary' style={{ border: "1px solid #ddd", background: "#fff" }}>
                            <h4 style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "5px",
                                color: "#1976d2"
                            }}>
                                <Link to="/categories"
                                    style={{
                                        fontSize: "16px", color: "#1976d2",
                                        display: "flex", alignItems: "center", gap: "5px",
                                    }}
                                >
                                    <FaArrowLeft /> Catégories
                                </Link>
                                <span style={{ fontSize: "15px", color: "#1976d2", }}>/</span>
                                <span style={{ fontSize: "17px" }}>
                                    {
                                        state ? `Modification de ${state && state.data && state.data.nom}` : "Ajout"
                                    }
                                </span>
                            </h4>
                        </div>
                    </div>

                    <div className='col-sm-6 tableCategorie'>
                        <div className='row'>
                            <div className='col-sm-12'>
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleFormControlInput1">Entrer un nom</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Entrer un nom"
                                        value={nom}
                                        onChange={(e) => setNom(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className='col-sm-12'>
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleFormControlTextarea1">Description</label>
                                    <textarea
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        onChange={(e) => setDescription(e.target.value)}
                                        value={description}
                                        rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                        <button
                            className='btn btn-primary'
                            onClick={!state ? addCategorie : updCategorie}
                            disabled={nom && description ? false : true}
                        >
                            {
                                isLoading && isLoading.loading ? <Loader /> : state ? "Modifier" : "Ajouter"
                            }

                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddCategorie