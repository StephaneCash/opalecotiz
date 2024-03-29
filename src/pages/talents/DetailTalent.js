import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import Leftbar from '../../components/leftbar/Leftbar';
import Navbar from '../../components/navbar/Navbar';
import { baseUrlImage } from '../../bases/basesUrl';

const DetailTalent = () => {

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
              <Link to="/admin/talents">
                <div className='retour'>
                  <FaArrowLeft />
                  <span>Retour</span>
                </div>
              </Link>
            </div>

            <div className='col-sm-12 tableCategorie'>
              <table className='table table-striped table-bordered'>
                <tbody>
                  <tr>
                    <td colSpan={"2px"} style={{ background: "#009c4e", color: "#fff", padding: "20px" }}>Détail {data && data.nom}</td>
                  </tr>

                  <tr>
                    <td>Nom</td>
                    <td>{data && data.nom}</td>
                  </tr>

                  <tr>
                    <td>Prénom</td>
                    <td>{data && data.prenom}</td>
                  </tr>

                  <tr>
                    <td>Date de naissance</td>
                    <td>{data && data.dateNaissance}</td>
                  </tr>

                  <tr>
                    <td>Numéro de téléphone</td>
                    <td>{data && data.numTel}</td>
                  </tr>

                  <tr>
                    <td>Adresse email</td>
                    <td>{data && data.email}</td>
                  </tr>

                  <tr>
                    <td>Commune</td>
                    <td>{data && data.commune}</td>
                  </tr>

                  <tr>
                    <td>Occupation</td>
                    <td>{data && data.occupation}</td>
                  </tr>

                  <tr>
                    <td>Catégorie</td>
                    <td>{data && data.categorie}</td>
                  </tr>
                </tbody>
              </table>

              <table className='table table-striped table-bordered'>
                <tbody>
                  <tr>
                    <td colSpan={"2px"} style={{ background: "#009c4e", color: "#fff", padding: "20px", marginTop: "10px" }}>Transaction</td>
                  </tr>

                  <tr>
                    <td>Type de paiement</td>
                    <td>{data && data.transactions && data.transactions.map(val => {
                      return val.typePaiement
                    })} </td>
                  </tr>

                  <tr>
                    <td>Mode de paiement</td>
                    <td>{data && data.transactions && data.transactions.map(val => {
                      return val.modePaiement
                    })} </td>
                  </tr>


                  <tr>
                    <td>Montant</td>
                    <td>{data && data.transactions && data.transactions.map(val => {
                      return val.montant
                    })} {
                        data && data.cagnotte && data.cagnotte.devise
                      }
                    </td>
                  </tr>
                </tbody>
              </table>

              <div style={{ border: "1px solid silver" }}>
                <video src={baseUrlImage + "/" + data.video} height={400} width={"100%"} controls></video>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default DetailTalent