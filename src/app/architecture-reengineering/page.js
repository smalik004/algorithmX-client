export const metadata = {
  title: "Architecture Reengineering Services | Reengineering Solutions in USA",
  description:
    "We partner with enterprises to reengineer legacy platforms into scalable, maintainable, and cloud-ready architectures. Visit us now. ",
};

import React from "react";
import Image from "next/image";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import AIOptmmizationSection from "./home";
import AiOptmizationServices from "./solutions";
import StackCardAnimation from "./process";
import AREPage from "./choose";
import InsightSection from "../graphics/insight";
import Footer from "../(mainpage)/footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <AIOptmmizationSection />
      <AiOptmizationServices />
      <StackCardAnimation />
      <AREPage />
      <InsightSection />
      <Footer />
    </div>
  );
};

export default page;
