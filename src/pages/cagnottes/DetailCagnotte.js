import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import Leftbar from '../../components/leftbar/Leftbar';
import Navbar from '../../components/navbar/Navbar';
import DetailListCagnottes from './DetailListCagnottes';
import "./Cagnottes.css"

const DetailCagnotte = () => {

    const [data, setDtata] = useState('');

    const location = useLocation();
    const { state } = location;

    useEffect(() => {
        if (state) {
            setDtata(state.data)
        }
    }, [state]);

    return (
        <>
            <Navbar />
            <div className='mainApp'>
                <div className='contentMain'>
                    <div className='contentLeftBar'>
                        <Leftbar />
                    </div>
                    <div className='contentApp'>
                        <div className='alert alertInputSearch'>
                            <Link to="/admin/cagnottes">
                                <div className='retour'>
                                    <FaArrowLeft />
                                    <span>Retour</span>
                                </div>
                            </Link>
                        </div>

                        <div className='col-sm-12 tableCategorie'>
                            <DetailListCagnottes
                                data={data}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DetailCagnotte