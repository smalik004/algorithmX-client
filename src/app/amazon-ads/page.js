import React from 'react'
import Navbar from '../asample/naviagtion'
import CTASection from './ctabanner'
import CTASectionBanner from './ctabanner2'
import ContactForm from './ctaform'
import CookieConsent from '../cookies/cookie'
import AmazonAds from './home'
import AmazonBoostAds from './drive'
import ServicesAccordion from './services'
import ResponsiveExperience from '../google-ads/experience'
import TechnologyToolbox from './toolbox'
import AmazonServices from './benefits'
import InsightSection from '../graphics-services/insight'
import Footer from '../(mainpage)/footer'


const page = () => {
  return (
    <div>
         <Navbar/>
    <CookieConsent/>
        <AmazonAds/>
        <AmazonBoostAds/>
        <CTASection/>
        <ServicesAccordion/>
        <ResponsiveExperience/>
        <CTASectionBanner/>
        <TechnologyToolbox/>
        <AmazonServices/>
        <InsightSection/>
        {/* <ContactForm/> */}
        <Footer/>

    </div>
  )
}

export default page
