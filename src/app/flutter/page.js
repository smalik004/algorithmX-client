import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import FlutterSection from './home';
import AppGrid from '../android-app/multiface';
import FlutterServicesGrid from './fdevelopment'
import TechGrid from '../android-app/technologies';
import FlutterDevelopmentTimeline from './fdynaictimeline';
import IndustriesGrid from '../android-app/industries';
import InsightSection from '../graphics/insight'
import Footer from '../(mainpage)/footer';

const page = () => {
  return (
    <div>
       <Navbar/>
    <CookieConsent/>
    <FlutterSection/>
    <AppGrid/>
    <FlutterServicesGrid/>
    <TechGrid/>
    <FlutterDevelopmentTimeline/>
    <IndustriesGrid/>
    <InsightSection/>
    <Footer/>
    </div>
  )
}

export default page
