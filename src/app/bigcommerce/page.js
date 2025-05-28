import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import BigCommerceSection from './home'
import BigcommerceServices from './bservices'
import BigcommerceFeatures from './bchoose'
import QualityBanner from './bquality'
import BigcommerceDevelopmentTimeline from './btimeline'
import InsightSection from '../graphics/insight'
import Footer from '../(mainpage)/footer';


const page = () => {
  return (
    <div>
       <Navbar/>
    <CookieConsent/>
      <BigCommerceSection/>
      <BigcommerceServices/>
      <BigcommerceFeatures/>
      <QualityBanner/>
      <BigcommerceDevelopmentTimeline/>
      <InsightSection/>
      <Footer/>
    </div>
  )
}

export default page
