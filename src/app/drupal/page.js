import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie';
import DrupalSection from './home'
import DrupalServices from './dservices'
import DrupalFeatures from './dchoose'
import QualityBanner from './quality'
import DrupalDevelopmentTimeline from './dtimeline'
import InsightSection from '../graphics/insight'
import Footer from '../(mainpage)/footer';

const page = () => {
  return (
    <div>
       <Navbar/>
    <CookieConsent/>
      <DrupalSection/>
      <DrupalServices/>
      <DrupalFeatures/>
      <QualityBanner/>
      <DrupalDevelopmentTimeline/>
      <InsightSection/>
      <Footer/>
    </div>
  )
}

export default page
