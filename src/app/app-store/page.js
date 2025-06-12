import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie';
import CTASection from './ctabanner';
import ContactForm from './ctaform';
import AppSection from './home'
import ServicesGrid from './services'
import AppServices from './empower'
import DevelopmentTimeline from './timeline'
import TechnologyToolbox from './toolbox';
import InsightSection from '../graphics-services/insight'
import Footer from '../(mainpage)/footer';

const page = () => {
  return (
    <div>
       <Navbar/>
    <CookieConsent/>
    <AppSection/>
    <ServicesGrid/>
    <AppServices/>
    <CTASection/>
    <DevelopmentTimeline/>
    <TechnologyToolbox/>
    <InsightSection/>
    <ContactForm/>
    <Footer/>
    </div>
  )
}

export default page
