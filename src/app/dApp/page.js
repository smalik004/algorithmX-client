import React from 'react';
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie';
import DappSection from './home';
import DAppServices from './services';
import Offer from './offer';
import DAppDevelopmentPage from './choose';
import DAppTechStack from './techstack';
import IndustriesGrid from '../branding/industries';
import Footer from '../(mainpage)/footer';

const page = () => {
  return (
    <div>
       <Navbar/>
    <CookieConsent/>
      <DappSection/>
      <DAppServices/>
      <Offer/>
      <DAppDevelopmentPage/>
      <DAppTechStack/>
      <IndustriesGrid/>
      <Footer/>
    </div>
  )
}

export default page
