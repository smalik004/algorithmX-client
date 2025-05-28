import React from 'react';
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie';
import HeroSlider from './home';
import ExploreCategories from './tabs';
import Featuredarticle1 from './featurearticle';
import LatestArticles from './latestarticle';

const Page = () => {
  return (
    <div >
       <Navbar/>
    <CookieConsent/>
      <HeroSlider/>
      <ExploreCategories/>
      <Featuredarticle1/>
      <LatestArticles/>
      
        
    </div>
  );
};

export default Page;
