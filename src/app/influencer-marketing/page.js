import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import InfluencerSection from './home'
import InfluencerMasterySection from './influencer'
import InfluencerModules from './services'
import EssentialSection from './marketing'
import DecodeSection from './decode'
import WhoStrategy from './who'
import InsightSection from '../graphics-services/insight'
import Footer from '../(mainpage)/footer';
import CTASectionBanner from './ctabanner2'
import ContactForm from './ctaform'

const page = () => {
  return (
    <div>
       <Navbar/>
    <CookieConsent/>
      <InfluencerSection/>
      <InfluencerMasterySection/>
      <InfluencerModules/>
      <CTASectionBanner/>
      <EssentialSection/>
      <DecodeSection/>
      <WhoStrategy/>
      <InsightSection/>
      <ContactForm/>
      <Footer/>
      
    </div>
  )
}

export default page
