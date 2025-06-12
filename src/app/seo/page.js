import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import SEOSection from './home'
import SeoServices from './services'
import SEOServicesSection from './offer'
import UnlockSuccess from './unlock'
import ResponsiveHero from '../graphics-services/experience'
import ServicesGrid from './benefits'
import SEOTechnologyToolbox from './seotoolbox'
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
      <SEOSection/>
      <SeoServices/>
      <SEOServicesSection/>
      <CTASection/>
      <UnlockSuccess/>
      <ResponsiveHero/>
      <CTASectionBanner/>
      <ServicesGrid/>
      <SEOTechnologyToolbox/>
      <InsightSection/>
      {/* <ContactForm/> */}
      <Footer/>
    </div>
  )
}

export default page
