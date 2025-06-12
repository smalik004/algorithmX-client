import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import FacebookAds from './home'
import BoostAds from './boost'
import ServicesAccordion from './services'
import ResponsiveExperience from '../google-ads/experience'
import TechnologyToolbox from './toolbox'
import FacebookServices from './benefits'
import InsightSection from '../graphics-services/insight'
import Footer from '../(mainpage)/footer'
import CTASectionBanner from '../ads-audit/ctabanner2'
import ContactForm from './ctaform'

const page = () => {
  return (
    <div>
         <Navbar/>
    <CookieConsent/>
      <FacebookAds/>
      <BoostAds/>
      <ServicesAccordion/>
      <CTASectionBanner/>
      <ResponsiveExperience/>
      <TechnologyToolbox/>
      <FacebookServices/>
      <InsightSection/>
      {/* <ContactForm/> */}
      <Footer/>
    </div>
  )
}

export default page
