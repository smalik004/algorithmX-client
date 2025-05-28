import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie';
import CreationSection from './home'
import CreationServicesGrid from './services'
import ContentMarketingSection from './win'
import MarketingApproach from './content'
import ContentMarketingImpact from './impact'
import InsightSection from '../graphics/insight'
import Footer from '../(mainpage)/footer';

const page = () => {
  return (
    <div>
       <Navbar/>
    <CookieConsent/>
    <CreationSection/>
    <CreationServicesGrid/>
    <ContentMarketingSection/>
    <MarketingApproach/>
    <ContentMarketingImpact/>
    <InsightSection/>
    <Footer/>
    </div>
  )
}

export default page
