import React from 'react'
import "./Production.css"
import HeaderClient from '../cagnottes/HeaderClient'
import { Link, useLocation } from 'react-router-dom'
import { baseUrlImage } from '../../../bases/basesUrl'
import { FaCheckCircle } from 'react-icons/fa'
import { dateParserFunction } from '../../../utils'
import Footer from '../footer/Footer'
const Production = () => {

  const { state } = useLocation();
  let devise = state && state.val && state.val.devise && state.val.devise.split(',');

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
                  <span className='montant'>
                    2000 $
                  </span>
                  <span>Collectés sur {" "}
                    <span>
                      {state && state.val && state.val.montant && state.val.montant}
                      {
                        devise && devise.map((val, i) => {
                          if (i === 0) {
                            if (val === "Dollar") {
                              return " $"
                            } else if (val === "Euro") {
                              return " €"
                            } else if (val === "FC") {
                              return " FC"
                            }
                          }
                        })
                      }
                    </span>
                  </span>

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
              {
                state && state.val && state && state.val.images && state.val.images.map(val => {
                  return <div className='card'>
                    <img src={baseUrlImage + "/" + val.url} alt="" />
                  </div>
                })
              }
            </div>
            <div className='videos'>
              {
                state && state.val && state.val.link &&
                <div className='card'>
                  <iframe
                    width="auto"
                    height="300"
                    src={state && state.val && state.val.link}
                    target="_parent"
                    allow="accelerometer; autoplay; clipboard-write;
                        encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Vidéo"
                    name="inframe"
                  >
                  </iframe>
                </div>
              }

            </div>
            <div className='participants'></div>
          </div>
        </div>
      </div>
      <Footer />
    </div >
  )
}

export default Production