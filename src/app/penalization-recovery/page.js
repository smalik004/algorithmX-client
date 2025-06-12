    import React from 'react'
    import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
    import SEOPenalizationSection from './home'
    import SeoStrategy from './longterm'
    import PenalizationSection from './panda'
    import PenguinSection from './penguin'
    import PenaltyAndWarningAlerts from './handling'
    import InsightSection from '../graphics-services/insight'
import Footer from '../(mainpage)/footer';
import CTASection from './ctabanner'
import ContactForm from './ctaform'

    const page = () => {
    return (
        <div>
             <Navbar/>
    <CookieConsent/>
        <SEOPenalizationSection/>
        <SeoStrategy/>
        <PenalizationSection/>
        <CTASection/>
        <PenguinSection/>
        <PenaltyAndWarningAlerts/>
        <InsightSection/>
        <ContactForm/>
        <Footer/>
       
        
        </div>
    )
    }

    export default page
