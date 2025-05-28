import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import ShopifyFeatures from './choose'
import ShopifyServices from './sservices'
import QualityBanner from './quality'
import ShopifySection from './home'
import ShopifyDevelopmentTimeline from './stimeline'
import InsightSection from '../graphics/insight'
import Footer from '../(mainpage)/footer';
const page = () => {
  return (
    <div>
       <Navbar/>
    <CookieConsent/>
      <ShopifySection/>
      <ShopifyServices/>
      <ShopifyFeatures/>
      <QualityBanner/>
      <ShopifyDevelopmentTimeline/>
      <InsightSection/>
      <Footer/>
    </div>
  )
}

export default page
