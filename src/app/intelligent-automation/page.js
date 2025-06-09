export const metadata = {
  title:
    "Intelligent Automation Services | End-to-end Intelligent Automation Solutions ",
  description:
    "We help businesses automate smarter — not just faster. At AlgorithmX, we combine AI and automation to streamline processes, reduce manual work, and boost efficiency.",
};

import React from "react";
import Image from "next/image";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import IntelligentSection from "./home";
import Scalable from "./need";
import IntelligentBenefits from "./choose";
import IntelligentServices from "./services";
import IntelligentInsightSection from "./insight";
import Footer from "../(mainpage)/footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <IntelligentSection />
      <Scalable />
      <IntelligentServices />
      <IntelligentBenefits />
      <IntelligentInsightSection />
      <Footer />
    </div>
  );
};

export default page;
