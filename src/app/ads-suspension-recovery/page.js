import React from "react";
import Image from "next/image";

import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import AdsSuspension from "./home";
import WhatSection from "./what";
import AdsProcess from "./diffrent";
import HeroSection from "./proactive";
import DetailedHeroSection from "./detailed";
 
import Footer from "../(mainpage)/footer";
import CTASectionBanner from "./ctabanner2";
import ContactForm from "../ads-audit/ctaform";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <AdsSuspension />
      <WhatSection />
      <CTASectionBanner/>
      <AdsProcess />
      <HeroSection />
      <DetailedHeroSection />
      {/* <ContactForm/> */}
      <Footer />
    </div>
  );
};

export default page;
