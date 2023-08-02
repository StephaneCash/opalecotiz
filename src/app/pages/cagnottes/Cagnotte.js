import React, { useEffect, useState } from 'react'
import "./Cagnottes.css"
import { useSelector } from 'react-redux'
import Footer from "../footer/Footer"
import Main from './Main'
import HeaderClient from './HeaderClient'

const Cagnotte = () => {

  const listcategories = useSelector(state => state.categories.value);
  const listCagnottes = useSelector(state => state.cagnottes.value);

  const [valueSearch, setValueSearch] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className='mainCol'>
      <div className='cagnotte'>
        <HeaderClient />
        <Main
          listcategories={listcategories}
          listCagnottes={listCagnottes}
          valueSearch={valueSearch}
          setValueSearch={setValueSearch}
        />
        <Footer />
      </div>
    </div>
  )
}

export default Cagnotte