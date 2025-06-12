import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import TwitterAds from './home'
import TwitterBoostAds from './amplify'
import ServicesAccordion from './services'
import ResponsiveExperience from '../google-ads/experience'
import TechnologyToolbox from './toolbox'
import TwitterServices from './benefits'
import InsightSection from '../graphics-services/insight'
import Footer from '../(mainpage)/footer'
import CTASection from './ctabanner'
import ContactForm from './ctaform'


const page = () => {
  return (
    <div>
     <Navbar/>
    <CookieConsent/>
    <TwitterAds/>
    <TwitterBoostAds/>
    <ServicesAccordion/>
    <CTASection/>
    <ResponsiveExperience/>
    <TechnologyToolbox/>
    <TwitterServices/>
    <InsightSection/>
    {/* <ContactForm/> */}
    <Footer/>
    </div>
  )
}

export default page
