import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import LinkedinAds from './home'
import LinkedinBoostAds from './elevate'
import ServicesAccordion from './services'
import ResponsiveExperience from '../google-ads/experience'
import TechnologyToolbox from './toolbox'
import LinkedinServices from './benefits'
import InsightSection from '../graphics/insight'
import Footer from '../(mainpage)/footer'

const page = () => {
  return (
    <div>
       <Navbar/>
    <CookieConsent/>
      <LinkedinAds/>
      <LinkedinBoostAds/>
      <ServicesAccordion/>
      <ResponsiveExperience/>
      <TechnologyToolbox/>
      <LinkedinServices/>
      <InsightSection/>
      <Footer/>
    </div>
  )
}

export default page
