import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import GoogleAds from './home'
import Targeted from './targeted'
import ServicesAccordion from './services'
import ResponsiveExperience from './experience'
import TechnologyToolbox from './toolbox'
import GoogleServices from './benefits'
import InsightSection from '../graphics-services/insight'
import Footer from '../(mainpage)/footer'
import CTASectionBanner from '../ads-audit/ctabanner2'
import CTASection from './ctabanner'
import ContactForm from './ctaform'

const page = () => {
  return (
    <div>
         <Navbar/>
    <CookieConsent/>
    <GoogleAds/>
    <Targeted/>
    <ServicesAccordion/>
    <CTASection/>
    <ResponsiveExperience/>
    <TechnologyToolbox/>
    <GoogleServices/>
    <InsightSection/>
    <ContactForm/>
    <Footer/>

    </div>
  )
}

export default page
