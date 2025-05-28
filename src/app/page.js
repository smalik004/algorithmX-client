import React from 'react';
import Navbar from './asample/naviagtion';
import Footer from './(mainpage)/footer';
import ParticleAnimation from './(mainpage)/Honeycomb';
import ResponsiveGrid from './(mainpage)/design';
import Hexagon from './(mainpage)/hexagon';
import ServicesSection from './(mainpage)/box';
import Roadmap from './(mainpage)/roadmap';
import DiagonalGridWithText from './(mainpage)/rotate';
import PlatformPerformance from './(mainpage)/button';
import ResultRow from './(mainpage)/band';
import MarketingGrid from './(mainpage)/Marketing'
import Reviews from './(mainpage)/reviews'


const Page = () => {
  return (
    <div >
       <Navbar/>
      <ParticleAnimation/>
      <ResponsiveGrid/>
      <Hexagon/>
      <ServicesSection/>
      <Roadmap/>
      <DiagonalGridWithText/>
      <PlatformPerformance/>
      <ResultRow/>
      <MarketingGrid/>
      <Reviews/>
      <Footer/>
    </div>
  );
};

export default Page;
