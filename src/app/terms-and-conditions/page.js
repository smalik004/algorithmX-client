import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import TermsSection from './home'
import Terms from './content'
import Footer from '../(mainpage)/footer'
const page = () => {
  return (
    <div>
     <Navbar/>
    <CookieConsent/>
    <TermsSection/>
    <Terms/>
    <Footer/>
    </div>
  )
}

export default page
