import React from 'react';
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import XamarinSection from './home';
import AppGrid from '../android-app/multiface';
import XamarinServicesGrid from './xdevelopment';
import TechGrid from '../android-app/technologies';
import XamarinDevelopmentTimeline from './xdynamictimeline';
import IndustriesGrid from '../android-app/industries';
import InsightSection from '../graphics/insight'
import Footer from '../(mainpage)/footer';

const page = () => {
  return (
    <div>
       <Navbar/>
    <CookieConsent/>
        <XamarinSection/>
        <AppGrid/>
        <XamarinServicesGrid/>
        <TechGrid/>
        <XamarinDevelopmentTimeline/>
        <IndustriesGrid/>
        <InsightSection/>
        <Footer/>
    </div>
  )
}

export default page;
