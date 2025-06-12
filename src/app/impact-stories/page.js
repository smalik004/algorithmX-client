import React from 'react';
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import ShortsHome from './home';
import VideoGallery from './recent';
import TopVideo from './topvideo';
import Uploads from './uploads';
import Footer from '../(mainpage)/footer';
import ContactForm from './ctaform';
import CTASection from './ctabanner';



const Page = () => {
  return (
    <div >
       <Navbar/>
    <CookieConsent/>
      <ShortsHome/>
      <VideoGallery/>
      {/* <CTASection/> */}
      <TopVideo/>
      <Uploads/>
      <ContactForm/>
      <Footer/>
    </div>
  );
};

export default Page;
