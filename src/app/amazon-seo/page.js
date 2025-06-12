    import React from 'react'
    import Navbar from '../asample/naviagtion'
    import CookieConsent from '../cookies/cookie'
    import CTASection from './ctabanner'
    import CTASectionBanner from './ctabanner2'
    import ContactForm from './ctaform'
    import SEOAmazonSection from './home'
    import AmazonServices from './amazonservices'
    import AmazonStrategy from './opportunity'
    import AmazonSEOBenefits from './benefits'
    import AmazonMarketingSection from './unmatched'
    import AmazonRevenueSection from './revenue'
    import AmazonReachSection from './ambiations'
    import InsightSection from '../graphics-services/insight'
import Footer from '../(mainpage)/footer';

    const page = () => {
    return (
        <div>
         <Navbar/>
         <CookieConsent/>
        <SEOAmazonSection/>
        <AmazonServices/>
        <AmazonStrategy/>
        <CTASection/>
        <AmazonSEOBenefits/>
        <AmazonMarketingSection/>
        <AmazonRevenueSection/>
        <CTASectionBanner/>
        <AmazonReachSection/>
        <InsightSection/>
        <ContactForm/>
        <Footer/>
        </div>
    )
    }

    export default page
