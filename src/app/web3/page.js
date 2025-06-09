export const metadata = {
  title: " Web3 Development Services | AlgorithmX",
  description:
    "AlgorithmX designs and develops custom Web3 applications using leading   blockchain technologies. At AlgorithmX, security and scalability come standard.",
};

import React from "react";
import Image from "next/image";
import Navbar from "../asample/naviagtion";
import CookieConsent from "../cookies/cookie";
import Web3Section from "./home";
import Web3ServicesGrid from "./services";
import Web3DevelopmentPage from "./choose";
import InsightSection from "../graphics/insight";
import Footer from "../(mainpage)/footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <CookieConsent />
      <Web3Section />
      <Web3ServicesGrid />
      <Web3DevelopmentPage />
      <InsightSection />
      <Footer />
    </div>
  );
};

export default page;
