import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import CopywritingSection from './home'
import CopywritingServicesGrid from './services'
import CopywritingMarketingSection from './win'
import CopywritingMarketingApproach from './content'
import CopywritingMarketingImpact from './impact'
import InsightSection from '../graphics-services/insight'
import Footer from '../(mainpage)/footer';
import CTASection from './ctabanner'
import ContactForm from './ctaform'


const page = () => {
  return (
    <div>
       <Navbar/>
    <CookieConsent/>
    <CopywritingSection/>
    <CopywritingServicesGrid/>
    <CopywritingMarketingSection/>
    <CTASection/>
    <CopywritingMarketingApproach/>
    <CopywritingMarketingImpact/>
    <InsightSection/>
    {/* <ContactForm/> */}
    <Footer/>
    </div>
  )
}

export default page
