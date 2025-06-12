import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import MediaSection from './home'
import WhatSection from './what'
import SocialMediaAudit from './key'
import SocialCommitment from './commitment'
import ComplimentarySection from './complimentary'
import Accordion from './chosee'
import InsightSection from '../graphics-services/insight'
import Footer from '../(mainpage)/footer';
import CTASectionBanner from './ctabanner2'
import ContactForm from './ctaform'

const page = () => {
  return (
    <div>
       <Navbar/>
    <CookieConsent/>
    <MediaSection/>
    <WhatSection/>
    <SocialMediaAudit/>
    <CTASectionBanner/>
    <SocialCommitment/>
    <ComplimentarySection/>
    <Accordion/>
    <InsightSection/>
    {/* <ContactForm/> */}
    <Footer/>
    </div>
  )
}

export default page
