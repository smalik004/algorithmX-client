import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import TwitterSection from './home'
import TwitterHeroSection from './engagement'
import TwitterGrowHeroSection from './multimedia'
import TwitterSmoothScrollStack from './solution'
import TwitterServicesGrid from './business'
import TwitterBusinessSection from './grow'
import InsightSection from '../graphics-services/insight'
import Footer from '../(mainpage)/footer';
import CTASection from './ctabanner'
import ContactForm from './ctaform'


const page = () => {
  return (
    <div>
     <Navbar/>
    <CookieConsent/>
    <TwitterSection/>
    <TwitterHeroSection/>
    <TwitterGrowHeroSection/>
    <CTASection/>
    <TwitterSmoothScrollStack/>
    <TwitterServicesGrid/>
    <TwitterBusinessSection/>
    <InsightSection/>
    <ContactForm/>
    <Footer/>
    </div>
  )
}

export default page
