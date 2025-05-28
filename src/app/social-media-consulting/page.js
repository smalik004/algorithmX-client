import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import SocialConsultingSection from './home'
import MarketingSection from './services'
import ConsultingSmoothScrollStack from './how'
import ConsultingWorthySection from './strategy'
import ConsultingImplementation from './customized'
import ConsultingStayingSection from './staying'
import InsightSection from '../graphics/insight'
import Footer from '../(mainpage)/footer';



const page = () => {
  return (
    <div>
       <Navbar/>
    <CookieConsent/>
    <SocialConsultingSection/>
    <MarketingSection/>
    <ConsultingSmoothScrollStack/>
    <ConsultingWorthySection/>
    <ConsultingImplementation/>
    <ConsultingStayingSection/>
    <InsightSection/>
    <Footer/>
    </div>
  )
}

export default page
