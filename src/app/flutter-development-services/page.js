export const metadata = {
  title: "Expert Flutter App Development Services | Cross-Platform Solutions",
  description:
    " Unlock the power of Flutter with our expert app development services. AlgorithmX delivers high-performance, cross-platform mobile apps for your needs.",
};

import React from "react";
import Image from "next/image";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import FlutterSection from "./home";
import AppGrid from "../android-app-development-services/multiface";
import FlutterServicesGrid from "./fdevelopment";
import TechGrid from "../android-app-development-services/technologies";
import FlutterDevelopmentTimeline from "./fdynaictimeline";
import IndustriesGrid from "../android-app-development-services/industries";
 
import Footer from "../(mainpage)/footer";
import CTASection from "./ctabanner";
import ContactForm from "./ctaform";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <FlutterSection />
      <AppGrid />
      <FlutterServicesGrid />
      <CTASection/>
      <TechGrid />
      <FlutterDevelopmentTimeline />
      <IndustriesGrid />
      {/* <ContactForm/> */}
      <Footer />
    </div>
  );
};

export default page;
