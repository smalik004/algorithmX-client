import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie';
import CTASection from './ctabanner';
import ContactForm from './ctaform';
import ContentSection from './home'
import DigitalSolutions from './innovative'
import Services from './services'
import ContentDevelopmentProcess from './craftmanship'
import ContentFeatures from './importance'
import ServicesSection from './growth'
import InsightSection from '../graphics-services/insight'
import Footer from '../(mainpage)/footer';


const page = () => {
  return (
    <div>
       <Navbar/>
    <CookieConsent/>
        <ContentSection />
        <DigitalSolutions />
        <Services />
        <CTASection/>
        <ContentDevelopmentProcess />
        <ContentFeatures />
        <ServicesSection/>
        <InsightSection/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default page
