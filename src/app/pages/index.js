import React from 'react'
import Header from './header/Header'
import About from './about/About'
import Why from './why/Why'
import Footer from './footer/Footer'
import Contact from './contacts/Contact'

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Why />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home