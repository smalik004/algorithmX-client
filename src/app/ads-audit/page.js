import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import AdsAudit from './home'
import PPCAuditSection from './what'
import ServicesAccordion from './include'
import TestimonialSection from './coatation'
import PPCAudit from './happens'
import InsightSection from '../graphics/insight'
import Footer from '../(mainpage)/footer'

const page = () => {
  return (
    <div>
     <Navbar/>
    <CookieConsent/>
    <AdsAudit/>
    <PPCAuditSection/>
    <ServicesAccordion/>
    <TestimonialSection/>
    <PPCAudit/>
    <InsightSection/>
    <Footer/>
    </div>
  )
}

export default page
