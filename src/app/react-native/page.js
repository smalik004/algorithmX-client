import React from 'react';
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import NativeSection from './home';
import AppGrid from '../android-app/multiface';
import NativeServicesGrid from './ndevelopment';
import TechGrid from '../android-app/technologies';
import NativeDevelopmentTimeline from './ndynamictimeline';
import IndustriesGrid from '../android-app/industries';
import InsightSection from '../graphics/insight'
import Footer from '../(mainpage)/footer';

const page = () => {
  return (
    <div>
       <Navbar/>
    <CookieConsent/>
    <NativeSection/>
    <AppGrid/>
    <NativeServicesGrid/>
    <TechGrid/>
    <NativeDevelopmentTimeline/>
    <IndustriesGrid/>
    <InsightSection/>
    <Footer/>

    </div>
  )
}

export default page
