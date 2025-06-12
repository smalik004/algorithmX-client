import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import FranchiseSection from './home'
import FranchiseServices from './services'
import FranchiseStrategy from './who'
import FranchiseEnterprise from './enterprise'
import EssentialSection from './essential'
import FranchiseProcessVisualization from './process'
import ElevateSection from './elevate'
import InsightSection from '../graphics-services/insight'
import Footer from '../(mainpage)/footer';
import CTASection from '../ads-audit/ctabanner'
import CTASectionBanner from './ctabanner2'
import ContactForm from './ctaform'


const page = () => {
  return (
    <div>
       <Navbar/>
    <CookieConsent/>
        <FranchiseSection/>
        <FranchiseServices/>
        <FranchiseStrategy/>
        <CTASection/>
        <FranchiseEnterprise/>
        <EssentialSection/>
        <FranchiseProcessVisualization/>
        <CTASectionBanner/>
        <ElevateSection/>
        <InsightSection/>
        {/* <ContactForm/> */}
        <Footer/>
    </div>
  )
}

export default page
