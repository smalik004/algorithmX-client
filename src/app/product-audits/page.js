import React from 'react';
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie';
import ExploreComponent from './home';
import OutdoorActivitiesLarge from './tabs';
import Featuredarticle from './featuredarticles';
import LatestArticle from './latestarticle';
import Footer from '../(mainpage)/footer';
import CTASectionBanner from './ctabanner2';
import ContactForm from './ctaform';
const Page = () => {
  return (
    <div >
       <Navbar/>
    <CookieConsent/>
        <ExploreComponent/>
        <OutdoorActivitiesLarge/>
        <CTASectionBanner/>
       <Featuredarticle/>
       <LatestArticle/>
        {/* <ContactForm/> */}
       <Footer/>
      
        
    </div>
  );
};

export default Page;
