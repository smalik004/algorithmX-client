import React from 'react';
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie';
import FeaturedHome from './home';
import TrendingTopicTech from './topics';
import TopStories from './stories';
import FeaturedVideo from './featuredvideo';
import Section2 from './popular';
import ReviewsSection from './reviews';


import Footer from '../(mainpage)/footer';
const Page = () => {
  return (
    <div >
       <Navbar/>
    <CookieConsent/>
        <FeaturedHome/>
        <TrendingTopicTech/>
        <TopStories/>
        <FeaturedVideo/>
        <Section2/>
        <ReviewsSection/>
       <Footer/>
      
        
    </div>
  );
};

export default Page;
