import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import Leftbar from '../../components/leftbar/Leftbar';
import Navbar from '../../components/navbar/Navbar';
import "./Cagnottes.css";
import { Link, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/loader/Loader';
import { newImage } from '../../features/Images';

const AddImages = () => {
    ;
    const [file1, setFile1] = useState('');
    const [file2, setFile2] = useState('');
    const [file3, setFile3] = useState('');
    const [file4, setFile4] = useState('');

    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');
    const [image3, setImage3] = useState('');
    const [image4, setImage4] = useState('');


    const isLoading = useSelector(state => state.images);

    const location = useLocation();
    const { state } = location;


    const params = useParams();

    const handleImage1 = (e) => {
        setImage1(e.target.files[0]);
        setFile1(URL.createObjectURL(e.target.files[0]))
    };

    const handleImage2 = (e) => {
        setImage2(e.target.files[0]);
        setFile2(URL.createObjectURL(e.target.files[0]))
    };

    const handleImage3 = (e) => {
        setImage3(e.target.files[0]);
        setFile3(URL.createObjectURL(e.target.files[0]))
    };

    const handleImage4 = (e) => {
        setImage4(e.target.files[0]);
        setFile4(URL.createObjectURL(e.target.files[0]))
    };

    let dispatch = useDispatch()

    const submit = () => {

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Content-Disposition': 'form-data',
            }
        }

        const body = new FormData();
        body.append("image", image1)
        body.append("image", image2)
        body.append("image", image3)
        body.append("image", image4)
        body.append("cagnotteId", params.id)

        let form = {};
        form.data = body;
        form.config = config;

        dispatch(newImage(form))
    }

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
                                <div className='col-sm-6 row cards'>
                                    <div className='col-sm-3'>
                                        <div className='card'>
                                            <div className='card-body'>
                                                <img src={file1} alt="Image1" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-sm-3'>
                                        <div className='card'>
                                            <div className='card-body'>
                                                <img src={file2} alt="Image2" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-sm-3'>
                                        <div className='card'>
                                            <div className='card-body'>
                                                <img src={file3} alt="Image3" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-sm-3'>
                                        <div className='card'>
                                            <div className='card-body'>
                                                <img src={file4} alt="Image4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button
                                className='btn btn-primary'
                                onClick={submit}
                            >
                                {
                                    isLoading && isLoading.loading ? <Loader /> : state ? "Modifier" : "Ajouter"
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddImages