export const metadata = {
  title: "Top Mobile SEO Company: Boost your Mobile Rankings",
  description:
    "Boost your mobile site's performance with our expert mobile SEO services. We are Operating in India & USA, we help improve your search rankings by up to 70% and user engagement by 50%.",
};

import React from "react";
import Image from "next/image";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import SEOMobileSection from "./home";
import MobileServices from "./mobileservices";
import MobileStrategy from "./opportunity";
import MobileSEOBenefits from "./benefits";
import MobileMarketingSection from "./speed";
import MobileRevenueSection from "./revenue";
import MobileReachSection from "./reach";
import InsightSection from "../graphics/insight";
import Footer from "../(mainpage)/footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <SEOMobileSection />
      <MobileServices />
      <MobileStrategy />
      <MobileSEOBenefits />
      <MobileMarketingSection />
      <MobileRevenueSection />
      <MobileReachSection />
      <InsightSection />
      <Footer />
    </div>
  );
};

export default page;
