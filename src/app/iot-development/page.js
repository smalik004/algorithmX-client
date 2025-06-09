export const metadata = {
  title: "IoT App Development Services | Custom IoT Development Company",
  description:
    "Design and build connected apps that bring your devices to life. Our custom IoT app development services help you collect data, automate actions, and scale with confidence.",
};

import React from "react";

import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import IOTSection from "./home";
import IndustriesGrid from "../branding/industries";
import IoTDevelopmentPage from "./choose1";
import IoTTechStack from "./techstack";
import InsightSection from "../graphics/insight";
import Footer from "../(mainpage)/footer";
import Home from "./services1";
import StackCardAnimation from "./stack";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <IOTSection />
      <Home />
      <IoTDevelopmentPage />
      <StackCardAnimation />
      <IoTTechStack />
      <IndustriesGrid />
      <InsightSection />
      <Footer />
    </div>
  );
};

export default page;
