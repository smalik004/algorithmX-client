export const metadata = {
  title: "Xamarin App Development Company USA | Xamarin App Services",
  description:
    " AlgorithmX offers full-stack Xamarin mobile app development services to global clients including diverse industry verticals.",
};

import React from "react";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import XamarinSection from "./home";
import AppGrid from "../android-app-development-services/multiface";
import XamarinServicesGrid from "./xdevelopment";
import TechGrid from "../android-app-development-services/technologies";
import XamarinDevelopmentTimeline from "./xdynamictimeline";
import IndustriesGrid from "../android-app-development-services/industries";
 
import Footer from "../(mainpage)/footer";
import CTASection from "./ctabanner";
import ContactForm from "./ctaform";
import CTASectionBanner from "./ctabanner2";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <XamarinSection />
      <AppGrid />
      <CTASection/>
      <XamarinServicesGrid />
      <TechGrid />
      <CTASectionBanner/>
      <XamarinDevelopmentTimeline />
      <IndustriesGrid />
      <ContactForm/>
      <Footer />
    </div>
  );
};

export default page;
