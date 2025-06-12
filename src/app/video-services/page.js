export const metadata = {
  title: "Video Production Company | Corporate Video Production Services",
  description:
    "AlgorithmX offers professional video production, editing, and marketing services. From concept to completion, we deliver stunning video content.",
};

import React from "react";
import Image from "next/image";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import VideoSection from "./home";
import VideoServices from "./videoservices";
import DevelopmentProcess from "./craftmanship";
import TechnologyToolbox from "./toolbox";
import ResponsiveHero from "../graphics-services/experience";
import Home from "./digital";
 
import Footer from "../(mainpage)/footer";
import CTASectionBanner from "./ctabanner2";
import ContactForm from "./ctaform";
import CTASection from "./ctabanner";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <VideoSection />
      <VideoServices />
      <CTASection/>
      <DevelopmentProcess />
      <ResponsiveHero />
      <CTASectionBanner/>
      <Home />
      <TechnologyToolbox />
      <ContactForm/>
      <Footer />
    </div>
  );
};

export default page;
