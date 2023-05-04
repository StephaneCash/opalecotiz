import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaCloudUploadAlt } from 'react-icons/fa';
import Leftbar from '../../components/leftbar/Leftbar';
import Navbar from '../../components/navbar/Navbar';
import "./Cagnottes.css";
import { Link, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/loader/Loader';
import { baseUrlImage } from '../../bases/basesUrl';
import { newCagnotte, updateCagnotte } from '../../features/Cagnotte';

const AddImages = () => {
;
    const [file1, setFile1] = useState('');
    const [file2, setFile2] = useState('');
    const [file3, setFile3] = useState('');
    const [file4, setFile4] = useState('');

    const [image, setImage] = useState('');

    const isLoading = useSelector(state => state.cagnottes);


    const location = useLocation();
    const { state } = location;


    const params = useParams();

    const handleImage1 = (e) => {
        setImage(e.target.files[0]);
        setFile1(URL.createObjectURL(e.target.files[0]))
    };

    const handleImage2 = (e) => {
        setImage(e.target.files[0]);
        setFile2(URL.createObjectURL(e.target.files[0]))
    };

    const handleImage3 = (e) => {
        setImage(e.target.files[0]);
        setFile3(URL.createObjectURL(e.target.files[0]))
    };

    const handleImage4 = (e) => {
        setImage(e.target.files[0]);
        setFile4(URL.createObjectURL(e.target.files[0]))
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
                                <Link to="/admin/cagnottes"
                                    style={{
                                        fontSize: "16px", color: "#1976d2",
                                        display: "flex", alignItems: "center", gap: "5px",
                                    }}
                                >
                                    <FaArrowLeft /> Productions
                                </Link>
                                <span style={{ fontSize: "15px", color: "#1976d2", }}>/</span>
                                <span style={{ fontSize: "17px" }}>
                                    {
                                        state ? `Modification de ${state && state.data && state.data.title}` : "Ajout images"
                                    }
                                </span>
                            </h4>
                        </div>
                    </div>

                    <div className='col-sm-12 tableCategorie'>

                        <div className='row'>
                            <div className='col-sm-6'>
                                <div className='row'>
                                    <div className='col-sm-6'>
                                        <div className="form-group mb-3">
                                            <label htmlFor="photod">Choisir une photo(1)</label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                id="photo"
                                                onChange={handleImage1}
                                                style={{ width: "100%" }}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-sm-6'>
                                        <div className="form-group mb-3">
                                            <label htmlFor="photod">Choisir une photo(2)</label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                id="photo"
                                                onChange={handleImage2}
                                                style={{ width: "100%" }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-sm-6'>
                                        <div className="form-group mb-3">
                                            <label htmlFor="photod">Choisir une photo(3)</label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                id="photo"
                                                onChange={handleImage3}
                                                style={{ width: "100%" }}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-sm-6'>
                                        <div className="form-group mb-3">
                                            <label htmlFor="photod">Choisir une photo(4)</label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                id="photo"
                                                onChange={handleImage4}
                                                style={{ width: "100%" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-6'>
                                <div className='card imagesCard'>
                                    <div className='card-body'>
                                        <img src={file1} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            className='btn btn-primary'
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

export default AddImages