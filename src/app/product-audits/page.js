import React from 'react';
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie';
import ExploreComponent from './home';
import OutdoorActivitiesLarge from './tabs';
import Featuredarticle from './featuredarticles';
import LatestArticle from './latestarticle';
import Footer from '../(mainpage)/footer';
const Page = () => {
  return (
    <div >
       <Navbar/>
    <CookieConsent/>
        <ExploreComponent/>
        <OutdoorActivitiesLarge/>
       <Featuredarticle/>
       <LatestArticle/>
       <Footer/>
      
        
    </div>
  );
};

export default Page;
