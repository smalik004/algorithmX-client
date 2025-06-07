export const metadata = {
  title:
    "Metaverse Development Company | Metaverse Software Development Services ",
  description:
    "Step into the future with custom metaverse solutions from AlgorithmX. We design virtual spaces and experiences that help brands connect, engage, and grow in the digital world.",
};

import React from "react";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import MetaverseSection from "./home";
import MetaverseServicesGrid from "./services";
import MetaverseDevelopmentPage from "./choose";
import MetaverseTechStack from "./techstack";
import MetaverseProcess from "./process";
import IndustriesGrid from "../branding/industries";
import InsightSection from "../graphics/insight";
import Footer from "../(mainpage)/footer";
const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <MetaverseSection />
      <MetaverseServicesGrid />
      <MetaverseDevelopmentPage />
      <MetaverseTechStack />
      <MetaverseProcess />
      <IndustriesGrid />
      <InsightSection />
      <Footer />
    </div>
  );
};

export default page;
