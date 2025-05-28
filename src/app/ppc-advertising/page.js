import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import PPCContentSection from './home'
import PPCServices from './services'
import PPCServicesSection from './offer'
import UnlockSuccess from './unlock'
import ResponsiveHero from '../graphics/experience'
import PPCServicesGrid from './leverage'
import PPCTechnologyToolbox from './ppctoolbox'
import InsightSection from '../graphics/insight'
import Footer from '../(mainpage)/footer';

const page = () => {
  return (
    <div>
       <Navbar/>
    <CookieConsent/>
        <PPCContentSection/>
        <PPCServices/>
        <PPCServicesSection/>
        <UnlockSuccess/>
        <ResponsiveHero/>
        <PPCServicesGrid/>
        <PPCTechnologyToolbox/>
        <InsightSection/>
        <Footer/>
    </div>
  )
}

export default page
