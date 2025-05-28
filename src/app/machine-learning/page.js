import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import MachineSection from './home'
import MachinePage from './services'
import MachineTech from './technologies'
import MLTechStack from './techstack'
import AIMLPage from './choose'
import IndustriesGrid from '../branding/industries'
import MLProcess from './process'
import InsightSection from '../graphics/insight'
import Footer from '../(mainpage)/footer'
const page = () => {
  return (
    <div>
     <Navbar/>
    <CookieConsent/>
    <MachineSection/>
    <MachinePage/>
    <MachineTech/>
    <MLTechStack/>
    <AIMLPage/>  
      <MLProcess/>
    <IndustriesGrid/>
    <InsightSection/>
    <Footer/>
    </div>
  )
}

export default page
