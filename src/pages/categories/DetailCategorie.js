import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { baseUrlImage } from '../../bases/basesUrl';
import Leftbar from '../../components/leftbar/Leftbar';
import Navbar from '../../components/navbar/Navbar';
import "./Categorie.css"
import DetailListCatgorie from './DetailListCatgorie';

const DetailCategorie = () => {

    const [data, setDtata] = useState('');

    const location = useLocation();
    const { state } = location;

    useEffect(() => {
        if (state) {
            setDtata(state.data)
        }
    }, [state]);

    console.log(data)

    return (
        <>
            <Navbar />
            <div className='col-sm-12 categories'>
                <div className='col-sm-2'>
                    <Leftbar />
                </div>
                <div className='col-sm-10 main'>
                    <div className='alert alert-success alertInputSearch'>
                        <Link to="/admin/categories">
                            <div className='retour'>
                                <FaArrowLeft />
                                <span>Retour</span>
                            </div>
                        </Link>
                    </div>

                    <div className='col-sm-12 tableCategorie'>
                        <DetailListCatgorie
                            data={data}
                        />
                    </div>

                    <div className='col-sm-12 mt-3 tableCategorie'>
                        <div className='alert alert-primary'>
                            <h5>Productions</h5>
                        </div>

                        {
                            data && data.cagnottes && data.cagnottes.length > 0 ? <div className='grille'>
                                {
                                    data.cagnottes.map(val => {
                                        return <div className='card'>
                                            <img src={baseUrlImage + '/' + val.url} alt={val.nom} />
                                            <div className='card-body'>
                                                <p>{val.nom} {val.prenom} {val.title}</p>
                                                <p>
                                                    <Link
                                                        to={{ pathname: "/production/detail" }}
                                                        state={{ data: val }}
                                                        className='btn btn-outline'
                                                        style={{ color: "#555", border: "1px solid #ddd" }}
                                                    >
                                                        Voir plus
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    })
                                }
                            </div> : <div className='text-center'>
                                Aucun influenceur trouvé.
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailCategorie