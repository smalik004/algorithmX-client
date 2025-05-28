import React from 'react';
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie';
import Aboutus from './aboutus';
import AboutSection from'./aboutsection';
import PrinciplesSection from './principles';
import Vision from './vision'
import Footer from '../(mainpage)/footer';

const Page = () => {
  return (
    <div >
       <Navbar/>
    <CookieConsent/>
        <AboutSection/>
        <Aboutus/>
        <Vision/>
        <PrinciplesSection/>
        <Footer/>
        
    </div>
  );
};

export default Page;
