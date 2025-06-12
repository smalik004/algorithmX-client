import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import TiktokSection from './home'
import TiktokHeroSection from './dgital'
import TiktokGrowHeroSection from './connect'
import TiktokSmoothScrollStack from './solutions'
import TiktokCarousel from './strategies'
import TiktokWorthySection from './impact'
import InsightSection from '../graphics-services/insight'
import Footer from '../(mainpage)/footer';
import CTASectionBanner from './ctabanner2'
import ContactForm from './ctaform'

const page = () => {
  return (
    <div>
       <Navbar/>
    <CookieConsent/>
    <TiktokSection/>
    <TiktokHeroSection/>
    <TiktokGrowHeroSection/>
    <CTASectionBanner/>
    <TiktokSmoothScrollStack/>
    <TiktokCarousel/>
    <TiktokWorthySection/>
    <InsightSection/>
    {/* <ContactForm/> */}
    <Footer/>
    </div>
  )
}

export default page
