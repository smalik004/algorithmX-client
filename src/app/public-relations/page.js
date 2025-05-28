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
import InsightSection from '../graphics/insight'
import Footer from '../(mainpage)/footer';

const page = () => {
  return (
    <div>
       <Navbar/>
    <CookieConsent/>
      <PublicContentSection/>
        <PublicServices/>
        <PublicEnhancedSection/>
        <PublicTargetedSection/>
        <PRProcessVisualization/>
        <PublicPressSection/>
        <PublicSeizeSection/>
        <InsightSection/>
        <Footer/>

    </div>
  )
}

export default page
