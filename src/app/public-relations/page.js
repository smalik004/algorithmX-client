import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import PublicContentSection from './home'
import PublicServices from './publicservices'
import PublicEnhancedSection from './enhanced'
import PublicTargetedSection from './targeted'
import PRProcessVisualization from './prprocess'
import PublicPressSection from './press'
import PublicSeizeSection from './seize'
import InsightSection from '../graphics-services/insight'
import Footer from '../(mainpage)/footer';
import CTASection from './ctabanner'
import CTASectionBanner from './ctabanner2'
import ContactForm from './ctaform'

const page = () => {
  return (
    <div>
       <Navbar/>
    <CookieConsent/>
      <PublicContentSection/>
        <PublicServices/>
        <PublicEnhancedSection/>
        <CTASection/>
        <PublicTargetedSection/>
        <PRProcessVisualization/>
        <PublicPressSection/>'
        <CTASectionBanner/>
        <PublicSeizeSection/>
        <InsightSection/>
        <ContactForm/>
        <Footer/>

    </div>
  )
}

export default page
