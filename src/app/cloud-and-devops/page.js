import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import CloudSection from './home'
import CloudGrid from './downtime'
import CloudDesignProcess from './process'
import CloudStrategy from './streamlined'
import CloudBenefits from './choose'
import CloudTechnologyToolbox from './toolbox'
import InsightSection from '../graphics/insight'

const page = () => {
  return (
    <div>
     <Navbar/>
    <CookieConsent/>
    <CloudSection/>
    <CloudGrid/>
    <CloudDesignProcess/>
    <CloudStrategy/>
    <CloudBenefits/>
    <CloudTechnologyToolbox/>
    <InsightSection/>
    </div>
  )
}

export default page
