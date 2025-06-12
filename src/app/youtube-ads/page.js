import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import YoutubeAds from './home'
import YoutubeBoostAds from './boost'
import ServicesAccordion from './services'
import ResponsiveExperience from '../google-ads/experience'
import TechnologyToolbox from './toolbox'
import YoutubeServices from './benefits'
import InsightSection from '../graphics-services/insight'
import Footer from '../(mainpage)/footer'
import CTASectionBanner from './ctabanner2'
import ContactForm from './ctaform'

const page = () => {
  return (
    <div>
     <Navbar/>
    <CookieConsent/>
    <YoutubeAds/>
    <YoutubeBoostAds/>
    <ServicesAccordion/>
    <CTASectionBanner/>
    <ResponsiveExperience/>
    <TechnologyToolbox/>
    <YoutubeServices/>
    <InsightSection/>
    {/* <ContactForm/> */}
    <Footer/>
    </div>
  )
}

export default page
