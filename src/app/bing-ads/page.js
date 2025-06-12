import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import CTASection from './ctabanner'
import ContactForm from './ctaform'
import BingAds from './home'
import Targeted from './transform'
import ServicesAccordion from './services'
import ResponsiveExperience from '../google-ads/experience'
import TechnologyToolbox from './toolbox'
import BingServices from './benefits'
import InsightSection from '../graphics-services/insight'
import Footer from '../(mainpage)/footer'

const page = () => {
  return (
    <div>
     <Navbar/>
    <CookieConsent/>
    <BingAds/>
    <Targeted/>
    <ServicesAccordion/>
    <CTASection/>
    <ResponsiveExperience/>
    <TechnologyToolbox/>
    <BingServices/>
    <InsightSection/>
    {/* <ContactForm/> */}
    <Footer/>
    </div>
  )
}

export default page
