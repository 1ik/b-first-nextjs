import React from 'react'
import Header from '../components/Header/Header'
import MobileMenu from '../components/MobileMenu/MobileMenu'
import BackToTop from '../components/BackToTop/BackToTop'
import Footer from '../components/Footer/Footer'
import Media from '../components/Media/Media'


function media() {
  return (
    <>
     <Header/>
      <MobileMenu />
       <Media/>
      <BackToTop />
      <Footer />
    </>
  )
}

export default media