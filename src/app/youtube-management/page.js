import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import YoutubeSection from './home'
import YoutubeHeroSection from './increase'
import YoutubeGrowHeroSection from './connect'
import YoutubeSmoothScrollStack from './solutions'
import YoutubeServicesGrid from './help'
import YoutubeBusinessSection from './need'
import InsightSection from '../graphics-services/insight'
import Footer from '../(mainpage)/footer';
import CTASection from './ctabanner'
import ContactForm from './ctaform'

const page = () => {
  return (
    <div>
       <Navbar/>
    <CookieConsent/>
    <YoutubeSection/>
    <YoutubeHeroSection/>
    <YoutubeGrowHeroSection/>
    <CTASection/>
    <YoutubeSmoothScrollStack/>
    <YoutubeServicesGrid/>
    <YoutubeBusinessSection/>
    <InsightSection/>
    <ContactForm/>
    <Footer/>
    </div>
  )
}

export default page
