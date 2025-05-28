import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie';
import AppSection from './home'
import ServicesGrid from './services'
import AppServices from './empower'
import DevelopmentTimeline from './timeline'
import TechnologyToolbox from './toolbox';
import InsightSection from '../graphics/insight'
import Footer from '../(mainpage)/footer';

const page = () => {
  return (
    <div>
       <Navbar/>
    <CookieConsent/>
    <AppSection/>
    <ServicesGrid/>
    <AppServices/>
    <DevelopmentTimeline/>
    <TechnologyToolbox/>
    <InsightSection/>
    <Footer/>
    </div>
  )
}

export default page
