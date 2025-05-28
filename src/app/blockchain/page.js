import React from 'react'
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie';
import BlockContentSection from './home'
import BlockchainSolutions from './blocksolution'
import BlockServices from './blockservices'
import BlockchainHero from './blockdesign'
import BlockTechStack from './blocktechstack'
import InsightSection from '../graphics/insight'
import Footer from '../(mainpage)/footer';

const page = () => {
  return (
    <div>
       <Navbar/>
    <CookieConsent/>
      <BlockContentSection/>
      <BlockServices/>
      <BlockchainSolutions/>
      <BlockchainHero/>
      <BlockTechStack/>
      <InsightSection/>
      <Footer/>
    </div>
  )
}

export default page
