import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import CMSSection from './home'
import ContentMarketingCMS from './utilize'
import CMSServicesGrid from './gains'
import CMSServices from './how'
import IndustriesGrid from '../branding/industries'
import CMSTechStack from './techstack'
import InsightSection from '../graphics/insight'
import Footer from '../(mainpage)/footer'

const page = () => {
  return (
    <div>
     <Navbar/>
    <CookieConsent/>
    <CMSSection/>
    <ContentMarketingCMS/>
    <CMSServicesGrid/>
    <CMSServices/>
    <IndustriesGrid/>
    <CMSTechStack/>
    <InsightSection/>
    <Footer/>
    </div>
  )
}

export default page
