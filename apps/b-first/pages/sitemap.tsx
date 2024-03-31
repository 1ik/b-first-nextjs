import React from 'react'
import Header from '../components/Header/Header'
import MobileMenu from '../components/MobileMenu/MobileMenu'
import BackToTop from '../components/BackToTop/BackToTop'
import Footer from '../components/Footer/Footer'
import HtmlSitemap from '../components/Sitemap/HtmlSitemap'

function sitemap() {
  return (
    <>
     <>
      <Header />
      <MobileMenu />
      <HtmlSitemap/>
      <BackToTop />
      <Footer />
    </>
    </>
  )
}

export default sitemap