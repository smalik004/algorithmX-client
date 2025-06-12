import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import MachineSection from './home'
import MachinePage from './services'
import MachineTech from './technologies'
import MLTechStack from './techstack'
import AIMLPage from './choose'
import IndustriesGrid from '../branding-services/industries'
import MLProcess from './process'
import InsightSection from '../graphics-services/insight'
import Footer from '../(mainpage)/footer'
import CTASection from './ctabanner'
import CTASectionBanner from './ctabanner2'
import ContactForm from './ctaform'
const page = () => {
  return (
    <div>
     <Navbar/>
    <CookieConsent/>
    <MachineSection/>
    <MachinePage/>
    <MachineTech/>
    <CTASection/>
    <MLTechStack/>
    <AIMLPage/>  
    <CTASectionBanner/>
      <MLProcess/>
    <IndustriesGrid/>
    <InsightSection/>
    <ContactForm/>
    <Footer/>
    </div>
  )
}

export default page
