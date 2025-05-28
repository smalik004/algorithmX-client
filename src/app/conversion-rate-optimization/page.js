import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie';
import CROSection from './home'
import CROServices from './croservices'
import FeaturesSection from './box'
import CROStrategies from './solution'
import PRProcessVisualization from './prprocess'
import CROTechnologyToolbox from './crotoolbox'
import InsightSection from '../graphics/insight'
import Footer from '../(mainpage)/footer';

const page = () => {
  return (
    <div>
       <Navbar/>
    <CookieConsent/>
    <CROSection/>
    <CROServices/>
    <FeaturesSection/>
    <CROStrategies/>
    <PRProcessVisualization/>
    <CROTechnologyToolbox/>
    <InsightSection/>
    <Footer/>
    </div>
  )
}

export default page
