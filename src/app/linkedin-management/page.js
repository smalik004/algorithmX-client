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
import InsightSection from '../graphics-services/insight'
import Footer from '../(mainpage)/footer';
import CTASection from './ctabanner'
import CTASectionBanner from './ctabanner2'
import ContactForm from './ctaform'



const page = () => {
  return (
    <div>
     <Navbar/>
    <CookieConsent/>
    <LinkedinSection/>
    <LinkedinHeroSection/>
    <LinkedinGrowHeroSection/>
    <CTASection/>
    <LinkedinMarketingSection/>
    <LinkedinSmoothScrollStack/>
    <CTASectionBanner/>
    <LinkedinContent/>
    <BusinessSection/>
    <InsightSection/>
    <ContactForm/>
    <Footer/>
    </div>
  )
}

export default page
