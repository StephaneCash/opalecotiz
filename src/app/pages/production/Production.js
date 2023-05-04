import React from 'react'
import "./Production.css"
import HeaderClient from '../cagnottes/HeaderClient'
import { Link, useLocation } from 'react-router-dom'
import { baseUrlImage } from '../../../bases/basesUrl'
import { FaCheckCircle } from 'react-icons/fa'
import { dateParserFunction } from '../../../utils'

const Production = () => {

  const { state } = useLocation();

  return (
    <div className='production'>
      <HeaderClient />
      <div className='mainProd'>
        <h1>{state && state.val && state.val.title}</h1>
        <div className='row1'>
          <div className='col-sm-4'>

            <div className='card' >
              <div className='image'>
                <div className='overPlay'></div>
                <div className='textMain '>
                  <span className='bgTitle'>{state && state.val && state.val.categorie && state.val.categorie.nom}</span> <br />
                  <span>Lancée {dateParserFunction(state && state.val && state.val.createdAt)}</span>
                </div>
                <img src={state && state.val && baseUrlImage + "/" + state.val.url} alt="" />
              </div>
              <div className='card-body'>
                <div className='overPlay'></div>
                <div className='showData'>
                  <span>6 000 $</span>
                  <span>Collectés sur <span>60 000 $</span></span>
                </div>
                <div className='lastDiv'>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "10%", background: "#009c4e" }} aria-valuenow="10"
                      aria-valuemin="0" aria-valuemax="100">10%</div>
                  </div>
                  <span>60% atteint avec 1200 participants</span>
                </div>

                <Link to={{
                  pathname: `/payement/${state && state.val && state.val.title}`
                }}
                  state={{ val: state && state.val }}
                >
                  <button>Je participe</button>
                </Link>
              </div>
            </div>

          </div>
          <div className='col-sm-8'>
            <div className='infosAlert'>
              <div className='mainText'>
                <FaCheckCircle />
                <div>
                  Participez en toute confiance
                  Cette cagnotte a été contrôlée et vérifiée par les équipes de Ligablo production.
                </div>
              </div>
            </div>
            <div className='description'>{state && state.val && state.val.description}</div>
            <div className='images'>
              
            </div>
            <div className='videos'></div>
            <div className='participants'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Production