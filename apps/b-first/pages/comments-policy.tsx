import React from 'react'
import Header from '../components/Header/Header'
import MobileMenu from '../components/MobileMenu/MobileMenu'
import BackToTop from '../components/BackToTop/BackToTop'
import Footer from '../components/Footer/Footer'
import CommetsPolicy from '../components/CommetsPolicy/CommetsPolicy'

function comments() {
  return (
    <>
      <Header/>
      <MobileMenu/>
       <CommetsPolicy/>
      <BackToTop/>
      <Footer />
    </>
  )
}

export default comments