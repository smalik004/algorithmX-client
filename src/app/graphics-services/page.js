export const metadata = {
  title: "Top Graphic Design Company | Custom Graphic Design Services",
  description:
    " Boost your brand with our comprehensive graphic design services. AlgorithmX offers expert graphic design, from logo creation to print materials and digital assets.",
};

import React from "react";
import Image from "next/image";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import GraphicsSection from "./home";
import ServicesGrid from "./graphics";
import DesignProcess from "./dynamic";
import Scalable from "./scalable";
import TechnologyToolbox from "./toolbox";
import ResponsiveHero from "./experience";
import InsightSection from "./insight";
import Footer from "../(mainpage)/footer";
import ContactForm from "./ctaform";
import CTASectionBanner from "./ctabanner2";
import CTASection from "./ctabanner";

const Page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <GraphicsSection />
      <ServicesGrid />
      <CTASection/>
      <DesignProcess />
      <ResponsiveHero />
      <CTASectionBanner/>
      <Scalable />
      <TechnologyToolbox />
      <ContactForm/>
      <Footer />
    </div>
  );
};

export default Page;
