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
import CTASection from './ctabanner';
import ContactForm from './ctaform';
const Page = () => {
  return (
    <div >
       <Navbar/>
    <CookieConsent/>
        <FeaturedHome/>
        <TrendingTopicTech/>
        <TopStories/>
        <CTASection/>
        <FeaturedVideo/>
        <Section2/>
        <ReviewsSection/>
        {/* <ContactForm/> */}
       <Footer/>
      
        
    </div>
  );
};

export default Page;
