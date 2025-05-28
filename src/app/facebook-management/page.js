import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import FacebookSection from './home'
import HeroSection from './reach'
import GrowHeroSection from './grow'
import MarketingSection from './boost'
import SmoothScrollStack from './sticky1'
import FacebookImplementation from './choose'
import BusinessSection from './business'
import InsightSection from '../graphics/insight'
import Footer from '../(mainpage)/footer';


const page = () => {
  return (
    <div>
       <Navbar/>
    <CookieConsent/>
      <FacebookSection/>
      <HeroSection/>
      <GrowHeroSection/>
      <MarketingSection/>
      <SmoothScrollStack/>
      <FacebookImplementation/>
      <BusinessSection/>
      <InsightSection/>
      <Footer/>
      
     
    </div>
  )
}

export default page
