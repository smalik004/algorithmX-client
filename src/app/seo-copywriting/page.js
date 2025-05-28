import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import CopywritingSection from './home'
import CopywritingServicesGrid from './services'
import CopywritingMarketingSection from './win'
import CopywritingMarketingApproach from './content'
import CopywritingMarketingImpact from './impact'
import InsightSection from '../graphics/insight'
import Footer from '../(mainpage)/footer';


const page = () => {
  return (
    <div>
       <Navbar/>
    <CookieConsent/>
    <CopywritingSection/>
    <CopywritingServicesGrid/>
    <CopywritingMarketingSection/>
    <CopywritingMarketingApproach/>
    <CopywritingMarketingImpact/>
    <InsightSection/>
    <Footer/>
    </div>
  )
}

export default page
