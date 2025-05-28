import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import SEOAuditSection from './home'
import AuditServices from './auditservices'
import SEOStrategy from './opportunity'
import SEOStrategyGrid from './techstack'
import SEOFactors from './seofactor'
import SEOReports from './reports'
import  SEOChecklist from './profiling'
import InsightSection from '../graphics/insight'
import Footer from '../(mainpage)/footer';

const page = () => {
  return (
    <div>
       <Navbar/>
    <CookieConsent/>
      <SEOAuditSection/>
      <AuditServices/>
      <SEOStrategy/>
      <SEOStrategyGrid/>
      <SEOFactors/>
      <SEOReports/>
      <SEOChecklist/>
      <InsightSection/>
      <Footer/>
    </div>
  )
}

export default page
