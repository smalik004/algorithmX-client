export const metadata = {
  title:
    " Top React App Development Services | Scalable and Interactive Solutions",
  description:
    "AlgorithmX Leverages the power of React with our professional app development services. Partner with us to bring your React app vision to life.",
};

import React from "react";
import Image from "next/image";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import NativeSection from "./home";
import AppGrid from "../android-app-development-services/multiface";
import NativeServicesGrid from "./ndevelopment";
import TechGrid from "../android-app-development-services/technologies";
import NativeDevelopmentTimeline from "./ndynamictimeline";
import IndustriesGrid from "../android-app-development-services/industries";
 
import Footer from "../(mainpage)/footer";
import CTASection from "./ctabanner";
import ContactForm from "./ctaform";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <NativeSection />
      <AppGrid />
      <NativeServicesGrid />
      <CTASection/>
      <TechGrid />
      <NativeDevelopmentTimeline />
      <IndustriesGrid />
      {/* <ContactForm/> */}
      <Footer />
    </div>
  );
};

export default page;
