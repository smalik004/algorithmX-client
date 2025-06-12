import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import TiktokAds from './home'
import TiktokBoostAds from './capture'
import ServicesAccordion from './services'
import ResponsiveExperience from '../google-ads/experience'
import TechnologyToolbox from './toolbox'
import TiktokServices from './benefits'
import InsightSection from '../graphics-services/insight'
import Footer from '../(mainpage)/footer'
import CTASection from './ctabanner'
import ContactForm from './ctaform'

const page = () => {
  return (
    <div>
     <Navbar/>
    <CookieConsent/>
    <TiktokAds/>
    <TiktokBoostAds/>
    <ServicesAccordion/>
    <CTASection/>
    <ResponsiveExperience/>
    <TechnologyToolbox/>
    <TiktokServices/>
    <InsightSection/>
    {/* <ContactForm/> */}
    <Footer/>
    </div>
  )
}

export default page
