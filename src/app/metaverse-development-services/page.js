export const metadata = {
  title:
    "Metaverse Development Company | Metaverse Software Development Services ",
  description:
    "Step into the future with custom metaverse solutions from AlgorithmX. We design virtual spaces and experiences that help brands connect, engage, and grow in the digital world.",
};

import React from "react";
import Image from "next/image";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import MetaverseSection from "./home";
import MetaverseServicesGrid from "./services";
import MetaverseDevelopmentPage from "./choose";
import MetaverseTechStack from "./techstack";
import MetaverseProcess from "./process";
import IndustriesGrid from "../branding-services/industries";
import InsightSection from "../graphics-services/insight";
import Footer from "../(mainpage)/footer";
import CTASection from "./ctabanner";
import ContactForm from "./ctaform";
import CTASectionBanner from "./ctabanner2";
const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <MetaverseSection />
      <MetaverseServicesGrid />
      <CTASection/>
      <MetaverseDevelopmentPage />
      <MetaverseTechStack />
      <CTASectionBanner/>
      <MetaverseProcess />
      <IndustriesGrid />
      <ContactForm/>
      <Footer />
    </div>
  );
};

export default page;
