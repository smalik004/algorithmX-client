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
 
import Footer from "../(mainpage)/footer";
import CTASectionBanner from "./ctabanner2";
import ContactForm from "./ctaform";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <TestingSection />
      <TestingServices />
      <CTASectionBanner/>
      <QAProcessDiagram />
      <TestingChoosePage />
      <ContactForm/>
      <Footer />
    </div>
  );
};

export default page;
