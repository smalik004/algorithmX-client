import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import SEOSection from './home'
import SeoServices from './services'
import SEOServicesSection from './offer'
import UnlockSuccess from './unlock'
import ResponsiveHero from '../graphics/experience'
import ServicesGrid from './benefits'
import SEOTechnologyToolbox from './seotoolbox'
import InsightSection from '../graphics/insight'
import Footer from '../(mainpage)/footer';

const page = () => {
  return (
    <div>
       <Navbar/>
    <CookieConsent/>
      <SEOSection/>
      <SeoServices/>
      <SEOServicesSection/>
      <UnlockSuccess/>
      <ResponsiveHero/>
      <ServicesGrid/>
      <SEOTechnologyToolbox/>
      <InsightSection/>
      <Footer/>
    </div>
  )
}

export default page
