import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import InstagramSection from './home'
import InstagramHeroSection from './reach'
import InstagramGrowHeroSection from './grow'
import InstagramMarketingSection from './services'
import SmoothScrollStack from './solutions'
import InstagramCarousel from './works'
import InstagramWorthySection from './worthy'
import InsightSection from '../graphics-services/insight'
import Footer from '../(mainpage)/footer';
import CTASectionBanner from './ctabanner2'
import ContactForm from './ctaform'

const page = () => {
  return (
    <div>
       <Navbar/>
    <CookieConsent/>
    <InstagramSection/>
    <InstagramHeroSection/>
    <InstagramGrowHeroSection/>
    <CTASectionBanner/>
    <InstagramMarketingSection/>
    <SmoothScrollStack/>
    <InstagramCarousel/>
    <InstagramWorthySection/>
    <InsightSection/>
    {/* <ContactForm/> */}
    <Footer/>
    </div>
  )
}

export default page
