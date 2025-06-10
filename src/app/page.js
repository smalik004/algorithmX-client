import React from "react";
import Image from "next/image";
import CTASection from "./ads-audit/ctabanner";
import CTASectionBanner from "./ads-audit/ctabanner2";
import CTAFormSection from "./ads-audit/ctaform";
import Navbar from "./asample/naviagtion";
import CookieConsent from "./cookies/cookie";
import Footer from "./(mainpage)/footer";
import ParticleAnimation from "./(mainpage)/Honeycomb";
import ResponsiveGrid from "./(mainpage)/design";
import Hexagon from "./(mainpage)/hexagon";
import ServicesSection from "./(mainpage)/box";
import Roadmap from "./(mainpage)/roadmap";
import DiagonalGridWithText from "./(mainpage)/rotate";
import PlatformPerformance from "./(mainpage)/button";
import ResultRow from "./(mainpage)/band";
import MarketingGrid from "./(mainpage)/Marketing";
import Reviews from "./(mainpage)/reviews";


const Page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />

      <ParticleAnimation />
      <ResponsiveGrid />
      <Hexagon />
      <CTASection/>
      <ServicesSection />
      <Roadmap />
      <DiagonalGridWithText />
      <CTASectionBanner/>
      <PlatformPerformance />
      <ResultRow />
      <MarketingGrid />
      <Reviews />
      <CTAFormSection/>
      <Footer />
    </div>
  );
};

export default Page;
