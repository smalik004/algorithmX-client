import React from 'react';
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import ShortsHome from './home';
import VideoGallery from './recent';
import TopVideo from './topvideo';
import Uploads from './uploads';
import Footer from '../(mainpage)/footer';



const Page = () => {
  return (
    <div >
       <Navbar/>
    <CookieConsent/>
      <ShortsHome/>
      <VideoGallery/>
      <TopVideo/>
      <Uploads/>
      <Footer/>
    </div>
  );
};

export default Page;
