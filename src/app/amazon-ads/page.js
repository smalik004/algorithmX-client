import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import AmazonAds from './home'
import AmazonBoostAds from './drive'
import ServicesAccordion from './services'
import ResponsiveExperience from '../google-ads/experience'
import TechnologyToolbox from './toolbox'
import AmazonServices from './benefits'
import InsightSection from '../graphics/insight'
import Footer from '../(mainpage)/footer'


const page = () => {
  return (
    <div>
         <Navbar/>
    <CookieConsent/>
        <AmazonAds/>
        <AmazonBoostAds/>
        <ServicesAccordion/>
        <ResponsiveExperience/>
        <TechnologyToolbox/>
        <AmazonServices/>
        <InsightSection/>
        <Footer/>

    </div>
  )
}

export default page
