import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import LandingDesign from './home'
import LandingServices from './research'
import ServicesPage from './services'
import LandingPageBenefits from './benefits'
import LandingSection from './attract'
import InsightSection from '../graphics-services/insight'
import Footer from '../(mainpage)/footer'
import CTASection from './ctabanner'
import ContactForm from './ctaform'
const page = () => {
  return (
    <div>
     <Navbar/>
    <CookieConsent/>
    <LandingDesign/>
    <LandingServices/>
    <ServicesPage/>
    <CTASection/>
    <LandingPageBenefits/>
    <LandingSection/>
    <InsightSection/>
    {/* <ContactForm/> */}
    <Footer/>
    </div>
  )
}

export default page
