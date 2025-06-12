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
import InsightSection from '../graphics-services/insight'
import Footer from '../(mainpage)/footer'
import CTASection from './ctabanner'
import CTASectionBanner from './ctabanner2'
import ContactForm from './ctaform'


const page = () => {
  return (
    <div>
     <Navbar/>
    <CookieConsent/>
    <RemarketinginAds/>
    <SmoothScrollStack/>
    <RemarketingBenefits/>
    <CTASection/>
    <CampaignTabs/>
    <TechnologyToolbox/>
    <CTASectionBanner/>
    <RemarketingSection/>
    <AudienceSection/>
    <InsightSection/>
    <ContactForm/>
    <Footer/>
    </div>
  )
}

export default page
