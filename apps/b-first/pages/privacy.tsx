import React from 'react'
import Header from '../components/Header/Header'
import MobileMenu from '../components/MobileMenu/MobileMenu'
import BackToTop from '../components/BackToTop/BackToTop'
import Footer from '../components/Footer/Footer'
import PrivacyPolicy from '../components/PrivacyPolicy/PrivacyPolicy'

function privacy() {
  return (
    <>
     <Header />
      <MobileMenu />
        <PrivacyPolicy/>
      <BackToTop/>
      <Footer/>
    </>
  )
}

export default privacy