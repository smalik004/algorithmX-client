export const metadata = {
  title: "  Leading Big Data Analytics Services | AlgorithmX ",
  description:
    "Unlock the power of your data with AlgorithmX. We build scalable big data analytics solutions that help you spot trends, make faster decisions, and drive real business growth.",
};

import React from "react";
import Image from "next/image";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import BigDataSection from "./home";
import BigDataGrid from "./solution";
import DevelopmentProcess from "./steps";
import BigDataTechnologyToolbox from "./techstack";
import BigDataChoosePage from "./choose";
import BigDataInsightSection from "./insight";
const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <BigDataSection />
      <BigDataGrid />
      <DevelopmentProcess />
      <BigDataChoosePage />
      <BigDataTechnologyToolbox />
      <BigDataInsightSection />
    </div>
  );
};

export default page;
