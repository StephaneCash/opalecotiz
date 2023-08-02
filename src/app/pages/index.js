import React from 'react'
import Header from './header/Header'
import About from './about/About'
import Why from './why/Why'
import Footer from './footer/Footer'
import Contact from './contacts/Contact'
import Services from './services/Services'

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Why />
      <div id='services'>
        <Services />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default Home