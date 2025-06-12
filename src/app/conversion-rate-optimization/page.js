import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie';
import CTASectionBanner from './ctabanner2';
import ContactForm from './ctaform';
import CROSection from './home'
import CROServices from './croservices'
import FeaturesSection from './box'
import CROStrategies from './solution'
import PRProcessVisualization from './prprocess'
import CROTechnologyToolbox from './crotoolbox'
import InsightSection from '../graphics-services/insight'
import Footer from '../(mainpage)/footer';

const page = () => {
  return (
    <div>
       <Navbar/>
    <CookieConsent/>
    <CROSection/>
    <CROServices/>
    <FeaturesSection/>
    <CTASectionBanner/>
    <CROStrategies/>
    <PRProcessVisualization/>
    <CROTechnologyToolbox/>
    <InsightSection/>
    <ContactForm/>
    <Footer/>
    </div>
  )
}

export default page
