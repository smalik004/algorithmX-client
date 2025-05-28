import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import AIOptmmizationSection from './home'
import AiOptmizationServices from './solutions'
import StackCardAnimation from './process'
import AREPage from './choose'
import InsightSection from '../graphics/insight'
import Footer from '../(mainpage)/footer'

const page = () => {
  return (
    <div>
     <Navbar/>
    <CookieConsent/>
    <AIOptmmizationSection/>
    <AiOptmizationServices/>
    <StackCardAnimation/>
    <AREPage/>
    <InsightSection/>
    <Footer/>
    </div>
  )
}

export default page
