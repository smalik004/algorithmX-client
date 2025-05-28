import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import InstagramAds from './home'
import InstaBoostAds from './boost'
import ServicesAccordion from './services'
import ResponsiveExperience from '../google-ads/experience'
import TechnologyToolbox from './toolbox'
import InstagramServices from './benefits'
import InsightSection from '../graphics/insight'
import Footer from '../(mainpage)/footer'


const page = () => {
  return (
    <div>
     <Navbar/>
    <CookieConsent/>
    <InstagramAds/>
    <InstaBoostAds/>
    <ServicesAccordion/>
    <ResponsiveExperience/>
    <TechnologyToolbox/>
    <InstagramServices/>
    <InsightSection/>
    <Footer/>
    </div>
  )
}

export default page
