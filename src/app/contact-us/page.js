import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import ContactPage from './home'
import SupportSection from './contact'
import Footer from '../(mainpage)/footer'

const page = () => {
  return (
    <div>
         <Navbar/>
    <CookieConsent/>
      <ContactPage/>
      <SupportSection/>
      <Footer/>
    </div>
  )
}

export default page
