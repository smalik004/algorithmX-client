export const metadata = {
  title: "Custom ERP Solutions in USA",
  description:
    "Improve decision-making, reduce costs, and increase productivity with AlgorithmX’s custom ERP solutions. Contact us now. ",
};

import React from "react";
import Image from "next/image";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import Carousel from "./erpservices";
import ERPProcess from "./erpdevelopment";
import ERPModules from "./erpmodule";
import ERPContentSection from "./home.js";
import ERPTechStack from "./erptechstack";
import Solution from "./erpsolution";
import DynamicSolutionsHero from "./dynamic";
import InsightSection from "../graphics/insight";
import Footer from "../(mainpage)/footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <ERPContentSection />
      <Carousel />
      <ERPModules />
      <ERPTechStack />
      <Solution />
      <ERPProcess />
      <DynamicSolutionsHero />
      <InsightSection />
      <Footer />
    </div>
  );
};

export default page;
