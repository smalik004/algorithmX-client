    import React from 'react'
    import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
    import SEOPenalizationSection from './home'
    import SeoStrategy from './longterm'
    import PenalizationSection from './panda'
    import PenguinSection from './penguin'
    import PenaltyAndWarningAlerts from './handling'
    import InsightSection from '../graphics/insight'
import Footer from '../(mainpage)/footer';

    const page = () => {
    return (
        <div>
             <Navbar/>
    <CookieConsent/>
        <SEOPenalizationSection/>
        <SeoStrategy/>
        <PenalizationSection/>
        <PenguinSection/>
        <PenaltyAndWarningAlerts/>
        <InsightSection/>
        
        <Footer/>
       
        
        </div>
    )
    }

    export default page
