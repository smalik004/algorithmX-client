import React from 'react';
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie';
import CTASectionBanner from './ctabanner2';
import ContactForm from './ctaform';
import DappSection from './home';
import DAppServices from './services';
import Offer from './offer';
import DAppDevelopmentPage from './choose';
import DAppTechStack from './techstack';
import IndustriesGrid from '../branding-services/industries';
import Footer from '../(mainpage)/footer';

const page = () => {
  return (
    <div>
       <Navbar/>
    <CookieConsent/>
      <DappSection/>
      <DAppServices/>
      <CTASectionBanner/>
      <Offer/>
      <DAppDevelopmentPage/>
      <DAppTechStack/>
      <IndustriesGrid/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default page
