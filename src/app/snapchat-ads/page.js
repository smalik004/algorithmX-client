import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import SnapchatAds from './home'
import SnapchatBoostAds from './engage'
import ServicesAccordion from './services'
import ResponsiveExperience from '../google-ads/experience'
import SnapchatServices from './benefits'
import InsightSection from '../graphics-services/insight'
import Footer from '../(mainpage)/footer'
import CTASection from './ctabanner'
import ContactForm from './ctaform'


const page = () => {
  return (
    <div>
     <Navbar/>
    <CookieConsent/>
    <SnapchatAds/>
    <SnapchatBoostAds/>
    <ServicesAccordion/>
    <CTASection/>
    <ResponsiveExperience/>
    <SnapchatServices/>
    <InsightSection/>
    {/* <ContactForm/> */}
    <Footer/>

    </div>
  )
}

export default page
