export const metadata = {
  title: "Content Creation Services | Top Content Creation Agency ",
  description:
    "Transform your online presence with AlgorithmX’s captivating content. Contact us today for the top notch content creation services. ",
};

import React from "react";
import Image from "next/image";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import CTASectionBanner from "./ctabanner2";
import ContactForm from "./ctaform";
import ContentSection from "./home";
import Content from "./content";
import Offer from "./offer";
import IndustriesGrid from "../branding-services/industries";
import TechnologyToolbox from "./toolbox";
import StrategyGrid from "./strategy";
 
import Footer from "../(mainpage)/footer";
import CTASection from "./ctabanner";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <ContentSection />
      <Content />
      <CTASection/>
      <Offer />
      <StrategyGrid />
      <IndustriesGrid />
      <CTASectionBanner/>
      <TechnologyToolbox />
      
      {/* <ContactForm/> */}
      <Footer />
    </div>
  );
};

export default page;
