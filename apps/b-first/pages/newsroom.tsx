import React from 'react'
import Header from '../components/Header/Header'
import MobileMenu from '../components/MobileMenu/MobileMenu'
import BackToTop from '../components/BackToTop/BackToTop'
import Footer from '../components/Footer/Footer'
import Newsroom from '../components/Newsroom/Newsroom'

function newsroom() {
  return (
    <>
      <Header />
      <MobileMenu />
      <Newsroom/>
      <BackToTop />
      <Footer/>
    </>
  )
}

export default newsroom