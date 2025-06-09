export const metadata = {
  title: " End-to-End Testing Automation Services | QA Testing & Automation ",
  description:
    "From test automation to performance testing, our services ensure faster, more reliable software releases. Contact AlgorithmX now. ",
};

import React from "react";
import Image from "next/image";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import TestingSection from "./home";
import TestingServices from "./testing";
import QAProcessDiagram from "./quality";
import TestingChoosePage from "./choose";
import InsightSection from "../graphics/insight";
import Footer from "../(mainpage)/footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <TestingSection />
      <TestingServices />
      <QAProcessDiagram />
      <TestingChoosePage />
      <InsightSection />
      <Footer />
    </div>
  );
};

export default page;
