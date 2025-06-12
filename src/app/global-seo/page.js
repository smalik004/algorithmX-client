import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import SEOGlobalSection from './home'
import GlobalServices from './globalservices'
import GlobalStrategy from './expandopp'
import GlobalSEOBenefits from './benefits'
import GlobalTargetingSection from './targeting'
import GlobalRevenueSection from './revenue'
import GlobalReachSection from './ready'
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
    <SEOGlobalSection/>
    <GlobalServices/>
    <GlobalStrategy/>
    <CTASection/>
    <GlobalSEOBenefits/>
    <GlobalTargetingSection/>
    <CTASectionBanner/>
    <GlobalRevenueSection/>
    <GlobalReachSection/>
    <InsightSection/>
    {/* <ContactForm/> */}
    <Footer/>
    </div>
  )
}

export default page
