import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import PPCContentSection from './home'
import PPCServices from './services'
import PPCServicesSection from './offer'
import UnlockSuccess from './unlock'
import ResponsiveHero from '../graphics-services/experience'
import PPCServicesGrid from './leverage'
import PPCTechnologyToolbox from './ppctoolbox'
import InsightSection from '../graphics-services/insight'
import Footer from '../(mainpage)/footer';
import CTASection from './ctabanner'
import CTASectionBanner from './ctabanner2'
import ContactForm from './ctaform'

const page = () => {
  return (
    <div>
       <Navbar/>
    <CookieConsent/>
        <PPCContentSection/>
        <PPCServices/>
        <PPCServicesSection/>
        <CTASection/>
        <UnlockSuccess/>
        <ResponsiveHero/>
        <CTASectionBanner/>
        <PPCServicesGrid/>
        <PPCTechnologyToolbox/>
        <InsightSection/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default page
