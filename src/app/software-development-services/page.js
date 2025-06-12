export const metadata = {
  title: "Top Software Development Company | Software Consulting Services",
  description:
    " AlgorithmX is a top-rated Software development company specializing in web, mobile, and enterprise applications. Custom solutions to drive your business forward.",
};

import React from "react";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import ContentSection from "./home";
import InteractiveBox from "./method";
import CostEstimation from "./cost";
import BusinessSolutions from "./software";
import SoftwareServices from "./discover";
import SoftwareDevelopmentTimeline from "./timeline";
import SoftwareTechStack from "./techstack";
 
import Footer from "../(mainpage)/footer";
import CTASection from "./ctabanner";
import CTASectionBanner from "./ctabanner2";
import ContactForm from "./ctaform";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <ContentSection />
      <SoftwareServices />
      <BusinessSolutions />
      <CTASection/>
      <InteractiveBox />
      <SoftwareDevelopmentTimeline />
      <CTASectionBanner/>
      <SoftwareTechStack />
      <CostEstimation />
      
      {/* <ContactForm/> */}
      <Footer />
    </div>
  );
};

export default page;
