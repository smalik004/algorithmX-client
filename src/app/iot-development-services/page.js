export const metadata = {
  title: "IoT App Development Services | Custom IoT Development Company",
  description:
    "Design and build connected apps that bring your devices to life. Our custom IoT app development services help you collect data, automate actions, and scale with confidence.",
};

import React from "react";

import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import IOTSection from "./home";
import IndustriesGrid from "../branding-services/industries";
import IoTDevelopmentPage from "./choose1";
import IoTTechStack from "./techstack";
import InsightSection from "../graphics-services/insight";
import Footer from "../(mainpage)/footer";
import Home from "./services1";
import StackCardAnimation from "./stack";
import CTASection from "./ctabanner";
import ContactForm from "./ctaform";
import CTASectionBanner from "./ctabanner2";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <IOTSection />
      <Home />
      <CTASection/>
      <IoTDevelopmentPage />
      <StackCardAnimation />
      <CTASectionBanner/>
      <IoTTechStack />
      <IndustriesGrid />
      <ContactForm/>
      <Footer />
    </div>
  );
};

export default page;
