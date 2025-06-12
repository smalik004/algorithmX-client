import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import SocialMediaSection from './home'
import SocialMediaServices from './marketing'
import SocialServicesSection from './services'
import UnlockSuccess from './unlock'
import ResponsiveHero from '../graphics-services/experience'
import ServicesGrid from './beyond'
import SocialTechnologyToolbox from './socialtoolbox'
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
        <SocialMediaSection/>
        <SocialMediaServices/>
        <SocialServicesSection/>
        <CTASection/>
        <UnlockSuccess/>
        <ResponsiveHero/>
        <CTASectionBanner/>
        <ServicesGrid/>
        <SocialTechnologyToolbox/>
        <InsightSection/>
        <ContactForm/>
        <Footer/>
      
    </div>
  )
}

export default page
