import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import PrivacySection from './home'
import Introduction from './content'
import Footer from '../(mainpage)/footer'

const page = () => {
  return (
    <div>
     <Navbar/>
    <CookieConsent/>
    <PrivacySection/>
    <Introduction/>
    <Footer/>
    </div>
  )
}

export default page
