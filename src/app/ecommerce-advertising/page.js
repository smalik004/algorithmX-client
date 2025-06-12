import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import CTASectionBanner from './ctabanner2'
import ContactForm from './ctaform'
import EcommerceAds from './home'
import EcommerceBoostAds from './boost'
import ServicesAccordion from './services'
import ResponsiveExperience from '../google-ads/experience'
import TechnologyToolbox from './toolbox'
import EcommerceServices from './benefits'
import InsightSection from '../graphics-services/insight'
import Footer from '../(mainpage)/footer'
const page = () => {
  return (
    <div>
     <Navbar/>
    <CookieConsent/>
    <EcommerceAds/>
    <EcommerceBoostAds/>
    <ServicesAccordion/>
    <CTASectionBanner/>
    <ResponsiveExperience/>
    <TechnologyToolbox/>
    <EcommerceServices/>
    <InsightSection/>
    <ContactForm/>
    <Footer/>
    </div>
  )
}

export default page
