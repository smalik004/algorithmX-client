import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import LinkedinAds from './home'
import LinkedinBoostAds from './elevate'
import ServicesAccordion from './services'
import ResponsiveExperience from '../google-ads/experience'
import TechnologyToolbox from './toolbox'
import LinkedinServices from './benefits'
import InsightSection from '../graphics-services/insight'
import Footer from '../(mainpage)/footer'
import CTASection from './ctabanner'
import ContactForm from './ctaform'

const page = () => {
  return (
    <div>
       <Navbar/>
    <CookieConsent/>
      <LinkedinAds/>
      <LinkedinBoostAds/>
      <ServicesAccordion/>
      <CTASection/>
      <ResponsiveExperience/>
      <TechnologyToolbox/>
      <LinkedinServices/>
      <InsightSection/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default page
