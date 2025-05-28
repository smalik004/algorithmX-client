import React from 'react';
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie';
import ContentSection from './home';
import Content from './content';
import Offer from './offer';
import IndustriesGrid from '../branding/industries';
import TechnologyToolbox from './toolbox';
import StrategyGrid from './strategy';
import InsightSection from '../graphics/insight'
import Footer from '../(mainpage)/footer';



const page = () => {
  return (
    <div>
       <Navbar/>
    <CookieConsent/>
      <ContentSection/>
      <Content/>
      <Offer/>
      <StrategyGrid/>
      <IndustriesGrid/>
      <TechnologyToolbox/>
      <InsightSection/>
      <Footer/>
      
    </div>
  )
}

export default page

