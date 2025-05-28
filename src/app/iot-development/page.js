import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import IOTSection from './home'
import IOTPage from './services'
import IoTBenefits from './choose'
import IndustriesGrid from '../branding/industries'
import IoTDevelopmentPage from './choose1'
import IoTProcess from './process'
import IoTTechStack from './techstack'
import InsightSection from '../graphics/insight'
import Footer from '../(mainpage)/footer'
import Home from './services1'
import StackCardAnimation from './stack'




const page = () => {
  return (
    <div>
     <Navbar/>
    <CookieConsent/>
    <IOTSection/>
    <Home/>
    <IoTDevelopmentPage/>
    <StackCardAnimation/>
    <IoTTechStack/>
    <IndustriesGrid/>
    <InsightSection/>
    <Footer/>


    </div>
  )
}

export default page
