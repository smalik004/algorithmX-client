import React from 'react';
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie';
import NFTSection from './home';
import NFTServicesGrid from './services';
import NFTHeroSection from './leverage';
import Trust from './trust';
import IndustriesGrid from '../branding-services/industries';
import Footer from '../(mainpage)/footer';
import CTASection from './ctabanner';
import ContactForm from './ctaform';

const page = () => {
  return (
    <div>
       <Navbar/>
    <CookieConsent/>
        <NFTSection/>
        <NFTServicesGrid/>
        <NFTHeroSection/>
        <CTASection/>
        <Trust/>
      <IndustriesGrid/>
      {/* <ContactForm/> */}
      <Footer/>
    </div>
  )
}

export default page
