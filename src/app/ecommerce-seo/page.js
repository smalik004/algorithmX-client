import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie';
import EcommerceSEOSection from './home'
import EcommerceServices from './ecommerceservices'
import EcommerceStrategy from './opportunity'
import EcommerceSEOBenefits from './benefits'
import EcommerceRankSection from './rank'
import EcommerceImplementation from './implement'
import EcommerceCodeSection from './code'
import DeliverablesSection from './client'
import InsightSection from '../graphics/insight'
import Footer from '../(mainpage)/footer';


const page = () => {
  return (
    <div>
       <Navbar/>
    <CookieConsent/>
        <EcommerceSEOSection />
        <EcommerceServices />
        <EcommerceStrategy />
        <EcommerceSEOBenefits />
        <EcommerceRankSection />
        <EcommerceImplementation />
        <EcommerceCodeSection />
        <DeliverablesSection />
        <InsightSection/>
        <Footer/>
    </div>
  )
}

export default page
