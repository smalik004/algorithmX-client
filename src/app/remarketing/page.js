import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import RemarketinginAds from './home'
import RemarketingBenefits from './benefits'
import SmoothScrollStack from './approach'
import CampaignTabs from './services'
import TechnologyToolbox from './toolbox'
import RemarketingSection from './retargeting'
import AudienceSection from './audeience'
import InsightSection from '../graphics/insight'
import Footer from '../(mainpage)/footer'


const page = () => {
  return (
    <div>
     <Navbar/>
    <CookieConsent/>
    <RemarketinginAds/>
    <SmoothScrollStack/>
    <RemarketingBenefits/>
    <CampaignTabs/>
    <TechnologyToolbox/>
    <RemarketingSection/>
    <AudienceSection/>
    <InsightSection/>
    <Footer/>
    </div>
  )
}

export default page
