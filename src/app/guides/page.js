import React from 'react';
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import GuidesHome from './home';
import Footer from '../(mainpage)/footer';



const Page = () => {
  return (
    <div >
       <Navbar/>
    <CookieConsent/>
      <GuidesHome/>
      <Footer/>
    </div>
  );
};

export default Page;
