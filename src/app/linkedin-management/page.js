import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import LinkedinSection from './home'
import LinkedinHeroSection from './connect'
import LinkedinGrowHeroSection from './optimize'
import LinkedinMarketingSection from './services'
import LinkedinSmoothScrollStack from './marketing'
import LinkedinContent from './scrolling'
import BusinessSection from './place'
import InsightSection from '../graphics/insight'
import Footer from '../(mainpage)/footer';



const page = () => {
  return (
    <div>
     <Navbar/>
    <CookieConsent/>
    <LinkedinSection/>
    <LinkedinHeroSection/>
    <LinkedinGrowHeroSection/>
    <LinkedinMarketingSection/>
    <LinkedinSmoothScrollStack/>
    <LinkedinContent/>
    <BusinessSection/>
    <InsightSection/>
    <Footer/>
    </div>
  )
}

export default page
